<?php

namespace App\Controller\Etudiant;

use App\Controller\ApiController;
use DateTime;
use App\Entity\PStatut;
use App\Entity\XTypeBac;
use App\Entity\TEtudiant;
use App\Entity\TPreinscription;
use App\Entity\XAcademie;
use App\Entity\NatureDemande;
use App\Entity\AcAnnee;
use App\Controller\DatatablesController;
use App\Entity\AcFormation;
use App\Entity\PMatiere;
use App\Entity\POrganisme;
use App\Entity\PSituation;
use App\Entity\XFiliere;
use App\Entity\XLangue;
use App\Entity\TOperationcab;
use App\Entity\TPreinscriptionReleveNote;
use Doctrine\Persistence\ManagerRegistry;
use phpDocumentor\Reflection\Types\Null_;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx as Reader;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

#[Route('/etudiant/appel')]
class CentreDappelController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'centre_appel_index')]
    public function index(Request $request): Response
    {
        // dd('test');
        //check if user has access to this page
        $operations = ApiController::check($this->getUser(), 'centre_appel_index', $this->em, $request);
        // dd($operations);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        return $this->render('etudiant/centre_appel/index.html.twig', [
            'operations' => $operations,
        ]);
    }
    
    #[Route('/list', name: 'appel_list')]
    public function list(Request $request): Response
    {
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1 = 1 ";
        // if (!empty($params->all('columns')[0]['search']['value'])) {
        //     $filtre .= " and grp.id = '" . $params->all('columns')[0]['search']['value'] . "' ";
        // }
        
        $columns = array(
            array( 'db' => 'etu.id','dt' => 0 ),
            array( 'db' => 'etu.nom','dt' => 1),
            array( 'db' => 'etu.prenom','dt' => 2),
            array( 'db' => 'etu.tel1','dt' => 3),
            array( 'db' => 'etu.tel_pere','dt' => 4),
            array( 'db' => 'etu.tel_mere','dt' => 5),
            array( 'db' => 'etu.annee_bac','dt' => 6),
            array( 'db' => 'etu.moyenne_bac','dt' => 7),
            array( 'db' => 'LOWER(xtb.designation)','dt' => 8),
            array( 'db' => 'LOWER(fil.designation)','dt' => 9),
            array( 'db' => 'etu.tele_liste','dt' => 10),
            array( 'db' => 'etu.obs','dt' => 11),
            array( 'db' => 'etu.rdv1','dt' => 12),
            array( 'db' => 'etu.rdv2','dt' => 13)
        );
        // dd($columns);
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
                FROM tetudiant etu
                left join pstatut st on st.id = etu.statut_id
                left join nature_demande nd on nd.id = etu.nature_demande_id
                left join xtype_bac xtb on xtb.id = etu.type_bac_id 
                left join xfiliere fil on fil.id = etu.filiere_id  
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
        $sqlRequest .= DatatablesController::Order($request, $columns);
        $stmt = $this->em->getConnection()->prepare($sqlRequest);
        $resultSet = $stmt->executeQuery();
        $result = $resultSet->fetchAll();
        $data = array();
        $k = 1;
        foreach ($result as $key => $row) {
            $nestedData = array();
            $cd = $row['id'];
            $nestedData[] = $k++;
            $i = 0;
            foreach (array_values($row) as $key => $value) {
                if ($key > 0 ) {
                    $nestedData[] = $value;
                }
                $i++;
            }
            $nestedData["DT_RowId"] = $cd;
            $nestedData["DT_RowClass"] = $cd;
            $data[] = $nestedData;
        }
        $json_data = array(
            "draw" => intval($params->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data   
        );
        // die;
        return new Response(json_encode($json_data));
    }

    #[Route('/getAppelRdv_appel/{etudiant}', name: 'getAppelRdv_appel')]
    public function getAppelRdv_appel(Request $request, TEtudiant $etudiant) 
    {
        $rdv1 = $etudiant->getRdv1() == Null ? "" : $etudiant->getRdv1()->format('Y-m-j');
        $rdv2 = $etudiant->getRdv2() == Null ? "" : $etudiant->getRdv2()->format('Y-m-j');
        $appelrdv = [ 
                'rdv1' => $rdv1,
                'rdv2' => $rdv2,
                // 'statut_appel' => $etudiant->getStatut(),
                // 'obs' => $$etudiant->getObs(),
        ];
        return new JsonResponse($appelrdv);
    }

    #[Route('/rdvappel/{etudiant}', name: 'rdvappel')]
    public function rdvappel(Request $request, TEtudiant $etudiant) 
    {
        // // dd($request);
        // if (empty($request->get('dateappelle')) || empty($request->get('rdv1')) ||
        //  empty($request->get('rdv2')) || empty($request->get('statut_appel')) || empty($request->get('Observation'))) {
        //     return new JsonResponse('Merci de choisir l')
        // }
        $etudiant->setTeleListe($request->get('dateappelle'));
        $rdv1 = $request->get('rdv1') == "" ? NULL : new \DateTime($request->get('rdv1'));
        $rdv2 = $request->get('rdv1') == "" ? NULL : new \DateTime($request->get('rdv1'));
        $etudiant->setRdv1($rdv1);
        $etudiant->setRdv2($rdv2);
        $etudiant->setTeleListe($request->get('statut_appel'));
        $etudiant->setObs($request->get('Observation'));
        $this->em->flush();
        return new JsonResponse("Bien enregistre");
    }
    
}
