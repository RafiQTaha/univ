<?php

namespace App\Controller\Preinscription;

use App\Controller\ApiController;
use App\Controller\DatatablesController;
use App\Entity\AcEtablissement;
use App\Entity\NatureDemande;
use App\Entity\POrganisme;
use App\Entity\PriseEnCharge;
use App\Entity\SousNatureDemande;
use App\Entity\TPreinscription;
use DateTime;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/preinscription/social')]
class GestionSocialController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }

    #[Route('/', name: 'gestion_social')]
    public function gestion_social(Request $request): Response
    {   
        $operations = ApiController::check($this->getUser(), 'gestion_social', $this->em, $request);
        // if(!$operations) {
        //     return $this->render("errors/403.html.twig");
        // }
        $etbalissements =  $this->em->getRepository(AcEtablissement::class)->findBy(['active'=>1]);
        // $natures = $this->em->getRepository(NatureDemande::class)->findBy(['active'=>1]);
        // $organismes = $this->em->getRepository(POrganisme::class)->findBy(['active'=>1]);
        return $this->render('preinscription/gestion_social.html.twig',[
            'etablissements' => $etbalissements,
            // 'natures' => $natures,
            // 'organismes' => $organismes,
            'operations' => $operations
        ]);
    }
    #[Route('/list/gestion_preinscription_social', name: 'list_preinscription_social')]
    public function list_preinscription_social(Request $request): Response
    {    
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1=1 AND inscription_valide = 1 and nat.id = 7 ";
        
        if (!empty($params->all('columns')[0]['search']['value'])) {
            $filtre .= " and etab.id = '" . $params->all('columns')[0]['search']['value'] . "' ";
        }

        if (!empty($params->all('columns')[1]['search']['value'])) {
            $filtre .= " and form.id = '" . $params->all('columns')[1]['search']['value'] . "' ";
        }    
        // if (!empty($params->all('columns')[2]['search']['value'])) {
        //     $filtre .= " and nat.id = '" . $params->all('columns')[2]['search']['value'] . "' ";
        // }  

        $columns = array(
            array( 'db' => 'pre.id','dt' => 0 ),
            array( 'db' => 'pre.code','dt' => 1),
            array( 'db' => 'etu.nom','dt' => 2),
            array( 'db' => 'etu.prenom','dt' => 3),
            array( 'db' => 'etu.cin','dt' => 4),
            array( 'db' => 'etab.abreviation','dt' => 5),
            array( 'db' => 'UPPER(form.abreviation)','dt' => 6),
            array( 'db' => 'UPPER(nat.designation)','dt' => 7),
            array( 'db' => 'etu.moyenne_bac','dt' => 8),
        );
        // SELECT pre.code , etu.nom , etu.prenom , frm.abreviation as for_abreviation , etab.abreviation as etab_abreviation , nat.designation as categorie, tbac.designation as typdes, etu.moyenne_bac as note , DATE_FORMAT(pre.created,'%d/%m/%Y') as date_creation,stat.code 
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        FROM `tpreinscription` pre 
        inner join tetudiant etu on etu.id = pre.etudiant_id
        inner join ac_annee an on an.id = pre.annee_id
        inner join ac_formation form on form.id = an.formation_id
        inner join ac_etablissement etab on etab.id = form.etablissement_id
        inner join etudiant_sous_nature_demande snatureetu on snatureetu.etudiant_id = etu.id
        inner join sous_nature_demande snature on snature.id = snatureetu.sous_nature_id
        inner join nature_demande nat on nat.id = snature.nature_demande_id
        $filtre ";
        // $sql .= "";
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


        $data = [];
        
        $i = 1;
        foreach ($result as $key => $row) {
            // dump($row);
            $nestedData = [];
            $cd = $row['id'];
            // $nestedData[] = $cd;
            // $nestedData[] = "<input type ='checkbox' class='check_preins' id ='$cd' >";
            $k = 0;
            $etat_bg="";
            foreach (array_values($row) as $key => $value) {
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

    
    
    #[Route('/list/priseEncharge/{preinscription}', name: 'list_priseEncharge')]
    public function ListpriseEncharge(Request $request,TPreinscription $preinscription): Response
    {   
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = " where pre.active = 1 and nat.id = 7 and pcharge.active = 1 and pre.id = " . $preinscription->getId();        
        $columns = array(
            array( 'db' => 'pre.id','dt' => 0 ),
            array('db' =>  'CONCAT(etu.nom," ",etu.prenom)', 'dt' => 1),
            array( 'db' => 'etab.abreviation','dt' => 2),
            array( 'db' => 'UPPER(form.abreviation)','dt' => 3),
            array( 'db' => 'UPPER(pcharge.code_pec)','dt' => 4),
            array( 'db' => 'UPPER(pcharge.montant)','dt' => 5),
            array( 'db' => 'UPPER(org.abreviation)','dt' => 6),
        );
        // dd($columns);
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
                      
                FROM tpreinscription pre
                inner join tetudiant etu on etu.id = pre.etudiant_id
                inner join ac_annee an on an.id = pre.annee_id
                inner join ac_formation form on form.id = an.formation_id              
                inner join ac_etablissement etab on etab.id = form.etablissement_id
                inner join prise_en_charge pcharge on pcharge.preinscription_id = pre.id
                inner join sous_nature_demande snature on snature.id = pcharge.sous_nature_demande_id
                inner join nature_demande nat on nat.id = snature.nature_demande_id
                inner join porganisme org on org.id = snature.organisme_id


                $filtre"
        ;
        // dd($sql);
        $totalRows .= $sql;
        $sqlRequest .= $sql;
        $stmt = $this->em->getConnection()->prepare($sql);
        $newstmt = $stmt->executeQuery();
        $totalRecords = count($newstmt->fetchAll());
        // dd($sql);
        // $my_columns = DatatablesController::Pluck($columns, 'db');

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
            // $cd = $i;
            // $nestedData[] = $cd;
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

    
    #[Route('/ajouter_pcharge', name: 'ajouter_pcharge')]
    public function ajouter_pcharge(Request $request)
    {   
        if ($request->get('preinscription') == "" || $request->get('nature') == "" || $request->get('cpec') == "" || $request->get('montant') == "" ) {
            return new JsonResponse("Merci de choisir un étudiant et de remplir tous les champs !", 500);
        }
        $preinscription = $this->em->getRepository(TPreinscription::class)->find($request->get('preinscription'));
        $sousNatureDemande = $this->em->getRepository(SousNatureDemande::class)->find($request->get('nature'));
        // dd($sousNatureDemande);
        $priseEnCharge = new PriseEnCharge();
        $priseEnCharge->setPreinscription($preinscription);
        // $priseEnCharge->setOrganisme($sousNatureDemande->getOrganisme());
        $priseEnCharge->setSousNatureDemande($sousNatureDemande);
        $priseEnCharge->setCodePec($request->get('cpec'));
        $priseEnCharge->setMontant($request->get('montant'));
        $priseEnCharge->setUserCreated($this->getUser());
        $priseEnCharge->setCreated(new DateTime("now"));
        $this->em->persist($priseEnCharge);
        $this->em->flush();

        return new JsonResponse('Prise En Charge Bien Enregistré');
    }
}
