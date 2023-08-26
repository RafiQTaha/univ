<?php

namespace App\Controller\Parametre;

use App\Controller\ApiController;
use App\Controller\DatatablesController;
use App\Entity\AcAnnee;
use App\Entity\AcElement;
use App\Entity\AcEtablissement;
use App\Entity\AcFormation;
use App\Entity\AcModule;
use App\Entity\AcPromotion;
use App\Entity\PEnseignant;
use App\Entity\PNatureEpreuve;
use App\Entity\PrProgrammation;
use App\Entity\TypeElement;
use DateTime;
use Doctrine\Persistence\ManagerRegistry;
use Proxies\__CG__\App\Entity\AcAnnee as EntityAcAnnee;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/parametre/programmation')]
class ProgrammationController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'parametre_programmation')]
    public function index(Request $request)
    {
        $operations = ApiController::check($this->getUser(), 'parametre_programmation', $this->em, $request);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        
        return $this->render('parametre/programmation/index.html.twig', [
            'etablissements' => $this->em->getRepository(AcEtablissement::class)->findBy(['active' => 1]),
            'natures' => $this->em->getRepository(PNatureEpreuve::class)->findAll(),
            'enseignants' => $this->em->getRepository(PEnseignant::class)->findAll(),
            'operations' => $operations
        ]);
    }
    #[Route('/list', name: 'parametre_programmation_list')]
    public function list(Request $request)
    {
        $params = $request->query;
        // dd($params);
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1 = 1 ";   
        // dd($params->all('columns')[0]);
        if (!empty($params->all('columns')[0]['search']['value'])) {
            $filtre .= " and etab.id = '" . $params->all('columns')[0]['search']['value'] . "' ";
        }
        if (!empty($params->all('columns')[1]['search']['value'])) {
            $filtre .= " and form.id = '" . $params->all('columns')[1]['search']['value'] . "' ";
        }
        if (!empty($params->all('columns')[2]['search']['value'])) {
            $filtre .= " and prm.id = '" . $params->all('columns')[2]['search']['value'] . "' ";
        }
        if (!empty($params->all('columns')[3]['search']['value'])) {
            $filtre .= " and sem.id = '" . $params->all('columns')[3]['search']['value'] . "' ";
        }
        if (!empty($params->all('columns')[4]['search']['value'])) {
            $filtre .= " and mdl.id = '" . $params->all('columns')[4]['search']['value'] . "' ";
        }
        if (!empty($params->all('columns')[5]['search']['value'])) {
            $filtre .= " and elm.id = '" . $params->all('columns')[5]['search']['value'] . "' ";
        }
        if (!empty($params->all('columns')[6]['search']['value'])) {
            $filtre .= " and ann.id = '" . $params->all('columns')[6]['search']['value'] . "' ";
        }
        $columns = array(
            array( 'db' => 'prog.id','dt' => 0),
            array( 'db' => 'UPPER(etab.abreviation)','dt' => 1),
            array( 'db' => 'UPPER(form.abreviation)','dt' => 2),
            array( 'db' => 'LOWER(ann.designation)','dt' => 3),
            array( 'db' => 'LOWER(prm.designation)','dt' => 4),
            array( 'db' => 'LOWER(sem.designation)','dt' => 5),
            array( 'db' => 'LOWER(mdl.designation)','dt' => 6), 
            array( 'db' => 'LOWER(elm.designation)','dt' => 7), 
            array( 'db' => 'UPPER(epv.abreviation)','dt' => 8), 
            array( 'db' => 'LOWER(prog.volume)','dt' => 9), 
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        from pr_programmation prog
        inner join ac_annee ann on ann.id = prog.annee_id
        inner join ac_element elm on elm.id = prog.element_id
        inner join ac_module mdl on mdl.id = elm.module_id
        inner join ac_semestre sem on sem.id = mdl.semestre_id
        inner join ac_promotion prm on prm.id = sem.promotion_id
        inner join ac_formation form on form.id = prm.formation_id
        inner join ac_etablissement etab on etab.id = form.etablissement_id
        inner join pnature_epreuve epv on epv.id = prog.nature_epreuve_id
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
    #[Route('/new', name: 'parametre_programmation_new')]
    public function new(Request $request)
    {     
        // dd($request->get('nature'));
        if (empty($request->get('observation')) || empty($request->get('volume')) ||
            $request->get('element_id') == "" || $request->get('annee_id') == "" || 
            $request->get('enseignant') == null || $request->get('nature') == "") 
        {
            return new JsonResponse('merci de remplir tout les champs!!',500);
        }
        $programmation = new PrProgrammation();
        $programmation->setObservation($request->get("observation"));
        $programmation->setVolume($request->get("volume"));
        $programmation->setNatureEpreuve($this->em->getRepository(PNatureEpreuve::class)->find($request->get("nature")));
        $programmation->setElement($this->em->getRepository(AcElement::class)->find($request->get("element_id")));
        $programmation->setAnnee($this->em->getRepository(AcAnnee::class)->find($request->get("annee_id")));
        $programmation->setCreated(new \DateTime("now"));
        $programmation->setUserCreated($this->getUser());
        foreach ($request->get('enseignant') as $enseignant) {
            $programmation->addEnseignant($this->em->getRepository(PEnseignant::class)->find($enseignant));
        }
        $this->em->persist($programmation);
        $this->em->flush();
        $programmation->setCode("PRG".str_pad($programmation->getId(), 8, '0', STR_PAD_LEFT));
        $this->em->flush();

       return new JsonResponse('Programmation Bien Ajoutée',200);
    }
    #[Route('/details/{programmation}', name: 'parametre_programmation_details')]
    public function details(PrProgrammation $programmation): Response
    {
        // dd($programmation->getEnseignants()[0]);
       $html = $this->render('parametre/programmation/pages/modifier.html.twig', [
            'programmation' => $programmation,
            'natures' => $this->em->getRepository(PNatureEpreuve::class)->findAll(),
            'enseignants' => $this->em->getRepository(PEnseignant::class)->findAll(),
       ])->getContent();
       return new JsonResponse($html,200);
    }

    #[Route('/update/{programmation}', name: 'parametre_programmation_update')]
    public function update(Request $request, PrProgrammation $programmation): Response
    {   
        // dd($request->request);     
        if (empty($request->get('observation')) || empty($request->get('volume')) ||
            $request->get('enseignants') == null || $request->get('nature') == "")  
        {
            return new JsonResponse('merci de remplir tout les champs!!',500);
        }
        $programmation->setObservation($request->get("observation"));
        $programmation->setVolume($request->get("volume"));
        $programmation->setNatureEpreuve($this->em->getRepository(PNatureEpreuve::class)->find($request->get("nature")));
        // $programmation->setElement($this->em->getRepository(AcElement::class)->find($request->get("element_id")));
        // $programmation->setAnnee($this->em->getRepository(AcAnnee::class)->find($request->get("annee_id")));
        $programmation->setUpdated(new \DateTime("now"));
        foreach ($programmation->getEnseignants() as $enseignant) {
            $programmation->removeEnseignant($enseignant);
        }
        
        foreach ($request->get('enseignants') as $enseignant) {
            $programmation->addEnseignant($this->em->getRepository(PEnseignant::class)->find($enseignant));
        }
        $this->em->flush();
    
        return new JsonResponse('Programmation Bien Modifier',200);
    }

    #[Route('/delete', name: 'parametre_programmation_delete')]
    public function delete(Request $request): Response
    {
        // dd($request);
        $programmation = $this->em->getRepository(PrProgrammation::class)->find($request->get('programmation'));
        // dd($exist);
        
        if ($programmation == null) {
            return new JsonResponse('Merci de choisir un enseignant!',500);
        }
        // dd($request);
        $this->em->remove($programmation);
        $this->em->flush();

       return new JsonResponse('Programmation Bien Supprimer',200);
    }
    #[Route('/duplication', name: 'parametre_programmation_duplication')]
    public function duplication(Request $request): Response
    {   
        $annee = $this->em->getRepository(AcAnnee::class)->find($request->get("annee"));
        $promotion = $request->get("promotion") != "" ? $this->em->getRepository(AcPromotion::class)->find($request->get("promotion")) : $this->em->getRepository(AcPromotion::class)->findBy(['formation'=>$annee->getFormation(),'active'=>1]);
        $programmations = $this->em->getRepository(PrProgrammation::class)->findProgrammationsByFormation($annee,$promotion);
        // dd($programmations);
        $NewAnnee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($annee->getFormation());
        $counter = 0;
        foreach ($programmations as $programmation) {
            $progExist = $this->em->getRepository(PrProgrammation::class)->findOneBy(["annee"=>$NewAnnee,"element"=>$programmation->getElement(),"nature_epreuve"=>$programmation->getNatureEpreuve()]);
            if (!$progExist) {
                    $prog = clone $programmation;
                    $prog->setAnnee($NewAnnee);
                    $prog->setCreated(new \DateTime("now"));
                    $prog->setUpdated(null);
                    $prog->setUserCreated($this->getUser());
                    foreach ($programmation->getEnseignants() as $enseignant) {
                        $enseignant->addProgrammation($prog);
                    }
                    $this->em->persist($prog);
                    $this->em->flush();
                    $prog->setCode("PRG".str_pad($prog->getId(), 8, '0', STR_PAD_LEFT));
                    $this->em->flush();
                    $counter++;
            }
        }
        if ($counter == 0) {
            return new JsonResponse('Aucune Programmtion n\'a été dupliquer pour l\'année ouverte '.$NewAnnee->getDesignation(),500);
        }
        return new JsonResponse($counter.' Programmations sont Bien Dupliquer pour l\'année ouverte '.$NewAnnee->getDesignation(),200);
    }
}
