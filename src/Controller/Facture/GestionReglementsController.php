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
use App\Entity\AcPromotion;
use App\Entity\POrganisme;
use App\Entity\XBanque;
use App\Entity\PFrais;
use App\Entity\TReglement;
use App\Entity\TOperationcab;
use App\Entity\TOperationdet;
use App\Entity\XModalites;
use App\Entity\TBrdpaiement;
use App\Controller\ApiController;
use App\Controller\DatatablesController;
use phpDocumentor\Reflection\Types\Null_;
use Symfony\Component\HttpFoundation\JsonResponse;

#[Route('/facture/reglements')]
class GestionReglementsController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
        
    }
    #[Route('/', name: 'gestion_reglements')]
    public function index(): Response
    {
        $etbalissements = $this->em->getRepository(AcEtablissement::class)->findAll();
        $banques = $this->em->getRepository(XBanque::class)->findAll();
        $paiements = $this->em->getRepository(XModalites::class)->findAll();
        $bordereaux = $this->em->getRepository(TBrdpaiement::class)->findAll();
        $operations = ApiController::check($this->getUser(), 'gestion_reglements', $this->em);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        return $this->render('facture/gestion_reglement.html.twig', [
            'etablissements' => $etbalissements,
            'paiements' => $paiements,
            'bordereaux' => $bordereaux,
            'operations' => $operations,
            'banques' => $banques,
        ]);
    }
    
    #[Route('/list', name: 'list_facture_reglement')]
    public function list_facture_reglement(Request $request): Response
    {   
         
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = " where 1=1 ";
        
        if (!empty($params->get('columns')[0]['search']['value'])) {
            $filtre .= " and etab.id = '" . $params->get('columns')[0]['search']['value'] . "' ";
        }
        if (!empty($params->get('columns')[1]['search']['value'])) {
            $filtre .= " and frm.id = '" . $params->get('columns')[1]['search']['value'] . "' ";
        }
        if (!empty($params->get('columns')[2]['search']['value'])) {
            $filtre .= " and pae.id = '" . $params->get('columns')[2]['search']['value'] . "' ";
        }
        if (!empty($params->get('columns')[3]['search']['value'])) {
            if ($params->get('columns')[3]['search']['value'] == 'non') {
                $filtre .= " and (brd.code is NULL OR brd.code = 'NULL' OR brd.code = '' OR brd.code = ' ')";
            } else {
                $filtre .= " and (brd.code is NOT NULL OR brd.code <> 'NULL' OR brd.code <> '' OR brd.code <> ' '  )";
            }
        }
        $columns = array(
            array( 'db' => 'reg.id','dt' => 0 ),
            array( 'db' => 'pre.code','dt' => 1),
            array( 'db' => 'lower(oprcab.code)','dt' => 2),
            array( 'db' => 'Upper(reg.code)','dt' => 3),
            array( 'db' => 'etu.nom','dt' => 4),
            array( 'db' => 'etu.prenom','dt' => 5),
            array( 'db' => 'etu.cin','dt' => 6),
            array( 'db' => 'upper(frm.abreviation)','dt' => 7),
            array( 'db' => 'reg.montant','dt' => 8),
            array( 'db' => 'DATE_FORMAT(reg.date_reglement,"%Y-%m-%d")','dt' => 9),
            array( 'db' => 'pae.designation','dt' => 10),
            array( 'db' => 'upper(ban.designation)','dt' => 11),
            array( 'db' => 'lower(brd.code)','dt' => 12),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        FROM treglement reg 
        INNER JOIN toperationcab oprcab ON oprcab.id = reg.operation_id
        INNER JOIN tpreinscription pre ON pre.id = oprcab.preinscription_id
        INNER JOIN tetudiant etu ON etu.id = pre.etudiant_id
        INNER JOIN ac_annee an ON an.id = pre.annee_id
        LEFT JOIN ac_formation frm ON frm.id = an.formation_id
        LEFT JOIN ac_etablissement etab ON etab.id = frm.etablissement_id
        left join  xmodalites pae on pae.id = reg.paiement_id 
        left join  xbanque ban on ban.id = reg.banque_id
        left join  tbrdpaiement brd on brd.id = reg.bordereau_id $filtre ";
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
                $checked = "";
                if ($key == 0) {
                    $check = $this->em->getRepository(TReglement::class)->find($value);
                    if ((!empty($check->getBordereau())) OR ( $check->getImpayer() == '1')) {
                        $checked = " class='check_reg' disabled checked";
                    }
                    $value = '<input id="check" type="checkbox" data-id='.$value.' '.$checked.'/>';
                }
                $nestedData[] = $value;
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
    #[Route('/reglementprint/{reglement}', name: 'imprimer_reglement_reglement')]
    public function imprimer_reglement_reglement(TReglement $reglement)
    {
        $operationcab = $reglement->getOperation();
        $reglementTotal = $this->em->getRepository(TReglement::class)->getSumMontantByCodeFacture($operationcab);
        $operationTotal = $this->em->getRepository(TOperationdet::class)->getSumMontantByCodeFacture($operationcab);
        $inscription = $this->em->getRepository(TInscription::class)->findOneBy([
            'admission'=>$this->em->getRepository(TAdmission::class)->findBy([
                'preinscription'=>$operationcab->getPreinscription()])]);
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
            'margin_top' => 10,
        ]);
        $mpdf->WriteHTML($html);
        $mpdf->Output("Regleemnt.pdf", "I");
    }
    
    #[Route('/borderaux/{formation}/{paiement}', name: 'reglement_borderaux')]
    public function reglement_borderaux(Request $request, AcFormation $formation,XModalites $paiement): Response
    {   
        $ids = json_decode($request->get('ids_reglement'));
        $etablissement = $formation->getEtablissement();
        $modalite = $this->em->getRepository(XModalites::class)->find($paiement);
        $borderaux = new TBrdpaiement();
        $borderaux->setModalite($this->em->getRepository(XModalites::class)->find($paiement));
        $borderaux->setEtablissement($etablissement);
        // $borderaux->setMontant(Null);
        $borderaux->setCreated(new DateTime('now'));
        $borderaux->setUserCreated($this->getUser());
        $this->em->persist($borderaux);
        $this->em->flush();
        $borderaux->setCode($etablissement->getAbreviation().'-BER'.str_pad($borderaux->getId(), 6, '0', STR_PAD_LEFT).'/'.date('Y'));
        $this->em->flush();
        foreach ($ids as $id) {
            $reglement = $this->em->getRepository(TReglement::class)->find($id);
            if ($reglement->getModalite()->getId() == $paiement->getId()) {
                // dd('egal');
            }
            // dd('dont');
            $reglement->setBordereau($borderaux);
            $this->em->flush();
        }
        return new Response($borderaux->getId());
    }
    
    #[Route('/printborderaux/{borderaux}', name: 'printborderaux')]
    public function printborderaux(Request $request,TBrdpaiement $borderaux)
    {  
        $reglements = $borderaux->getReglements();
        $html = $this->render("facture/pdfs/borderaux.html.twig", [
            'borderaux' => $borderaux,
            'reglements' => $reglements,
        ])->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'margin_left' => '5',
            'margin_right' => '5',
            ]);
        $mpdf->SetTitle('Reglement De Facture');
        $mpdf->SetHTMLHeader(
            $this->render("facture/pdfs/header_borderaux.html.twig")->getContent()
        );
        $mpdf->SetHTMLFooter(
            $this->render("facture/pdfs/footer_borderaux.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->Output("Borderaux.pdf", "I");
    }
    
    #[Route('/creanceprint', name: 'creanceprint')]
    public function creanceprint(Request $request)
    {  
        $creances = $this->em->getRepository(TInscription::class)->getCreance();
        $html = $this->render("facture/pdfs/creance.html.twig", [
            'creances' => $creances,
        ])->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'margin_left' => '5',
            'margin_right' => '5',
            'margin_top' => '30',
        ]);
        
        $mpdf->SetHTMLHeader(
            $this->render("facture/pdfs/header_creance.html.twig")->getContent()
        );
        $mpdf->SetTitle('Creance');
        $mpdf->WriteHTML($html);
        $mpdf->Output("Creance.pdf", "I");

    }
    
}
