<?php

namespace App\Controller\Preinscription;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/preinscription')]
class GestionPreinscriptionController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'preinscription_index')]
    public function index(): Response
    {   
        return $this->render('preinscription/index.html.twig');
    }

    #[Route('/list', name: 'preinscription_list')]
    public function list(Request $request): Response
    {
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1 = 1 ";        
        $columns = array(
            array( 'db' => 'pre.id','dt' => 0 ),
            array( 'db' => 'pre.code','dt' => 1),
            array( 'db' => 'etu.nom','dt' => 2),
            array( 'db' => 'etu.prenom','dt' => 3),
            array( 'db' => 'etab.abreviation','dt' => 4),
            array( 'db' => 'LOWER(form.abreviation)','dt' => 5),
            array( 'db' => 'LOWER(nat.designation)','dt' => 6),
            array( 'db' => 'tbac.designation','dt' => 7),
            array( 'db' => 'etu.moyenne_bac','dt' => 8),
            array( 'db' => 'LOWER(stat.code)','dt' => 9),
        );
        // dd($columns);
        // SELECT pre.id , pre.statut_deliberation_id , pre.code , etu.nom , etu.prenom , etab.abreviation as etab_abreviation, form.abreviation as for_abreviation , nat.designation as categorie, tbac.designation as typdes, etu.moyenne_bac as note ,stat.code as status
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
                      
         
        FROM `tpreinscription` pre 
        inner join tetudiant etu on etu.id = pre.etudiant_id
        inner join ac_annee an on an.id = pre.annee_id
        inner join ac_formation form on form.id = an.formation_id
        inner join ac_etablissement etab on etab.id = form.etablissement_id
        left join xtype_bac tbac on tbac.code = etu.type_bac_id 
        left join nature_demande nat on nat.code = etu.nature_demande_id 
        inner join pstatut stat on stat.id = pre.statut_id    

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
            // dump($row);
            $nestedData = array();
            $cd = $row['id'];
            // $nestedData[] = $cd;
            $nestedData[] = "<input type ='checkbox' class='cat' id ='$cd' >";
            foreach (array_values($row) as $key => $value) {
                $nestedData[] = $value;
            }
            $data[] = $nestedData;
            // dd($nestedData);
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
    #[Route('/gestion_preinscription', name: 'gestion_preinscription')]
    public function gestion_preinscription(): Response
    {   
        return $this->render('preinscription/gestion_preinscription.html.twig');
    }
}
