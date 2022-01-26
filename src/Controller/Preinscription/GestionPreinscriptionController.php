<?php

namespace App\Controller\Preinscription;

use DateTime;
use Mpdf\Mpdf;
use App\Entity\PFrais;
use App\Entity\PStatut;
use App\Entity\POrganisme;
use App\Entity\TOperation;
use App\Entity\TOperationcab;
use App\Entity\TRegelement;
use App\Entity\AcEtablissement;
use App\Entity\TOperationdet;
use App\Entity\PDocument;
use App\Entity\TPreinscription;
use App\Entity\NatureDemande;
use App\Entity\User;
use App\Controller\ApiController;
use App\Controller\DatatablesController;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/preinscription/gestion')]
class GestionPreinscriptionController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }

    #[Route('/', name: 'gestion_preinscription')]
    public function gestion_preinscription(): Response
    {   
        $etbalissements = $this->em->getRepository(AcEtablissement::class)->findAll();
        $natures = $this->em->getRepository(NatureDemande::class)->findAll();
        $operations = ApiController::check($this->getUser(), 'gestion_preinscription', $this->em);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        return $this->render('preinscription/gestion_preinscription.html.twig',[
            'etablissements' => $etbalissements,
            'natures' => $natures,
            'operations' => $operations
        ]);
    }
    #[Route('/list/gestion_preinscription', name: 'list/gestion_preinscription')]
    public function list_gestion_preinscription(Request $request): Response
    {   
         
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1=1 AND inscription_valide = '1' ";
        
        if (!empty($params->get('columns')[0]['search']['value'])) {
            // dd("in");
            $filtre .= " and etab.id = '" . $params->get('columns')[0]['search']['value'] . "' ";
        }

        if (!empty($params->get('columns')[1]['search']['value'])) {
            $filtre .= " and form.id = '" . $params->get('columns')[1]['search']['value'] . "' ";
        }    
        if (!empty($params->get('columns')[2]['search']['value'])) {
            $filtre .= " and nat.id = '" . $params->get('columns')[2]['search']['value'] . "' ";
        }  

        $columns = array(
            array( 'db' => 'pre.id','dt' => 0 ),
            array( 'db' => 'pre.code','dt' => 1),
            array( 'db' => 'etu.nom','dt' => 2),
            array( 'db' => 'etu.prenom','dt' => 3),
            array( 'db' => 'etab.abreviation','dt' => 4),
            array( 'db' => 'UPPER(form.abreviation)','dt' => 5),
            array( 'db' => 'UPPER(nat.designation)','dt' => 6),
            array( 'db' => 'tbac.designation','dt' => 7),
            array( 'db' => 'etu.moyenne_bac','dt' => 8),
            array( 'db' => 'UPPER(stat.designation)','dt' => 10),
            array( 'db' => 'nbr.nbrIns','dt' => 11),
            array( 'db' => 'DATE_FORMAT(pre.created,"%Y-%m-%d")','dt' => 12),
        );
        // SELECT pre.code , etu.nom , etu.prenom , frm.abreviation as for_abreviation , etab.abreviation as etab_abreviation , nat.designation as categorie, tbac.designation as typdes, etu.moyenne_bac as note , DATE_FORMAT(pre.created,'%d/%m/%Y') as date_creation,stat.code 
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        FROM `tpreinscription` pre 
        inner join tetudiant etu on etu.id = pre.etudiant_id
        inner join ac_annee an on an.id = pre.annee_id
        inner join ac_formation form on form.id = an.formation_id
        inner join ac_etablissement etab on etab.id = form.etablissement_id
        left join xtype_bac tbac on tbac.id = etu.type_bac_id 
        left join nature_demande nat on nat.id = etu.nature_demande_id 
        inner join pstatut stat on stat.id = pre.statut_id
        LEFT JOIN (SELECT etudiant_id,COUNT(code) AS nbrIns FROM tpreinscription WHERE etudiant_id IS NOT NULL GROUP BY etudiant_id ) nbr ON nbr.etudiant_id = pre.etudiant_id 
                $filtre"
        ;
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
            // dump($row);
            $nestedData = array();
            $cd = $row['id'];
            // $nestedData[] = $cd;
            $nestedData[] = "<input type ='checkbox' class='check_preins' id ='$cd' >";
            $k = 0;
            $etat_bg="";
            foreach (array_values($row) as $key => $value) {
                if($k == 9) {
                    $sqls="SELECT (CASE WHEN EXISTS (SELECT cab.code FROM toperationcab cab INNER JOIN tregelement reg ON reg.operation_id = cab.id WHERE cab.preinscription_id = ".$row['id'].") THEN 'Reglé' WHEN EXISTS (SELECT cab2.code FROM toperationcab cab2 LEFT JOIN tregelement reg2 ON reg2.operation_id = cab2.id WHERE cab2.preinscription_id = ".$row['id']." ANd reg2.operation_id IS NULL) THEN 'Facturé' ELSE 'N.Facturé' END ) AS facture";
                    $stmts = $this->em->getConnection()->prepare($sqls);
                    $resultSets = $stmts->executeQuery();
                    $etat = $resultSets->fetchAll();
                    if ($etat[0]['facture'] === 'N.Facturé') {
                        $etat_bg = 'etat_bg_nf';
                    }elseif ($etat[0]['facture'] === 'Reglé') {
                        $etat_bg = 'etat_bg_reg';
                    }
                    $nestedData[] = $etat[0]['facture'];
                } 
                $nestedData[] = $value;
                $k++;
            }
            // $nestedData[] ='nbr';
            // $nestedData[] = 'date';
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

    #[Route('/annulation_preinscription', name: 'annulation_preinscription')]
    public function annulation_preinscription(Request $request)
    {   
        $ids = json_decode($request->get('idpreins'));
        foreach ($ids as $id) {
            $preinscription = $this->em->getRepository(TPreinscription::class)->find($id);
            $preinscription->setInscriptionValide(0);
            $preinscription->setUserUpdated($this->getUser());
            $preinscription->setUpdated(New DateTime('now'));
        }
        $this->em->flush();
        return new Response(json_encode(1));
    }
    
    #[Route('/admission_preinscription', name: 'admission_preinscription')]
    public function admissionPreinscription(Request $request): Response
    {
        $ids = json_decode($request->get('idpreins'));
        foreach ($ids as $id) {
            $preinscription = $this->em->getRepository(TPreinscription::class)->find($id);
            $preinscription->setCategorieListe(
                $this->em->getRepository(PStatut::class)->find(1)
            );
            $preinscription->setAdmissionListe(
                $this->em->getRepository(PStatut::class)->find(5)
            );
            $this->em->flush();
        }
        return new JsonResponse('Admission bien enregister', 200);
    }

    #[Route('/frais_preins_modals/{id}', name: 'frais_preins_modals')]
    public function frais_preins_modals(Request $request,TPreinscription $preinscription): Response
    {   
        $etudiant = $preinscription->getEtudiant();
        $natutre = $etudiant->getNatureDemande();
        $annee = $preinscription->getAnnee();
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

    #[Route('/article_frais/{id}', name: 'article_frais')]
    public function article_frais(Request $request,TPreinscription $preinscription): Response
    {   
        $formation = $preinscription->getAnnee()->getFormation();
        $frais = $this->em->getRepository(PFrais::class)->findBy(['formation'=>$formation,'categorie'=>'Pré-inscription']);
        $data = "<option selected enabled>Choix Fraix</option>";
        foreach ($frais as $frs) {
            $data .="<option value=".$frs->getId()." data-id=".$frs->getmontant().">".$frs->getDesignation()."</option>";
        }
        return new JsonResponse($data, 200);
    }

    #[Route('/addfrais/{id}', name: 'addfrais')]
    public function addfrais(Request $request,TPreinscription $preinscription): Response
    {   
        $ids = json_decode($request->get('frais'));
        $operationcab = new TOperationcab();
        $operationcab->setPreinscription($preinscription);
        $operationcab->setAnnee($preinscription->getAnnee());
        $operationcab->setOrganisme($this->em->getRepository(POrganisme::class)->find(7));
        $operationcab->setCategorie('pré-inscription');
        $operationcab->setCreated(new DateTime('now'));
        $operationcab->setUserCreated($this->getUser());
        $this->em->persist($operationcab);
        $this->em->flush();
        $etab = $preinscription->getAnnee()->getFormation()->getEtablissement()->getAbreviation();
        $operationcab->setCode($etab.'-FAC'.str_pad($operationcab->getId(), 8, '0', STR_PAD_LEFT).'/'.date('Y'));
        $this->em->flush();
        foreach($ids as $idfrais){
            $operationdet = new TOperationdet();
            $operationdet->setOperationcab($operationcab);
            $operationdet->setFrais($this->em->getRepository(PFrais::class)->find($idfrais->id));
            $operationdet->setMontant($idfrais->montant);
            $operationdet->setRemise(0);
            $operationdet->setCreated(new DateTime('now'));
            $operationdet->setUpdated(new DateTime('now'));
            $this->em->persist($operationdet);
            $this->em->flush();
            $operationdet->setCode('OPD'.str_pad($operationdet->getId(), 8, '0', STR_PAD_LEFT));
            $this->em->flush();
        };
        return new JsonResponse($operationcab->getId(), 200);
    }

    #[Route('/getdoc_preinscription/{id}', name: 'getdoc_preinscription')]
    public function getdoc_preinscription(Request $request,TPreinscription $preinscription): Response
    {
        // $documentsExists = $this->em->getRepository(TPreinscription::class)->findBy(['preinscription' => $admission->getPreinscription()]);
        $documentsExists = $preinscription->getDocuments();
        $etablissement = $preinscription->getAnnee()->getFormation()->getEtablissement();
        if(count($documentsExists) > 0) {
            $documents = $this->em->getRepository(PDocument::class)->getDocumentDoesNotExistPreisncriptions($preinscription, $etablissement);
        } else {
            $documents = $this->em->getRepository(PDocument::class)->findBy(['etablissement'=>$etablissement,'attribution'=>'PREINSCRIPTION','active'=>1]);
        }
        // dd($documentsExists);
        $documentHtml = "";
        $documentExistHtml = "";
        foreach ($documentsExists as $documentsExist) {
            $documentExistHtml .= '
            <li class="ms-elem-selection" id="'.$documentsExist->getId().'" >
                <span> '.$documentsExist->getDesignation().' </span>
            </li>';
        }
        foreach ($documents as $document) {
            $documentHtml .= '
            <li class="ms-elem-selectable" id="'.$document->getId().'">
                <span> '.$document->getDesignation().' </span>
            </li>';
            
        }
        
        return new JsonResponse(['documents' => $documentHtml, 'documentsExists' => $documentExistHtml], 200);
    }
    
    #[Route('/adddocuments_preins', name: 'adddocuments_preins')]
    public function adddocuments_preins(Request $request): Response
    {
        $preinscription = $this->em->getRepository(TPreinscription::class)->find($request->get('idPreinscription'));
        $preinscription->addDocument($this->em->getRepository(PDocument::class)->find($request->get('idDocument')));
        $this->em->flush();
        return new JsonResponse('Bien Enregistre', 200);
    }

    #[Route('/deletedocuments_preins', name: 'deletedocuments_preins')]
    public function deletedocuments_preins(Request $request): Response
    {
        $preinscription = $this->em->getRepository(TPreinscription::class)->find($request->get('idPreinscription'));
        $preinscription->removeDocument($this->em->getRepository(PDocument::class)->find($request->get('idDocument')));
        $this->em->flush();
        return new JsonResponse('Bien Supprimer', 200);
    }

    #[Route('/attestation_preinscription/{preinscription}', name: 'attestation_preinscription')]
    public function attestationpreinscription(Request $request, TPreinscription $preinscription): Response
    {
        $html = $this->render("attestaion/pdfs/preinscription.html.twig", [
            'preinscription' => $preinscription,
            'annee' => $preinscription->getAnnee(),
            'etablissement' => $preinscription->getAnnee()->getFormation()->getEtablissement(),
            'formation' => $preinscription->getAnnee()->getFormation(),
            'etudiant' => $preinscription->getEtudiant(),
        ])->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'margin_left' => '5',
            'margin_right' => '5',
            ]);
        // $mpdf->SetTitle('Attestation de pré-inscription '.$preinscription->getEtudiant()->getNom().' '.$preinscription->getEtudiant()->getPrenom());
        $mpdf->SetTitle('Attestation de Pré-Inscription');
        $mpdf->SetHTMLHeader(
            $this->render("attestaion/pdfs/header.html.twig")->getContent()
        );
        $mpdf->SetHTMLFooter(
            $this->render("attestaion/pdfs/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->Output("attestaion.pdf", "I");
    }

    #[Route('/facture/{operationcab}', name: 'preinscription_facture')]
    public function preinscriptionFacture(Request $request, TOperationcab $operationcab): Response
    {
        $reglementTotal = $this->em->getRepository(TRegelement::class)->getSumMontantByCodeFacture($operationcab);
        $operationTotal = $this->em->getRepository(TOperationdet::class)->getSumMontantByCodeFacture($operationcab);
        // dd($reglement, $operationDetails);
        $html = $this->render("facture/pdfs/facture.html.twig", [
            'reglementTotal' => $reglementTotal,
            'operationTotal' => $operationTotal,
            'operationcab' => $operationcab
        ])->getContent();
        $mpdf = new Mpdf();
        $mpdf->SetTitle('Facture');
        $mpdf->SetHTMLHeader(
            $this->render("facture/pdfs/header.html.twig")->getContent()
        );
        $mpdf->SetHTMLFooter(
            $this->render("facture/pdfs/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->Output("facture.pdf", "I");
    }
    
    #[Route('/test/{id}', name: 'test')]
    public function test(Request $request): Response
    {
        
            dd('');
    }

    
}
