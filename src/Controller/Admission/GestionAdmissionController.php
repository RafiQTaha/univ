<?php

namespace App\Controller\Admission;

use App\Entity\TAdmission;
use App\Controller\DatatablesController;
use App\Entity\PDocument;
use App\Entity\TAdmissionDocument;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/admission/gestion')]

class GestionAdmissionController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'gestion_admission')]
    public function index(): Response
    {
        return $this->render('admission/gestion_admission.html.twig');
    }
    #[Route('/list', name: 'gestion_admission_list')]
    public function gestionAdmissionList(Request $request): Response
    {
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1 = 1";       
        $columns = array(
            array( 'db' => 'ad.code','dt' => 0),
            array( 'db' => 'UPPER(pre.code)','dt' => 1),
            array( 'db' => 'etu.nom','dt' => 2),
            array( 'db' => 'etu.prenom','dt' => 3),
            array( 'db' => 'etab.abreviation','dt' => 4),
            array( 'db' => 'UPPER(form.abreviation)','dt' => 5),
            array( 'db' => 'tab.montant','dt' => 6),
            array( 'db' => 'st.designation','dt' => 7),
            array( 'db' => 'ad.id','dt' => 8)

        );
        $filtre .= " AND adm.statut_id = 7";
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
                      
                FROM tadmission ad
                inner join tpreinscription pre on pre.id = ad.preinscription_id
                inner join tetudiant etu on etu.id = pre.etudiant_id
                inner join ac_annee an on an.id = pre.annee_id
                inner join ac_formation form on form.id = an.formation_id              
                inner join ac_etablissement etab on etab.id = form.etablissement_id 
                INNER JOIN pstatut st ON st.id = ad.statut_id
                LEFT JOIN tadmission adm on adm.preinscription_id = pre.id
                LEFT JOIN (SELECT adm.id id_admission,SUM(det.montant) montant 
                    FROM toperationcab cab 
                    INNER JOIN tadmission adm ON adm.preinscription_id = cab.preinscription_id
                    INNER JOIN toperationdet det ON cab.id = det.operationcab_id 
                    INNER JOIN ac_annee an ON an.id = cab.annee_id 
                    GROUP BY adm.id) tab ON tab.id_admission = adm.id

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
                if($key == 7) {
                    $nestedData[] = count($this->em->getRepository(TAdmission::class)->find($row['id'])->getInscriptions()) > 0 ? 'Inscrit' : 'Non Inscrit';
                    $nestedData[] = $value;
                }
                else if($key < 8) {
                    $nestedData[] = $value;
                }
            }
            if($row['montant'] == '') {
                $cd .= ' etat_bg_nf';
            } else {
                $cd .= ' etat_bg_reg';
            }
            $nestedData["DT_RowId"] = $row['id'];
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
    #[Route('/getdocuments/{admission}', name: 'admission_getdocuments')]
    public function admissionGetdocuments(Request $request, TAdmission $admission): Response
    {
        $documentsExists = $this->em->getRepository(TAdmissionDocument::class)->findBy(['preinscription' => $admission->getPreinscription()]);
        // if(count($documentsExists) > 0) {
        //     $documents = $this->em->getRepository(PDocument::class)->getDocmentDoesNotExist($admission);
        // } else {
        $documents = $this->em->getRepository(PDocument::class)->findAllBy($admission);
        // }
        $documentHtml = "";
        $documentExistArray = [];
        foreach ($documentsExists as $documentsExist) {
            array_push($documentExistArray, $documentsExist->getDocument()->getId());
         }
        foreach ($documents as $document) {
            if(in_array($document->getId(), $documentExistArray)) {
                $documentHtml .= "<option value='".$document->getId()."' selected> ".$document->getDesignation()." </option>";
            } else {
                $documentHtml .= "<option value='".$document->getId()."'> ".$document->getDesignation()." </option>";
            }
        }
        
        return new JsonResponse(['documents' => $documentHtml, 'documentsExists' => $documentExistArray], 200);
    }
    #[Route('/adddocuments', name: 'admission_adddocuments')]
    public function addDocuments(Request $request): Response
    {
        $admission = $this->em->getRepository(TAdmission::class)->find($request->get('idAdmission'));
        $documentsId = json_decode($request->get('documents'));
        $notSelectedDocumentsId = json_decode($request->get('notselecteddocuments'));
        dd($notSelectedDocumentsId);
        $documentsDisponible = $admission->getPreinscription()->getAdmissionDocuments();
        if(count($documentsId) == 0) {
            foreach ($documentsDisponible as $documentDelete) {
                $this->em->remove($documentDelete);
                $this->em->flush();
            }
        } else {
            foreach ($documentsId as $documentId) {
                $document = $this->em->getRepository(PDocument::class)->find($documentId);
                $existDocument = $this->em->getRepository(TAdmissionDocument::class)->findBy(['preinscription' => $admission->getPreinscription(), 'document' => $document]);
                if(!$existDocument) {
                    $admissionDocument = new TAdmissionDocument();
                    $admissionDocument->setPreinscription($admission->getPreinscription());
                    $admissionDocument->setDocument($document);
                    $this->em->persist($admissionDocument);
                    $this->em->flush();
                    $admissionDocument->setCode('DIN'.str_pad($admissionDocument->getId(), 8, '0', STR_PAD_LEFT));
                    $this->em->flush();
                }
            }
            return new JsonResponse('Bien Enregistre', 200);
        }

    }
}
