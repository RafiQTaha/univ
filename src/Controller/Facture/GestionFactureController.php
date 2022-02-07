<?php

namespace App\Controller\Facture;

use DateTime;
use Mpdf\Mpdf;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\AcEtablissement;
use App\Entity\AcAnnee;
use App\Entity\AcFormation;
use App\Entity\TPreinscription;
use App\Entity\TInscription;
use App\Entity\TAdmission;
use App\Entity\TRegelement;
use App\Entity\AcPromotion;
use App\Entity\POrganisme;
use App\Entity\XBanque;
use App\Entity\PFrais;
use App\Entity\TOperationcab;
use App\Entity\TOperationdet;
use App\Entity\XModalites;
use App\Controller\ApiController;
use App\Controller\DatatablesController;
use Symfony\Component\HttpFoundation\JsonResponse;

#[Route('/facture/factures')]
class GestionFactureController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'gestion_facture')]
    public function index(): Response
    {
        $etbalissements = $this->em->getRepository(AcEtablissement::class)->findAll();
        $organismes = $this->em->getRepository(POrganisme::class)->findAll();
        $banques = $this->em->getRepository(XBanque::class)->findAll();
        $paiements = $this->em->getRepository(XModalites::class)->findAll();
        $reglements = $this->em->getRepository(TRegelement::class)->findAll();
        // dd($reglements);
        $operations = ApiController::check($this->getUser(), 'gestion_facture', $this->em);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        return $this->render('facture/gestion_facture.html.twig', [
            'etablissements' => $etbalissements,
            'reglements' => $reglements,
            'operations' => $operations,
            'banques' => $banques,
            'paiements' => $paiements,
            'organismes' => $organismes
        ]);
    }
    
    #[Route('/list', name: 'list_facture_factures')]
    public function list_gestion_preinscription(Request $request): Response
    {   
         
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = " where 1=1 ";
        
        if (!empty($params->get('columns')[0]['search']['value'])) {
            $filtre .= " and etab.id = '" . $params->get('columns')[0]['search']['value'] . "' ";
        }
        if (!empty($params->get('columns')[1]['search']['value'])) {
            $filtre .= " and frma.id = '" . $params->get('columns')[1]['search']['value'] . "' ";
        }
        if (!empty($params->get('columns')[2]['search']['value'])) {
            if ($params->get('columns')[2]['search']['value'] == 'SD')
            {
                $filtre .= " and opdet.montant_facture = reg.montant_regle ";
            }
            else if($params->get('columns')[2]['search']['value'] == 'SE')
            {
                $filtre .= " and opdet.montant_facture < reg.montant_regle ";
            }
            else {
                $filtre .= " and opdet.montant_facture > reg.montant_regle ";
            }
        }  
        if (!empty($params->get('columns')[3]['search']['value'])) {
            $filtre .= " and org.id = '" . $params->get('columns')[3]['search']['value'] . "' ";
        }

        $columns = array(
            array( 'db' => 'opcab.id','dt' => 0 ),
            array( 'db' => 'opcab.code','dt' => 1),
            array( 'db' => 'Upper(pre.code)','dt' => 2),
            array( 'db' => 'etu.nom','dt' => 3),
            array( 'db' => 'etu.prenom','dt' => 4),
            array( 'db' => 'etab.abreviation','dt' => 5),
            array( 'db' => 'Upper(frma.abreviation)','dt' => 6),
            array( 'db' => 'nat.designation','dt' => 7),
            array( 'db' => 'opcab.categorie','dt' => 8),
            array( 'db' => 'montant_facture','dt' => 9),
            array( 'db' => 'montant_regle','dt' => 10),
            array( 'db' => 'Upper(org.abreviation)','dt' => 11),
            array( 'db' => 'opcab.active','dt' => 12),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        FROM `toperationcab` opcab
        INNER JOIN ac_annee an on an.id = opcab.annee_id
        INNER JOIN tpreinscription pre on pre.id = opcab.preinscription_id
        INNER JOIN tetudiant etu on etu.id = pre.etudiant_id
        INNER JOIN ac_formation frma on frma.id = an.formation_id
        INNER JOIN ac_etablissement etab on etab.id = frma.etablissement_id
        LEFT JOIN porganisme org on org.id = opcab.organisme_id
        LEFT JOIN nature_demande nat on nat.id = etu.nature_demande_id 
        LEFT JOIN (select code ,operationcab_id, SUM(montant) as montant_facture from toperationdet) opdet on opdet.operationcab_id = opcab.id
        LEFT JOIN (select code ,operation_id, SUM(montant) as montant_regle from tregelement) reg on reg.operation_id = opcab.id $filtre ";
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
            $nestedData = array();
            $cd = $row['id'];
            $nestedData[] = $i;
            $etat_bg="";
            foreach (array_values($row) as $key => $value) { 
                if($key > 0) {
                    if ($key == 9 || $key == 10) {
                        $value = $value == NULL ? 0 : $value;
                    }
                    if ($key == 7) {
                        $value = $value == 'Payant' ? $value : 'Boursier';
                    }
                    if($key == 12){
                        $value = $value == 1 ? 'Cloturer' : 'Ouverte';
                    }
                    $nestedData[] = $value;
                }
            }
            $nestedData["DT_RowId"] = $cd;
            $nestedData["DT_RowClass"] = "";
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
    
    #[Route('/ajouter_reglement/{id}', name: 'ajouter_reglement')]
    public function ajouter_reglement(Request $request,TOperationcab $operationcab): Response
    { 
        if (empty($request->get('d_reglement')) && empty($request->get('montant')) && empty($request->get('banque')) && empty($request->get('paiement')) && empty($request->get('reference')) ) {
            return new JsonResponse('Veuillez renseigner tous les champs obligatoires!', 500);
        }
        if ($request->get('montant') < $request->get('montant2')) {
            return new JsonResponse('Le montant doit etre superieur du Remise', 500);
        }
        $etablissement = $operationcab->getPreinscription()->getAnnee()->getFormation()->getEtablissement()->getAbreviation();
        $reglement = New TRegelement();
        $reglement->setOperation($operationcab);
        $reglement->setCreated(new DateTime('now'));
        $reglement->setMontant($request->get('montant'));
        $reglement->setRemise(0);
        $reglement->setBanque($this->em->getRepository(XBanque::class)->find($request->get('banque')));
        $reglement->setPaiement($this->em->getRepository(XModalites::class)->find($request->get('paiement')));
        $reglement->setDateReglement(new DateTime($request->get('d_reglement')));
        $reglement->setReference($request->get('reference'));
        $this->em->persist($reglement);
        $this->em->flush();
        $reglement->setCode($etablissement.'-REG'.str_pad($reglement->getId(), 8, '0', STR_PAD_LEFT).'/'.date('Y'));
        $this->em->flush();
        return new JsonResponse($reglement->getId(), 200);        
    }
    
    #[Route('/getMontant/{id}', name: 'getMontant')]
    public function getMontant(Request $request,TOperationcab $operationcab): Response
    {   
        if($this->em->getRepository(TOperationdet::class)->findBy(['operationcab'=>$operationcab]) == NULL){
            return new JsonResponse('vide', 200);
        }
        $reglementTotal = $this->em->getRepository(TRegelement::class)->getSumMontantByCodeFacture($operationcab);
        $operationTotal = $this->em->getRepository(TOperationdet::class)->getSumMontantByCodeFacture($operationcab);
        $operationTotal = $operationTotal == Null ? 0 : $operationTotal;
        $reglementTotal = $reglementTotal == Null ? 0 : $reglementTotal;
        // dd($operationTotal['total'], $reglementTotal['total']);
        $montant = $operationTotal['total'] - $reglementTotal['total'];
        return new JsonResponse($montant, 200);        
    }
    #[Route('/facture/{operationcab}/{reglement}', name: 'facture_facture')]
    public function facture_reglement(Request $request, TOperationcab $operationcab,TRegelement $reglement): Response
    {
        $inscription = "";
        $promotion = "";
        // dd($operationcab->getPreinscription()->getAnnee()->getFormation());
        $reglementTotal = $this->em->getRepository(TRegelement::class)->getSumMontantByCodeFacture($operationcab);
        $operationTotal = $this->em->getRepository(TOperationdet::class)->getSumMontantByCodeFacture($operationcab);
        $inscription = $this->em->getRepository(TInscription::class)->findOneBy([
            'admission'=>$this->em->getRepository(TAdmission::class)->findBy([
                'preinscription'=>$operationcab->getPreinscription()])]);
        $promotion = $inscription->getPromotion();
        // if () {
        //     # code...
        // }
        // $reglement = $this->em->getRepository(TOperationdet::class)->findOneBy(['operation'=>$operationcab]);
        // $promotion = $this->em->getRepository(AcPromotion::class)->findBy([
        //     'formation'=>$operationcab->getPreinscription()->getAnnee()->getFormation(),
        //     '']);    
        // dd($promotion);
        $html = "";
        for ($i=0; $i < 3; $i++) { 
            $html .= $this->render("facture/pdfs/facture_reglement.html.twig", [
                    'reglementTotal' => $reglementTotal,
                    'operationTotal' => $operationTotal,
                    'operationcab' => $operationcab,
                    'reglement' => $reglement,
                    'inscription' => $inscription,
                    'promotion' => $promotion,
            ])->getContent();
        }
        $mpdf = new Mpdf([
            'mode' =>'UTF8',
            'format' =>'A4',
            'orientation' =>'PORTRAIT',
            'destination' =>'FILE',
            'margin_left' => 5,
            'margin_right' => 5,
            'margin_top' => 0,
            'margin_bottom' => 0,
            'margin_header' => 0,
            'margin_footer' => 0,
        ]);
        $mpdf->WriteHTML($html);
        $mpdf->Output("facture.pdf", "I");
    }

    #[Route('/modifier_organisme_facture/{id}', name: 'modifier_organisme_facture')]
    public function modifier_organisme_facture(Request $request,TOperationcab $operationcab): Response
    { 
        if (empty($request->get('organisme')) ) {
            return new JsonResponse('Veuillez Choisir Une Organisme!', 500);
        }
        $operationcab->setOrganisme($this->em->getRepository(POrganisme::class)->find($request->get('organisme')));
        $this->em->flush();
        return new JsonResponse('Organisme Modifier', 200);        
    }

    
    #[Route('/printfacture/{operationcab}', name: 'printfacture')]
    public function printfacture(Request $request, TOperationcab $operationcab): Response
    {
        $reglementTotal = $this->em->getRepository(TRegelement::class)->getSumMontantByCodeFacture($operationcab);
        $operationTotal = $this->em->getRepository(TOperationdet::class)->getSumMontantByCodeFacture($operationcab);
        $operationTotal = $operationTotal == Null ? 0 : $operationTotal['total'];
        $reglementTotal = $reglementTotal == Null ? 0 : $reglementTotal;
        // dd($operationTotal, $reglementTotal);
        $total = $operationTotal - $reglementTotal['total'];
        $html = $this->render("facture/pdfs/facture_facture.html.twig", [
            'reglementTotal' => $reglementTotal,
            'operationTotal' => $operationTotal,
            'operationcab' => $operationcab,
            'total' => $total
        ])->getContent();
        $mpdf = new Mpdf();
        $mpdf->showImageErrors = true;
        $mpdf->SetHTMLHeader(
            $this->render("facture/pdfs/header.html.twig")->getContent()
        );
        $mpdf->SetHTMLFooter(
            $this->render("facture/pdfs/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->Output("facture.pdf", "I");
    }

    #[Route('/detaille_facture/{id}', name: 'detaille_facture')]
    public function detaille_facture(Request $request,TOperationcab $operationcab): Response
    { 
        $operationdets=$this->em->getRepository(TOperationdet::class)->findBy(['operationcab'=>$operationcab]);
        $html = "";
        $i=1;
        foreach($operationdets as $operationdet){
            if ($operationdet->getActive() == 0) {
                $active = '<button class="detaille_cloture btn btn-danger" id='.$operationdet->getId().'><i class="fas fa-window-close"></i></button>';
            }else{
                $active = '<button class="detaille_clotured btn btn-secondary" id='.$operationdet->getId().'><i class="fas fa-window-close"></i></i></button>';
            }
            $html .= '<tr><th scope="col">'.$i++.'</th>
            <th scope="col" style="width:25rem">'.$operationdet->getFrais()->getDesignation().'</th>
            <th scope="col">'.$operationdet->getMontant().'</th>
            <th scope="col">'.$operationdet->getRemise().'</th>
            <th scope="col">'.$active.'</th></tr>';
        }
        return new JsonResponse($html, 200);        
    }

    #[Route('/add_detaille/{id}', name: 'add_detaille')]
    public function add_detaille(Request $request,TOperationcab $operationcab): Response
    {   
        $frais =  $this->em->getRepository(PFrais::class)->find($request->get('frais'));
        $operationDet = new TOperationdet();
        $operationDet->setOperationcab($operationcab);
        $operationDet->setFrais($frais);
        $operationDet->setMontant($request->get('montant'));
        $operationDet->setIce($request->get('ice'));
        $operationDet->setCreated(new \DateTime("now"));
        $operationDet->setUpdated(new \DateTime("now"));
        $operationDet->setRemise(0);
        $operationDet->setActive(1);
        $this->em->persist($operationDet);
        $this->em->flush();
        $operationDet->setCode(
            "OPD".str_pad($operationDet->getId(), 8, '0', STR_PAD_LEFT)
        );
        $this->em->flush();
        return new JsonResponse(1, 200);    
    }

    
    #[Route('/cloture_detaille/{id}', name: 'cloture_detaille')]
    public function cloture_detaille(TOperationdet $operationdet): Response
    {   
        $operationdet->setActive(0);
        $this->em->flush();
        return new JsonResponse(1, 200);    
    }
    

}
