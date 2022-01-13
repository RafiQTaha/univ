<?php

namespace App\Controller\Preinscription;

use App\Entity\TOperation;
use App\Entity\TPreinscription;
use App\Controller\DatatablesController;
use App\Entity\PStatut;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

#[Route('/preinscription/gestion')]
class GestionPreinscriptionController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/preinscription', name: 'preinscription_index')]
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
            // array( 'db' => 'LOWER(stat.code)','dt' => 10),
            // array( 'db' => 'LOWER(stat.code)','dt' => 11),
            // array( 'db' => 'LOWER(stat.code)','dt' => 12),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
                      
         
        FROM `tpreinscription` pre 
        inner join tetudiant etu on etu.id = pre.etudiant_id
        inner join ac_annee an on an.id = pre.annee_id
        inner join ac_formation form on form.id = an.formation_id
        inner join ac_etablissement etab on etab.id = form.etablissement_id
        left join xtype_bac tbac on tbac.id = etu.type_bac_id 
        left join nature_demande nat on nat.id = etu.nature_demande_id 
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
    #[Route('/', name: 'gestion_preinscription')]
    public function gestion_preinscription(): Response
    {   
        return $this->render('preinscription/gestion_preinscription.html.twig');
    }
    #[Route('/list/gestion_preinscription', name: 'list/gestion_preinscription')]
    public function list_gestion_preinscription(Request $request): Response
    {   
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1=1 AND inscription_valide = '1' ";        
        $columns = array(
            array( 'db' => 'pre.id','dt' => 0 ),
            array( 'db' => 'pre.code','dt' => 1),
            array( 'db' => 'etu.nom','dt' => 2),
            array( 'db' => 'etu.prenom','dt' => 3),
            array( 'db' => 'etab.abreviation','dt' => 4),
            array( 'db' => 'UPPER(form.abreviation)','dt' => 5),
            array( 'db' => 'UPPER(nat.designation)','dt' => 6),
            array( 'db' => 'tbac.designation','dt' => 7),
            array( 'db' => 'etu.moyenne_bac','dt' => 8),
            array( 'db' => 'UPPER(stat.designation)','dt' => 10),
            array( 'db' => 'nbr.nbrIns','dt' => 11),
            array( 'db' => 'DATE_FORMAT(pre.created,"%Y-%m-%d")','dt' => 12),
        );
        // SELECT pre.code , etu.nom , etu.prenom , frm.abreviation as for_abreviation , etab.abreviation as etab_abreviation , nat.designation as categorie, tbac.designation as typdes, etu.moyenne_bac as note , DATE_FORMAT(pre.created,'%d/%m/%Y') as date_creation,stat.code 
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        FROM `tpreinscription` pre 
        inner join tetudiant etu on etu.id = pre.etudiant_id
        inner join ac_annee an on an.id = pre.annee_id
        inner join ac_formation form on form.id = an.formation_id
        inner join ac_etablissement etab on etab.id = form.etablissement_id
        left join xtype_bac tbac on tbac.id = etu.type_bac_id 
        left join nature_demande nat on nat.id = etu.nature_demande_id 
        inner join pstatut stat on stat.id = pre.statut_id
        LEFT JOIN (SELECT etudiant_id,COUNT(code) AS nbrIns FROM tpreinscription WHERE etudiant_id IS NOT NULL GROUP BY etudiant_id ) nbr ON nbr.etudiant_id = pre.etudiant_id 
                $filtre"
        ;
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
            // dump($row);
            $nestedData = array();
            $cd = $row['id'];
            // $nestedData[] = $cd;
            $nestedData[] = "<input type ='checkbox' class='check_preins' id ='$cd' >";
            $k = 0;
            foreach (array_values($row) as $key => $value) {
                if($k == 9) {
                    $sqls="SELECT (CASE WHEN EXISTS (SELECT cab.code FROM toperationcab cab INNER JOIN tregelement reg ON reg.operation_id = cab.id WHERE cab.preinscription_id = ".$row['id'].") THEN 'Reglé' WHEN EXISTS (SELECT cab2.code FROM toperationcab cab2 LEFT JOIN tregelement reg2 ON reg2.operation_id = cab2.id WHERE cab2.preinscription_id = ".$row['id']." ANd reg2.operation_id IS NULL) THEN 'Facturé' ELSE 'N.Facturé' END ) AS facture";
                    $stmts = $this->em->getConnection()->prepare($sqls);
                    $resultSets = $stmts->executeQuery();
                    $etat = $resultSets->fetchAll();
                    if ($etat[0]['facture'] === 'N.Facturé') {
                        $etat_bg = 'etat_bg_nf';
                    }elseif ($etat[0]['facture'] === 'Reglé') {
                        $etat_bg = 'etat_bg_reg';
                    }
                    $nestedData[] = $etat[0]['facture'];
                } 
                $nestedData[] = $value;
                $k++;
            }
            // $nestedData[] ='nbr';
            // $nestedData[] = 'date';
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

    #[Route('/annulation_preinscription', name: 'annulation_preinscription')]
    public function annulation_preinscription(Request $request)
    {   
        $ids = json_decode($request->get('idpreins'));
        foreach ($ids as $id) {
            $preinscription = $this->em->getRepository(TPreinscription::class)->find($id);
            $preinscription->setInscriptionValide(0);
        }
        $this->em->flush();
        return new Response(json_encode(1));
    }
    
    #[Route('/admission_preinscription', name: 'admission_preinscription')]
    public function admissionPreinscription(Request $request): Response
    {
        $ids = json_decode($request->get('idpreins'));
        foreach ($ids as $id) {
            $preinscription = $this->em->getRepository(TPreinscription::class)->find($id);
            $preinscription->setCategorieListe(
                $this->em->getRepository(PStatut::class)->find(1)
            );
            $preinscription->setAdmissionListe(
                $this->em->getRepository(PStatut::class)->find(5)
            );
            $this->em->flush();
        }
        return new JsonResponse('Admission bien enregister', 200);
    }

    #[Route('/frais_preins_modals/{id}', name: 'frais_preins_modals')]
    public function frais_preins_modals(Request $request,TPreinscription $preinscription): Response
    {   
        $etudiant = $preinscription->getEtudiant();
        $natutre = $etudiant->getNatureDemande();
        $annee = $preinscription->getAnnee();
        $formation =$annee->getFormation();
        $etablissement=$formation->getEtablissement();
        $donnee_frais = "<p><span>Etablissement</span> : ".$etablissement->getDesignation()."</p>
                        <p><span>Formation</span> : ".$formation->getDesignation()."</p>
                        <p><span>Categorie</span> : ".$natutre->getDesignation()."</p>
                        <p><span>Nom</span> : ".$etudiant->getNom()."</p>
                        <p><span>Prenom</span> : ".$etudiant->getPrenom()."</p>
                        <p><span>Cin</span> : ".$etudiant->getCin()."</p>
                        <p><span>Cne</span> : ".$etudiant->getCne()."</p>";
        return new JsonResponse($donnee_frais, 200);
    }

    #[Route('/article_frais/{id}', name: 'article_frais')]
    public function article_frais(Request $request,TPreinscription $preinscription): Response
    {   
        
        return new JsonResponse('', 200);
    }

    #[Route('/test/{id}', name: 'test')]
    public function test(Request $request,TPreinscription $preinscription): Response
    {
            // $etudiant = $preinscription->getEtudiant();
            // $natutre = $etudiant->getNatureDemande();
            // $etablissement = $formation->getEtablissement();
            $annee = $preinscription->getAnnee();
            $formation = $annee->getFormation();
            dd($formation);
    }
}
