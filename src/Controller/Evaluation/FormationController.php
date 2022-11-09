<?php

namespace App\Controller\Evaluation;

use Mpdf\Mpdf;
use App\Entity\AcAnnee;
use App\Entity\AcModule;
use App\Entity\ExEnotes;
use App\Entity\AcElement;
use App\Entity\ExControle;
use App\Entity\TInscription;
use App\Entity\AcEtablissement;
use App\Controller\ApiController;
use App\Entity\AcPromotion;
use App\Entity\ExAnotes;
use App\Entity\ExMnotes;
use App\Entity\PeStatut;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/evaluation/formation')]
class FormationController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'evaluation_formation')]
    public function index(Request $request): Response
    {
        $operations = ApiController::check($this->getUser(), 'evaluation_formation', $this->em, $request);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $etablissements =  $this->em->getRepository(AcEtablissement::class)->findBy(['active'=>1]);

        return $this->render('evaluation/formation/index.html.twig', [
            'operations' => $operations,
            'etablissements' => $etablissements,
        ]);
    }
    #[Route('/list/{annee}', name: 'evaluation_list_etudiant')]
    public function evaluationElementList(AcAnnee $annee): Response
    {
        // if (empty($promotion)) {
        //     return new JsonResponse('Promotion premiére année non Trouvé ',500);
        // }elseif (empty($inscriptions)) {
        //     return new JsonResponse('Aucun résultat trouvé ',500);
        // }
        
        //informations annees
        $data = $this->em->getRepository(AcAnnee::class)->getInfosGenerales($annee);
        $nbr_annee = $data['nbr_annee'];
        $data_annee = $this->em->getRepository(AcAnnee::class)->getAnnee($annee);
        $data_promotion = $this->em->getRepository(AcPromotion::class)->findOneBy(['formation'=>$annee->getFormation(),'ordre'=>1]);
        $data_etudiants = $this->em->getRepository(TInscription::class)->findBy(['annee'=>$annee,'promotion'=>$data_promotion,'statut'=>13]);
        if (!empty($data_etudiants)) {
            $array_code_annee = array();
            foreach ($data_etudiants as $key => $value) {
                $array_code_etudiants[] = $value->getAdmission();
            }
        }
        // $cechekIfExistAllAnneeExist = $this->em->getRepository(ExFnotes::class)->findBy(['admission'=>$array_code_etudiants]);

        dd($array_code_etudiants);
        // foreach ($inscriptions as $inscription) {
        //     array_push($data_saved, [
        //         'inscription' => $inscription,
        //         'noteElements' => $noteElements,
        //         'moyenneIni' => $moy_ini, 
        //         'moyenneRat' => $moy_rat, 
        //         'noteRachat' =>$nt_rach, 
        //         'moyenneTot' => $moy_tot
        //     ]);
        // }
        // // dd($data_saved);
        // if($order == 3) {
        //     $moyenne = array_column($data_saved, 'moyenneTot');
        //     array_multisort($moyenne, SORT_DESC, $data_saved);
        // } else if($order == 4){
        //     $moyenne = array_column($data_saved, 'moyenneTot');
        //     array_multisort($moyenne, SORT_ASC, $data_saved);
        // }
        // $session = $request->getSession();
        // $session->set('data_module', [
        //     'data_saved' => $data_saved,
        //     'elements' => $elements
        // ]);
        $html = $this->render('evaluation/module/pages/list_epreuve_normal.html.twig', [
            // 'data_saved' => $data_saved,
            // 'elements' => $elements
        ])->getContent();
        // dd($html);
        return new JsonResponse(['html' => $html]);
    } 
    public function cechekIfExistAllAnneeExist($data_etudiants, $code_formation) {
        $condition = "";
        

    // echo "SELECT DISTINCT code_admission  FROM `ex_fnotes` where code_formation = '$code_formation' $condition";

        try {
            $conn = connexion::getConnexion();
            $conn->beginTransaction();
            $result = connexion::getConnexion()->query("SELECT DISTINCT code_admission  FROM `ex_fnotes` where code_formation = '$code_formation' $condition");
            $data = $result->fetchAll(PDO::FETCH_ASSOC);
            $result->closeCursor();
            return $data;
        } catch (Exception $exc) {
            $conn->rollBack();
            return "Erreur :" . $exc->getMessage();
        }
    }
}
