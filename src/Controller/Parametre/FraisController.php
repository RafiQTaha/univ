<?php

namespace App\Controller\Parametre;

use App\Controller\ApiController;
use App\Entity\AcPromotion;
use App\Entity\AcEtablissement;
use App\Controller\DatatablesController;
use App\Entity\AcFormation;
use App\Entity\PFrais;
use Doctrine\Persistence\ManagerRegistry;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

#[Route('/parametre/frais')]

class FraisController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'parametre_frais')]
    public function index(Request $request)
    {
        $operations = ApiController::check($this->getUser(), 'parametre_frais', $this->em, $request);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $categories =['Pré-inscription','admission','Inscription','hors inscription',];
        return $this->render('parametre/frais/index.html.twig', [
            'etablissements' => $this->em->getRepository(AcEtablissement::class)->findBy(['active' => 1]),
            'operations' => $operations,
            'categories' => $categories
        ]);
    }
    #[Route('/list', name: 'parametre_frais_list')]
    public function list(Request $request): Response
    {
        
        $params = $request->query;
        // dd($params);
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where frai.active=1 ";   
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
            array( 'db' => 'frai.id','dt' => 0),
            array( 'db' => 'LOWER(etab.designation)','dt' => 1),
            array( 'db' => 'LOWER(form.designation)','dt' => 2),
            array( 'db' => 'frai.designation','dt' => 3),
            array( 'db' => 'frai.categorie','dt' => 4),
            array( 'db' => 'frai.montant','dt' => 5),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        from pfrais frai
        inner join ac_formation form on form.id = frai.formation_id
        inner join ac_etablissement etab on etab.id = form.etablissement_id
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
            $nestedData["DT_RowClass"] = "";
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
    #[Route('/new', name: 'parametre_frais_new')]
    public function new(Request $request): Response
    {
        // dd($request);
        if ($request->get("formation_id") == "" || empty($request->get("categorie")) || empty($request->get('designation'))) {
            return new JsonResponse('Merci de remplir tout les champs!!',500);
        }
        $frais = new PFrais();
        $frais->setDesignation($request->get('designation'));
        $frais->setCategorie($request->get('categorie'));
        $frais->setCreated(new \DateTime("now"));
        $frais->setUserCreated($this->getUser());
        $frais->setMontant($request->get('montant'));
        $frais->setActive(1);
        $frais->setFormation(
           $this->em->getRepository(AcFormation::class)->find($request->get("formation_id"))
        );
        $this->em->persist($frais);
        $this->em->flush();
        $frais->setCode("FRA".str_pad($frais->getId(), 8, '0', STR_PAD_LEFT));
        $this->em->flush();

       return new JsonResponse('Frais bien Ajouter',200);
    }
    #[Route('/details/{frais}', name: 'parametre_frais_details')]
    public function details(PFrais $frais): Response
    {
        $categories =['Pré-inscription','admission','Inscription','hors inscription'];
        $html = $this->render('parametre/frais/pages/modifier.html.twig', [
             'frais' => $frais,
             'categories' => $categories,
        ])->getContent();
        return new JsonResponse($html,200);
    }
    #[Route('/update/{frais}', name: 'parametre_frais_update')]
    public function update(Request $request, PFrais $frais): Response
    {
        $frais->setDesignation($request->get('designation'));
        $frais->setCategorie($request->get('categorie'));
        $frais->setUpdated(new \DateTime("now"));
        $frais->setUserUpdated($this->getUser());
        $frais->setMontant($request->get('montant'));
        $this->em->flush();
 
        return new JsonResponse('Frais bien Modifier',200);
    }

    #[Route('/delete/{frais}', name: 'parametre_frais_delete')]
    public function delete(Request $request, PFrais $frais): Response
    {
        $frais->setActive(0);
        $this->em->flush();
 
        return new JsonResponse('Frais bien Supprimer!',200);
    }

    #[Route('/ExtractionFrais', name: 'extraction_frais')]
    public function extraction_frais() {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'ID ETABLISSEMENT');
        $sheet->setCellValue('B1', 'ETABLISSEMENT');
        $sheet->setCellValue('C1', 'ID FORMATION');
        $sheet->setCellValue('D1', 'FORMATION');
        $sheet->setCellValue('E1', 'ID FRAIS');
        $sheet->setCellValue('F1', 'FRAIS');
        $sheet->setCellValue('G1', 'MONTANT');

        $fraiss = $this->em->getRepository(PFrais::class)->findBy(['active'=>1],['formation'=>'ASC']);
        // dd($fraiss);
        $i=1;
        foreach ($fraiss as $frais) {
            $i++;
            $sheet->setCellValue('A'.$i, $frais->getFormation()->getEtablissement()->getId());
            $sheet->setCellValue('B'.$i, $frais->getFormation()->getEtablissement()->getDesignation());
            $sheet->setCellValue('C'.$i, $frais->getFormation()->getId());
            $sheet->setCellValue('D'.$i, $frais->getFormation()->getDesignation());
            $sheet->setCellValue('E'.$i, $frais->getId());
            $sheet->setCellValue('F'.$i, $frais->getDesignation());
            $sheet->setCellValue('G'.$i, $frais->getMontant());
        }
        $writer = new Xlsx($spreadsheet);
        $fileName = 'Extraction des Frais.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
}
