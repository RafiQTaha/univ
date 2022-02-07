<?php

namespace App\Controller\Evaluation;

use App\Controller\ApiController;
use App\Entity\AcAnnee;
use App\Entity\AcEtablissement;
use App\Entity\AcModule;
use App\Entity\AcSemestre;
use App\Entity\ExControle;
use App\Entity\ExMnotes;
use App\Entity\ExSnotes;
use App\Entity\PeStatut;
use App\Entity\TInscription;
use Doctrine\Persistence\ManagerRegistry;
use Mpdf\Mpdf;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/evaluation/semestre')]
class SemestreController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'evaluation_semestre')]
    public function index(): Response
    {
        $operations = ApiController::check($this->getUser(), 'evaluation_semestre', $this->em);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $etablissements = $this->em->getRepository(AcEtablissement::class)->findAll();

        return $this->render('evaluation/semestre/index.html.twig', [
            'operations' => $operations,
            'etablissements' => $etablissements,
        ]);
    }
    #[Route('/list/{semestre}', name: 'evaluation_semestre_list')]
    public function evaluationSemestreList(Request $request, AcSemestre $semestre): Response
    {
        $order = $request->get('order');
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($semestre->getPromotion()->getFormation());
        $verify = $this->em->getRepository(ExControle::class)->checkIfyoucanCalculSemestre($annee, $semestre);

        $check = 0; //valider cette opération
        if(!$verify){
            $check = 1; //opération déja validé
        }
        
        $promotion = $semestre->getPromotion();
        $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByAnneeAndPromo($annee, $promotion, $order);
        $data_saved = [];
        $modules = $this->em->getRepository(AcModule::class)->findBy(['semestre' => $semestre, 'active' => 1]);
        foreach ($inscriptions as $inscription) {
            $moyenne = 0;
            $moyenne_normal = 0;
            $note_rachat = 0;
            $total_coef = 0;
            $total_coef_normal = 0;
            $noteModules = [];
            foreach ($modules as $module) {
                $total_coef += $module->getCoefficient();
                $mnote = $this->em->getRepository(ExMnotes::class)->findOneBy(['module' => $module, 'inscription' => $inscription]);

                $moyenne += $mnote->getNote() * $module->getCoefficient();
                
                if ($module->getType() == 'N') {
                    $moyenne_normal += $mnote->getNote() * $module->getCoefficient();
                    $note_rachat += $mnote->getNoteRachat() * $module->getCoefficient();
                    $total_coef_normal += $module->getCoefficient();
                }

                array_push($noteModules, [
                    'note' => $mnote->getNote(),
                    'statut' => $this->getStatutModule($inscription, $module)
                ]);

            }
            $note_rachat_semstre = $this->em->getRepository(ExSnotes::class)->findOneBy(['inscription' => $inscription, 'semestre' => $semestre]);
            // if($inscription->getId() == 8612) {
            //     dd($note_rachat_semstre->getNoteRachat());
            // }
            if($note_rachat_semstre && $note_rachat_semstre->getNoteRachat()) {
                // dd('amine');
                $note_rachat_semstre = $note_rachat_semstre->getNoteRachat();
            } else {
                $note_rachat_semstre = 0;
            }
            $moyenneNormal = number_format($moyenne / $total_coef, 2, '.', ' ');
            $moyenneSec = number_format($moyenne_normal / $total_coef_normal, 2, '.', ' ');
            $noteRachat = $note_rachat / $total_coef_normal;
            array_push($data_saved, [
                'inscription' => $inscription,
                'noteModules' => $noteModules,
                'noteRachat' => $noteRachat, 
                'noteRachatSemstre' => $note_rachat_semstre,
                'moyenneNormal' =>$moyenneNormal, 
                'moyenneSec' => $moyenneSec
            ]);
        }
        // dd($data_saved);
        if($order == 3) {
            $moyenne = array_column($data_saved, 'moyenneNormal');
            array_multisort($moyenne, SORT_DESC, $data_saved);
        } else if($order == 4){
            $moyenne = array_column($data_saved, 'moyenneNormal');
            array_multisort($moyenne, SORT_ASC, $data_saved);
        }
        $session = $request->getSession();
        $session->set('data_semestre', [
            'data_saved' => $data_saved, 
            'modules' => $modules,
            'semestre' => $semestre
        ]);
        $html = $this->render('evaluation/semestre/pages/list_epreuve_normal.html.twig', [
            'data_saved' => $data_saved,
            'modules' => $modules
        ])->getContent();
        // dd($html);
        return new JsonResponse(['html' => $html, 'check' => $check]);
    } 
    #[Route('/impression/{type}/{affichage}', name: 'evaluation_semestre_impression')]
    public function evaluationSemestreImpression(Request $request, $type, $affichage) 
    {         
        $session = $request->getSession();
        $dataSaved = $session->get('data_semestre')['data_saved'];
        $semestre = $session->get('data_semestre')['semestre'];
        $modules = $session->get('data_semestre')['modules'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($semestre->getPromotion()->getFormation());
        $infos =  [
            'dataSaved' => $dataSaved,
            'semestre' => $semestre,
            'modules' => $modules,
            'affichage' => $affichage,
            'statutModules' => $this->em->getRepository(PeStatut::class)->findBy(['type' => 'M']),
            'statutSemestres' => $this->em->getRepository(PeStatut::class)->findBy(['type' => 'S']),
            'etablissement' => $annee->getFormation()->getEtablissement(),
        ];
        if($type == "normal"){
            $html = $this->render("evaluation/semestre/pdfs/normal.html.twig", $infos)->getContent();
        } else if ($type == "anonymat") {
            $html = $this->render("evaluation/semestre/pdfs/anonymat.html.twig", $infos)->getContent();
        }
        else if ($type == "clair") {
            $html = $this->render("evaluation/semestre/pdfs/clair.html.twig", $infos)->getContent();
        }
        else if ($type == "rat") {
            foreach($dataSaved as $key => $value) {
                if($value['moyenneSec'] >= 10) {  
                  unset($dataSaved[$key]);
                }
            }
            // dd($inscriptionsArray);
            $infos['dataSaved'] = $dataSaved;
            $html = $this->render("evaluation/semestre/pdfs/rattrapage.html.twig", $infos)->getContent();
        } else {
            die("403 something wrong !");
        }
        $html .= $this->render("evaluation/semestre/pdfs/footer.html.twig")->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'margin_left' => '5',
            'margin_right' => '5',
            'margin_top' => '35',
            'margin_bottom' => '10',
            'format' => 'A4-L',
            'margin_header' => '2',
            'margin_footer' => '2'
            ]);
        $mpdf->SetHTMLHeader($this->render("evaluation/semestre/pdfs/header.html.twig", [
            'semestre' => $semestre,
            'annee' => $annee,
            'affichage' => $affichage
        ])->getContent());
        $mpdf->defaultfooterline = 0;
        $mpdf->SetFooter('Page {PAGENO} / {nb}');
        $mpdf->WriteHTML($html);
        $mpdf->Output("module_deliberation_".$semestre->getId().".pdf", "I");
    }
    public function getStatut($inscription, $semestre, $statut)
    {
        return new Response($this->em->getRepository(ExSnotes::class)->getStatutByColumn($inscription, $semestre, $statut), 200, ['Content-Type' => 'text/html']);
    }
    public function getStatutModule($inscription, $module)
    {
        return $this->em->getRepository(ExMnotes::class)->getStatutAffDef($inscription, $module);
    }

    #[Route('/enregistre', name: 'evaluation_semestre_enregistre')]
    public function evaluationSemetreEnregistre(Request $request) 
    {         
        $session = $request->getSession();
        $dataSaved = $session->get('data_semestre')['data_saved'];
        $semestre = $this->em->getRepository(AcSemestre::class)->find($session->get('data_semestre')['semestre']->getId());
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($semestre->getPromotion()->getFormation());
        $exControle = $this->em->getRepository(ExControle::class)->alreadyValidateSemestre($semestre, $annee);
        $verify = $this->em->getRepository(ExControle::class)->checkIfyoucanCalculSemestre($annee, $semestre);
        if(!$exControle) {
            return new JsonResponse("Semestre deja valide", 500);
        }
        if(!$verify){
            return new JsonResponse("Operation déja valider", 500);
        }

        foreach ($dataSaved as $data) {
            $inscription = $this->em->getRepository(TInscription::class)->find($data['inscription']->getId());
            $inscriptionSemstre  = $this->em->getRepository(ExSnotes::class)->findOneBy(['inscription' => $inscription, 'semestre' => $semestre]);
            if(!$inscriptionSemstre) {
                $inscriptionSemstre = new ExSnotes();
                $inscriptionSemstre->setInscription($inscription);
                $inscriptionSemstre->setSemestre($semestre);
                $inscriptionSemstre->setUser($this->getUser());
                $inscriptionSemstre->setCreated(new \DateTime("now"));
                $this->em->persist($inscriptionSemstre);
                $this->em->flush();
            }
            $inscriptionSemstre->setNote(
                $data['moyenneNormal']
            );
            $inscriptionSemstre->setNoteSec(
                $data['moyenneSec']
            );
            $inscriptionSemstre->setNoteRachat(
                $data['noteRachat'] > 0 ?  $data['noteRachat'] : null
            );
            
            $this->em->flush();

        }      
        
        return new JsonResponse("Bien Enregistre", 200);
    }

    #[Route('/valider', name: 'evaluation_semestre_valider')]
    public function evaluationSemestreValider(Request $request) 
    {         
        $session = $request->getSession();
        $semestre = $session->get('data_semestre')['semestre'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($semestre->getPromotion()->getFormation());
        $exControle = $this->em->getRepository(ExControle::class)->canValidateSemestre($semestre, $annee);
        // dd($exControle);
        if($exControle) {
            return new JsonResponse("Veuillez Valider Toutes les modules pour valider ce semestre ", 500);
        }
        $this->em->getRepository(ExControle::class)->updateSemestreByElement($semestre, $annee, 1);

        return new JsonResponse("Bien Valider", 200);
    }
    #[Route('/devalider', name: 'evaluation_semestre_devalider')]
    public function evaluationSemestreDevalider(Request $request) 
    {         
        $session = $request->getSession();
        $session = $request->getSession();
        $semestre = $session->get('data_semestre')['semestre'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($semestre->getPromotion()->getFormation());
        $this->em->getRepository(ExControle::class)->updateSemestreByElement($semestre, $annee, 0);
        $this->em->flush();

        return new JsonResponse("Bien Devalider", 200);
    }
    #[Route('/recalculer', name: 'evaluation_semestre_recalculer')]
    public function evaluationSemesetrecalculer(Request $request) 
    {         
        $session = $request->getSession();
        $dataSaved = $session->get('data_semestre')['data_saved'];
        $semestre = $this->em->getRepository(AcSemestre::class)->find($session->get('data_semestre')['semestre']->getId());
        foreach ($dataSaved as $data) {
            $inscription = $this->em->getRepository(TInscription::class)->find($data['inscription']->getId());
            $inscriptionSemstre  = $this->em->getRepository(ExSnotes::class)->findOneBy(['inscription' => $inscription, 'semestre' => $semestre]);
            $inscriptionSemstre->setNote(
                $data['moyenneNormal']
            );
            $inscriptionSemstre->setNoteSec(
                $data['moyenneSec']
            );
            $inscriptionSemstre->setNoteRachat(
                $data['noteRachat'] > 0 ?  $data['noteRachat'] : null
            );
        }
        $this->em->flush();
        return new JsonResponse("Bien Recalculer", 200);

    }
}
