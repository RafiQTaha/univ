<?php

namespace App\Controller\Evaluation;

use App\Entity\AcElement;
use App\Entity\AcEpreuve;
use App\Entity\ExControle;
use App\Entity\TInscription;
use App\Entity\PNatureEpreuve;
use App\Entity\AcEtablissement;
use App\Controller\ApiController;
use App\Entity\AcAnnee;
use App\Entity\ExEnotes;
use App\Entity\ExGnotes;
use App\Entity\PStatut;
use Doctrine\Persistence\ManagerRegistry;
use Mpdf\Mpdf;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

#[Route('/evaluation/epreuve')]
class EpreuveController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }

    #[Route('/', name: 'evaluation_epreuve')]
    public function index(Request $request): Response
    {
        $operations = ApiController::check($this->getUser(), 'evaluation_epreuve', $this->em, $request);
        // dd($operations);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $natureEpreuves = $this->em->getRepository(PNatureEpreuve::class)->findAll();
        $etablissements =  $this->em->getRepository(AcEtablissement::class)->findBy(['active'=>1]);
        return $this->render('evaluation/epreuve/index.html.twig', [
            'operations' => $operations,
            'natureEpreuves' => $natureEpreuves,
            'etablissements' => $etablissements,
        ]);
    }
    #[Route('/list/{element}/{natureEpreuve}', name: 'evaluation_epreuve_list')]
    public function evaluationEpreuveList(Request $request, AcElement $element, PNatureEpreuve $natureEpreuve): Response
    {
        $order = $request->get('order');
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($element->getModule()->getSemestre()->getPromotion()->getFormation());
        $verify = $this->em->getRepository(ExControle::class)->checkIfyoucanCalcul($annee, $element, $natureEpreuve->getMapped());
        // dd($verify);
        $check = 0; //valider cette opération
        if($verify){
            $check = 1; //opération déja validé
        }
        $promotion = $element->getModule()->getSemestre()->getPromotion();
        $epreuves = $this->em->getRepository(AcEpreuve::class)->findBy(['element' => $element, 'annee'=> $annee , 'natureEpreuve' => $natureEpreuve, 'statut' => $this->em->getRepository(PStatut::class)->find(30)]);
        // dd($natureEpreuve);
        if(count($epreuves) < 1) {
            return new JsonResponse("Aucune resultat est disponible", 500);
        }
        $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByAnneeAndPromo($annee, $promotion, $order);
        $inscriptionsArray = [];
        // dd($inscriptions);
        foreach ($inscriptions as $inscription) {
            $moyenne = 0;
            $total_coef = 0;
            $noteArray = [];
            $fmaNote1 = 0;
            $fmaNote2 = 0;
            $i = 0;
            foreach ($epreuves as $epreuve) {
                // $html .= "<th>".$epreuve->getId()."</th>";
                $gnote = $this->em->getRepository(ExGnotes::class)->findOneBy(['epreuve' => $epreuve, 'inscription' => $inscription]);
                if ($inscription->getPromotion()->getId() == 7 and in_array($natureEpreuve->getId(), [3,4])) {
                    if ($i == 0) {
                        $fmaNote1 = $gnote ? $gnote->getNote() * $epreuve->getCoefficient() : 0;
                        $fmaNote2 = $gnote ? $gnote->getNote() * $epreuve->getCoefficient() : 0;
                    }elseif ($i == 1) {
                        $fmaNote2 = $gnote ? $gnote->getNote() * $epreuve->getCoefficient() : 0;
                    }
                }
                if($gnote) {
                    $moyenne += $gnote->getNote() * $epreuve->getCoefficient();
                    $total_coef += $epreuve->getCoefficient();
                    array_push($noteArray, $gnote->getNote());
                } else {
                    $moyenne += 0;
                    $total_coef += $epreuve->getCoefficient();
                    array_push($noteArray, "");
                }
                $i++;
            }
            if ($inscription->getPromotion()->getId() == 7 and $natureEpreuve->getId() == 3) {
                if ( (($fmaNote1 + $fmaNote2) / 2) < 10 && ($fmaNote1 >= 10 || $fmaNote2 >= 10) ) {
                    $mTotal = 10;
                }elseif((($fmaNote1 + $fmaNote2) / 2) < 10 && ($fmaNote1 < 10 || $fmaNote2 < 10)){
                    $mTotal = max($fmaNote1,$fmaNote2);
                }else {
                    $mTotal = $moyenne / $total_coef;
                }
            }elseif ($inscription->getPromotion()->getId() == 7 and $natureEpreuve->getId() == 4) {
                if ($fmaNote1 >= 10 || $fmaNote2 >= 10) {
                    $mTotal = 10;
                }else {
                    $mTotal = max($fmaNote1,$fmaNote2);
                }
            }else {
                $mTotal = $moyenne / $total_coef;
            }
            array_push($inscriptionsArray, [
                'inscription' => $inscription,
                'notes' => $noteArray,
                'moyenne' => $mTotal
                // 'moyenne' => $moyenne / $total_coef
            ]);
        }
        if($order == 3) {
            $moyenne = array_column($inscriptionsArray, 'moyenne');
            array_multisort($moyenne, SORT_DESC, $inscriptionsArray);
        } else if($order == 4){
            $moyenne = array_column($inscriptionsArray, 'moyenne');
            array_multisort($moyenne, SORT_ASC, $inscriptionsArray);
        }
        $session = $request->getSession();
        $session->set('data_epreuves', [
            'epreuves' => $epreuves, 
            'inscriptionsArray' => $inscriptionsArray, 
            'element' => $element, 
            'natureEpreuve'=> $natureEpreuve
        ]);
        $html = $this->render('evaluation/epreuve/pages/list_epreuve_normal.html.twig', [
            'inscriptionsArray' => $inscriptionsArray,
            'epreuves' => $epreuves,
        ])->getContent();

        return new JsonResponse(['html' => $html, 'check' => $check]);
    }   
    #[Route('/impression/{type}', name: 'administration_epreuve_impression')]
    public function administrationEpreuveImpression(Request $request, $type) 
    {         
        $session = $request->getSession();
        $inscriptionsArray = $session->get('data_epreuves')['inscriptionsArray'];
        $epreuves = $session->get('data_epreuves')['epreuves'];
        $element = $session->get('data_epreuves')['element'];
        $natureEpreuve = $session->get('data_epreuves')['natureEpreuve'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($element->getModule()->getSemestre()->getPromotion()->getFormation());
        $infos =  [
            'inscriptionsArray' => $inscriptionsArray,
            'epreuves' => $epreuves,
            'element' => $element,
            'etablissement' => $annee->getFormation()->getEtablissement(),
            'natureEpreuve' => $natureEpreuve
        ];
        if($type == "normal"){
            $html = $this->render("evaluation/epreuve/pdfs/normal.html.twig", $infos)->getContent();
        } else if ($type == "anonymat") {
            $html = $this->render("evaluation/epreuve/pdfs/anonymat.html.twig", $infos)->getContent();
        }
        else if ($type == "clair") {
            $html = $this->render("evaluation/epreuve/pdfs/clair.html.twig", $infos)->getContent();
        }
        else if ($type == "rat") {
            $moy = $annee->getFormation()->getEtablissement()->getId() == 26 ? 12 : 10;
            foreach($inscriptionsArray as $key => $value) {
                $etudiant = $value['inscription']->getAdmission()->getPreinscription()->getEtudiant();
                if($value['moyenne'] >= $moy || str_contains($etudiant->getNom(), 'test')) {  
                  unset($inscriptionsArray[$key]);
                }
            }
            // dd($inscriptionsArray);
            $infos['inscriptionsArray'] = $inscriptionsArray;
            // dd('test');
            $html = $this->render("evaluation/epreuve/pdfs/rattrapage.html.twig", $infos)->getContent();
        } else {
            die("403 something wrong !");
        }
        $html .= $this->render("evaluation/epreuve/pdfs/footer.html.twig")->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'margin_left' => '5',
            'margin_right' => '5',
            'margin_top' => '35',
            'margin_bottom' => '15',
            'format' => 'A4-L',
            'margin_header' => '2',
            'margin_footer' => '2'
            ]);
        $mpdf->SetHTMLHeader($this->render("evaluation/epreuve/pdfs/header.html.twig", [
            'element' => $element,
            'annee' => $annee
        ])->getContent());
        $mpdf->SetFooter('Page {PAGENO} / {nb}');
        $mpdf->SetTitle($element->getDesignation());
        $mpdf->WriteHTML($html);
        $mpdf->Output($element->getDesignation()."_".$element->getId().".pdf", "I");
    }
    #[Route('/valider', name: 'administration_epreuve_valider')]
    public function administrationEpreuveValider(Request $request) 
    {         
        $session = $request->getSession();
        $element = $session->get('data_epreuves')['element'];
        $natureEpreuve = $session->get('data_epreuves')['natureEpreuve'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($element->getModule()->getSemestre()->getPromotion()->getFormation());
        $exControle = $this->em->getRepository(ExControle::class)->findOneBy(['element' => $element, 'annee' => $annee]);
        if($natureEpreuve->getMapped() == "mcc"){
            $exControle->setMcc(1);
        } else if ($natureEpreuve->getMapped() == "mtp"){
            $exControle->setMtp(1);
        } else if ($natureEpreuve->getMapped() == "mef"){
            $exControle->setMef(1);
        } else if ($natureEpreuve->getMapped() == "ccr"){
            $exControle->setCcr(1);
        }else if ($natureEpreuve->getMapped() == "tpr"){
            $exControle->setTpr(1);
        }else if ($natureEpreuve->getMapped() == "efr"){
            $exControle->setEfr(1);
        }else {
            die("403 something wrong");
        }
        ApiController::mouchard($this->getUser(), $this->em,$exControle, 'exControle', 'Validation Circuit EPV');
        $this->em->flush();

        return new JsonResponse("Bien Valider", 200);
    }
    #[Route('/devalider', name: 'administration_epreuve_devalider')]
    public function administrationEpreuveDevalider(Request $request) 
    {         
        $session = $request->getSession();
        $element = $session->get('data_epreuves')['element'];
        $natureEpreuve = $session->get('data_epreuves')['natureEpreuve'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($element->getModule()->getSemestre()->getPromotion()->getFormation());
        $exControle = $this->em->getRepository(ExControle::class)->findOneBy(['element' => $element, 'annee' => $annee]);
        
        if($natureEpreuve->getMapped() == "mcc"){
            $exControle->setMcc(0);
        } else if ($natureEpreuve->getMapped() == "mtp"){
            $exControle->setMtp(0);
        } else if ($natureEpreuve->getMapped() == "mef"){
            $exControle->setMef(0);
        } else if ($natureEpreuve->getMapped() == "ccr"){
            $exControle->setCcr(0);
        }else if ($natureEpreuve->getMapped() == "tpr"){
            $exControle->setTpr(0);
        }else if ($natureEpreuve->getMapped() == "efr"){
            $exControle->setEfr(0);
        } else {
            die("403 something wrong");
        }
        $exControle->setMElement(0);
        $exControle->setMmodule(0);
        ApiController::mouchard($this->getUser(), $this->em,$exControle, 'exControle', 'Devalidation Circuit EPV');
        $this->em->flush();
        return new JsonResponse("Bien devalider", 200);
        
    }
    #[Route('/enregistre', name: 'administration_epreuve_enregistre')]
    public function administrationEpreuveEnregistre(Request $request) 
    {         
        $session = $request->getSession();
        $inscriptionsArray = $session->get('data_epreuves')['inscriptionsArray'];
        $element = $this->em->getRepository(AcElement::class)->find($session->get('data_epreuves')['element']->getId());
        $natureEpreuve = $session->get('data_epreuves')['natureEpreuve'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($element->getModule()->getSemestre()->getPromotion()->getFormation());
        $exControle = $this->em->getRepository(ExControle::class)->findOneBy(['element' => $element, 'annee' => $annee, 'melement' => 1]);
        $verify = $this->em->getRepository(ExControle::class)->checkIfyoucanCalcul($annee, $element, $natureEpreuve->getMapped());
        if($exControle) {
            return new JsonResponse("Element deja valide", 500);
        }
        if($verify){
            return new JsonResponse("Operation déja valider", 500);
        }

        foreach ($inscriptionsArray as $inscriptionArray) {
            $inscription = $this->em->getRepository(TInscription::class)->find($inscriptionArray['inscription']->getId());
            $inscriptionElement  = $this->em->getRepository(ExEnotes::class)->findOneBy(['inscription' => $inscription, 'element' => $element]);
            if(!$inscriptionElement) {
                $inscriptionElement = new ExEnotes();
                $inscriptionElement->setInscription($inscription);
                $inscriptionElement->setElement($element);
                $inscriptionElement->setUserCreated($this->getUser());
                $inscriptionElement->setCreated(new \DateTime("now"));
                $this->em->persist($inscriptionElement);
                $this->em->flush();
            }
            if($natureEpreuve->getMapped() == "mcc"){
                $inscriptionElement->setMcc($inscriptionArray['moyenne']);
            } else if ($natureEpreuve->getMapped() == "mtp"){
                $inscriptionElement->setMtp($inscriptionArray['moyenne']);
            } else if ($natureEpreuve->getMapped() == "mef"){
                $inscriptionElement->setMef($inscriptionArray['moyenne']);
            } else if ($natureEpreuve->getMapped() == "ccr"){
                $inscriptionElement->setCcr($inscriptionArray['moyenne']);
            }else if ($natureEpreuve->getMapped() == "tpr"){
                $inscriptionElement->setTpr($inscriptionArray['moyenne']);
            }else if ($natureEpreuve->getMapped() == "efr"){
                $inscriptionElement->setEfr($inscriptionArray['moyenne']);
            } else {
                die("403 something wrong");
            }
            
            ApiController::mouchard($this->getUser(), $this->em,$inscriptionElement, 'ExEnotes', 'Enregistrer Epreuve');
            $this->em->flush();

        }
        // create exControle if not exist
        $exControle = $this->em->getRepository(ExControle::class)->findOneBy(['element' => $element, 'annee' => $annee]);
        if(!$exControle){
            $exControle = new ExControle();
            $exControle->setElement($element);
            $exControle->setAnnee($annee);
            $exControle->setUser($this->getUser());
            $this->em->persist($exControle);
            ApiController::mouchard($this->getUser(), $this->em,$exControle, 'exControle', 'Validation Circuit ELE');
            $this->em->flush();
        }
        
        
        return new JsonResponse("Bien Enregistre", 200);
    }
      
    #[Route('/impression_excel/{type}', name: 'administration_epreuve_impression_excel')]
    public function administration_epreuve_impression_excel(Request $request, $type) 
    {         
        $session = $request->getSession();
        $inscriptionsArray = $session->get('data_epreuves')['inscriptionsArray'];
        $epreuves = $session->get('data_epreuves')['epreuves'];
        $element = $session->get('data_epreuves')['element'];
        $natureEpreuve = $session->get('data_epreuves')['natureEpreuve'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($element->getModule()->getSemestre()->getPromotion()->getFormation());
        $infos =  [
            'inscriptionsArray' => $inscriptionsArray,
            'epreuves' => $epreuves,
            'element' => $element,
            'etablissement' => $annee->getFormation()->getEtablissement(),
            'natureEpreuve' => $natureEpreuve
        ];
        if ($type == "excel_rat") {
            
            $spreadsheet = new Spreadsheet();
            $sheet = $spreadsheet->getActiveSheet();
            $sheet->setCellValue('A1', 'ORD');
            $sheet->setCellValue('B1', 'CODE');
            $sheet->setCellValue('C1', 'NOM');
            $sheet->setCellValue('D1', 'Prenom');
            $i=2;
            $j=1;
            // dd($operationcabs);
            $moy = $annee->getFormation()->getEtablissement()->getId() == 26 ? 12 : 10;
            foreach($inscriptionsArray as $key => $value) {
                $etudiant = $value['inscription']->getAdmission()->getPreinscription()->getEtudiant();
                if($value['moyenne'] < $moy && !str_contains($etudiant->getNom(), 'test')) {  
                    $sheet->setCellValue('A'.$i, $j);
                    $sheet->setCellValue('B'.$i, $value['inscription']->getId());
                    $sheet->setCellValue('C'.$i, $etudiant->getNom());
                    $sheet->setCellValue('D'.$i, $etudiant->getPrenom());
                    $i++;
                    $j++;
                }
            }
            
            $writer = new Xlsx($spreadsheet);
            $elementesignation =  str_replace("/", "_", $element->getDesignation());
            $fileName = $elementesignation."_".$element->getId().".xlsx";
            $temp_file = tempnam(sys_get_temp_dir(), $fileName);
            $writer->save($temp_file);
            return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
            
        } else {
            die("403 something wrong !");
        }
    }
}
