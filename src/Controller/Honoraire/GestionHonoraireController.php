<?php

namespace App\Controller\Honoraire;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Controller\ApiController;
use App\Controller\DatatablesController;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\AcEtablissement;
use App\Entity\HHonens;
use App\Entity\PEnseignant;
use App\Entity\PGrade;
use App\Entity\PlEmptime;
use App\Entity\Semaine;
use App\Entity\PEnseignantExcept;

#[Route('/honoraire/gestion')]
class GestionHonoraireController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }

    #[Route('/', name: 'gestion_honoraire')]
    public function index(Request $request): Response
    {
        $operations = ApiController::check($this->getUser(), 'gestion_honoraire', $this->em, $request);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $etbalissements = $this->em->getRepository(AcEtablissement::class)->findAll();
        $professeurs = $this->em->getRepository(PEnseignant::class)->findAll();
        $grades = $this->em->getRepository(PGrade::class)->findAll();
        $semaines = $this->em->getRepository(Semaine::class)->findAll();
        return $this->render('honoraire/gestion_honoraire.html.twig', [
            'etablissements' => $etbalissements,
            'operations' => $operations,
            'semaines' => $semaines,
            'grades' => $grades,
            'professeurs' => $professeurs,
        ]);
    }

    #[Route('/list', name: 'list_gestion_honoraire')]
    public function list_gestion_honoraire(Request $request): Response
    {   
         
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = " ";
        
        if (!empty($params->get('columns')[0]['search']['value'])) {
            $filtre .= " and etab.id = '" . $params->get('columns')[0]['search']['value'] . "' ";
        }
        if (!empty($params->get('columns')[1]['search']['value'])) {
            $filtre .= " and frm.id = '" . $params->get('columns')[1]['search']['value'] . "' ";
        }   
        if (!empty($params->get('columns')[2]['search']['value'])) {
            $filtre .= " and prm.id = '" . $params->get('columns')[2]['search']['value'] . "' ";
        }   
        if (!empty($params->get('columns')[3]['search']['value'])) {
            $filtre .= " and sem.id = '" . $params->get('columns')[3]['search']['value'] . "' ";
        }   
        if (!empty($params->get('columns')[4]['search']['value'])) {
            $filtre .= " and mdl.id = '" . $params->get('columns')[4]['search']['value'] . "' ";
        }   
        if (!empty($params->get('columns')[5]['search']['value'])) {
            $filtre .= " and ele.id = '" . $params->get('columns')[5]['search']['value'] . "' ";
        }    
        if (!empty($params->get('columns')[6]['search']['value'])) {
            $filtre .= " and sm.id = '" . $params->get('columns')[6]['search']['value'] . "' ";
        }   
        if (!empty($params->get('columns')[7]['search']['value'])) {
            $filtre .= " and ens.id = '" . $params->get('columns')[7]['search']['value'] . "' ";
        }   
        if (!empty($params->get('columns')[8]['search']['value'])) {
            $filtre .= " and grd.id = '" . $params->get('columns')[8]['search']['value'] . "' ";
        }   
        if (!empty($params->get('columns')[10]['search']['value'])) {
            $valider = $params->get('columns')[10]['search']['value'] == 'non' ? 0 : 1;
            $filtre .= " and emp.valider = '" . $valider . "' ";
        } 
        $columns = array(
            array( 'db' => 'emp.id','dt' => 0 ),
            array( 'db' => 'emp.code','dt' => 1),
            array( 'db' => 'Concat(date(emp.start)," ", DATE_FORMAT(emp.heur_db, "%H:%i"),"-",DATE_FORMAT(emp.heur_fin, "%H:%i"))','dt' => 2),
            array( 'db' => 'ens.nom','dt' => 3),
            array( 'db' => 'ens.prenom','dt' => 4),
            array( 'db' => 'lower(gr.designation)','dt' => 5),
            array( 'db' => 'Hour(SUBTIME(emp.heur_fin,emp.heur_db))','dt' => 6),
            // array( 'db' => 'Upper(hon.code)','dt' => 7),
            array( 'db' => 'hon.montant','dt' => 7),
            array( 'db' => 'etab.abreviation','dt' => 8),
            array( 'db' => 'Upper(frm.abreviation)','dt' => 9),
            array( 'db' => 'lower(ann.designation)','dt' => 10),
            array( 'db' => 'prm.designation','dt' => 11),
            array( 'db' => 'Upper(sem.designation)','dt' => 12),
            array( 'db' => 'Upper(mdl.designation)','dt' => 13),
            array( 'db' => 'lower(ele.designation)','dt' => 14),
            array( 'db' => 'Upper(nat.abreviation)','dt' => 15),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        FROM hhonens hon
        INNER JOIN penseignant ens ON ens.id = hon.enseignant_id
        INNER JOIN pgrade gr ON gr.id = ens.grade_id
        INNER JOIN pl_emptime emp  ON hon.seance_id = emp.id
        INNER JOIN pr_programmation prog ON prog.id = emp.programmation_id
        INNER join pnature_epreuve nat on nat.id = prog.nature_epreuve_id
        INNER JOIN ac_element ele ON ele.id = prog.element_id 
        INNER JOIN ac_module mdl ON mdl.id =  ele.module_id
        INNER JOIN ac_semestre sem ON sem.id =  mdl.semestre_id
        INNER JOIN ac_promotion prm ON prm.id = sem.promotion_id
        INNER JOIN ac_formation frm ON frm.id = prm.formation_id
        INNER JOIN ac_annee ann ON ann.formation_id = frm.id
        INNER JOIN ac_etablissement etab ON etab.id = frm.etablissement_id
        $filtre ";
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
        // $sqlRequest .= DatatablesController::Order($request, $columns);
        $changed_column = $params->get('order')[0]['column'] > 0 ? $params->get('order')[0]['column'] -1 : 0;
        $sqlRequest .= " ORDER BY " .DatatablesController::Pluck($columns, 'db')[$changed_column] . "   " . $params->get('order')[0]['dir'] . "  LIMIT " . $params->get('start') . " ," . $params->get('length') . " ";

        $stmt = $this->em->getConnection()->prepare($sqlRequest);
        $resultSet = $stmt->executeQuery();
        $result = $resultSet->fetchAll();
        $data = [];
        
        $i = 1;
        foreach ($result as $key => $row) {
            $nestedData = [];
            $cd = $row['id'];
            $nestedData[] = $i;
            $etat_bg="";
            foreach (array_values($row) as $key => $value) { 
                $checked = "";
                if ($key == 0) {
                    $nestedData[] = "<input type ='checkbox' class='check_seance' data-id ='$cd' >";
                }
                
                // elseif($key == 12){
                //     $nestedData[] = $value;
                //     $nbr_sc_regroupe = $this->em->getRepository(PlEmptime::class)->getNbr_sc_regroupe($cd);
                //     $nbr_sc_regroupe = $nbr_sc_regroupe == 0 ? 1 : $nbr_sc_regroupe;
                //     $nestedData[] = "<a value='$cd' data-column = '" . $nbr_sc_regroupe . "' class= 'nbr_sc_regroupe nbr_sc_regroupe_" . $nbr_sc_regroupe . "'>" . $nbr_sc_regroupe . "</a>";
                // }
                else{
                    $nestedData[] = $value;
                }
            }
            $nestedData["DT_RowId"] = $cd;
            $nestedData["DT_RowClass"] = $etat_bg; 
            $data[] = $nestedData;
            $i++;
        }
        // dd($nestedData);
        $json_data = array(
            "draw" => intval($params->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data   
        );
        return new Response(json_encode($json_data));
    }
}
