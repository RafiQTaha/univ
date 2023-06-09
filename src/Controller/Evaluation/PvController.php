<?php

namespace App\Controller\Evaluation;

use App\Controller\ApiController;
use App\Controller\DatatablesController;
use App\Entity\AcEtablissement;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/evaluation/pv')]
class PvController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'evaluation_pv_deliberation')]
    public function index(Request $request): Response
    {
        //check if user has access to this page
       $operations = ApiController::check($this->getUser(), 'evaluation_pv_deliberation', $this->em, $request);
       if(!$operations) {
           return $this->render("errors/403.html.twig");
       }
       
       return $this->render('evaluation/pv/index.html.twig', [
        'etablissements' =>  $this->em->getRepository(AcEtablissement::class)->findBy(['active'=>1]),
        'operations' => $operations
       ]);
    }

    #[Route('/list', name: 'list_pvs')]
    public function list_gestion_preinscription(Request $request): Response
    {   
         
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = " pv.active = 1 ";
        
        if (!empty($params->all('columns')[0]['search']['value'])) {
            $filtre .= " and etab.id = '" . $params->all('columns')[0]['search']['value'] . "' ";
        }
        if (!empty($params->all('columns')[1]['search']['value'])) {
            $filtre .= " and forma.id = '" . $params->all('columns')[1]['search']['value'] . "' ";
        }   
        if (!empty($params->all('columns')[2]['search']['value'])) {
            $filtre .= " and prm.id = '" . $params->all('columns')[2]['search']['value'] . "' ";
        }   
        if (!empty($params->all('columns')[3]['search']['value'])) {
            $filtre .= " and sem.id = '" . $params->all('columns')[3]['search']['value'] . "' ";
        }  
        if (!empty($params->all('columns')[4]['search']['value'])) {
            $filtre .= " and ann.id = '" . $params->all('columns')[4]['search']['value'] . "' ";
        }  

        $columns = array(
            array( 'db' => 'pv.id','dt' => 0 ),
            array( 'db' => 'pv.code','dt' => 1),
            array( 'db' => 'etab.abreviation','dt' => 2),
            array( 'db' => 'upper(etab.abreviation)','dt' => 3),
            array( 'db' => 'upper(forma.abreviation)','dt' => 4),
            array( 'db' => 'upper(ann.designation)','dt' => 5),
            array( 'db' => 'upper(prm.designation)','dt' => 6),
            array( 'db' => 'upper(prm.designation)','dt' => 7),
            array( 'db' => 'upper(sem.designation)','dt' => 8),
            array( 'db' => 'pv.president','dt' => 9),
            array( 'db' => 'pv.coordonnateur','dt' => 10),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        FROM pv
        INNER JOIN ac_semestre sem ON sem.id = pv.semestre_id
        INNER JOIN ac_promotion prm ON prm.id = sem.promotion_id
        INNER JOIN ac_formation forma ON forma.id = prm.formation_id
        INNER JOIN ac_etablissement etab ON etab.id = forma.etablissement_id
        INNER JOIN ac_annee ann on ann.id = pv.annee_id
        Where $filtre";
        // dd($sql);
        $totalRows .= $sql;
        $sqlRequest .= $sql;
        $stmt = $this->em->getConnection()->prepare($sql);
        $newstmt = $stmt->executeQuery();
        $totalRecords = count($newstmt->fetchAll());
        
        $my_columns = DatatablesController::Pluck($columns, 'db');
        
        $where = DatatablesController::Search($request, $columns);
        if (isset($where) && $where != '') {
            $sqlRequest .= $where;
        }
        $sqlRequest .= DatatablesController::Order($request, $columns);
        
        $stmt = $this->em->getConnection()->prepare($sqlRequest);
        $resultSet = $stmt->executeQuery();
        $result = $resultSet->fetchAll();
        $data = array();
        
        $i = 1;
        foreach ($result as $key => $row) {
            // dump($row);die;
            $nestedData = array();
            $cd = $row['id'];
            $etat_bg="";
            foreach (array_values($row) as $key => $value) { 
                $nestedData[] = $value;
            }
            $nestedData["DT_RowId"] = $cd;
            $nestedData["DT_RowClass"] = $etat_bg;
            $data[] = $nestedData;
            $i++;
        }
        $json_data = array(
            "draw" => intval($params->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data   
        );
        return new Response(json_encode($json_data));
    }
    
    #[Route('/ajouter_pv', name: 'ajouter_pv')]
    public function ajouter_pv(Request $request)
    {
        dd($request);
        if ($request->get('coordonnateur') == "" || $request->get('president') == "" || $request->get('membres') == "" || $request->get('annee') == "" || $request->get('semestre') == "") {
            return new JsonResponse("Merci de remplir tout les champs!",500);
        }

        $inscription = $this->em->getRepository(TInscription::class)->find($request->get('annee2'));
        if (!$inscription) {
            return new JsonResponse("Inscription Introuvable !",500);
        }
        
        // $insSanction = new InsSanctionner();
        // $insSanction->setInscription($inscription);
        // $insSanction->setDateIncident(new DateTime($request->get('date_incident')));
        // $insSanction->setDateReunion(new DateTime($request->get('date_reunion')));
        // $insSanction->setActive(1);
        // $insSanction->setValide(0);
        // $insSanction->setUserCreated($this->getUser());
        // $insSanction->setCreated(new DateTime('now'));
        // $this->em->persist($insSanction);
        // $this->em->flush();
        // $insSanction->setCode('UIA_'.$inscription->getAnnee()->getFormation()->getEtablissement()->getAbreviation().'_'.str_pad($insSanction->getId(), 4, '0', STR_PAD_LEFT).'/'.date('Y'));
        // $this->em->flush();
        return new JsonResponse("PV bien cree",200);
    }
}
