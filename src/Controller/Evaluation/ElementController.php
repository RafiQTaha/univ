<?php

namespace App\Controller\Evaluation;

use App\Controller\ApiController;
use App\Entity\AcAnnee;
use App\Entity\AcElement;
use App\Entity\AcEtablissement;
use App\Entity\ExControle;
use App\Entity\ExEnotes;
use App\Entity\TInscription;
use Doctrine\Persistence\ManagerRegistry;
use Mpdf\Mpdf;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/evaluation/element')]
class ElementController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'evaluation_element')]
    public function index(): Response
    {
        $operations = ApiController::check($this->getUser(), 'evaluation_element', $this->em);
        // dd($operations);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $etablissements = $this->em->getRepository(AcEtablissement::class)->findAll();
        return $this->render('evaluation/element/index.html.twig', [
            'operations' => $operations,
            'etablissements' => $etablissements,
        ]);
    }
    #[Route('/list/{element}', name: 'evaluation_element_list')]
    public function evaluationElementList(Request $request, AcElement $element): Response
    {
        $order = $request->get('order');
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($element->getModule()->getSemestre()->getPromotion()->getFormation());
        $verify = $this->em->getRepository(ExControle::class)->checkIfyoucanElement($annee, $element);
        $check = 0; //valider cette opération
        // dd($verify);
        if(!$verify){
            $check = 1; //opération déja validé
        }
        $promotion = $element->getModule()->getSemestre()->getPromotion();
        $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByAnneeAndPromoAndElement($annee, $promotion,$element, $order);
        $data_saved = [];
        // dd($inscriptions);
        foreach ($inscriptions as $inscription) {
            // dd($inscription);

            $enote = $this->em->getRepository(ExEnotes::class)->findOneBy(['element' => $element, 'inscription' => $inscription]);
            $statutS1 = $enote->getStatutS1() ? $enote->getStatutS1()->getId() : null;
            $m_cc = $enote->getCcr() < $enote->getMcc() || !$enote->getCcr() ? $enote->getMcc() : $enote->getCcr();
            $m_tp = $enote->getTpr() < $enote->getMtp() || !$enote->getTpr() ? $enote->getMtp() : $enote->getTpr();
            $m_ef = $enote->getEfr() < $enote->getMef() || !$enote->getEfr() ? $enote->getMef() : $enote->getEfr();
            if($element->getNature() == "NE003" || $element->getNature() == "NE004" || $element->getNature() == "NE005"){
                $moyenne_ini = $this->CalculMoyenneElement($element->getCoefficientEpreuve(), $m_cc, $m_tp, $enote->getPondMef() * $enote->getMef());
                if ($moyenne_ini < 10 || $enote->getMef() < 10 || (!empty($enote->getMtp()) && $enote->getMtp() >= 0 && $enote->getMtp() < 10) || (!empty($enote->getMcc()) && $enote->getMcc() >= 0 && $enote->getMcc() < 10) || $statutS1 == 12 || $statutS1 == 13) {
                    $moyenne_rat = $this->CalculMoyenneElement($element->getCoefficientEpreuve(), $m_cc, $m_tp, $enote->getPondMef() * $m_ef);
                    $moyenne_tot = $moyenne_rat + $enote->getNoteRachat();
                } else {
                    $moyenne_rat = null;
                    $moyenne_tot = $moyenne_ini + $enote->getNoteRachat();
                }
            } else {
                $moyenne_ini = $this->CalculMoyenneElement($element->getCoefficientEpreuve(), $m_cc, $m_tp, $enote->getPondMef() * $enote->getMef());
                if ($moyenne_ini < 10 || $enote->getMef() < 7 || $statutS1 == 12 || $statutS1 == 13) {
                    $moyenne_rat = $this->CalculMoyenneElement($element->getCoefficientEpreuve(), $m_cc, $m_tp, $m_ef);
                    $moyenne_tot = $moyenne_rat + $enote->getNoteRachat();
                } else {
                    $moyenne_rat = null;
                    $moyenne_tot = $moyenne_ini + $enote->getNoteRachat();
                }
            }
            
            array_push($data_saved, [
                'inscription' => $inscription, 
                'mcc' => $m_cc,
                'mef' => $m_ef,
                'mtp' => $m_tp,
                'mefini' => $enote->getMef(),
                'noteRachat' =>$enote->getNoteRachat(),
                'moyenneIni' => $moyenne_ini, 
                'moyenneRat' => $moyenne_rat, 
                'moyenneTot' => $moyenne_tot,
                'enote' => $enote
            ]);
        }
        // dd($data_saved);
        if($order == 3) {
            $moyenne = array_column($data_saved, 'moyenneTot');
            array_multisort($moyenne, SORT_DESC, $data_saved);
        } else if($order == 4){
            $moyenne = array_column($data_saved, 'moyenneTot');
            array_multisort($moyenne, SORT_ASC, $data_saved);
        }
        $session = $request->getSession();
        $session->set('data_element', [
            'data_saved' => $data_saved, 
            'element' => $element
        ]);
        $html = $this->render('evaluation/element/pages/list_epreuve_normal.html.twig', [
            'data_saved' => $data_saved,
        ])->getContent();
        // dd($html);
        return new JsonResponse(['html' => $html, 'check' => $check]);
    } 


    public function CalculMoyenneElement($coef, $m_cc, $m_tp, $m_ef){
        $m_cc = $m_cc ? $m_cc : 0;
        $m_tp = $m_tp ? $m_tp : 0;
        $m_ef = $m_ef ? $m_ef : 0;
        $total_coef = intval($coef['NAT000000001'] + $coef['NAT000000002'] + $coef['NAT000000003']);
        return (number_format(((($coef['NAT000000001'] * $m_cc) + ($coef['NAT000000002'] * $m_tp) + ($coef['NAT000000003'] * $m_ef)) / $total_coef), 2, '.', ' '));

    }

    #[Route('/impression/{type}/{affichage}', name: 'administration_element_impression')]
    public function administrationElementImpression(Request $request, $type, $affichage) 
    {         
        $session = $request->getSession();
        $dataSaved = $session->get('data_element')['data_saved'];
        $element = $session->get('data_element')['element'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($element->getModule()->getSemestre()->getPromotion()->getFormation());
        $infos =  [
            'dataSaved' => $dataSaved,
            'element' => $element,
            'affichage' => $affichage,
            'etablissement' => $annee->getFormation()->getEtablissement(),
        ];
        if($type == "normal"){
            $html = $this->render("evaluation/element/pdfs/normal.html.twig", $infos)->getContent();
        } else if ($type == "anonymat") {
            $html = $this->render("evaluation/element/pdfs/anonymat.html.twig", $infos)->getContent();
        }
        else if ($type == "clair") {
            $html = $this->render("evaluation/element/pdfs/clair.html.twig", $infos)->getContent();
        }
        else if ($type == "rat") {
            foreach($dataSaved as $key => $value) {
                if($value['moyenneTot'] >= 10) {  
                  unset($dataSaved[$key]);
                }
            }
            // dd($inscriptionsArray);
            $infos['dataSaved'] = $dataSaved;
            $html = $this->render("evaluation/element/pdfs/rattrapage.html.twig", $infos)->getContent();
        } else {
            die("403 something wrong !");
        }
        $html .= $this->render("evaluation/element/pdfs/footer.html.twig")->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'margin_left' => '5',
            'margin_right' => '5',
            'margin_top' => '35',
            'margin_bottom' => '5',
            'format' => 'A4-L',
            'margin_header' => '2',
            'margin_footer' => '2'
            ]);
        $mpdf->SetHTMLHeader($this->render("evaluation/element/pdfs/header.html.twig", [
            'element' => $element,
            'annee' => $annee,
            'affichage' => $affichage
        ])->getContent());
        $mpdf->defaultfooterline = 0;
        $mpdf->SetFooter('Page {PAGENO} / {nb}');
        $mpdf->WriteHTML($html);
        $mpdf->Output("element_deliberation_".$element->getId().".pdf", "I");
    }
    #[Route('/enregistre', name: 'administration_element_enregistre')]
    public function administrationElementEnregistre(Request $request) 
    {         
        $session = $request->getSession();
        $dataSaved = $session->get('data_element')['data_saved'];
        $element = $session->get('data_element')['element'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($element->getModule()->getSemestre()->getPromotion()->getFormation());
        $verify = $this->em->getRepository(ExControle::class)->checkIfyoucanElement($annee, $element);
        if(!$verify){
            return new JsonResponse("Operation déja valider", 500);
        }
        if(count($dataSaved) == 0) {
            return new JsonResponse("No data à enregistre", 500);
        }
        foreach ($dataSaved as $data) {
            $inscription = $this->em->getRepository(TInscription::class)->find($data['inscription']->getId());
            $noteElement  = $this->em->getRepository(ExEnotes::class)->findOneBy(['inscription' => $inscription, 'element' => $element]);
            $moyenne_ini = $data['moyenneIni'];
            $moyenne_rat = $data['moyenneRat'];
            $moyenne_tot = $data['moyenneTot'];
        
            $noteElement->setNote($moyenne_tot);
            $noteElement->setNoteIni($moyenne_ini);
            if ($moyenne_ini < 10 || $data['mefini'] < 7 || $moyenne_rat > 0) {
                $noteElement->setNoteRat($moyenne_rat);
            }
            $this->em->flush();

        }
        // create exControle if not exist
        $coef = $element->getCoefficientEpreuve();
        $exControle = $this->em->getRepository(ExControle::class)->findOneBy(['element' => $element, 'annee' => $annee]);
        if ($coef['NAT000000001'] == 0){
            $_POST['m_cc']=1;
            $exControle->setMcc(1);
        }
        if ($coef['NAT000000002'] == 0){
            $exControle->setMtp(1);
        }
        if ($coef['NAT000000003']==0){
            $exControle->setMef(1);
        }
        $this->em->flush();
        
        return new JsonResponse("Bien Enregistre", 200);
    }
    #[Route('/valider', name: 'administration_element_valider')]
    public function administrationElementValider(Request $request) 
    {         
        $session = $request->getSession();
        $element = $session->get('data_element')['element'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($element->getModule()->getSemestre()->getPromotion()->getFormation());
        $exControle = $this->em->getRepository(ExControle::class)->canValidateElement($element, $annee);
        if(!$exControle) {
            return new JsonResponse("Veuillez Valider Toutes les Contrôles continus , Travaux pratiques , Examen Final pour valider cet élément ", 500);
        }
        $exControle->setMelement(1);
        $this->em->flush();

        return new JsonResponse("Bien Valider", 200);
    }
    #[Route('/devalider', name: 'administration_element_devalider')]
    public function administrationElementDealider(Request $request) 
    {         
        $session = $request->getSession();
        $element = $session->get('data_element')['element'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($element->getModule()->getSemestre()->getPromotion()->getFormation());
        $exControle = $this->em->getRepository(ExControle::class)->findOneBy(['element' => $element, 'annee' => $annee]);
        $exControle->setMelement(0);
        $this->em->flush();

        return new JsonResponse("Bien Devalider", 200);
    }
    #[Route('/recalculer', name: 'administration_element_recalculer')]
    public function administrationElementDeder(Request $request) 
    {         
        $session = $request->getSession();
        $dataSaved = $session->get('data_element')['data_saved'];
        $element = $session->get('data_element')['element'];
        foreach ($dataSaved as $data) {
            $inscription = $this->em->getRepository(TInscription::class)->find($data['inscription']->getId());
            $noteElement  = $this->em->getRepository(ExEnotes::class)->findOneBy(['inscription' => $inscription, 'element' => $element]);
            $moyenne_ini = $data['moyenneIni'];
            $moyenne_rat = $data['moyenneRat'];
            $moyenne_tot = $data['moyenneTot'];
        
            $noteElement->setNote($moyenne_tot);
            $noteElement->setNoteIni($moyenne_ini);
            if(($moyenne_rat > 0 && ($element->getNature()=="NE003" || $element->getNature()=="NE004" || $element->getNature()=="NE005")) 
            or ($moyenne_ini < 10 || $data['mefini'] < 7 || $moyenne_rat > 0)){
                $noteElement->setNoteRat($moyenne_rat);                
            }

        }
        $this->em->flush();
        return new JsonResponse("Bien Recalculer", 200);

    }
}
