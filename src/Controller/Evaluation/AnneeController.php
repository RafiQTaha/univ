<?php

namespace App\Controller\Evaluation;

use App\Controller\ApiController;
use App\Entity\AcAnnee;
use App\Entity\AcEtablissement;
use App\Entity\AcModule;
use App\Entity\AcPromotion;
use App\Entity\ExMnotes;
use App\Entity\TInscription;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/evaluation/annee')]
class AnneeController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }

    #[Route('/', name: 'evaluation_annee')]
    public function index(): Response
    {
        $operations = ApiController::check($this->getUser(), 'evaluation_annee', $this->em);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $etablissements = $this->em->getRepository(AcEtablissement::class)->findAll();

        return $this->render('evaluation/annee/index.html.twig', [
            'operations' => $operations,
            'etablissements' => $etablissements,
        ]);
    }
    #[Route('/list/{promotion}', name: 'evaluation_annee_list')]
    public function evaluationAnneeList(Request $request, AcPromotion $promotion): Response
    {
        $order = $request->get('order');
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($promotion->getFormation());
        // $verify = $this->em->getRepository(ExControle::class)->checkIfyoucanCalculSemestre($annee, $semestre);
        $check = 0; //valider cette opération
        // if(!$verify){
        //     $check = 1; //opération déja validé
        // }
        
        $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByAnneeAndPromo($annee, $promotion, $order);
        $data_saved = [];
        // dd('amine');
        $modules = $this->em->getRepository(AcModule::class)->findByPromotion($promotion);
        foreach ($inscriptions as $inscription) {
            $moyenne = 0;
            $moyenne_normal = 0;
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
                }

                array_push($noteModules, [
                    'note' => $mnote->getNote(),
                    'statut' => $this->getStatutModule($inscription, $module)
                ]);

            }
            $moyenne = number_format($moyenne / $total_coef, 2, '.', ' ');
            $moyenneNormal = number_format($moyenne_normal / $total_coef_normal, 2, '.', ' ');
            
            array_push($data_saved, [
                'inscription' => $inscription,
                'noteModules' => $noteModules,
                'moyenneNormal' =>$moyenneNormal, 
                'moyenneSec' => $moyenne
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
        $session->set('data_annee', [
            'data_saved' => $data_saved, 
            'modules' => $modules,
            'promotion' => $promotion
        ]);
        $html = $this->render('evaluation/annee/pages/list_epreuve_normal.html.twig', [
            'data_saved' => $data_saved,
            'modules' => $modules
        ])->getContent();
        // dd($html);
        return new JsonResponse(['html' => $html, 'check' => $check]);
    } 
    public function getStatut($inscription, $semestre, $statut)
    {
        // return new Response($this->em->getRepository(::class)->getStatutByColumn($inscription, $semestre, $statut), 200, ['Content-Type' => 'text/html']);
    }
    public function getStatutModule($inscription, $module)
    {
        return $this->em->getRepository(ExMnotes::class)->getStatutAffDef($inscription, $module);
    }
}
