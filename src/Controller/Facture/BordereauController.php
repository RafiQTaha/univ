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
use App\Entity\XModalites;
use App\Entity\TBrdpaiement;
use App\Controller\ApiController;
use App\Controller\DatatablesController;
use Symfony\Component\HttpFoundation\JsonResponse;

#[Route('/facture/bordereau')]
class BordereauController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }

    #[Route('/', name: 'gestion_bordereaux')]
    public function index(Request $request): Response
    {
        $operations = ApiController::check($this->getUser(), 'gestion_bordereaux', $this->em, $request);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $etablissements = $this->em->getRepository(AcEtablissement::class)->findAll();
        $paiements = $this->em->getRepository(XModalites::class)->findAll();
        return $this->render('facture/bordereau.html.twig', [
            'operations' => $operations,
            'etablissements' => $etablissements,
            'paiements' => $paiements,
        ]);
    }
    
    #[Route('/list', name: 'list_facture_borderaux')]
    public function list_facture_borderaux(Request $request): Response
    {   
         
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1=1 ";
        
        if (!empty($params->all('columns')[0]['search']['value'])) {
            $filtre .= " and etab.id = '" . $params->all('columns')[0]['search']['value'] . "' ";
        }
        if (!empty($params->all('columns')[1]['search']['value'])) {
            $filtre .= " and pae.id = '" . $params->all('columns')[1]['search']['value'] . "' ";
        }
        $columns = array(
            array( 'db' => 'brd.id','dt' => 0 ),
            array( 'db' => 'brd.code','dt' => 1),
            array( 'db' => 'etab.abreviation','dt' => 2),
            array( 'db' => 'etab.designation','dt' => 3),
            array( 'db' => 'lower(pae.designation)','dt' => 4),
            array( 'db' => 'brd.montant','dt' => 5),
            array( 'db' => 'DATE_FORMAT(brd.created,"%Y-%m-%d")','dt' => 6),
            array( 'db' => 'user.username','dt' => 7),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        FROM tbrdpaiement brd 
        INNER JOIN xmodalites pae on pae.id = brd.modalite_id
        INNER join ac_etablissement etab on etab.id = brd.etablissement_id
        INNER join users user on  user.id = brd.user_created_id $filtre ";
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
                $checked = "";
                if ($key > 0) {
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
    
    #[Route('/print_borderaux/{borderaux}', name: 'print_borderaux')]
    public function printborderaux(TBrdpaiement $borderaux)
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
    
    #[Route('/supprimer_borderaux/{bordereau}', name: 'supprimer_borderau')]
    public function supprimerborderau(TBrdpaiement $bordereau)
    {  
        if(!$bordereau){
            return new JsonResponse('Bordereau Introuvable!', 500); 
        }
        $reglements = $bordereau->getReglements();
        if(count($reglements) > 1){
            foreach($reglements as $reglement){
                $reglement->setBordereau(Null);
            }
        }
        $this->em->remove($bordereau);
        $this->em->flush();
        return new JsonResponse('Bordereau Supprimé', 200); 
    }
}
