<?php

namespace App\Controller\Parametre;

use App\Controller\ApiController;
use App\Controller\DatatablesController;
use App\Entity\PSalles;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use Doctrine\Persistence\ManagerRegistry;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/parametre/salles')]

class SallesController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'parametre_salles')]
    public function index(Request $request)
    {
        $operations = ApiController::check($this->getUser(), 'parametre_salles', $this->em, $request);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        return $this->render('parametre/salles/index.html.twig', [
            'operations' => $operations
        ]);
    }
    #[Route('/list', name: 'parametre_salles_list')]
    public function list(Request $request): Response
    {
        
        $params = $request->query;
        // dd($params);
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1 = 1 and sal.active = 1";   
        // dd($params->all('columns')[0]);
        if (!empty($params->all('columns')[0]['search']['value'])) {
            // dd("in");
            $filtre .= " and etab.id = '" . $params->all('columns')[0]['search']['value'] . "' ";
        }
        if (!empty($params->all('columns')[1]['search']['value'])) {
            // dd("in");
            $filtre .= " and form.id = '" . $params->all('columns')[1]['search']['value'] . "' ";
        }
        $columns = array(
            array( 'db' => 'sal.id','dt' => 0),
            array( 'db' => 'upper(sal.code)','dt' => 1),
            array( 'db' => 'upper(sal.designation)','dt' => 2),
            array( 'db' => 'upper(sal.abreviation)','dt' => 3),
            array( 'db' => 'sal.etat_pc','dt' => 4),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        from psalles sal
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
                if ($key == 4 ) {
                    if ($value == 1) {
                        $value = "ACTIVE";
                    }else {
                        $value = "INACTIVE";
                    }
                }
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
    #[Route('/new', name: 'parametre_salle_new')]
    public function new(Request $request): Response
    {
    //    dd($request);
       if (empty($request->get('designation')) || empty($request->get('abreviation'))) {
            return new JsonResponse('Merci de remplir tout les champs!!',500);
       }
       $salle = new PSalles();
       $salle->setDesignation($request->get('designation'));
       $salle->setAbreviation($request->get('abreviation'));
       $salle->setEtatPC(0);
       $salle->setAttente(5000);
       $this->em->persist($salle);
       $this->em->flush();
       $salle->setCode("SAL".str_pad($salle->getId(), 6, '0', STR_PAD_LEFT));
       $this->em->flush();

       return new JsonResponse('Salle Bien Ajouté',200);
    }

    #[Route('/details/{salle}', name: 'parametre_salle_details')]
    public function details(PSalles $salle): Response
    {
        $html = $this->render('parametre/salles/pages/modifier.html.twig', [
            'salle' => $salle
       ])->getContent();
       return new JsonResponse($html,200);
    }
    #[Route('/update/{salle}', name: 'parametre_salle_update')]
    public function update(Request $request, PSalles $salle): Response
    {
        if (empty($request->get('designation')) || empty($request->get('abreviation'))) {
             return new JsonResponse('Merci de remplir tout les champs!!',500);
        }
        $salle->setDesignation($request->get('designation'));
        $salle->setAbreviation($request->get('abreviation'));
        $this->em->flush();
 
        return new JsonResponse('Salle bien modifier!',200);
    }

    #[Route('/delete/{salle}', name: 'parametre_salle_delete')]
    public function delete(Request $request, PSalles $salle): Response
    {
        $salle->setActive(0);
        $this->em->flush();
 
        return new JsonResponse('Salle bien Supprimer');
    }

    #[Route('/extraction', name: 'parametre_salle_extraction')]
    public function extraction() {
        
        $salles = $this->em->getRepository(PSalles::class)->findBy(['active'=>1]);
        // dd($salle);

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'ID');
        $sheet->setCellValue('B1', 'CODE');
        $sheet->setCellValue('C1', 'DESIGNATION');
        $sheet->setCellValue('D1', 'ABREVIATION');
        $i=2;
        $j=1;

        
        foreach ($salles as $salle){

            $sheet->setCellValue('A'.$i, $salle->getId());
            $sheet->setCellValue('B'.$i, $salle->getCode());
            $sheet->setCellValue('C'.$i, $salle->getDesignation());
            $sheet->setCellValue('D'.$i, $salle->getAbreviation());
            $i++;
            $j++;
        }
        

        $writer = new Xlsx($spreadsheet);
        $fileName = 'Extraction_Salles.xlsx';
        // dd($fileName);
        $writer->save($fileName);
        // return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
        return new JsonResponse(['file' => $fileName]);
    }
}

