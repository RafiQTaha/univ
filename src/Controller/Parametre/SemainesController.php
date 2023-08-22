<?php

namespace App\Controller\Parametre;

use App\Controller\ApiController;
use App\Controller\DatatablesController;
use App\Entity\PSalles;
use App\Entity\Semaine;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use Doctrine\Persistence\ManagerRegistry;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/parametre/semaines')]

class SemainesController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'parametre_semaines')]
    public function index(Request $request)
    {
        $operations = ApiController::check($this->getUser(), 'parametre_semaines', $this->em, $request);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        return $this->render('parametre/semaines/index.html.twig', [
            'operations' => $operations
        ]);
    }
    #[Route('/list', name: 'parametre_semaines_list')]
    public function list(Request $request): Response
    {
        
        $params = $request->query;
        // dd($params);
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1 = 1 ";   

        // if (!empty($params->all('columns')[0]['search']['value'])) {
        //     $filtre .= " and etab.id = '" . $params->all('columns')[0]['search']['value'] . "' ";
        // }

        $columns = array(
            array( 'db' => 'sem.id','dt' => 0),
            array( 'db' => 'sem.nsemaine','dt' => 1),
            array( 'db' => 'date(sem.date_debut)','dt' => 2),
            array( 'db' => 'date(sem.date_fin)','dt' => 3),
            array( 'db' => 'sem.annee_s','dt' => 3),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        from semaine sem
         $filtre ";
        // dd($sql);
        $totalRows .= $sql;
        $sqlRequest .= $sql;
        $stmt = $this->em->getConnection()->prepare($sql);
        $newstmt = $stmt->executeQuery();
        $totalRecords = count($newstmt->fetchAll());
        // dd($sql);
            
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
            // dd($row);
            
            foreach (array_values($row) as $key => $value) {
               
                $nestedData[] = $value;
                
            }
            $nestedData["DT_RowId"] = $cd;
            // $nestedData["DT_RowClass"] = $cd;
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
    #[Route('/duplication', name: 'parametre_semaine_duplication')]
    public function duplication(): Response
    {
        $lastSemaineExist = $this->em->getRepository(Semaine::class)->findOneBy([],['id' => 'DESC'],1);
        $nsemaine = $lastSemaineExist->getNsemaine();
        $dateDebut = $lastSemaineExist->getDateDebut();
        $dateFin = $lastSemaineExist->getDateFin();
        $anneeS = $lastSemaineExist->getAnneeS();
        $SemaineLastYear = $this->em->getRepository(Semaine::class)->findBy(['anneeS'=>$anneeS]);
        if (count($SemaineLastYear) >= 52) {
            $anneeS = substr($anneeS,-4)."/".substr($anneeS,-4) +1;
        }
        $nsemaine++;
        while ($nsemaine != 36) {
            $nsemaine = $nsemaine == 53 ? 1 : $nsemaine;
            $dDebut = $dateDebut->modify('+7 days');
            $dFin = $dateFin->modify('+7 days');
            $semaine = new Semaine();
            $semaine->setNsemaine($nsemaine);
            $semaine->setDateDebut($dDebut);
            $semaine->SetDateFin($dFin);
            $semaine->SetAnneeS($anneeS);
            $this->em->persist($semaine);
            $this->em->flush();
            $nsemaine++;
        }

       return new JsonResponse('Les semaines de l\'annee '.$anneeS.' sont bien crée',200);
    }

    #[Route('/extractionSemaine', name: 'parametre_semaine_extraction')]
    public function extractionSemaine() {
        
        $semaines = $this->em->getRepository(Semaine::class)->findAll();
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'ID');
        $sheet->setCellValue('B1', 'NUM SEMAINE');
        $sheet->setCellValue('C1', 'DATE DEBUT');
        $sheet->setCellValue('D1', 'DATE FIN');
        $sheet->setCellValue('E1', 'ANNEE SCOLAIRE');
        $i=2;
        $j=1;
        foreach ($semaines as $semaine){
            $sheet->setCellValue('A'.$i, $semaine->getId());
            $sheet->setCellValue('B'.$i, $semaine->getNsemaine());
            $sheet->setCellValue('C'.$i, $semaine->getDateDebut());
            $sheet->setCellValue('D'.$i, $semaine->getDateFin());
            $sheet->setCellValue('E'.$i, $semaine->getAnneeS());
            $i++;
            $j++;
        }

        $writer = new Xlsx($spreadsheet);
        $fileName = 'Extraction Des Semaines.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
        // return new JsonResponse(['file' => $fileName]);
    }
}

