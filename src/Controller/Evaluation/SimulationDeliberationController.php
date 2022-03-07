<?php

namespace App\Controller\Evaluation;

use App\Controller\ApiController;
use App\Entity\AcAnnee;
use App\Entity\AcEtablissement;
use App\Entity\AcModule;
use App\Entity\AcSemestre;
use App\Entity\ExMnotes;
use App\Entity\ExSnotes;
use App\Entity\TInscription;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/evaluation/simulationdeliberation')]
class SimulationDeliberationController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    
    #[Route('/', name: 'evaluation_simulation_deliberation')]
    public function index(): Response
    {
        $operations = ApiController::check($this->getUser(), 'evaluation_simulation_deliberation', $this->em);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $etablissements = $this->em->getRepository(AcEtablissement::class)->findAll();
        return $this->render('evaluation/simulation_deliberation/index.html.twig',[
            'operations' => $operations,
            'etablissements' => $etablissements,
        ]);
    }
    #[Route('/list/{semestre}', name: 'evaluation_simulation_deliberation_list')]
    public function evaluationSimulationDeliberationList(Request $request, AcSemestre $semestre): Response
    {
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($semestre->getPromotion()->getFormation());
        // $verify = $this->em->getRepository(ExControle::class)->checkIfyoucanCalculSemestre($annee, $semestre);
        $check = 0; //valider cette opération
        // if(!$verify){
        //     $check = 1; //opération déja validé
        // }
        
        $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByAnneeAndPromo($annee, $semestre->getPromotion(), null);
        $data_saved = [];
        $modules = $this->em->getRepository(AcModule::class)->getMdouleBySemestreAndExControle($semestre, $annee);
        foreach ($inscriptions as $inscription) {
            $moyenne = 0;
            $moyenne_normal = 0;
            $moyenne_rachat = 0;
            $total_coef = 0;
            $total_coef_normal = 0;
            $noteModules = [];
            foreach ($modules as $module) {
                $total_coef += $module->getCoefficient();
                $mnote = $this->em->getRepository(ExMnotes::class)->findOneBy(['module' => $module, 'inscription' => $inscription]);
    
                $moyenne += $mnote->getNote() * $module->getCoefficient();
                
                if ($module->getType() == 'N') {
                    $moyenne_normal += $mnote->getNote() * $module->getCoefficient();
                    $total_coef_normal += $module->getCoefficient();
                    if ($mnote->getNoteRachat()) {
                        $moyenne_rachat += $mnote->getNoteRachat() *  $module->getCoefficient();
                    }
                }
                $st = "";
                // if($inscription->getCodeAnonymat() == 10732 && $module->getId() == 925){
                //     dd($mnote);
                // }
                if ($mnote->getStatutAff() && $mnote->getStatutAff()->getId() == 29) {
                    $st = "color:red; font-weight: bold;";
                }
                if ($mnote->getStatutAff() == true && $mnote->getStatutAff()->getId() == 26) {
                    $st = "color:black; font-weight: bold;";
                }

                array_push($noteModules, [
                    'note' => $mnote->getNote(),
                    'style' => $st,
                    // 'module' => $module,
                ]);

            }
            $snote = $this->em->getRepository(ExSnotes::class)->findOneBy(['semestre' => $semestre, 'inscription' => $inscription]);
            $stSemestre = "";
            if ($snote->getStatutAff() && $snote->getStatutAff()->getId() == 57) {
                $stSemestre = "color:red; font-weight: bold;";
            }
            if ($snote->getStatutAff() && $snote->getStatutAff()->getId() == 39) {
                $stSemestre = "color:black; font-weight: bold;";
            }
            $moyenne = ($moyenne / $total_coef);
            $moyenneNormal = ($moyenne_normal / $total_coef_normal);
            $moyenneRachat = ($moyenne_rachat / $total_coef_normal);
            
            array_push($data_saved, [

                'inscription' => $inscription,
                'noteModules' => $noteModules,
                'moyenneNormal' =>$moyenneNormal, 
                'moyenneRachat' =>$moyenneRachat, 
                'moyenneSec' => $moyenne,
                'snoteRachat' => $snote->getNoteRachat(),
                'styleSemestre' => $stSemestre
            ]);
        }
        // dd($data_saved);
        $session = $request->getSession();
        $session->set('data_deliberation', [
            'data_saved' => $data_saved, 
            'modules' => $modules,
            'semestre' => $semestre
        ]);
        $html = $this->render('evaluation/simulation_deliberation/pages/list_epreuve_normal.html.twig', [
            'data_saved' => $data_saved,
            'modules' => $modules
        ])->getContent();
        // dd($html);
        return new JsonResponse(['html' => $html, 'check' => $check]);
    } 

    #[Route('/simuler/{inscription}/{semestre}', name: 'evaluation_simulation_deliberation_simuler')]
    public function evaluationSimulationSimuler(TInscription $inscription, AcSemestre $semestre)
    {
        // $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($semestre->getPromotion()->getFormation());
        // $modules = $this->em->getRepository(AcModule::class)->getMdouleBySemestreAndExControle($semestre, $annee);
        $snote = $this->em->getRepository(ExSnotes::class)->findOneBy(["semestre" => $semestre, "inscription" => $inscription]);
        $html = $this->render('evaluation/simulation_deliberation/pages/simuler.html.twig', [
            'snote' => $snote,
            'inscription' => $inscription,
            'semestre' => $semestre
        ])->getContent();
        
        return new JsonResponse($html);
    }
}
