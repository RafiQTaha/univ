<?php

namespace App\Controller\Parametre;

use App\Controller\ApiController;
use App\Entity\AcPromotion;
use App\Entity\AcEtablissement;
use App\Controller\DatatablesController;
use App\Entity\AcFormation;
use App\Entity\XBanque;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/parametre/banque')]

class BanqueController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'parametre_banque')]
    public function index(Request $request)
    {
        $operations = ApiController::check($this->getUser(), 'parametre_banque', $this->em, $request);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        return $this->render('parametre/banque/index.html.twig', [
            'operations' => $operations
        ]);
    }

    #[Route('/list', name: 'parametre_banque_list')]
    public function list(Request $request): Response
    {
        
        $params = $request->query;
        // dd($params);
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1 = 1";   
        $columns = array(
            array( 'db' => 'banque.id','dt' => 0),
            array( 'db' => 'LOWER(banque.code)','dt' => 1),
            array( 'db' => 'LOWER(banque.designation)','dt' => 2),
            array( 'db' => 'banque.abreviation','dt' => 3),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        from xbanque banque
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

    #[Route('/new', name: 'parametre_banque_new')]
    public function new(Request $request): Response
    {
        // dd($request);
        if (empty($request->get('designation')) || empty($request->get('abreviation'))) {
            return new JsonResponse('Merci de remplir tout les champs!!',500);
        }
        $banque = new XBanque();
        $banque->setDesignation($request->get('designation'));
        $banque->setAbreviation($request->get('abreviation'));
        $banque->setActive('1');
        $this->em->persist($banque);
        $this->em->flush();
        $banque->setCode("ban".str_pad($banque->getId(), 8, '0', STR_PAD_LEFT));
        $this->em->flush();

       return new JsonResponse('Banque bien Ajouter',200);
    }

    #[Route('/details/{banque}', name: 'parametre_banque_details')]
    public function details(XBanque $banque): Response
    {
       return new JsonResponse([
           'designation' => $banque->getDesignation(),
           'abreviation' => $banque->getAbreviation()
       ]);
    }

    #[Route('/update/{banque}', name: 'parametre_banque_update')]
    public function update(Request $request, XBanque $banque): Response
    {
        $banque->setDesignation($request->get('designation'));
        $banque->setAbreviation($request->get('abreviation'));
        $this->em->flush();
 
        return new JsonResponse(1);
    }

    #[Route('/delete/{banque}', name: 'parametre_banque_delete')]
    public function delete(Request $request, XBanque $banque): Response
    {
        $banque->setActive('0');
        $this->em->flush();
 
        return new JsonResponse(1);
    }
}
