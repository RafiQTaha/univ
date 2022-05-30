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
use App\Entity\TReglement;
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
    public function index(Request $request): Response
    {
      
        $operations = ApiController::check($this->getUser(), 'gestion_facture', $this->em, $request);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $etbalissements = $this->em->getRepository(AcEtablissement::class)->findAll();
        $organismes = $this->em->getRepository(POrganisme::class)->findAll();
        $banques = $this->em->getRepository(XBanque::class)->findAll();
        $paiements = $this->em->getRepository(XModalites::class)->findAll();
        $reglements = $this->em->getRepository(TReglement::class)->findAll();
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
    public function list_facture_factures(Request $request): Response
    {   
         
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = " where 1=1 ";
        
        if (!empty($params->all('columns')[0]['search']['value'])) {
            $filtre .= " and etab.id = '" . $params->all('columns')[0]['search']['value'] . "' ";
        }
        if (!empty($params->all('columns')[1]['search']['value'])) {
            $filtre .= " and frma.id = '" . $params->all('columns')[1]['search']['value'] . "' ";
        }
        if (!empty($params->all('columns')[2]['search']['value'])) {
            if ($params->all('columns')[2]['search']['value'] == 'SD')
            {
                $filtre .= " and opdet.montant_facture = reg.montant_regle ";
            }
            else if($params->all('columns')[2]['search']['value'] == 'SE')
            {
                $filtre .= " and opdet.montant_facture < reg.montant_regle ";
            }
            else {
                $filtre .= " and opdet.montant_facture > reg.montant_regle ";
            }
        }  
        if (!empty($params->all('columns')[3]['search']['value'])) {
            $filtre .= " and org.id = '" . $params->all('columns')[3]['search']['value'] . "' ";
        }

        $columns = array(
            array( 'db' => 'opcab.id','dt' => 0 ),
            array( 'db' => 'opcab.code','dt' => 1),
            array( 'db' => 'Upper(pre.code)','dt' => 2),
            array( 'db' => 'etu.nom','dt' => 3),
            array( 'db' => 'etu.prenom','dt' => 4),
            array( 'db' => 'etu.cin','dt' => 5),
            array( 'db' => 'etab.abreviation','dt' => 6),
            array( 'db' => 'Upper(frma.abreviation)','dt' => 7),
            // array( 'db' => 'nat.designation','dt' => 8),
            array( 'db' => 'org.designation','dt' => 8),
            array( 'db' => 'opcab.categorie','dt' => 9),
            array( 'db' => 'montant_facture','dt' => 10),
            array( 'db' => 'montant_regle','dt' => 11),
            array( 'db' => '(IFNULL(montant_facture,0)-IFNULL(montant_regle,0)) as diff','dt' => 12),
            array( 'db' => 'Upper(org.abreviation)','dt' => 13),
            array( 'db' => 'opcab.active','dt' => 14),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        FROM `toperationcab` opcab
        INNER JOIN ac_annee an on an.id = opcab.annee_id
        INNER JOIN tpreinscription pre on pre.id = opcab.preinscription_id
        INNER JOIN tetudiant etu on etu.id = pre.etudiant_id
        INNER JOIN ac_formation frma on frma.id = an.formation_id
        INNER JOIN ac_etablissement etab on etab.id = frma.etablissement_id
        LEFT JOIN porganisme org on org.id = opcab.organisme_id
        LEFT JOIN nature_demande nat on nat.id = pre.nature_id 
        LEFT JOIN (select operationcab_id, SUM(montant) as montant_facture from toperationdet where active = 1 group by operationcab_id ) opdet on opdet.operationcab_id = opcab.id
        LEFT JOIN (select operation_id, SUM(montant) as montant_regle from treglement group by operation_id ) reg on reg.operation_id = opcab.id $filtre ";
        // dd($sql);
        $totalRows .= $sql;
        $sqlRequest .= $sql;
        $stmt = $this->em->getConnection()->prepare($sql);
        $newstmt = $stmt->executeQuery();
        $totalRecords = count($newstmt->fetchAll());
        
        $my_columns = DatatablesController::Pluck($columns, 'db');
        unset($columns[12]);
        $where = DatatablesController::Search($request, $columns);
        if (isset($where) && $where != '') {
            $sqlRequest .= $where;
        }
        
        $columns[12]['db'] = 'diff';
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
                    if ($key == 10 || $key == 11) {
                        $value = $value == NULL ? 0 : $value;
                    }
                    if ($key == 8) {
                        $value = $value == 'Payant' ? $value : 'Boursier';
                    }
                    if($key == 14){
                        $value = $value == 0 ? 'Cloture' : 'Ouverte';
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
    
    #[Route('/ajouter_reglement/{id}', name: 'facture_ajouter_reglement')]
    public function ajouter_reglement(Request $request,TOperationcab $operationcab): Response
    { 
        if (empty($request->get('d_reglement')) || $request->get('montant') == "" || empty($request->get('paiement')) ) {
            return new JsonResponse('Veuillez renseigner tous les champs!', 500);
        }elseif ($request->get('montant') == 0) {
            return new JsonResponse('Le montant ne peut pas étre égale à 0', 500);
        }
        // elseif ($request->get('montant') > $request->get('montant2')) {
        //     return new JsonResponse('Le montant a réglé est '.$request->get('montant2').'DH', 500);
        // }
        
        $etablissement = $operationcab->getPreinscription()->getAnnee()->getFormation()->getEtablissement()->getAbreviation();
        $reglement = New TReglement();
        $reglement->setOperation($operationcab);
        $reglement->setCreated(new DateTime('now'));
        $reglement->setMontant($request->get('montant'));
        $reglement->setRemise(0);
        $reglement->setBanque($request->get('banque') == "" ? Null : $this->em->getRepository(XBanque::class)->find($request->get('banque')));
        $reglement->setPaiement($this->em->getRepository(XModalites::class)->find($request->get('paiement')));
        $reglement->setDateReglement(new DateTime($request->get('d_reglement')));
        $reglement->setReference($request->get('reference'));
        $reglement->setPayant($request->get('organisme'));
        $this->em->persist($reglement);
        $this->em->flush();
        $reglement->setCode($etablissement.'-REG'.str_pad($reglement->getId(), 8, '0', STR_PAD_LEFT).'/'.date('Y'));
        $this->em->flush();
        return new JsonResponse($reglement->getId(), 200);        
    }
    
    #[Route('/getMontant/{id}', name: 'getMontant')]
    public function getMontant(Request $request,TOperationcab $operationcab): Response
    {   
        $operationdet = $this->em->getRepository(TOperationdet::class)->findBy(['operationcab'=>$operationcab,'active'=>1]);
        if($operationdet == NULL || $operationcab->getActive() == 0){
            return new JsonResponse('vide', 200);
        }
        $reglementTotal = $this->em->getRepository(TReglement::class)->getSumMontantByCodeFacture($operationcab);
        $operationTotal = $this->em->getRepository(TOperationdet::class)->getSumMontantByCodeFacture($operationcab);
        $operationTotal = $operationTotal == Null ? 0 : $operationTotal['total'];
        $reglementTotal = $reglementTotal == Null ? 0 : $reglementTotal['total'];
        // dd($operationTotal['total'], $reglementTotal['total']);
        $montant = $operationTotal - $reglementTotal;
        return new JsonResponse($montant, 200);        
    }
    #[Route('/facture/{operationcab}/{reglement}', name: 'imprimer_facture_reglement')]
    public function imprimer_facture_reglement(TOperationcab $operationcab,TReglement $reglement): Response
    {
        // dd($operationcab->getPreinscription()->getAnnee()->getFormation());
        $reglementTotal = $this->em->getRepository(TReglement::class)->getSumMontantByCodeFacture($operationcab);
        $operationTotal = $this->em->getRepository(TOperationdet::class)->getSumMontantByCodeFacture($operationcab);
        $inscription = $this->em->getRepository(TInscription::class)->findOneBy([
            'admission'=>$this->em->getRepository(TAdmission::class)->findBy([
                'preinscription'=>$operationcab->getPreinscription()])]);
                // dd($inscription);
        $promotion = $inscription == NULL ? "" : $inscription->getPromotion()->getDesignation();
        $inscription = $inscription == NULL ? "" : $inscription->getCode();
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
            'mode' => 'utf-8', 
            'format' => [250, 350],
            'margin_left' => 5,
            'margin_right' => 5,
            'margin_top' => 5,
            'margin_bottom' => 5,
        ]);
        $mpdf->SetTitle('Facture Reglée');
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
    #[Route('/printfacture/{operationcab}', name: 'imprimerfacture')]
    public function imprimerfacture(TOperationcab $operationcab)
    {
        $operationdets = $this->em->getRepository(TOperationdet::class)->FindDetGroupByFrais($operationcab);
        $operationdetslist = [];
        foreach ($operationdets as $operationdet) {
            $frais = $operationdet->getFrais();
            // dd($frais);
            $SumByOrg = $this->em->getRepository(TOperationdet::class)->getSumMontantByCodeFactureAndOrganisme($operationcab,$frais);
            $SumByPayant = $this->em->getRepository(TOperationdet::class)->getSumMontantByCodeFactureAndPayant($operationcab,$frais);
            $list['dateOperation'] = $this->em->getRepository(TOperationdet::class)->findOneBy(['operationcab'=>$operationcab,'frais'=>$frais],['created'=>'DESC'])->getCreated()->format('d/m/Y');
            // $list['dateOperation'] = $operationdet->getCreated()->format('d/m/Y h:m:s');
            $list['designation'] = $operationdet->getFrais()->getDesignation();
            $list['SumByOrg'] = $SumByOrg;
            $list['SumByPayant'] = $SumByPayant;
            $list['total'] = $SumByPayant + $SumByOrg;
            array_push($operationdetslist,$list);
        }
        $inscription = $this->em->getRepository(TInscription::class)->findOneBy([
            'admission'=>$this->em->getRepository(TAdmission::class)->findBy([
                'preinscription'=>$operationcab->getPreinscription()]),
            'annee' => $operationcab->getAnnee()]);
                // dd($inscription);
        $promotion = $inscription == NULL ? "" : $inscription->getPromotion()->getDesignation();
        // dd($inscription);
        // $operationTotal = $this->em->getRepository(TOperationdet::class)->getSumMontantByCodeFacture($operationcab);
        // $reglementTotal = $this->em->getRepository(TReglement::class)->getSumMontantByCodeFacture($operationcab);
        // $operationTotal = $operationTotal == Null ? 0 : $operationTotal['total'];
        // $reglementTotal = $reglementTotal == Null ? 0 : $reglementTotal['total'];
        // $total = $operationTotal - $reglementTotal;

        
        $reglementOrg = $this->em->getRepository(TReglement::class)->getReglementSumMontantByCodeFactureByOrganisme($operationcab)['total'];
        $reglementPyt = $this->em->getRepository(TReglement::class)->getReglementSumMontantByCodeFactureByPayant($operationcab)['total'];
        // dd($reglementOrg,$reglementPyt);
        
        
        $html = $this->render("facture/pdfs/facture_facture.html.twig", [
            'reglementOrg' => $reglementOrg,
            'reglementPyt' => $reglementPyt,
            // 'reglementTotal' => $reglementTotal,
            // 'operationTotal' => $operationTotal,
            'operationcab' => $operationcab,
            'promotion' => $promotion,
            // 'total' => $total,
            'operationdets' => $operationdetslist
        ])->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'margin_top' => 5,
        ]);        
        $mpdf->SetTitle('Facture');
        $mpdf->SetHTMLFooter(
            $this->render("facture/pdfs/footer.html.twig")->getContent()
        );
        $mpdf->showImageErrors = true;
        $mpdf->WriteHTML($html);
        $mpdf->Output("facture.pdf", "I");
    }
    
    #[Route('/article_frais/{id}', name: 'article_frais_facture')]
    public function article_frais(Request $request,TOperationCab $operationcab): Response
    {   
        $formation = $operationcab->getPreinscription()->getAnnee()->getFormation();
        $categorie = $operationcab->getCategorie();
        if ($categorie == 'hors inscription') {
            $frais = $this->em->getRepository(PFrais::class)->findBy(['formation'=>$formation]);
        }else{
            $frais = $this->em->getRepository(PFrais::class)->findBy(['formation'=>$formation,'categorie'=>$categorie]);
        }
        $data = "<option selected enabled>Choix Fraix</option>";
        foreach ($frais as $frs) {
            $data .="<option value=".$frs->getId()." data-id=".$frs->getmontant().">".$frs->getDesignation()."</option>";
        }
        return new JsonResponse($data, 200);
    }

    #[Route('/detaille_facture/{id}', name: 'detaille_facture')]
    public function detaille_facture(Request $request,TOperationcab $operationcab): Response
    { 
        $operationdets = $this->em->getRepository(TOperationdet::class)->findBy(['operationcab'=>$operationcab]);
        $cloture = $operationcab->getActive();
        $html = "";
        $i=1;
        $active = "";
        foreach($operationdets as $operationdet){
            $tr = '';
            if ($cloture == 1) {
                if ($operationdet->getActive() == 1) {
                    $active = '<button class="detaille_cloture btn btn-danger" id='.$operationdet->getId().'><i class="fas fa-window-close"></i></button>';
                }else{
                    $active = '<button class="detaille_clotured btn btn-secondary" id='.$operationdet->getId().'><i class="fas fa-window-close"></i></i></button>';
                }
                $tr = '<th scope="col">'.$active.'</th>';
            }
            $html .= '<tr><th scope="col">'.$i++.'</th>
            <th scope="col" style="width:25rem">'.$operationdet->getFrais()->getDesignation().'</th>
            <th scope="col">'.$operationdet->getOrganisme()->getDesignation().'</th>
            <th scope="col">'.$operationdet->getMontant().'</th>
            <th scope="col">'.$operationdet->getRemise().'</th>'.$tr.'</tr>';
        }
        $data = [$cloture,$html];
        return new JsonResponse($data, 200);        
    }

    #[Route('/add_detaille/{id}', name: 'add_detaille')]
    public function add_detaille(Request $request,TOperationcab $operationcab): Response
    {   
        // dd($request);
        if($operationcab->getActive() == 0){
            return new JsonResponse('Cette Facture Est Cloture', 500);  
        }
        if(empty($request->get('montant'))  || $request->get('montant') == ' ' || empty($request->get('frais')) ){
            return new JsonResponse('Merci de renseigner tous les champs!', 500);            
        }
        if (empty($request->get('organisme_id'))) {
            return new JsonResponse('Merci de choisir une Organisme!', 500);
        }
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
        $operationDet->setOrganisme($this->em->getRepository(POrganisme::class)->find($request->get('organisme_id')));
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
