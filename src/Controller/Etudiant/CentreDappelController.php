<?php

namespace App\Controller\Etudiant;

use App\Controller\ApiController;
use DateTime;
use App\Entity\PStatut;
use App\Entity\XTypeBac;
use App\Entity\TEtudiant;
use App\Entity\AcEtablissement;
use App\Entity\AcFormation;
use App\Entity\TPreinscription;
use App\Entity\XAcademie;
use App\Entity\NatureDemande;
use App\Entity\AcAnnee;
use App\Controller\DatatablesController;
use App\Entity\XFiliere;
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
        $etablissements =  $this->em->getRepository(AcEtablissement::class)->findBy(['active'=>1]);
        $operations = ApiController::check($this->getUser(), 'centre_appel_index', $this->em, $request);
        // dd($operations);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $filieres = $this->em->getRepository(XFiliere::class)->findBy(['active'=>1]);
        $typebacs = $this->em->getRepository(XTypeBac::class)->findBy(['active'=>1]);
        return $this->render('etudiant/centre_appel/index.html.twig', [
            'operations' => $operations,
            'filieres' => $filieres,
            'typebacs' => $typebacs,
            'etablissements' => $etablissements
        ]);
    }
    
    #[Route('/list', name: 'appel_list')]
    public function list(Request $request): Response
    {
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1=1 ";
        if (!empty($params->all('columns')[0]['search']['value'])) {
            $filtre .= " and etu.statut_condidat = '" . $params->all('columns')[0]['search']['value'] . "' ";
        }else{
            $filtre .= " and etu.statut_condidat != 'PRE-INSCRIT' or etu.statut_condidat is null ";
            
        }
        
        $columns = array(
            array( 'db' => 'etu.id','dt' => 0 ),
            array( 'db' => 'etu.nom','dt' => 1),
            array( 'db' => 'etu.prenom','dt' => 2),
            array( 'db' => 'etu.cin','dt' => 3),
            array( 'db' => 'REPLACE(etu.tel1, " ", "")','dt' => 4),
            array( 'db' => 'REPLACE(etu.tel_mere, " ", "")','dt' => 5),
            // array( 'db' => 'etu.tel_mere','dt' => 5),
            array( 'db' => 'etu.statut_appel','dt' => 6),
            array( 'db' => 'etu.statut_condidat','dt' => 7),
            array( 'db' => 'etu.statut_rdv','dt' => 8),
            array( 'db' => 'etu.rdv1','dt' => 9),
            array( 'db' => 'etu.rdv','dt' => 10),
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
            $nestedData["DT_RowClass"] = "";
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
        $rdv1 = $etudiant->getRdv1() == Null ? "" : $etudiant->getRdv1()->format('Y-m-d');
        // $rdv2 = $etudiant->getRdv2() == Null ? "" : $etudiant->getRdv2()->format('Y-m-j');
        // dd($rdv1);
        $appelrdv = [ 
                // 'dateappelle' => $etudiant->getStatutAppel(),
                'statut_appel' => $etudiant->getStatutAppel(),
                'statut_condidat' => $etudiant->getStatutCondidat(),
                'statut_rdv' => $etudiant->getStatutRdv(),
                'date' => $rdv1,
                'rdv' => $etudiant->getRdv(),
                'noteBac' => $etudiant->getMoyenneBac(),
                // 'rdv1' => $rdv1,
                // 'rdv2' => $rdv2,
                // 'obs' => $$etudiant->getObs(),
        ];
        return new JsonResponse($appelrdv);
    }

    #[Route('/rdvappel/{etudiant}', name: 'rdvappel')]
    public function rdvappel(Request $request, TEtudiant $etudiant) 
    {
        // dd($request);
        if ($etudiant->getStatutCondidat() == "PRE-INSCRIT") {
            return new JsonResponse("Cet etudiant est déja pre-inscrit!",500);
        }
        $dateappelle = $request->get('dateappelle') == "" ? NULL : new \DateTime($request->get('dateappelle'));
        $etudiant->setStatutAppel($request->get('statut_appel'));
        $etudiant->setStatutCondidat($request->get('statut_condidat'));
        $etudiant->setStatutRdv($request->get('statut_rdv'));
        $etudiant->setRdv1($dateappelle);
        $etudiant->setRdv($request->get('rdv'));
        $etudiant->setMoyenneBac($request->get('noteBac'));
        if ($request->get('formation') != "") {
            $etudiant->setFormationSouhaitee($this->em->getRepository(AcFormation::class)->find($request->get('formation')));
        }
        // $etudiant->setChoix($request->get('choix'));
        $etudiant->setOperateur($this->getUser());
        $this->em->flush();
        return new JsonResponse("Bien enregistre");
    }
    
    
    #[Route('/extraction_appels', name: 'extraction_appels')]
    public function extraction_appels()
    {   
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'ORD');
        $sheet->setCellValue('B1', 'NOM');
        $sheet->setCellValue('C1', 'PRENOM');
        $sheet->setCellValue('D1', 'DATE NAISSANCE');
        $sheet->setCellValue('E1', 'CIN');
        $sheet->setCellValue('F1', 'VILLE RESIDENCE');
        $sheet->setCellValue('G1', 'TEL CANDIDAT');
        $sheet->setCellValue('H1', 'TEL PERE');
        $sheet->setCellValue('I1', 'TEL MERE');
        $sheet->setCellValue('J1', 'MAIL CANDIDAT');
        $sheet->setCellValue('K1', 'TYPE DE BAC');
        $sheet->setCellValue('L1', 'FILLIERE BAC');
        $sheet->setCellValue('M1', 'ANNEE BAC');
        $sheet->setCellValue('N1', 'MOYENNE GENERALE');
        $sheet->setCellValue('O1', 'MOYENNE NATIONALE');
        $sheet->setCellValue('P1', 'MOYENNE REGIONALE');
        $sheet->setCellValue('Q1', 'FORMATION SOUHAITEE');
        $sheet->setCellValue('R1', 'NATURE DEMANDE');
        $sheet->setCellValue('S1', 'STATUT APPEL');
        $sheet->setCellValue('T1', 'STATUT CANDIDAT');
        $sheet->setCellValue('U1', 'STATUT RDV');
        $sheet->setCellValue('V1', 'DATE RDV / RELANCE');
        $sheet->setCellValue('W1', 'RDV');
        $sheet->setCellValue('X1', 'OPERATEUR');
        $i=2;
        $j=1;
        // $current_year = date('m') >= 5 ? $current_year = date('Y').'/'.date('Y')+1 : $current_year = date('Y') - 1 .'/' .date('Y');
        $current_year = date('Y');
        // $current_year = "2022/2023";
        $etudiants = $this->em->getRepository(TEtudiant::class)->getEtudiantByCurrentYear($current_year);
        // dd($etudiants);
        foreach ($etudiants as $etudiant) {
            $sheet->setCellValue('A'.$i, $j);
            $sheet->setCellValue('B'.$i, $etudiant->getNom());
            $sheet->setCellValue('C'.$i, $etudiant->getPrenom());
            $sheet->setCellValue('D'.$i, $etudiant->getDateNaissance());
            $sheet->setCellValue('E'.$i, $etudiant->getCin());
            $sheet->setCellValue('F'.$i, $etudiant->getAdresse());
            $sheet->setCellValue('G'.$i, $etudiant->getTel1());
            $sheet->setCellValue('H'.$i, $etudiant->getTelpere());
            $sheet->setCellValue('I'.$i, $etudiant->getTelMere());
            $sheet->setCellValue('J'.$i, $etudiant->getMail1());
            if ($etudiant->getTypeBac() != null) {
                $sheet->setCellValue('K'.$i, $etudiant->getTypeBac()->getDesignation());
            }
            if ($etudiant->getFiliere() != null) {
                $sheet->setCellValue('L'.$i, $etudiant->getFiliere()->getDesignation());
            }
            $sheet->setCellValue('M'.$i, $etudiant->getAnneeBac());
            $sheet->setCellValue('N'.$i, $etudiant->getMoyenneBac());
            $sheet->setCellValue('O'.$i, $etudiant->getMoyenNational());
            $sheet->setCellValue('P'.$i, $etudiant->getMoyenRegional());
            if ($etudiant->getFormationSouhaitee()) {
                $sheet->setCellValue('Q'.$i, $etudiant->getFormationSouhaitee()->getAbreviation());
            }
            if ($etudiant->getNatureDemande()) {
                $sheet->setCellValue('R'.$i, $etudiant->getNatureDemande()->getDesignation());
            }
            
            $sheet->setCellValue('S'.$i, $etudiant->getStatutAppel());
            $sheet->setCellValue('T'.$i, $etudiant->getStatutCondidat());
            $sheet->setCellValue('U'.$i, $etudiant->getStatutRdv());
            $sheet->setCellValue('V'.$i, $etudiant->getRdv1());
            $sheet->setCellValue('W'.$i, $etudiant->getRdv());
            if ($etudiant->getOperateur() != NULL) {
                $sheet->setCellValue('X'.$i, $etudiant->getOperateur()->getUserName());
            }
            $i++;
            $j++;
        }
        $writer = new Xlsx($spreadsheet);
        $fileName = 'Extraction Etudiants Cree en '.$current_year.'.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
    
}
