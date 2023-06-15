<?php

namespace App\Controller\Evaluation;

use App\Controller\ApiController;
use App\Controller\DatatablesController;
use App\Entity\AcAnnee;
use App\Entity\AcEtablissement;
use App\Entity\AcSemestre;
use App\Entity\ExSnotes;
use App\Entity\Pv;
use Doctrine\Persistence\ManagerRegistry;
use Mpdf\Mpdf;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\CssSelector\Parser\Reader;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

#[Route('/evaluation/pv')]
class PvController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'evaluation_pv_deliberation')]
    public function index(Request $request): Response
    {
        //check if user has access to this page
       $operations = ApiController::check($this->getUser(), 'evaluation_pv_deliberation', $this->em, $request);
       if(!$operations) {
           return $this->render("errors/403.html.twig");
       }
       
       return $this->render('evaluation/pv/index.html.twig', [
        'etablissements' =>  $this->em->getRepository(AcEtablissement::class)->findBy(['active'=>1]),
        'operations' => $operations
       ]);
    }

    #[Route('/list', name: 'list_pvs')]
    public function list_gestion_preinscription(Request $request): Response
    {   
         
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = " pv.active = 1 ";
        
        if (!empty($params->all('columns')[0]['search']['value'])) {
            $filtre .= " and etab.id = '" . $params->all('columns')[0]['search']['value'] . "' ";
        }
        if (!empty($params->all('columns')[1]['search']['value'])) {
            $filtre .= " and forma.id = '" . $params->all('columns')[1]['search']['value'] . "' ";
        }   
        if (!empty($params->all('columns')[2]['search']['value'])) {
            $filtre .= " and prm.id = '" . $params->all('columns')[2]['search']['value'] . "' ";
        }   
        if (!empty($params->all('columns')[3]['search']['value'])) {
            $filtre .= " and sem.id = '" . $params->all('columns')[3]['search']['value'] . "' ";
        }  
        if (!empty($params->all('columns')[4]['search']['value'])) {
            $filtre .= " and ann.id = '" . $params->all('columns')[4]['search']['value'] . "' ";
        }  

        $columns = array(
            array( 'db' => 'pv.id','dt' => 0 ),
            array( 'db' => 'pv.code','dt' => 1),
            array( 'db' => 'etab.abreviation','dt' => 2),
            array( 'db' => 'upper(etab.abreviation)','dt' => 3),
            array( 'db' => 'upper(forma.abreviation)','dt' => 4),
            array( 'db' => 'upper(ann.designation)','dt' => 5),
            array( 'db' => 'upper(prm.designation)','dt' => 6),
            array( 'db' => 'upper(prm.designation)','dt' => 7),
            array( 'db' => 'upper(sem.designation)','dt' => 8),
            array( 'db' => 'pv.president','dt' => 9),
            array( 'db' => 'pv.coordonnateur','dt' => 10),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        FROM pv
        INNER JOIN ac_semestre sem ON sem.id = pv.semestre_id
        INNER JOIN ac_promotion prm ON prm.id = sem.promotion_id
        INNER JOIN ac_formation forma ON forma.id = prm.formation_id
        INNER JOIN ac_etablissement etab ON etab.id = forma.etablissement_id
        INNER JOIN ac_annee ann on ann.id = pv.annee_id
        Where $filtre";
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
        
        $i = 1;
        foreach ($result as $key => $row) {
            // dump($row);die;
            $nestedData = array();
            $cd = $row['id'];
            $etat_bg="";
            foreach (array_values($row) as $key => $value) { 
                $nestedData[] = $value;
            }
            $nestedData["DT_RowId"] = $cd;
            $nestedData["DT_RowClass"] = $etat_bg;
            $data[] = $nestedData;
            $i++;
        }
        $json_data = array(
            "draw" => intval($params->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data   
        );
        return new Response(json_encode($json_data));
    }
    
    #[Route('/getPvInfos/{pv}', name: 'getPvInfos')]
    public function getPvInfos(Pv $pv)
    {  
        $html = $this->render('evaluation/pv/pages/update_pv.html.twig', [
            'pv' => $pv,
        ])->getContent();
        // dd($html);
        return new JsonResponse($html, 200); 
    }

    #[Route('/modifier_pv/{pv}', name: 'modifier_pv')]
    public function modifier_pv(Request $request,Pv $pv)
    {
        if ($request->get('president') == "") {
            return new JsonResponse("Merci de remplir tout les champs!",500);
        }
        if ($pv->getDocAsso() != null) {
            return new JsonResponse("Vous avez déja importé le Pv. Vous ne pouvez pas le modifier!",500);
        }
        $pv->setCoordonnateur($request->get('coordonnateur'));
        $pv->setPresident($request->get('president'));
        $pv->setMembres($request->get('membres'));
        $pv->setUserUpdated($this->getUser());
        $pv->setUpdated(new \DateTime('now'));
        $this->em->persist($pv);
        $this->em->flush();
        return new JsonResponse("PV bien modifier",200);
    }
    
    #[Route('/impressionPv/{pv}', name: 'impressionPv')]
    public function impressionPv(Pv $pv)
    {
        // dd($pv);
        $snotes = $this->em->getRepository(ExSnotes::class)->GetSnotesByAnneeAndSemestre($pv->getAnnee(),$pv->getSemestre());
        // dd($snotes);
        $snoteReussi = $this->em->getRepository(ExSnotes::class)->GetSnotesByAnneeAndSemestreAndStatut($pv->getAnnee(),$pv->getSemestre(),[36,56,37]);
        $snoteRachetes = $this->em->getRepository(ExSnotes::class)->GetSnotesByAnneeAndSemestreAndStatut($pv->getAnnee(),$pv->getSemestre(),[38,78]);
        $snoteDerogations = $this->em->getRepository(ExSnotes::class)->GetSnotesByAnneeAndSemestreAndStatut($pv->getAnnee(),$pv->getSemestre(),[72]);
        $snoteRecalés = $this->em->getRepository(ExSnotes::class)->GetSnotesByAnneeAndSemestreAndStatut($pv->getAnnee(),$pv->getSemestre(),[39,40,57]);
        $snoteFraudeurs = $this->em->getRepository(ExSnotes::class)->GetSnotesByAnneeAndSemestreAndStatut($pv->getAnnee(),$pv->getSemestre(),[]);
        $snoteAbsents = $this->em->getRepository(ExSnotes::class)->GetSnotesByAnneeAndSemestreAndStatut($pv->getAnnee(),$pv->getSemestre(),[]);
        // dd($snoteReussi);
        $html = $this->render("evaluation/pv/pdf/etatPv.html.twig", [
            'pv' => $pv,
            'snotes' => $snotes,
            'snoteReussi' => $snoteReussi,
            'snoteRachetes' => $snoteRachetes,
            'snoteDerogations' => $snoteDerogations,
            'snoteRecalés' => $snoteRecalés,
            'snoteFraudeurs' => $snoteFraudeurs,
            'snoteAbsents' => $snoteAbsents,
        ])->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8', 
            'margin_top' => 5,
            'margin_left' => 5,
            'margin_right' => 5,
        ]);
        $mpdf->SetHTMLFooter(
            $this->render("evaluation/pv/pdf/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle("Pv de Délibération ".$pv->getAnnee()->getFormation()->getEtablissement()->getAbreviation()." ".$pv->getSemestre()->getDesignation());
        $mpdf->Output("Pv de Délibération ".$pv->getAnnee()->getFormation()->getEtablissement()->getAbreviation()." ".$pv->getSemestre()->getDesignation().".pdf", "I");
    }

    #[Route('/importPv/{pv}', name: 'importPv')]
    public function importPv(Request $request, SluggerInterface $slugger,Pv $pv) {
        $file = $request->files->get('file');
        if(!$file){
            return new JsonResponse('Prière d\'importer le fichier', 500);
        }
        if($file->guessExtension() !== 'pdf'){
            return new JsonResponse('Prière d\'enregister un fichier pdf', 500);            
        }

        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        // this is needed to safely include the file name as part of the URL
        $safeFilename = $slugger->slug($originalFilename);
        $annee = $pv->getAnnee();
        $etab = $annee->getFormation()->getEtablissement()->getAbreviation();
        $newFilename = "PV_".$etab."_".$pv->getSemestre()->getDesignation()."_".str_replace("/", "-", $annee->getDesignation())."_".uniqid()."_".$pv->getId()."_".$this->getUser()->getUserIdentifier().'.'.$file->guessExtension();

        // Move the file to the directory where brochures are stored
        try {
            $file->move(
                $this->getParameter('pv'),
                $newFilename
            );
        } catch (FileException $e) {
            return new JsonResponse($e, 500);
        }
        $pv->setDocAsso($newFilename);
        $this->em->flush();
        return new JsonResponse("Le PV est bien Importer",200);
    }

}
