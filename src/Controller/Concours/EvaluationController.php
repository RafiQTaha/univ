<?php

namespace App\Controller\Concours;

use App\Controller\ApiController;
use App\Entity\ConcoursEtudiant;
use App\Entity\ConcoursEvaluation;
use App\Entity\TEtudiant;
use App\Entity\UsOperation;
use DateTime;
use Doctrine\Persistence\ManagerRegistry;
use Mpdf\Mpdf;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx as Reader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

#[Route('/concours/evaluation')]
class EvaluationController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'concours_evaluation')]
    public function index(Request $request): Response
    {
        $operations = ApiController::check($this->getUser(), 'concours_evaluation', $this->em, $request);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $groupements =  $this->em->getRepository(ConcoursEtudiant::class)->findEtudiantsGroupedByGroupement();
        return $this->render('concours/evaluation.html.twig', [
            'operations' => $operations,
            'groupements' => $groupements,
        ]);
    }
    #[Route('/list', name: 'concours_evaluation_list')]
    public function list(Request $request): Response
    {
        $groupement = $request->get('groupement');
        $ConcoursEtudiants = $this->em->getRepository(ConcoursEtudiant::class)->findBy(['groupement'=>$groupement],['Nom'=>'ASC']);       
        $html = $this->render("concours/pages/list_etudiant.html.twig", [
            'ConcoursEtudiants' => $ConcoursEtudiants
        ])->getContent();
        $session = $request->getSession();
        $session->set('ConcoursEtudiants', $ConcoursEtudiants);
        return new JsonResponse($html);
    }
    #[Route('/canvas', name: 'concours_evaluation_canvas')]
    public function canvas(): Response
    {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'Code Condidat');
        $sheet->setCellValue('B1', 'Type Condidat');
        $sheet->setCellValue('C1', 'FMA');
        $sheet->setCellValue('D1', 'FMDA');
        $sheet->setCellValue('E1', 'FPA');
        $sheet->setCellValue('F1', 'ISITS');
        $sheet->setCellValue('G1', 'FASIMH');
        $sheet->setCellValue('H1', 'MATHS');
        $sheet->setCellValue('I1', 'PHYSIQUE');
        $sheet->setCellValue('J1', 'CHIMIE');
        $sheet->setCellValue('K1', 'SVT');
        $sheet->setCellValue('L1', 'ABS');

        $writer = new Xlsx($spreadsheet);
        $fileName = 'EVALUATION_CONCOURS.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
    #[Route('/import', name: 'concours_evaluation_import')]
    public function import(Request $request, SluggerInterface $slugger): Response
    {
        $file = $request->files->get('file');
        // dd($file);
        if(!$file){
            return new JsonResponse('Prière d\'importer le fichier',500);
        }
        if($file->guessExtension() !== 'xlsx'){
            return new JsonResponse('Prière d\'enregister un fichier xlsx', 500);            
        }

        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        // this is needed to safely include the file name as part of the URL
        $safeFilename = $slugger->slug($originalFilename);
        $newFilename = $safeFilename.'-'.uniqid().'_'.$this->getUser()->getUserIdentifier().'.'.$file->guessExtension();

        // Move the file to the directory where brochures are stored
        try {
            $file->move(
                $this->getParameter('concours_evaluation_directory'),
                $newFilename
            );
        } catch (FileException $e) {
            throw new \Exception($e);
        }
        $reader = new reader();
        $spreadsheet = $reader->load($this->getParameter('concours_evaluation_directory').'/'.$newFilename);
        $worksheet = $spreadsheet->getActiveSheet();
        $spreadSheetArys = $worksheet->toArray();

        unset($spreadSheetArys[0]);
        $sheetCount = count($spreadSheetArys);
        $current_year = date('m') >= 7 ? date('Y').'/'.date('Y')+1 : date('Y') - 1 .'/' .date('Y');
        $count = 0;
        foreach ($spreadSheetArys as $sheet) {
            if (trim($sheet[0]) == "") {
                return new JsonResponse('Merci de renseigner toutes les informations pour tous les étudiants !', 500);
            } 
            $etudiant = $this->em->getRepository(TEtudiant::class)->findOneBy(['code'=>trim($sheet[0])]);
            if (!$etudiant) {
                return new JsonResponse("Merci de verifier les information de l'etudiant avec le code ".trim($sheet[0]) , 500);
            }
            $ConcoursEvaluation = $this->em->getRepository(ConcoursEvaluation::class)->findOneBy(['etudiant'=>$etudiant, 'annee'=>$current_year]);
            if (!$ConcoursEvaluation) {
                $ConcoursEvaluation = new ConcoursEvaluation();
                $ConcoursEvaluation->setUserCreated($this->getUser());
                $ConcoursEvaluation->setCreated(new DateTime('now'));
                $ConcoursEvaluation->setAnnee($current_year);
                $ConcoursEvaluation->setEtudiant($etudiant);
            }else {
                $ConcoursEvaluation->setUserUpdated($this->getUser());
                $ConcoursEvaluation->setUpdated(new DateTime('now'));
            }
            $ConcoursEvaluation->setTypeCondidat(trim($sheet[1]));
            $ConcoursEvaluation->setFMA(trim($sheet[2]));
            $ConcoursEvaluation->setFMDA(trim($sheet[3]));
            $ConcoursEvaluation->setFPA(trim($sheet[4]));
            $ConcoursEvaluation->setISITS(trim($sheet[5]));
            $ConcoursEvaluation->setFASIMH(trim($sheet[6]));
            $ConcoursEvaluation->setMATHS(trim($sheet[7]));
            $ConcoursEvaluation->setPHYSIQUE(trim($sheet[8]));
            $ConcoursEvaluation->setCHIMIE(trim($sheet[9]));
            $ConcoursEvaluation->setSVT(trim($sheet[10]));
            $ConcoursEvaluation->setABS(trim($sheet[11]));
            $moyenConcour = (trim($sheet[7]) + trim($sheet[8]) + trim($sheet[9]) + trim($sheet[10]))/4;
            $ConcoursEvaluation->setMoyenConcour(number_format((float)$moyenConcour, 2, '.', ''));
            $this->em->persist($ConcoursEvaluation);
            $count++;
        }
        $this->em->flush();
        return new JsonResponse($count . " Bien Modifier sur ". $sheetCount,200);
    }
    #[Route('/traiter', name: 'concours_evaluation_traiter')]
    public function traiter(Request $request)
    {
        $current_year = date('m') >= 7 ? date('Y').'/'.date('Y')+1 : date('Y') - 1 .'/' .date('Y');
        $this->Traitement($current_year,'FMA',250);
        $this->Traitement($current_year,'FMDA',150);
        $this->Traitement($current_year,'FPA',100);
        // $ISITS = $this->Traitement($current_year,'ISITS',50);
        // $FASIMH = $this->Traitement($current_year,'FASIMH',50);
        return new JsonResponse('Bien Traité !',200);
    }
    public function Traitement($current_year,$etablissement,$limit)
    {
        $ConcoursEvaluations = $this->em->getRepository(ConcoursEvaluation::class)->findBy(['annee'=>$current_year,$etablissement=>1,'TypeCondidat'=>'Payant'],['MoyenConcour'=>'DESC']);
        // dd($ConcoursEvaluations);
        // $ConcoursEvaluations = $this->em->getRepository(ConcoursEvaluation::class)->findBy(['id'=>756],['MoyenConcour'=>'DESC']);
        // $ConcoursEvaluations = $this->em->getRepository(ConcoursEvaluation::class)->findListEtudiant($current_year,$etablissement, 'Payant');
        // if ($etablissement == 'FMDA') {
        //     $ConcoursEvaluations = $this->em->getRepository(ConcoursEvaluation::class)->findListEtudiantDTR($current_year, 'Payant');
        // }elseif ($etablissement == 'FPA') {
        //     $ConcoursEvaluations = $this->em->getRepository(ConcoursEvaluation::class)->findListEtudiantPH($current_year, 'Payant');
        //     // dd($ConcoursEvaluations);
        // }else {
        //     $ConcoursEvaluations = $this->em->getRepository(ConcoursEvaluation::class)->findBy(['annee'=>$current_year,$etablissement=>1,'TypeCondidat'=>'Payant'],['MoyenConcour'=>'DESC']);
        // }
        // dd($ConcoursEvaluations);
        $set = 'setList'.$etablissement;
        $rang = 'setRang'.$etablissement;
        $count = 1;
        foreach ($ConcoursEvaluations as $ConcoursEvaluation) {
            if($ConcoursEvaluation->getAbs() == 1) {
                $ConcoursEvaluation->$set(3);
            }elseif ($count <= $limit) {
                // dd('test');
                $ConcoursEvaluation->$set(1);
            }elseif ($ConcoursEvaluation->getAbs() == 0 and $count > $limit) {
                $ConcoursEvaluation->$set(2);
            }
            // if($etablissement == "FMA") $ConcoursEvaluation->$rang($count);
            if ($etablissement == "FMDA") {
                if ($ConcoursEvaluation->getListFMA() != 1) {
                    // dd($count,$rang,$ConcoursEvaluation);
                    $ConcoursEvaluation->$rang($count);
                    $count++;
                }
            }elseif ($etablissement == "FPA") {
                if ($ConcoursEvaluation->getListFMA() != 1 and $ConcoursEvaluation->getListFMDA() != 1 ) {
                    $ConcoursEvaluation->$rang($count);
                    $count++;
                }
            }else {
                $ConcoursEvaluation->$rang($count);
                $count++;
            }
        }
        
        // if ($etablissement == 'FMDA') {
        //     $ConcoursEvaluations = $this->em->getRepository(ConcoursEvaluation::class)->findListEtudiantDTR($current_year, 'Boursier');
        // }elseif ($etablissement == 'FPA') {
        //     $ConcoursEvaluations = $this->em->getRepository(ConcoursEvaluation::class)->findListEtudiantPH($current_year, 'Boursier');
        // }else {
        //     $ConcoursEvaluations = $this->em->getRepository(ConcoursEvaluation::class)->findBy(['annee'=>$current_year,$etablissement=>1,'TypeCondidat'=>'Boursier'],['MoyenConcour'=>'DESC']);
        // }
        $ConcoursEvaluations = $this->em->getRepository(ConcoursEvaluation::class)->findBy(['annee'=>$current_year,$etablissement=>1,'TypeCondidat'=>'Boursier'],['MoyenConcour'=>'DESC']);
        $countB = 0;
        foreach ($ConcoursEvaluations as $ConcoursEvaluation) {
            if ($countB < 2) {
                $ConcoursEvaluation->$set(1);
            }elseif ($ConcoursEvaluation->getAbs() == 0) {
                $ConcoursEvaluation->$set(2);
            }else {
                $ConcoursEvaluation->$set(3);
            }
        }
        if ($etablissement == "FMDA") {
            if ($ConcoursEvaluation->getListFMA() != 1) {
                $ConcoursEvaluation->$rang($count);
                $countB++;
            }
        }elseif ($etablissement == "FPA") {
            if ($ConcoursEvaluation->getListFMA() != 1 and $ConcoursEvaluation->getListFMDA() != 1 ) {
                $ConcoursEvaluation->$rang($count);
                $countB++;
            }
        }else {
            $ConcoursEvaluation->$rang($count);
            $countB++;
        }
        $this->em->flush();
    }
    
    #[Route('/imprimer/{etablissement}/{type}/{type_list}', name: 'concours_evaluation_imprimer')]
    public function imprimer($etablissement,$type,$type_list)
    {
        $havePermission = $this->em->getRepository(UsOperation::class)->havePermission(315,$this->getUser());
        $isAdmin = in_array('ROLE_ADMIN',$this->getUser()->getRoles());
        if (!$isAdmin && !$havePermission) {
            return new Response("Vous n'avez pas le drois !",500);
        }
        $list = 'list'.$etablissement;
        $rang = 'rang'.$etablissement;
        $current_year = date('m') >= 7 ? date('Y').'/'.date('Y')+1 : date('Y') - 1 .'/' .date('Y');
        if ($etablissement == 'FMA') {
            $ConcoursEvaluations = $this->em->getRepository(ConcoursEvaluation::class)->findBy([
                'annee' => $current_year,
                'FMA' => 1,
                'TypeCondidat' => $type,
                $list => $type_list
            ],[$rang=>'ASC']);
        }elseif ($etablissement == 'FMDA') {
            $ConcoursEvaluations = $this->em->getRepository(ConcoursEvaluation::class)->findListEtudiantDentaire($current_year, $type,$type_list);
            // dd($ConcoursEvaluations);
        }elseif ($etablissement == 'FPA') {
            $ConcoursEvaluations = $this->em->getRepository(ConcoursEvaluation::class)->findListEtudiantPharmacie($current_year, $type,$type_list);
        }
        
        $html = $this->render("concours/pdfs/list.html.twig", [
            'ConcoursEvaluations' => $ConcoursEvaluations,
            // 'statut' => $statut,
            'etab'=>$etablissement])->getContent();
            
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'margin_left' => '5',
            'margin_right' => '5',
            'margin_top' => '30',
            'margin_bottom' => '10',
            'format' => 'A4-L',
            'margin_header' => '2',
            'margin_footer' => '2'
        ]);

        $mpdf->SetHTMLHeader($this->render("concours/pdfs/header.html.twig", [
            'current_year' => $current_year,
            'type' => $type,
            'type_list' => $type_list
        ])->getContent());
        $mpdf->defaultfooterline = 0;
        // $mpdf->SetFooter('Page {PAGENO} sur {nb}');
        setlocale(LC_TIME, 'fr_FR.UTF-8', 'fra');

        // Get the current date formatted as "samedi 29 juillet 2023"
        $currentDate = strftime('%A %d %B %Y');

        // Set the footer with the current date on the left and page number on the right
        $mpdf->SetHTMLFooter('
            <table width="100%" style="border: none; font-size: 12px;font-family: Source Sans Pro, sans-serif;">
                <tr>
                    <td width="50%" style="text-align: left;">' . ucfirst($currentDate) . '</td>
                    <td width="50%" style="text-align: right;">Page {PAGENO} sur {nb}</td>
                </tr>
            </table>
        ');
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle("List ".$etablissement." ".$type." ".$current_year);
        $mpdf->Output("List_".$etablissement."_".$type."_".$current_year.".pdf", "I");
    }
    
}
