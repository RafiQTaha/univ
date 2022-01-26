<?php

namespace App\Controller\AdministrationEpreuve;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Controller\ApiController;
use App\Entity\AcEtablissement;
use App\Entity\PEnseignant;
use DateTime;
use Mpdf\Mpdf;
use App\Controller\DatatablesController;
use App\Entity\AcEpreuve;
use App\Entity\ExGnotes;

#[Route('/administration/note')]
class NoteEpreuveController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
        
    }
    #[Route('/', name: 'administration_note')]
    public function index(): Response
    {
        $etbalissements = $this->em->getRepository(AcEtablissement::class)->findAll();
        $professeurs = $this->em->getRepository(PEnseignant::class)->findAll();
        $operations = ApiController::check($this->getUser(), 'administration_note', $this->em);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        return $this->render('administration_epreuve/note_epreuve.html.twig', [
            'etablissements' => $etbalissements,
            'professeurs' => $professeurs,
            'operations' => $operations
        ]);
    }

    #[Route('/list', name: 'list_note_epreuve')]
    public function list_gestion_preinscription(Request $request): Response
    {   
         
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = " and mdl.active = 1 and ann.cloture_academique = 'non' and ann.validation_academique = 'non' and epv.statut_id = 29";
        
        if (!empty($params->get('columns')[0]['search']['value'])) {
            $filtre .= " and etab.id = '" . $params->get('columns')[0]['search']['value'] . "' ";
        }
        if (!empty($params->get('columns')[1]['search']['value'])) {
            $filtre .= " and forma.id = '" . $params->get('columns')[1]['search']['value'] . "' ";
        }   
        if (!empty($params->get('columns')[2]['search']['value'])) {
            $filtre .= " and prm.id = '" . $params->get('columns')[12]['search']['value'] . "' ";
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
            $filtre .= " and ens.id = '" . $params->get('columns')[6]['search']['value'] . "' ";
        } 

        $columns = array(
            array( 'db' => 'epv.id','dt' => 0 ),
            array( 'db' => 'right (epv.code , 10)','dt' => 1),
            array( 'db' => 'DATE_FORMAT(epv.date_epreuve,"%Y-%m-%d")','dt' => 2),
            array( 'db' => 'left(mdl.designation , 8)','dt' => 3),
            array( 'db' => 'left(ele.designation , 8)','dt' => 4),
            array( 'db' => 'left(etab.abreviation , 10)','dt' => 5),
            array( 'db' => 'left(forma.abreviation , 10)','dt' => 6),
            array( 'db' => 'left(CONCAT(ens.nom,"  ",ens.prenom) , 10)','dt' => 7),
            array( 'db' => 'nepv.abreviation','dt' => 8),
            array( 'db' => 'nbr_e','dt' => 9),
            array( 'db' => 'nbr_a','dt' => 10),
            array( 'db' => 'nbr_i','dt' => 11),
            array( 'db' => 'nbr_ni','dt' => 12),
            array( 'db' => 'stat.designation','dt' => 13),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        FROM ac_epreuve epv 
        INNER JOIN ac_element ele ON ele.id = epv.element_id
        INNER JOIN ac_module mdl ON mdl.id = ele.module_id
        INNER JOIN ac_semestre sem ON sem.id = mdl.semestre_id
        INNER JOIN ac_promotion prm ON prm.id = sem.promotion_id
        INNER JOIN ac_formation forma ON forma.id = prm.formation_id
        INNER JOIN ac_etablissement etab ON etab.id = forma.etablissement_id
        INNER JOIN penseignant ens ON ens.id = epv.enseignant_id
        INNER JOIN pstatut stat ON stat.id = epv.statut_id
        INNER JOIN pnature_epreuve nepv ON nepv.id = epv.nature_epreuve_id
        INNER JOIN ac_annee ann on ann.id = epv.annee_id
        INNER JOIN (SELECT epreuve_id,COUNT(id) nbr_e FROM ex_gnotes GROUP BY epreuve_id) ne ON ne.epreuve_id = epv.id 
        LEFT JOIN (SELECT epreuve_id,COUNT(id) nbr_a FROM ex_gnotes WHERE absence = '1' GROUP BY epreuve_id) na ON na.epreuve_id = epv.id
        LEFT JOIN (SELECT epreuve_id, COUNT(id) nbr_i FROM ex_gnotes WHERE absence = '0' AND (note IS NOT NULL AND note <> '') GROUP BY epreuve_id) ni ON ni.epreuve_id = epv.id 
        LEFT JOIN (SELECT epreuve_id, COUNT(id) nbr_ni FROM ex_gnotes WHERE absence = '0' AND (note IS NULL OR note = '' ) GROUP BY epreuve_id) nni ON nni.epreuve_id = epv.id Where  1=1 $filtre";
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
            $nestedData[] = $i;
            $etat_bg="";
            foreach (array_values($row) as $key => $value) { 
                if($key > 0) {
                    $nestedData[] = $value;
                }
            }
            ///lst add*

            if ($row['nbr_i'] == 0) {
                $etat_bg = 'etat_bg_nf';
            } elseif ($row['nbr_i'] > 0 AND $row['nbr_i'] < ($row['nbr_e'] - $row['nbr_a'])) {
                $etat_bg = '';
            } else {
                $etat_bg = 'etat_bg_reg';
                
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

    #[Route('/list/note_inscription/{id_epruve}', name: 'list_note_inscription')]
    public function note_inscription(Request $request, $id_epruve): Response
    {   
         
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = " prv.id=".$id_epruve." and ins.statut_id in (13,14)";
        $columns = array(
            array( 'db' => 'ex.id','dt' => 0 ),
            array( 'db' => 'etu.nom','dt' => 1),
            array( 'db' => 'etu.prenom','dt' => 2),
            array( 'db' => 'ex.note','dt' => 3),
            array( 'db' => 'ex.absence','dt' => 4),
            array( 'db' => 'ex.observation','dt' => 5),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        from ex_gnotes ex
        INNER JOIN ac_epreuve prv on prv.id = ex.epreuve_id
        INNER JOIN tinscription ins on ins.id = ex.inscription_id
        INNER JOIN tadmission adm on adm.id = ins.admission_id
        INNER JOIN tpreinscription prei on prei.id = adm.preinscription_id
        INNER JOIN tetudiant etu on etu.id = prei.etudiant_id";
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
            $nestedData[] = $i;
            $etat_bg="";
            foreach (array_values($row) as $key => $value) { 
                if($key > 0) {
                    if($key == 3){
                        $value = "<form class='save_note' id ='$i'><input type ='text' name='input_note' class='input_note' id ='$i' data-id='$cd' value='$value'></form>";
                    }
                    if($key == 4){
                        if($value == 0) {
                            $value = "<center><input type ='checkbox' class='check_note_ins' id ='$cd'></center>";
                        }else{
                            $value = "<center><input type ='checkbox' class='check_note_ins' id ='$cd' checked></center>";
                        }
                    }
                    if ($key == 5) {
                        $value = "<form class='save_obs' id ='$i'> <input type='text' class='obs_note' data-id='$cd' name='input_obs' value='$value'> </form>";
                    }
                    $nestedData[] = $value;
                }
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
    
    #[Route('/note_update/{id}', name: 'note_update')]
    public function note_update(Request $request, ExGnotes $exgnotes): Response
    {   
        // dd($request->get('absence'));
        // dd(,$exgnotes->getAbsence());
        if($request->get('input_note')){
            $exgnotes->setNote($request->get('input_note'));
        }elseif($request->get('input_obs')){
            $exgnotes->setObservation($request->get('input_obs'));
        }elseif($request->get('absence')){
            if($request->get('absence') == 'true'){
                $exgnotes->setAbsence(1);
            }else{
                $exgnotes->setAbsence(0);
            }
        }
        $this->em->flush();
        return new Response('Note Bien Changé');
    }
}
