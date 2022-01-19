<?php

namespace App\Controller\Inscription;

use App\Controller\ApiController;
use App\Entity\AcEtablissement;
use App\Controller\DatatablesController;
use App\Entity\PStatut;
use App\Entity\TInscription;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

#[Route('/inscription/gestion')]
class GestionInscriptionController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'gestion_inscription')]
    public function index(): Response
    {
        return $this->render('inscription/gestion_inscription.html.twig', [
            'etablissements' => $this->em->getRepository(AcEtablissement::class)->findAll()
        ]);
    }
    
    #[Route('/list', name: 'gestion_inscription_list')]
    public function gestionInscriptionList(Request $request): Response
    {
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1 = 1";   
        // dd($params->get('columns')[0]);
        
        // if (!empty($params->get('columns')[0]['search']['value'])) {
            //     // dd("in");
            //     $filtre .= " and etab.id = '" . $params->get('columns')[0]['search']['value'] . "' ";
            // }
            
            // if (!empty($params->get('columns')[1]['search']['value'])) {
                //     $filtre .= " and form.id = '" . $params->get('columns')[1]['search']['value'] . "' ";
                // }    
        // if (!empty($params->get('columns')[2]['search']['value'])) {
            //     $filtre .= " and an.id = '" . $params->get('columns')[2]['search']['value'] . "' ";
            // }    
            $columns = array(
                array( 'db' => 'ins.code','dt' => 0),
                array( 'db' => 'etu.nom','dt' => 1),
                array( 'db' => 'etu.prenom','dt' => 2),
                array( 'db' => 'etu.cne','dt' => 3),
                array( 'db' => 'etu.cin','dt' => 4),
                array( 'db' => 'etab.abreviation','dt' => 5),
                array( 'db' => 'UPPER(form.abreviation)','dt' => 6),
                array( 'db' => 'UPPER(prom.designation)','dt' => 7),
                array( 'db' => 'LOWER(an.designation)','dt' => 8),
                array( 'db' => 'st.designation','dt' => 9),
                array( 'db' => 'ins.id','dt' => 10)
                
            );
            $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
            
            FROM tinscription ins
            inner join tadmission ad on ad.id = ins.admission_id
            inner join tpreinscription pre on pre.id = ad.preinscription_id
            inner join tetudiant etu on etu.id = pre.etudiant_id
            inner join ac_annee an on an.id = pre.annee_id
            inner join ac_formation form on form.id = an.formation_id              
            inner join ac_etablissement etab on etab.id = form.etablissement_id 
            INNER JOIN pstatut st ON st.id = ins.statut_id
            inner join ac_promotion prom on prom.id = ins.promotion_id
            
            $filtre "
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
            $nestedData[] = "<input type ='checkbox' class='check_admissible' id ='$cd' >";
            $nestedData[] = $cd;
            // dd($row);
            
            foreach (array_values($row) as $key => $value) {
                if($key < 10) {
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
    #[Route('/getstatut/{inscription}', name: 'gestion_statut')]
    public function inscriptionStatut(TInscription $inscription): Response
    {
        $status = $this->em->getRepository(PStatut::class)->findBy(['table0' => 'Inscription']);
        $statutsHtml = ApiController::dropDownSelected($status, "statut", $inscription->getStatut());

        return new JsonResponse($statutsHtml);
    }
    #[Route('/updatestatut/{inscription}', name: 'gestion_statut_update')]
    public function inscriptionStatutUpdate(Request $request, TInscription $inscription): Response
    {
        $inscription->setStatut(
            $this->em->getRepository(PStatut::class)->find($request->get("statut_inscription"))
        );
        $this->em->flush();
        return new JsonResponse("Bien Enregistre", 200);
    }
}
