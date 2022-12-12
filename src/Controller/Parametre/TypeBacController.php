<?php

namespace App\Controller\Parametre;

use App\Controller\ApiController;
use App\Entity\AcPromotion;
use App\Entity\AcEtablissement;
use App\Controller\DatatablesController;
use App\Entity\AcFormation;
use App\Entity\XTypeBac;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/parametre/typebac')]

class TypeBacController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'parametre_typebac')]
    public function index(Request $request)
    {
        $operations = ApiController::check($this->getUser(), 'parametre_typebac', $this->em, $request);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        return $this->render('parametre/typebac/index.html.twig', [
            'operations' => $operations
        ]);
    }
    #[Route('/list', name: 'parametre_typebac_list')]
    public function list(Request $request): Response
    {
        
        $params = $request->query;
        // dd($params);
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1 = 1";   
        $columns = array(
            array( 'db' => 'typebac.id','dt' => 0),
            array( 'db' => 'LOWER(typebac.code)','dt' => 1),
            array( 'db' => 'LOWER(typebac.designation)','dt' => 2),
            array( 'db' => 'typebac.abreviation','dt' => 3),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        from xtype_bac typebac
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

    #[Route('/new', name: 'parametre_typebac_new')]
    public function new(Request $request): Response
    {
        // dd($request);
        if (empty($request->get('designation')) || empty($request->get('abreviation'))) {
            return new JsonResponse('Merci de remplir tout les champs!!',500);
        }
        $typebac = new XTypeBac();
        $typebac->setDesignation($request->get('designation'));
        $typebac->setAbreviation($request->get('abreviation'));
        $typebac->setActive('1');
        $this->em->persist($typebac);
        $this->em->flush();
        $typebac->setCode("ban".str_pad($typebac->getId(), 8, '0', STR_PAD_LEFT));
        $this->em->flush();

       return new JsonResponse('typebac bien Ajouter',200);
    }

    #[Route('/details/{typebac}', name: 'parametre_typebac_details')]
    public function details(XTypeBac $typebac): Response
    {
       return new JsonResponse([
           'designation' => $typebac->getDesignation(),
           'abreviation' => $typebac->getAbreviation()
       ]);
    }

    #[Route('/update/{typebac}', name: 'parametre_typebac_update')]
    public function update(Request $request, XTypeBac $typebac): Response
    {
        $typebac->setDesignation($request->get('designation'));
        $typebac->setAbreviation($request->get('abreviation'));
        $this->em->flush();
 
        return new JsonResponse(1);
    }

    #[Route('/delete/{typebac}', name: 'parametre_typebac_delete')]
    public function delete(Request $request, XTypeBac $typebac): Response
    {
        $typebac->setActive('0');
        $this->em->flush();
 
        return new JsonResponse(1);
    }
}
