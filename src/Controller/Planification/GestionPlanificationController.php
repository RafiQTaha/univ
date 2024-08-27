<?php

namespace App\Controller\Planification;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Controller\ApiController;
use App\Entity\AcEtablissement;
use App\Controller\DatatablesController;
use App\Entity\AcAnnee;
use App\Entity\ISeance;
use App\Entity\PEnseignant;
use App\Entity\PGrade;
use App\Entity\PlEmptime;
use App\Entity\PlEmptimens;
use App\Entity\Semaine;
use App\Entity\TInscription;
use Mpdf\Mpdf;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

#[Route('/planification/gestions')]
class GestionPlanificationController extends AbstractController
{
    
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }

    #[Route('/', name: 'gestion_planification')]
    public function index(Request $request): Response
    {
        $operations = ApiController::check($this->getUser(), 'gestion_planification', $this->em, $request);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $etbalissements =  $this->em->getRepository(AcEtablissement::class)->findBy(['active'=>1]);
        $professeurs = $this->em->getRepository(PEnseignant::class)->findAll();
        $grades = $this->em->getRepository(PGrade::class)->findAll();
        $semaines = $this->em->getRepository(Semaine::class)->findBy([],['id'=>'DESC']);
        return $this->render('planification/gestion_planification.html.twig', [
            'etablissements' => $etbalissements,
            'operations' => $operations,
            'semaines' => $semaines,
            'grades' => $grades,
            'professeurs' => $professeurs,
        ]);
    }
    
    #[Route('/list', name: 'list_gestion_planification')]
    public function list_gestion_planification(Request $request): Response
    {   
         
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = " where ann.validation_academique = 'non' and emp.active = 1 ";
        
        if (!empty($params->all('columns')[0]['search']['value'])) {
            $filtre .= " and etab.id = '" . $params->all('columns')[0]['search']['value'] . "' ";
        }
        if (!empty($params->all('columns')[1]['search']['value'])) {
            $filtre .= " and frm.id = '" . $params->all('columns')[1]['search']['value'] . "' ";
        }   
        if (!empty($params->all('columns')[2]['search']['value'])) {
            $filtre .= " and prom.id = '" . $params->all('columns')[2]['search']['value'] . "' ";
        }   
        if (!empty($params->all('columns')[3]['search']['value'])) {
            $filtre .= " and sem.id = '" . $params->all('columns')[3]['search']['value'] . "' ";
        }   
        if (!empty($params->all('columns')[4]['search']['value'])) {
            $filtre .= " and mdl.id = '" . $params->all('columns')[4]['search']['value'] . "' ";
        }   
        if (!empty($params->all('columns')[5]['search']['value'])) {
            $filtre .= " and elm.id = '" . $params->all('columns')[5]['search']['value'] . "' ";
        }    
        if (!empty($params->all('columns')[6]['search']['value'])) {
            $filtre .= " and sm.id = '" . $params->all('columns')[6]['search']['value'] . "' ";
        }   
        if (!empty($params->all('columns')[7]['search']['value'])) {
            $filtre .= " and ens.id = '" . $params->all('columns')[7]['search']['value'] . "' ";
        }   
        if (!empty($params->all('columns')[8]['search']['value'])) {
            $filtre .= " and grd.id = '" . $params->all('columns')[8]['search']['value'] . "' ";
        }    
        if (!empty($params->all('columns')[9]['search']['value']) || $params->all('columns')[9]['search']['value'] == 0) {
            $filtre .= " and emp.annuler = '" . $params->all('columns')[9]['search']['value'] . "' ";
        }    
        if (!empty($params->all('columns')[10]['search']['value']) || $params->all('columns')[10]['search']['value'] == 0) {
            $filtre .= " and emp.valider = '" . $params->all('columns')[10]['search']['value'] . "' ";
        }   
        if (!empty($params->all('columns')[11]['search']['value'])) {
            // dd($params->all('columns')[11]['search']['value']);
            $filtre .= " and date(emp.start) = '" . $params->all('columns')[11]['search']['value'] . "' ";
            // $filtre .= " and sm.id = '" . $params->all('columns')[11]['search']['value'] . "' ";
        } 
        $columns = array(
            array( 'db' => 'emp.id','dt' => 0 ),
            array( 'db' => 'emp.code','dt' => 1),
            array( 'db' => 'Concat(date(emp.start)," ", DATE_FORMAT(emp.heur_db, "%H:%i"),"-",DATE_FORMAT(emp.heur_fin, "%H:%i"))','dt' => 2),
            array( 'db' => 'emp.description','dt' => 3),
            array( 'db' => 'etab.abreviation','dt' => 4),
            array( 'db' => 'Upper(frm.abreviation)','dt' => 5),
            array( 'db' => 'lower(ann.designation)','dt' => 6),
            array( 'db' => 'prom.designation','dt' => 7),
            array( 'db' => 'Upper(sem.designation)','dt' => 8),
            array( 'db' => 'Upper(mdl.designation)','dt' => 9),
            array( 'db' => 'lower(elm.designation)','dt' => 10),
            array( 'db' => 'Upper(nat.abreviation)','dt' => 11),
            array( 'db' => 'CONCAT(FLOOR(HOUR(TIMEDIFF(emp.heur_fin, emp.heur_db)) / 10), MOD(HOUR(TIMEDIFF(emp.heur_fin, emp.heur_db)), 10), ":", FLOOR(MINUTE(TIMEDIFF(emp.heur_fin, emp.heur_db)) / 10), MOD(MINUTE(TIMEDIFF(emp.heur_fin, emp.heur_db)), 10))','dt' => 12),
            array( 'db' => 'emp.valider','dt' => 13),
        );
        $sql = "SELECT DISTINCT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        FROM pl_emptime emp
        INNER join pr_programmation prg on prg.id = emp.programmation_id
        INNER join pnature_epreuve nat on nat.id = prg.nature_epreuve_id
        INNER join ac_element elm on elm.id = prg.element_id
        INNER join ac_module mdl on mdl.id = elm.module_id
        INNER join ac_semestre sem on sem.id = mdl.semestre_id
        INNER join ac_promotion prom on prom.id = sem.promotion_id
        inner join ac_formation frm on frm.id = prom.formation_id
        -- INNER JOIN ac_annee ann ON ann.formation_id = frm.id
        INNER JOIN ac_annee ann ON ann.id = prg.annee_id
        INNER join ac_etablissement etab on etab.id = frm.etablissement_id
        INNER join semaine sm on sm.id = emp.semaine_id
        left join pl_emptimens emen on emen.seance_id = emp.id
        left join penseignant ens on ens.id = emen.enseignant_id
        left join pgrade grd on grd.id = ens.grade_id $filtre ";
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
        
        $changed_column = $params->all('order')[0]['column'] > 0 ? $params->all('order')[0]['column'] - 1 : 0;
        $sqlRequest .= " ORDER BY " .DatatablesController::Pluck($columns, 'db')[$changed_column] . "   " . $params->all('order')[0]['dir'] . "  LIMIT " . $params->get('start') . " ," . $params->get('length') . " ";
        // $sqlRequest .= DatatablesController::Order($request, $columns);
        
        $stmt = $this->em->getConnection()->prepare($sqlRequest);
        $resultSet = $stmt->executeQuery();
        $result = $resultSet->fetchAll();
        $data = array();
        
        $i = 1;
        foreach ($result as $key => $row) {
            $nestedData = array();
            $cd = $row['id'];
            $nestedData[] = $i;
            $etat_bg="";
            foreach (array_values($row) as $key => $value) { 
                $seance = $this->em->getRepository(PlEmptime::class)->find($cd);
                $etat_bg = $seance->getVerifier() == 0 ? $etat_bg : "etat_bg_vrf";
                if ($key == 0) {
                    $nestedData[] = "<input type ='checkbox' class='check_seance' data-id ='$cd' >";
                }elseif($key == 13){
                    $nestedData[] = $value == 1 ? 'oui' : 'non';
                    $etat_bg = $value == 1 ? "etat_bg_reg" : $etat_bg ;
                }
                else{
                    $nestedData[] = $value;
                }
                $etat_bg = $seance->getAnnuler() == 0 ? $etat_bg : "etat_bg_nf";
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

    
    
    #[Route('/gestion_delete_planning', name: 'gestion_delete_planning')]
    public function gestion_delete_planning(Request $request): Response
    {   
        $ids = json_decode($request->get('ids_planning'));
        if (count($ids) == 0) {
            return new Response('Merci de choisir Au moins une Seance!',500);
        }
        foreach ($ids as $id) {
            $emptime = $this->em->getRepository(PlEmptime::class)->find($id);
            if ($emptime && $emptime->getValider() == 0) {
                $iseances = $this->em->getRepository(ISeance::class)->findBy(['seance'=>$emptime]);
                foreach($iseances as $iseance){
                    $iseance->setStatut(5);
                }
                $emptime->setDeleted(new \DateTime('now'));
                $emptime->setUserDeleted($this->getUser());
                $emptime->setActive(0);
                $this->em->flush();
            }
        }
        return new Response('Seances Bien Supprimer',200);
    } 
    
    #[Route('/gestion_verifier_planning', name: 'gestion_verifier_planning')]
    public function gestion_verifier_planning(Request $request): Response
    {   
        $ids = json_decode($request->get('ids_planning'));
        if (count($ids) == 0) {
            return new Response('Merci de choisir Au moins une Seance!',500);
        }
        foreach ($ids as $id) {
            $emptime = $this->em->getRepository(PlEmptime::class)->find($id);
            if ($emptime->getActive() == 1 && $emptime->getValider() == 0) {
                
                $emptime->setVerified(new \DateTime('now'));
                $emptime->setUserVerified($this->getUser());
                $emptime->setVerifier(1);
                $this->em->flush();
            }
        }
        return new Response('Seances Bien Verifier',200);
    } 

    #[Route('/gestion_annuler_planning/{emptime}', name: 'gestion_annuler_planning')]
    public function gestion_annuler_planning(Request $request,PlEmptime $emptime): Response
    {   
        // $ids = json_decode($request->get('ids_planning'));
        if ($emptime->getValider() == 1) {
            return new Response('Impossible d\'annuler une séance validée !',500);
        }elseif ($emptime->getAnnuler() == 1) {
            return new Response('Cette séance est déja annuler !',500);
        }elseif ($emptime->getVerifier() == 0) {
            return new Response("merci de verifier la seance avant l'annulation !",500);
        }
        if ($request->get('motif_annuler') == "Autre") {
            if ($request->get('autre_motif') == "") {
                return new Response('Merci d\'entrer Le Motif d\'annulation ',500);
            }
            $motif = $request->get('autre_motif');
        }else {
            $motif = $request->get('motif_annuler');
        }
        $emptime->setAnnuler(1);
        $emptime->setMotifAnnuler($motif);
        $this->em->flush();
        return new Response('Seance Bien Anuller',200);
    } 
    
    #[Route('/valider_observation_planning', name: 'valider_observation_planning')]
    public function valider_observation_planning(Request $request): Response
    {   
        // if ($request->get('seance') == "" || $request->get('enseignant_assurer') =="" ) {
        //     return new Response('Merci de renseignez tout les champs Obligatoire',500);
        // }
        $emptime = $this->em->getRepository(PlEmptime::class)->find($request->get('seance'));
        if (!$emptime) {
            return new Response('IMerci de choisir une seance! ',500);
        }
        if ($emptime->getVerifier() == 0) {
            return new Response('merci de verifier la seance avant la validation !',500);
        }
        if ($emptime->getAnnuler() == 1) {
            return new Response('Impossible de valider une séance annulé! ',500);
        }
        if ($emptime->getValider() == 1) {
            return new Response('Impossible de valider une séance déja validé! ',500);
        }
        $enseignant = $this->em->getRepository(PEnseignant::class)->find($request->get('enseignant_assurer'));
        if ($enseignant) {
            $emptime->setAssurePar($enseignant);
        }
        $emptime->setObservation($request->get('observation'));
        $emptime->setValider(1);
        $this->em->flush();
        return new Response('Seance Bien Valider',200);
    } 

    // #[Route('/gestion_valider_planning/{emptime}', name: 'gestion_valider_planning')]
    // public function gestion_valider_planning(PlEmptime $emptime): Response
    // {   
    //     if ($emptime->getAnnuler() == 1) {
    //         return new Response('Impossible de valider une séance annulé! ',500);
    //     }
    //     // $emptimes = $this->em->getRepository(PlEmptime::class)->findBy(['semaine'=>$emptime->getSemaine()]);
    //     // // dd($emptimes);
    //     // foreach ($emptimes as $emptime) {
    //         // $sql = "select * from semaine 
    //         //     where id >= 100 and id <= 200 and date(date_debut) <= (SELECT date(start) FROM `pl_emptime`
    //         //     where id = ".$emptime->getId().") and date(date_fin) >= (SELECT date(start) FROM `pl_emptime`
    //         //     where id = ".$emptime->getId().")";
    //         // $stmt = $this->em->getConnection()->prepare($sql);
    //         // $resultSet = $stmt->executeQuery();
    //         // $semaine = $resultSet->fetchAll();
    //         // $emptime->setSemaine($this->em->getRepository(semaine::class)->find($semaine[0]['id']));
    //         // $this->em->flush();
    //     // }
    //     // die('done');
    //     if ($emptime) {
    //         $emptime->setValider(1);
    //         $this->em->flush();
    //     }
    //     return new Response('Seance Bien Valider',200);
    // }  

    #[Route('/gestion_devalider_planning/{emptime}', name: 'gestion_devalider_planning')]
    public function gestion_devalider_planning(PlEmptime $emptime): Response
    {   
        if ($emptime->getGenerer() == 1) {
            return new Response('Impossible de valider une séance générer! ',500);
        }
        if ($emptime) {
            $emptime->setValider(0);
            $emptime->setAnnuler(0);
            $emptime->setMotifAnnuler(null);
            $emptime->setGenerer(0);
            $this->em->flush();
        }
        return new Response('Seances Dévalider',200);
    }  
    #[Route('/gestion_degenerer_planning/{emptime}', name: 'gestion_degenerer_planning')]
    public function gestion_degenerer_planning(PlEmptime $emptime): Response
    {   
        $emptime->setGenerer(0);
        $this->em->flush();
        return new Response('Seance Dégénérer',200);
    }  
    
    #[Route('/GetAbsenceByGroupe_gestion/{emptime}', name: 'GetAbsenceByGroupe_gestion')]
    public function GetAbsenceByGroupe_gestion(PlEmptime $emptime)
    {   
        $element = $emptime->getProgrammation()->getElement();
        $promotion = $element->getModule()->getSemestre()->getPromotion();
        $annee = $this->em->getRepository(AcAnnee::class)->findOneBy([
            'formation'=>$promotion->getFormation(),
            'validation_academique'=>'non',
            'cloture_academique'=>'non',
        ]);
        $groupes = [];
        if( $emptime->getGroupe()){
            $groupe = $emptime->getGroupe();
            array_push($groupes,$groupe);
            foreach ($groupe->getGroupes() as $groupe) {
                if (!in_array($groupe, $groupes)){
                    array_push($groupes,$groupe);
                }
                foreach ($groupe->getGroupes() as $groupe) {
                    if (!in_array($groupe, $groupes)){
                        array_push($groupes,$groupe);
                    }
                }
            }
            $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByAnneeAndPromoAndGroupes($promotion,$annee,$groupes);
            // $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByAnneeAndPromoAndGroupe($promotion,$annee,$emptime->getGroupe());
            
        }else{
            $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByAnneeAndPromoNoGroup($promotion,$annee);
        }
        // $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByAnneeAndPromoAndGroupe($promotion,$annee,$emptime->getGroupe());
        $emptimenss = $this->em->getRepository(PlEmptimens::class)->findBy(['seance'=>$emptime,'active'=>1]);
        $html = $this->render("planification/pdfs/absence.html.twig", [
            'inscriptions' => $inscriptions,
            'seance' => $emptime,
            'annee' => $annee,
            'emptimenss' => $emptimenss
        ])->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'margin_left' => '5',
            'margin_right' => '5',
            ]);
        $mpdf->SetTitle('Fiche D\'abcense');
        $mpdf->SetHTMLFooter(
            $this->render("planification/pdfs/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->Output("Fiche D'abcense.pdf", "I");
    }
    
    // #[Route('/getEnseignantByseance/{emptime}', name: 'getEnseignantByseance')]
    // public function getEnseignantByseance(PlEmptime $emptime)
    // {   
    //     $emptimenss = $this->em->getRepository(PlEmptimens::class)->findBy(['seance'=>$emptime]);
    //     $enseignants = [];
    //     foreach ( $emptimenss as $enseignant) {
    //         array_push($enseignants,$enseignant->getenseignant()->getId());
    //     }
    //     return new JsonResponse($enseignants,200);
        
    // }
    #[Route('/Getsequence_gestion/{emptime}', name: 'Getsequence_gestion')]
    public function Getsequence_gestion(PlEmptime $emptime)
    {   
        $promotion = $emptime->getProgrammation()->getElement()->getModule()->getSemestre()->getPromotion();
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($promotion->getFormation());
        $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByAnneeAndPromoAndGroupe($promotion,$annee,$emptime->getGroupe());
        $diff = $emptime->getEnd()->diff($emptime->getStart());
        $hours = $diff->h;
        $hours = $hours + ($diff->days*24);
        $duree = $hours.":".$diff->i;
        // dd();
        $emptimenss = $this->em->getRepository(PlEmptimens::class)->findBy(['seance'=>$emptime,'active'=>1]);
        $html = "";
        $i=1;
        foreach ($emptimenss as $emptimens) {
            $html .= $this->render("planification/pdfs/sequence.html.twig", [
                'seance' => $emptime,
                'annee' => $annee,
                'emptimenss' => $emptimenss,
                'emptimens' => $emptimens,
                'hours' => $duree,
                'effectife' => count($inscriptions),
            ])->getContent();
            $i < count($emptimenss) ? $html .= '<page_break>':"";
            $i++;
        }
        $mpdf = new Mpdf([
            // 'mode' => 'utf-8',
            'margin_top' => '8',
            'margin_left' => '5',
            'margin_right' => '5',
        ]);
        $mpdf->SetTitle('Fiche De sequence');
        $mpdf->SetHTMLFooter(
            $this->render("planification/pdfs/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->Output("Fiche De sequence.pdf", "I");
    }  
    
    #[Route('/extraction_planning', name: 'extraction_planning')]
    public function extraction_planning()
    {   
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $i=2;
        $j=1;
        $currentyear = date('m') > 7 ? $current_year = date('Y').'/'.date('Y')+1 : $current_year = date('Y') - 1 .'/' .date('Y');
        $seances = $this->em->getRepository(PlEmptime::class)->findSeanceByCurrentYears($currentyear);
        // dd($seances);
        if (count($seances) < 1) {
            die('Acune seance trouvée pour cette annee universitaire');
        }
        $sheet->fromArray(
            array_keys($seances[0]),
            null,
            'A1'
        );
        foreach ($seances as $seance) {
            $sheet->fromArray(
                $seance,
                null,
                'A'.$i
            );
            $i++;
            $j++;
        }
        $writer = new Xlsx($spreadsheet);
        $currentyear = date('m') > 7 ? date('Y').'-'.date('Y')+1 : date('Y') - 1 .'-' .date('Y');
        $fileName = 'Extraction Seances '.$current_year.'.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
    
    #[Route('/extraction_Week', name: 'extraction_Week')]
    public function extraction_Week()
    {   
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $i=2;
        $j=1;
        $semaine_id = $this->em->getRepository(Semaine::class)->findSemaine(date('Y-m-d'))->getId();
        $currentyear = date('m') > 7 ? date('Y').'/'.date('Y')+1 : date('Y') - 1 .'/' .date('Y');
        $seances = $this->em->getRepository(PlEmptime::class)->findSeanceByCurrentYearsAndWeek($currentyear,$semaine_id);
        // dd($seances);
        if (count($seances) < 1) {
            die('Acune seance trouvée pour cette semaine');
        }
        $sheet->fromArray(
            array_keys($seances[0]),
            null,
            'A1'
        );
        foreach ($seances as $seance) {
            $sheet->fromArray(
                $seance,
                null,
                'A'.$i
            );
            $i++;
            $j++;
        }
        $writer = new Xlsx($spreadsheet);
        // $currentyear = date('m') > 7 ? $current_year = date('Y').'-'.date('Y')+1 : $current_year = date('Y') - 1 .'-' .date('Y');
        $fileName = 'Extraction Seances semaine '.date('d-m-Y').'.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
    // #[Route('/findSemainePlanning', name: 'findSemainePlanning')]
    // public function findSemainePlanning(Request $request): Response
    // {
    //     // dd($request->query->get("search"));
    //     $semaine = $this->em->getRepository(Semaine::class)->findSemaine($request->query->get("search"));
    //     // $html = '<option value="">Choix semaine</option>';
    //     $list['id'] = $semaine->getId();
    //     $list['nsemaine'] = $semaine->getNsemaine();
    //     $list['debut'] = $semaine->getDateDebut()->format('j/m');
    //     $list['fin'] = $semaine->getDateFin()->format('j/m');
    //     // dd($semaine);
    //     // dd($list);
    //     return new JsonResponse($list);
    // }
    
    #[Route('/fixsemaine/{seance}', name: 'fixsemaine')]
    public function fixsemaine(PlEmptime $seance): Response
    {   
        $emptimes = $this->em->getRepository(PlEmptime::class)->findBy(['semaine'=>$seance->getSemaine()]);
        $count = 0;
        $id_seances = [];
        foreach ($emptimes as $emptime) {
            $sql = "select * from semaine 
                where date(date_debut) <= (SELECT date(start) FROM `pl_emptime`
                where id = ".$emptime->getId().") and date(date_fin) >= (SELECT date(start) FROM `pl_emptime`
                where id = ".$emptime->getId().")";
            $stmt = $this->em->getConnection()->prepare($sql);
            $resultSet = $stmt->executeQuery();
            $semaine = $resultSet->fetchAll();
            if ($semaine[0]['id'] != $emptime->getSemaine()->getId()) {
                array_push($id_seances,$emptime->getId());
                $count++;
            }
            $emptime->setSemaine($this->em->getRepository(semaine::class)->find($semaine[0]['id']));
            $this->em->flush();
        }
        echo $count .' seances modifier!!';
        dd($id_seances);
        
    }  
}
