<?php

namespace App\Controller\Concours;

use App\Controller\ApiController;
use App\Entity\ConcoursEtudiant;
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

#[Route('/concours/impression')]
class ImpressionController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'concours_impression')]
    public function index(Request $request): Response
    {
        $operations = ApiController::check($this->getUser(), 'concours_impression', $this->em, $request);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        // $etablissements =  $this->em->getRepository(AcEtablissement::class)->findBy(['active'=>1]);
        $groupements =  $this->em->getRepository(ConcoursEtudiant::class)->findEtudiantsGroupedByGroupement();
        // dd($groupements);
        return $this->render('concours/impression.html.twig', [
            'operations' => $operations,
            'groupements' => $groupements,
        ]);
    }
    #[Route('/list', name: 'concours_impression_list')]
    public function list(Request $request): Response
    {
        $groupement = $request->get('groupement');
        // dd($groupement);
        $ConcoursEtudiants = $this->em->getRepository(ConcoursEtudiant::class)->findBy(['groupement'=>$groupement],['Nom'=>'ASC']);
        // $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($promotion->getFormation());
        // $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByAnneeAndPromoAndSalle($salle, $annee, $promotion, $order);           
        $html = $this->render("concours/pages/list_etudiant.html.twig", [
            'ConcoursEtudiants' => $ConcoursEtudiants
        ])->getContent();
        $session = $request->getSession();
        $session->set('ConcoursEtudiants', $ConcoursEtudiants);
        return new JsonResponse($html);
    }
    #[Route('/canvas', name: 'concours_impression_canvas')]
    public function canvas(): Response
    {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'Nom');
        $sheet->setCellValue('B1', 'Prenom');
        $sheet->setCellValue('C1', 'Cin');
        $sheet->setCellValue('D1', 'Anonymat');
        $sheet->setCellValue('E1', 'Groupement');

        $writer = new Xlsx($spreadsheet);
        $fileName = 'anonymat_Concours.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
    #[Route('/import', name: 'concours_impression_import')]
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
                $this->getParameter('concours_anonymat_directory'),
                $newFilename
            );
        } catch (FileException $e) {
            throw new \Exception($e);
        }
        $reader = new reader();
        $spreadsheet = $reader->load($this->getParameter('concours_anonymat_directory').'/'.$newFilename);
        $worksheet = $spreadsheet->getActiveSheet();
        $spreadSheetArys = $worksheet->toArray();

        unset($spreadSheetArys[0]);
        $sheetCount = count($spreadSheetArys);
        // dd($spreadSheetArys);
        $count = 0;
        foreach ($spreadSheetArys as $sheet) {
            if (trim($sheet[0]) == "" || trim($sheet[1]) == "" || trim($sheet[2]) == "" || trim($sheet[3]) == "" ) {
                return new JsonResponse('Merci de renseigner toutes les informations pour tous les étudiants !', 500);
            } 
            $ConcoursEtudiant = $this->em->getRepository(ConcoursEtudiant::class)->find(trim($sheet[2]));
            if (!$ConcoursEtudiant) {
                $ConcoursEtudiant = new ConcoursEtudiant();
                $ConcoursEtudiant->setUserCreated($this->getUser());
                $ConcoursEtudiant->setCreated(new DateTime('now'));
            }else {
                $ConcoursEtudiant->setUserUpdated($this->getUser());
                $ConcoursEtudiant->setUpdated(new DateTime('now'));
            }
            $ConcoursEtudiant->setNom(trim($sheet[0]));
            $ConcoursEtudiant->setPrenom(trim($sheet[1]));
            $ConcoursEtudiant->setCin(trim($sheet[2]));
            $ConcoursEtudiant->setAnonymat(trim($sheet[3]));
            $ConcoursEtudiant->setGroupement(trim($sheet[4]));
            $this->em->persist($ConcoursEtudiant);
            $count++;
        }
        $this->em->flush();
        return new JsonResponse($count . " Bien Modifier sur ". $sheetCount,200);
    }
    #[Route('/imprimer', name: 'concours_impression_imprimer')]
    public function imprimer(Request $request)
    {
        ini_set("pcre.backtrack_limit", "100000000");
        $session = $request->getSession();
        $ConcoursEtudiants = $session->get('ConcoursEtudiants');
        if (!$ConcoursEtudiants) die('Aucun Etudiant Trouvé. '); 

        $html = $this->render("concours/pdfs/impression.html.twig", ["ConcoursEtudiants" => $ConcoursEtudiants])->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'margin_left' => '0',
            'margin_right' => '0',
            'margin_top' => '0',
            'margin_bottom' => '0',
            'showBarcodeNumbers' => FALSE
        ]);
       
        $mpdf->WriteHTML($html);
        $mpdf->Output("index_impression.pdf", "I");

    }
    
}
