<?php

namespace App\Controller\Parametre;

use App\Controller\ApiController;
use App\Entity\AcEtablissement;
use App\Controller\DatatablesController;
use App\Entity\AcAnnee;
use App\Entity\AcFormation;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/parametre/annee')]

class AnneeController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'parametre_annee')]
    public function index(Request $request)
    {
        $operations = ApiController::check($this->getUser(), 'parametre_annee', $this->em, $request);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        return $this->render('parametre/annee/index.html.twig', [
            'etablissements' => $this->em->getRepository(AcEtablissement::class)->findBy(['active' => 1]),
            'operations' => $operations
        ]);
    }
    #[Route('/list', name: 'parametre_annee_list')]
    public function list(Request $request): Response
    {
        
        $params = $request->query;
        // dd($params);
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where ann.active = 1 ";   
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
            array( 'db' => 'ann.id','dt' => 0),
            array( 'db' => 'LOWER(etab.designation)','dt' => 1),
            array( 'db' => 'LOWER(form.designation)','dt' => 2),
            array( 'db' => 'ann.designation','dt' => 3),
            array( 'db' => 'ann.validation_academique','dt' => 4),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        from ac_annee ann
        inner join ac_formation form on form.id = ann.formation_id
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
        // dd($columns);
        $sqlRequest .= DatatablesController::Order($request, $columns);
        $stmt = $this->em->getConnection()->prepare($sqlRequest);
        $resultSet = $stmt->executeQuery();
        $result = $resultSet->fetchAll();
        
        $data = array();
        // dd($result);
        $i = 1;
        foreach ($result as $key => $row) {
            $nestedData = array();
            $cd = $row['id'];
            foreach (array_values($row) as $key => $value) {
                if ($key == 4 ) {
                    // $nestedData[] = $value;
                    $annee = $this->em->getRepository(AcAnnee::class)->find($row['id']);
                    if ($annee->getValidationAcademique() == "non" && $annee->getClotureAcademique() == "non") {
                        $value = "<button class='btn_active btn btn-success power_on' id='$cd'><i class='fas fa-power-off'></i></button>";
                    }else {
                        $value = "<button class='btn_active btn btn-danger power_off' id='$cd'><i class='fas fa-power-off'></i></button>";
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
    
    #[Route('/active_annee/{annee}', name: 'parametre_active_annee')]
    public function parametre_active_annee(Request $request,AcAnnee $annee): Response
    {
        // dd($this->getUser()->getRoles());
        if(!in_array('ROLE_ADMIN', $this->getUser()->getRoles())){
            return new JsonResponse('Vous N\'avez pas l\'autorisation pour effectuer cette operation!',500);
        }
        foreach ($annee->getFormation()->getAcAnnees() as $cannee) {
            $cannee->setClotureAcademique('oui');
            $cannee->setValidationAcademique('oui');
        };
        $annee->setClotureAcademique('non');
        $annee->setValidationAcademique('non');
        $this->em->flush();
       return new JsonResponse(1);
    }
    #[Route('/details/{annee}', name: 'parametre_annee_details')]
    public function details(Acannee $annee): Response
    {
       return new JsonResponse([
           'designation' => $annee->getDesignation(),
       ]);
    }

    #[Route('/new', name: 'parametre_annee_new')]
    public function new(Request $request): Response
    {
        // dd($request);
       if($request->get('designation') == ""){
            return new JsonResponse('Merci d\'entrez la designation',500);
       }
       $formation = $this->em->getRepository(AcFormation::class)->find($request->get("formation_id"));
       $annee = $this->em->getRepository(AcAnnee::class)->findOneBy(['formation'=>$formation,'designation'=>$request->get('designation')]);
       if($annee){
            return new JsonResponse('Année déja exist!',500);
       }
       $annee = new AcAnnee();
       $annee->setDesignation($request->get('designation'));
       $annee->setClotureAcademique('oui');
       $annee->setValidationAcademique('oui');
       $annee->setCreated(new \DateTime("now"));
       $annee->setUserCreated($this->getUser());
       $annee->setActive(1);
       $annee->setFormation($formation);
       $this->em->persist($annee);
       $this->em->flush();
       $annee->setCode("ANN".str_pad($annee->getId(), 10, '0', STR_PAD_LEFT));
       $this->em->flush();

       return new JsonResponse(1);
    }
    #[Route('/update/{annee}', name: 'parametre_annee_update')]
    public function update(Request $request, AcAnnee $annee): Response
    {
        if($request->get('designation') == ""){
            return new JsonResponse('Merci d\'entrez la designation',500);
        }
        $annee = $this->em->getRepository(AcAnnee::class)->findOneBy(['formation'=>$annee->getFormation(),'designation'=>$request->get('designation')]);
        if($annee){
            return new JsonResponse('Année déja exist!',500);
        }
        $annee->setDesignation($request->get('designation'));
        $annee->setUserUpdated($this->getUser());
        $annee->setUpdated(new \DateTime("now"));
        $this->em->flush();
        
        return new JsonResponse(1);
    }
    #[Route('/delete/{annee}', name: 'parametre_annee_delete')]
    public function delete(Request $request, AcAnnee $annee): Response
    {
        $annee->setActive(0);
        $annee->setUserUpdated($this->getUser());
        $annee->setUpdated(new \DateTime("now"));
        $this->em->flush();
        
        return new JsonResponse('Annee bien supprimer!',200);
    }
}
