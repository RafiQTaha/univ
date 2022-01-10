<?php

namespace App\Controller\Admission;

use App\Controller\DatatablesController;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


#[Route('/admission/admissions')]

class AdmissionController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }

    #[Route('/', name: 'admission_index')]
    public function index(): Response
    {
        return $this->render('admission/index.html.twig');
    }
    #[Route('/candidat_addmissible_list', name: 'candidat_admissible_list')]
    public function candidatAddmissibleList(Request $request): Response
    {
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1 = 1 and";       
        $columns = array(
            array( 'db' => 'pre.code','dt' => 0),
            array( 'db' => 'etu.nom','dt' => 1),
            array( 'db' => 'etu.prenom','dt' => 2),
            array( 'db' => 'etab.abreviation','dt' => 3),
            array( 'db' => 'UPPER(form.abreviation)','dt' => 4),
            array( 'db' => 'nd.designation','dt' => 5),
            array( 'db' => 'pre.rang_p','dt' => 6),
            array( 'db' => 'pre.rang_s','dt' => 7),
            array( 'db' => 'nd.concours','dt' => 8),
            array( 'db' => 'UPPER(st.designation)','dt' => 9),
            array( 'db' => 'UPPER(st2.designation)','dt' => 10),
            array( 'db' => 'pre.id','dt' => 11),

        );
        // dd($columns);
        $filtre .= "adm.id is null and st2.table0 = 'preinscription' AND st2.phase0 = 'admission' and st2.visible_admission = '1' and st2.visible = '1' ";
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
                      
                FROM tpreinscription pre
                inner join tetudiant etu on etu.id = pre.etudiant_id
                inner join ac_annee an on an.id = pre.annee_id
                inner join ac_formation form on form.id = an.formation_id              
                inner join ac_etablissement etab on etab.id = form.etablissement_id 
                LEFT JOIN nature_demande nd ON etu.nature_demande_id = nd.id
                INNER JOIN pstatut st ON st.id = pre.categorie_liste_id
                LEFT JOIN pstatut st2 ON st2.id = pre.admission_liste_id
                LEFT JOIN tadmission adm on adm.preinscription_id = pre.id

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
        // dd($result);
        $i = 1;
        foreach ($result as $key => $row) {
            $nestedData = array();
            $cd = $row['id'];
            $nestedData[] = $cd;
            // dd($row);
            foreach (array_values($row) as $key => $value) {
                if($key == 8) {
                    $nestedData[] = $value == 1 ? 'Sans Concours' : 'Avec Concours';
                }
                else if($key < 11) {
                    $nestedData[] = $value;
                }
            }
            $nestedData["DT_RowId"] = $cd;
            $nestedData["DT_RowClass"] = $cd;
            $data[] = $nestedData;
            $i++;
        }
        // dd($data);
        $json_data = array(
            "draw" => intval($params->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data   
        );
        // die;
        return new Response(json_encode($json_data));
    }
}
