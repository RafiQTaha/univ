<?php

namespace App\Controller\Evaluation;

use App\Controller\ApiController;
use App\Controller\DatatablesController;
use App\Entity\AcEtablissement;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
        $filtre = " and pv.active = 1 ";
        
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

        $columns = array(
            array( 'db' => 'pv.id','dt' => 0 ),
            array( 'db' => 'pv.code','dt' => 1),
            array( 'db' => 'etab.abreviation','dt' => 2),
            array( 'db' => 'upper(etab.abreviation)','dt' => 3),
            array( 'db' => 'upper(forma.abreviation)','dt' => 4),
            array( 'db' => 'upper(prm.designation)','dt' => 5),
            array( 'db' => 'upper(prm.designation)','dt' => 6),
            array( 'db' => 'upper(sem.designation)','dt' => 7),
            array( 'db' => 'pv.president','dt' => 8),
            array( 'db' => 'pv.coordonnateur','dt' => 9),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        FROM pv
        INNER JOIN ac_semestre sem ON sem.id = pv.semestre_id
        INNER JOIN ac_promotion prm ON prm.id = sem.promotion_id
        INNER JOIN ac_formation forma ON forma.id = prm.formation_id
        INNER JOIN ac_etablissement etab ON etab.id = forma.etablissement_id
        INNER JOIN ac_annee ann on ann.id = pv.annee_id
        Where 1=1 $filtre";

        // INNER JOIN (SELECT epreuve_id,COUNT(id) nbr_effectif FROM ex_gnotes GROUP BY epreuve_id) ne ON ne.epreuve_id = epv.id 
        // LEFT JOIN (SELECT epreuve_id,COUNT(id) nbr_absence FROM ex_gnotes WHERE absence = '1' GROUP BY epreuve_id) na ON na.epreuve_id = epv.id
        // LEFT JOIN (SELECT epreuve_id, COUNT(id) nbr_saisi FROM ex_gnotes WHERE (absence = '0' or absence is null)  AND (note IS NOT NULL AND note <> '') GROUP BY epreuve_id) ni ON ni.epreuve_id = epv.id 
        // LEFT JOIN (SELECT epreuve_id, COUNT(id) nbr_non_saisi FROM ex_gnotes WHERE (absence = '0' or absence is null) AND (note IS NULL OR note = '' ) GROUP BY epreuve_id) nni ON nni.epreuve_id = epv.id 
        
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
            // $nbr_effectif = count($this->em->getRepository(ExGnotes::class)->findBy(['epreuve' => $cd]));
            // $nbr_absence = count($this->em->getRepository(ExGnotes::class)->findBy(['epreuve' => $cd, 'absence' => 1]));
            // $nbr_saisi = count($this->em->getRepository(ExGnotes::class)->getNombreSaisi($cd));
            // $nbr_non_saisi = count($this->em->getRepository(ExGnotes::class)->getNombreNonSaisi($cd));
            
            // dd($nbr_non_saisi);
            // $nestedData[] = "<input type ='checkbox' class='check_admissible' id ='$cd' >";
            // $nestedData[] = $i;
            $etat_bg="";
            foreach (array_values($row) as $key => $value) { 
                $nestedData[] = $value;
            }
            // $nestedData[] = $nbr_effectif;
            // $nestedData[] = $nbr_absence;
            // $nestedData[] = $nbr_saisi;
            // $nestedData[] = $nbr_non_saisi;

            ///lst add*

            // if ($nbr_saisi == 0) {
            //     $etat_bg = 'etat_bg_nf';
            // } elseif ($nbr_saisi > 0 AND $nbr_saisi < ($nbr_effectif - $nbr_absence)) {
            //     $etat_bg = '';
            // } else {
            //     $etat_bg = 'etat_bg_reg';
                
            // }
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
}