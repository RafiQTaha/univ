<?php

namespace App\Controller\Concours;

use DateTime;
use Mpdf\Mpdf;
use App\Controller\ApiController;
use App\Controller\DatatablesController;
use App\Entity\ConcoursEtudiant;
use App\Entity\ConcoursEtudiantControle;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx as reader;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

#[Route('/concours/controle')]
class ControleController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
        
    }
    #[Route('/', name: 'concours_controle')]
    public function index(Request $request): Response
    {
        $operations = ApiController::check($this->getUser(), 'concours_controle', $this->em,$request);

        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        return $this->render('concours/controle.html.twig', [
            'operations' => $operations,
        ]);
    }
    
    #[Route('/list', name: 'concours_list_controle')]
    public function controle(Request $request): Response
    {   
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        if ($this->getUser()->getRoles()[0] == 'ROLE_ADMIN') {
            $filtre = " where 1 = 1 ";
        }else{
            $filtre = " where log.user_created_id = ".$this->getUser()->getId();
        }
        $columns = array(
            array( 'db' => 'ce.id','dt' => 0 ),
            array( 'db' => 'ce.nom','dt' => 1),
            array( 'db' => 'ce.prenom','dt' => 2),
            array( 'db' => 'ce.cin','dt' => 3),
            array( 'db' => 'ce.anonymat','dt' => 4),
            array( 'db' => 'ce.groupement','dt' => 5),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        FROM concours_etudiant ce  $filtre ";
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
        // dd($sqlRequest);
        $stmt = $this->em->getConnection()->prepare($sqlRequest);
        $resultSet = $stmt->executeQuery();
        $result = $resultSet->fetchAll();
        $data = array();
        $i = $totalRecords;
        foreach ($result as $key => $row) {
            // dump($row['id']);
            $nestedData = array();
            $cd = $row['id'];
            $conetud = $row['id'];
            $nestedData[] = $i;
            foreach (array_values($row) as $key => $value) { 
                $nestedData[] = $value;
                if($key == 5){
                    $nestedData[] = " <a role = '".$conetud."' class='get_cd btn btn-app' style='min-width: 22px;height: 30px;background: transparent;border: none' > <i style='font-size: 20px;' class='fa fa-barcode'></i></a>";
                }
            }
            $nestedData["DT_RowId"] = $cd;
            // $nestedData["DT_RowClass"] = $etat_bg;
            $data[] = $nestedData;
            $i--;
        }
        $json_data = array(
            "draw" => intval($params->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data   
        );
        return new Response(json_encode($json_data));
    }

    
    #[Route('/validation', name: 'concours_validation_controle')]
    public function validation_controle(Request $request)
    {
        $etudiant = $this->em->getRepository(ConcoursEtudiant::class)->find($request->get('etudiant'));
        if (!$etudiant) {
            return new Response('Etudiant Introuvable!',500);
        }
        $concoursEtudiantControle = $this->em->getRepository(ConcoursEtudiantControle::class)->findOneBy(['etudiant'=>$etudiant]);
        if($concoursEtudiantControle == null){
            $concoursEtudiantControle = new ConcoursEtudiantControle();
            $concoursEtudiantControle->setEtudiant($etudiant);
            $concoursEtudiantControle->setControle(1);
            $concoursEtudiantControle->setUserCreated($this->getUser());
            $concoursEtudiantControle->setCreated(new \DateTime('now'));
            $this->em->persist($concoursEtudiantControle);
        }elseif ($concoursEtudiantControle->getCreated()->format('Y-m-j') == date('Y-m-j')) {
            $concoursEtudiantControle->setControle($concoursEtudiantControle->getControle() + 1);
        }else {
            $concoursEtudiantControle->setControle(1);
            $concoursEtudiantControle->setCreated(new \DateTime('now'));
        }
        $this->em->flush();
        if ($etudiant->getAnonymat() == $request->get('anonymat')) {
            return new Response('Le code exacte',200);
        }
        return new Response('Le code Invalid!',500);
    }

    #[Route('/print/{etudiant}/{netiquettes}', name: 'concours_print_controle')]
    public function print_controle(Request $request,ConcoursEtudiant $etudiant, $netiquettes)
    {
        $html = $this->render("concours/pdfs/imprimer.html.twig", [
            "inscription" => $etudiant,
            "netiquettes" => $netiquettes,
        ])->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'format' => 'A4-L',
            'margin_left' => '0',
            'margin_right' => '0',
            'margin_top' => '50',
            'margin_bottom' => '0',
            'default_font_size' => 10,
            'default_font' => 'Arial',
            'showBarcodeNumbers' => FALSE
        ]);
        $mpdf->SetTitle('Etiquettes');
       
        // $html = "<barcode code=".$inscription->getId()." type='C128A' height='0.7' size='1.5'/>";
        $mpdf->SetJS('this.print();');
        $mpdf->WriteHTML($html);
        // dd($mpdf);

        $mpdf->Output();
        die;
    }

    
   
}
