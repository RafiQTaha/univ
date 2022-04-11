<?php

namespace App\Controller\Inscription;

use Mpdf\Mpdf;
use App\Entity\PFrais;
use App\Entity\PStatut;
use App\Entity\POrganisme;
use App\Entity\TReglement;
use App\Entity\TInscription;
use App\Entity\TOperationcab;
use App\Entity\TOperationdet;
use App\Entity\AcEtablissement;
use App\Controller\ApiController;
use App\Controller\DatatablesController;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/inscription/gestion')]
class GestionInscriptionController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'gestion_inscription')]
    public function index(Request $request): Response
    {
         //check if user has access to this page
        $operations = ApiController::check($this->getUser(), 'gestion_inscription', $this->em, $request);
        if(!$operations) {
            return $this->render("errors/403.html.twig");

        }
        return $this->render('inscription/gestion_inscription.html.twig', [
            'etablissements' => $this->em->getRepository(AcEtablissement::class)->findAll(),
            'operations' => $operations
        ]);
    }
    
    #[Route('/list', name: 'gestion_inscription_list')]
    public function gestionInscriptionList(Request $request): Response
    {
        $params = $request->query;
        // dd($params);
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1 = 1";   
        // dd($params->get('columns')[0]);
        
        if (!empty($params->get('columns')[0]['search']['value'])) {
            // dd("in");
            $filtre .= " and etab.id = '" . $params->get('columns')[0]['search']['value'] . "' ";
        } 
        if (!empty($params->get('columns')[1]['search']['value'])) {
                $filtre .= " and form.id = '" . $params->get('columns')[1]['search']['value'] . "' ";
        }    
        if (!empty($params->get('columns')[2]['search']['value'])) {
            $filtre .= " and prom.id = '" . $params->get('columns')[2]['search']['value'] . "' ";
        }    
        if (!empty($params->get('columns')[3]['search']['value'])) {
            $filtre .= " and an.id = '" . $params->get('columns')[3]['search']['value'] . "' ";
        }    
        $columns = array(
            array( 'db' => 'ins.id','dt' => 0),
            array( 'db' => 'ins.code','dt' => 1),
            array( 'db' => 'etu.nom','dt' => 2),
            array( 'db' => 'etu.prenom','dt' => 3),
            array( 'db' => 'etu.cne','dt' => 4),
            array( 'db' => 'etu.cin','dt' => 5),
            array( 'db' => 'etab.abreviation','dt' => 6),
            array( 'db' => 'UPPER(form.abreviation)','dt' => 7),
            array( 'db' => 'UPPER(prom.designation)','dt' => 8),
            array( 'db' => 'LOWER(an.designation)','dt' => 9),
            array( 'db' => 'st.designation','dt' => 10),
           
            
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        
        FROM tinscription ins
        inner join tadmission ad on ad.id = ins.admission_id
        inner join tpreinscription pre on pre.id = ad.preinscription_id
        inner join tetudiant etu on etu.id = pre.etudiant_id
        inner join ac_annee an on an.id = ins.annee_id
        inner join ac_formation form on form.id = an.formation_id              
        inner join ac_etablissement etab on etab.id = form.etablissement_id 
        INNER JOIN pstatut st ON st.id = ins.statut_id
        inner join ac_promotion prom on prom.id = ins.promotion_id
        
        $filtre "
        ;
        // dd($sql);
        $totalRows .= $sql;
        $sqlRequest .= $sql;
        $stmt = $this->em->getConnection()->prepare($sql);
        $newstmt = $stmt->executeQuery();
        $totalRecords = count($newstmt->fetchAll());
        // dd($sql);
        $my_columns = DatatablesController::Pluck($columns, 'db');
            
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
            $nestedData[] = "<input type ='checkbox' class='check_admissible' id ='$cd' >";
            $nestedData[] = $cd;
            // dd($row);
            
            foreach (array_values($row) as $key => $value) {
                if($key > 0) {
                    $nestedData[] = $value;
                }
            }
            $nestedData["DT_RowId"] = $cd;
            $nestedData["DT_RowClass"] = $cd;
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
    #[Route('/getstatut/{inscription}', name: 'gestion_statut')]
    public function inscriptionStatut(TInscription $inscription): Response
    {
        $status = $this->em->getRepository(PStatut::class)->findBy(['table0' => 'Inscription']);
        $statutsHtml = ApiController::dropDownSelected($status, "statut", $inscription->getStatut());

        return new JsonResponse($statutsHtml);
    }
    #[Route('/updatestatut/{inscription}', name: 'gestion_statut_update')]
    public function inscriptionStatutUpdate(Request $request, TInscription $inscription): Response
    {
        $inscription->setStatut(
            $this->em->getRepository(PStatut::class)->find($request->get("statut_inscription"))
        );
        $this->em->flush();
        return new JsonResponse("Bien Enregistre", 200);
    }

    #[Route('/frais/{inscription}', name: 'getFraisByInscription')]
    public function getFraisByInscription(TInscription $inscription): Response
    {   
        $frais = $this->em->getRepository(PFrais::class)->findBy(["formation" => $inscription->getAnnee()->getFormation(), "categorie" => "inscription"]);
        $data = ApiController::dropdownData($frais,'frais');
        return new JsonResponse($data);        
    }
    #[Route('/info/{inscription}', name: 'getInformationByInscription')]
    public function getFraisByFormation(TInscription $inscription): Response
    {   
        $admission = $inscription->getAdmission();
        $etudiant = $admission->getPreinscription()->getEtudiant();
        $natutre = $etudiant->getNatureDemande();
        $annee = $admission->getPreinscription()->getAnnee();
        $formation =$annee->getFormation();
        $etablissement=$formation->getEtablissement();
        $donnee_frais = "<p><span>Etablissement</span> : ".$etablissement->getDesignation()."</p>
                        <p><span>Formation</span> : ".$formation->getDesignation()."</p>
                        <p><span>Categorie</span> : ".$natutre->getDesignation()."</p>
                        <p><span>Nom</span> : ".$etudiant->getNom()."</p>
                        <p><span>Prenom</span> : ".$etudiant->getPrenom()."</p>
                        <p><span>Cin</span> : ".$etudiant->getCin()."</p>
                        <p><span>Cne</span> : ".$etudiant->getCne()."</p>";
        return new JsonResponse($donnee_frais, 200);       
    }
    #[Route('/addfrais/{inscription}', name: 'inscription_addfrais')]
    public function inscriptionAddFrais(Request $request, TInscription $inscription): Response
    {
        // dd($request->get("organisme"));
        $arrayOfFrais = json_decode($request->get('frais'));
        // $operationCab = new TOperationcab();
        // $operationCab->setPreinscription($inscription->getAdmission()->getPreinscription());
        // $operationCab->setUserCretated($this->getUser());
        // if($request->get("organisme") != "") {
        //     $operationCab->setOrganisme(
        //         $this->em->getRepository(POrganisme::class)->find($request->get("organisme"))
        //     );
        // } else {
        //     $operationCab->setOrganisme(
        //         $this->em->getRepository(POrganisme::class)->find(7)
        //     );
        // }
        // $operationCab->setAnnee($inscription->getAnnee());
        // $operationCab->setCategorie('inscription');
        // $operationCab->setUserCreated($this->getUser());
        // $operationCab->setCreated(new \DateTime("now"));
        // $this->em->persist($operationCab);
        // $this->em->flush();
        // $operationCab->setCode(
        //     $inscription->getAnnee()->getFormation()->getEtablissement()->getAbreviation()."-FAC".str_pad($operationCab->getId(), 8, '0', STR_PAD_LEFT)."/".date('Y')
        // );
        // $this->em->flush();
        $preinscription = $inscription->getAdmission()->getPreinscription();
        $operationCab = $this->em->getRepository(TOperationcab::class)->findOneBy(['preinscription'=>$preinscription,'categorie'=>'inscription']);
        foreach ($arrayOfFrais as $fraisObject) {
            $frais =  $this->em->getRepository(PFrais::class)->find($fraisObject->id);
            $operationDet = new TOperationdet();
            $operationDet->setOperationcab($operationCab);
            $operationDet->setFrais($frais);
            $operationDet->setMontant($fraisObject->montant);
            $operationDet->setIce($fraisObject->ice);
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
        }

        return new JsonResponse($operationCab->getId(), 200);
    }
    #[Route('/facture/{operationcab}', name: 'inscription_facture')]
    public function factureInscription(Request $request, TOperationcab $operationcab): Response
    {
        $reglementTotal = $this->em->getRepository(TReglement::class)->getSumMontantByCodeFacture($operationcab);
        $operationTotal = $this->em->getRepository(TOperationdet::class)->getSumMontantByCodeFacture($operationcab);
        $operationTotal = $operationTotal == Null ? 0 : $operationTotal['total'];
        $reglementTotal = $reglementTotal == Null ? 0 : $reglementTotal['total'];
        $total = $operationTotal - $reglementTotal;
        // dd($reglementTotal, $operationTotal);
        $html = $this->render("facture/pdfs/facture.html.twig", [
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
}
