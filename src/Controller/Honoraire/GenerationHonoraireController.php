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
use DateTime;
use Symfony\Component\HttpFoundation\JsonResponse;


#[Route('/honoraire/generation')]
class GenerationHonoraireController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }

    #[Route('/', name: 'generation_honoraire')]
    public function index(): Response
    {
        $operations = ApiController::check($this->getUser(), 'generation_honoraire', $this->em);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $etbalissements = $this->em->getRepository(AcEtablissement::class)->findAll();
        $professeurs = $this->em->getRepository(PEnseignant::class)->findAll();
        $grades = $this->em->getRepository(PGrade::class)->findAll();
        $semaines = $this->em->getRepository(Semaine::class)->findAll();
        return $this->render('honoraire/generation_honoraire.html.twig', [
            'etablissements' => $etbalissements,
            'operations' => $operations,
            'semaines' => $semaines,
            'grades' => $grades,
            'professeurs' => $professeurs,
        ]);
    }
    
    #[Route('/list', name: 'list_generation_honoraire')]
    public function list_generation_honoraire(Request $request): Response
    {   
         
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = " where ann.validation_academique = 'non' and emp.valider = '1' and emp.active = '1' and emp.generer = '1' and emp.annuler = 0 and ( hon.id  is null or hon.annuler = 1) ";
        
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
        if (!empty($params->get('columns')[9]['search']['value'])) {
            $annuler = $params->get('columns')[9]['search']['value'] == 'non' ? 0 : 1;
            $filtre .= " and emp.annuler = '" . $annuler . "' ";
        }    
        if (!empty($params->get('columns')[10]['search']['value'])) {
            $valider = $params->get('columns')[10]['search']['value'] == 'non' ? 0 : 1;
            $filtre .= " and emp.valider = '" . $valider . "' ";
        } 
        $columns = array(
            array( 'db' => 'emp.id','dt' => 0 ),
            array( 'db' => 'emp.code','dt' => 1),
            array( 'db' => 'Concat(date(emp.start)," ", DATE_FORMAT(emp.heur_db, "%H:%i"),"-",DATE_FORMAT(emp.heur_fin, "%H:%i"))','dt' => 2),
            array( 'db' => 'emp.description','dt' => 3),
            array( 'db' => 'etab.abreviation','dt' => 4),
            array( 'db' => 'Upper(frm.abreviation)','dt' => 5),
            array( 'db' => 'lower(ann.designation)','dt' => 6),
            array( 'db' => 'prm.designation','dt' => 7),
            array( 'db' => 'Upper(sem.designation)','dt' => 8),
            array( 'db' => 'Upper(mdl.designation)','dt' => 9),
            array( 'db' => 'lower(ele.designation)','dt' => 10),
            array( 'db' => 'Upper(nat.abreviation)','dt' => 11),
            array( 'db' => 'Hour(SUBTIME(emp.heur_fin,emp.heur_db))','dt' => 12),
            // array( 'db' => 'emp.valider','dt' => 13),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        FROM pl_emptime emp 
        INNER JOIN semaine sm ON sm.id = emp.semaine_id
        INNER JOIN pr_programmation prog ON prog.id = emp.programmation_id
        INNER JOIN pl_emptimens emp_ens ON emp_ens.seance_id = emp.id
        INNER join pnature_epreuve nat on nat.id = prog.nature_epreuve_id
        INNER JOIN ac_element ele ON ele.id = prog.element_id 
        INNER JOIN ac_module mdl ON mdl.id = ele.module_id
        INNER JOIN ac_semestre sem ON sem.id = mdl.semestre_id
        INNER JOIN ac_promotion prm ON prm.id = sem.promotion_id 
        INNER JOIN ac_formation frm ON frm.id = prm.formation_id
        INNER JOIN ac_etablissement etab ON etab.id = frm.etablissement_id
        INNER JOIN ac_annee ann ON ann.formation_id = frm.id
        left join hhonens hon on hon.seance_id = emp.id
        left join penseignant ens ON ens.id = emp_ens.enseignant_id
        left join pgrade grd ON grd.id = ens.grade_id
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
                }elseif($key == 12){
                    $nestedData[] = $value;
                    $nbr_sc_regroupe = $this->em->getRepository(PlEmptime::class)->getNbr_sc_regroupe($cd);
                    $nbr_sc_regroupe = $nbr_sc_regroupe == 0 ? 1 : $nbr_sc_regroupe;
                    $nestedData[] = "<a value='$cd' data-column = '" . $nbr_sc_regroupe . "' class= 'nbr_sc_regroupe nbr_sc_regroupe_" . $nbr_sc_regroupe . "'>" . $nbr_sc_regroupe . "</a>";
                }
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

    

    #[Route('/generation_honoraire_generer', name: 'generation_honoraire_generer')]
    public function generation_honoraire_generer(Request $request): Response
    {
        $ids = json_decode($request->get('ids_seances'));
        if($ids == NULL){
            return new JsonResponse('Merci de Choisir au moins une ligne',500);
        }
        foreach ($ids as $id) {
            $EnsMontByIdSceances = $this->em->getRepository(PlEmptime::class)->GetEnsMontByIdSceance($id);
            // dd($EnsMontByIdSceances);
            foreach ($EnsMontByIdSceances as $EnsMontByIdSceance) {
                $honens = new HHonens();
                $honens->setEnseignant($this->em->getRepository(PEnseignant::class)->Find($EnsMontByIdSceance['enseignant']));
                $honens->setSeance($this->em->getRepository(PLemptime::class)->Find($EnsMontByIdSceance['seance']));
                $honens->setUserCreated($this->getUser());
                $honens->setCreated(new \DateTime('now'));
                $honens->setNbrHeur((int) $EnsMontByIdSceance['nbr_heure']);
                if ($EnsMontByIdSceance['nbr_sc_regroupe'] != 0) {
                    $honens->setNbrScRegroupe($EnsMontByIdSceance['nbr_sc_regroupe']);
                }
                $montant = $EnsMontByIdSceance['Mt_tot'];
                $exist_enseignant = $this->em->getRepository(PEnseignantExcept::class)->FindOneBy(['enseignant'=>$EnsMontByIdSceance['enseignant'],'formation'=>$EnsMontByIdSceance['formation']]);
                if($exist_enseignant != Null){
                    $honens->setExept(1);
                    $montant = 0;
                }
                $honens->setMontant($montant);
                $this->em->persist($honens);
                $this->em->flush();
                $honens->setCode('HON'.str_pad($honens->getId(), 8, '0', STR_PAD_LEFT));
                $this->em->flush();
                // dd($montant);
            }
        }
        return new JsonResponse('Seances Bien Generer',200);
    }

}