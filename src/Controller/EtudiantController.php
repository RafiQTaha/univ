<?php

namespace App\Controller;

use App\Controller\DatatablesController;
use App\Entity\TEtudiant;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/etudiant')]
class EtudiantController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'etudiant_index')]
    public function index(): Response
    {
        
        return $this->render('etudiant/index.html.twig');
    }
    #[Route('/list', name: 'etudiant_list')]
    public function list(Request $request): Response
    {
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1 = 1 ";
        if (!empty($params->get('columns')[0]['search']['value'])) {
            $filtre .= " and grp.id = '" . $params->get('columns')[0]['search']['value'] . "' ";
        }

        
        $columns = array(
            array( 'db' => 'etu.id','dt' => 0 ),
            array( 'db' => 'etu.code','dt' => 1),
            array( 'db' => 'etu.nom','dt' => 2),
            array( 'db' => 'etu.prenom','dt' => 3),
            array( 'db' => 'nd.designation','dt' => 4),
            array( 'db' => 'LOWER(xtb.designation)','dt' => 5),
            array( 'db' => 'etu.moyenne_bac','dt' => 6),
            array( 'db' => 'etu.tel1','dt' => 7),
            array( 'db' => 'etu.tel2','dt' => 8),
            array( 'db' => 'LOWER(st.designation)','dt' => 9),
            array( 'db' => 'etu.created','dt' => 10 )
        );
        // dd($columns);
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
                      
                FROM tetudiant etu
                inner join pstatut st on st.id = etu.statut_id
                inner join nature_demande nd on nd.id = etu.nature_demande_id
                inner join xtype_bac xtb on xtb.id = etu.type_bac_id              

                $filtre"
        ;
        // dd($sql);
        $totalRows .= $sql;
        $sqlRequest .= $sql;
        $stmt = $this->em->getConnection()->prepare($sql);
        $newstmt = $stmt->executeQuery();
        $totalRecords = count($newstmt->fetchAll());
        // dd($sql);
        $my_columns = DatatablesController::Pluck($columns, 'db');

        // search 
        $where = DatatablesController::Search($request, $columns);
        if (isset($where) && $where != '') {
            $sqlRequest .= $where;
        }
        $sqlRequest .= DatatablesController::Order($request, $columns);
        // dd($sqlRequest);
        $stmt = $this->em->getConnection()->prepare($sqlRequest);
        $resultSet = $stmt->executeQuery();
        $result = $resultSet->fetchAll();


        $data = array();

        foreach ($result as $key => $row) {
            // dd($row);
            $nestedData = array();
            $cd = $row['id'];
            // $nestedData[] = $cd;
            $i = 0;
            foreach (array_values($row) as $key => $value) {
                if($i == 8) {
                    $nestedData[] = count($this->em->getRepository(TEtudiant::class)->find($row['id'])->getPreinscriptions()) > 0 ? 'Valider' : 'N.V';
                } 
                $nestedData[] = $value;
                $i++;
            }
            $nestedData[] = 'N.R';
            $nestedData["DT_RowId"] = $cd;
            $nestedData["DT_RowClass"] = $cd;
            $data[] = $nestedData;
            
        }
        $json_data = array(
            "draw" => intval($params->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data   // total data array
        );
        // die;
        return new Response(json_encode($json_data));
    }
}
