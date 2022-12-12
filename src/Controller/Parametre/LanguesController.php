<?php

namespace App\Controller\Parametre;

use App\Controller\ApiController;
use App\Entity\AcPromotion;
use App\Entity\AcEtablissement;
use App\Controller\DatatablesController;
use App\Entity\AcFormation;
use App\Entity\XLangue;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/parametre/langues')]

class LanguesController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'parametre_langues')]
    public function index(Request $request)
    {
        $operations = ApiController::check($this->getUser(), 'parametre_langues', $this->em, $request);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        return $this->render('parametre/langues/index.html.twig', [
            'operations' => $operations
        ]);
    }
    #[Route('/list', name: 'parametre_langue_list')]
    public function list(Request $request): Response
    {
        
        $params = $request->query;
        // dd($params);
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1 = 1";   
        $columns = array(
            array( 'db' => 'langue.id','dt' => 0),
            array( 'db' => 'LOWER(langue.code)','dt' => 1),
            array( 'db' => 'LOWER(langue.designation)','dt' => 2),
            array( 'db' => 'langue.abreviation','dt' => 3),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        from xlangue langue
        $filtre and active = '1'";
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

    #[Route('/new', name: 'parametre_langue_new')]
    public function new(Request $request): Response
    {
        // dd($request);
        if (empty($request->get('designation')) || empty($request->get('abreviation'))) {
            return new JsonResponse('Merci de remplir tout les champs!!',500);
        }
        $langue = new XLangue();
        $langue->setDesignation($request->get('designation'));
        $langue->setAbreviation($request->get('abreviation'));
        $langue->setActive('1');
        $this->em->persist($langue);
        $this->em->flush();
        $langue->setCode("ban".str_pad($langue->getId(), 8, '0', STR_PAD_LEFT));
        $this->em->flush();

       return new JsonResponse('langue bien Ajouter',200);
    }

    #[Route('/details/{langue}', name: 'parametre_langue_details')]
    public function details(XLangue $langue): Response
    {
       return new JsonResponse([
           'designation' => $langue->getDesignation(),
           'abreviation' => $langue->getAbreviation()
       ]);
    }

    #[Route('/update/{langue}', name: 'parametre_langue_update')]
    public function update(Request $request, XLangue $langue): Response
    {
        $langue->setDesignation($request->get('designation'));
        $langue->setAbreviation($request->get('abreviation'));
        $this->em->flush();
 
        return new JsonResponse(1);
    }

    #[Route('/delete/{langue}', name: 'parametre_langue_delete')]
    public function delete(Request $request, XLangue $langue): Response
    {
        $langue->setActive('0');
        $this->em->flush();
 
        return new JsonResponse(1);
    }
}
