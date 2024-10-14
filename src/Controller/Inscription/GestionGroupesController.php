<?php

namespace App\Controller\Inscription;


use DateTime;
use App\Controller\ApiController;
use App\Controller\DatatablesController;
use App\Entity\AcEtablissement;
use App\Entity\AcPromotion;
use App\Entity\PGroupe;
use App\Entity\TInscription;
use Doctrine\Persistence\ManagerRegistry;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx as Reader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

#[Route('/inscription/groupes')]
class GestionGroupesController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'gestion_groupes')]
    public function index(Request $request): Response
    {
         //check if user has access to this page
        $operations = ApiController::check($this->getUser(), 'gestion_groupes', $this->em, $request);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        return $this->render('inscription/gestion_groupes.html.twig', [
            'etablissements' =>  $this->em->getRepository(AcEtablissement::class)->findBy(['active'=>1]),
            'operations' => $operations
        ]);
    }
    
    #[Route('/list', name: 'gestion_groupes_list')]
    public function gestionInscriptionList(Request $request): Response
    {
        $params = $request->query;
        // dd($params);
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1 = 1";   
        // dd($params->all('columns')[0]);
        
        if (!empty($params->all('columns')[0]['search']['value'])) {
            // dd("in");
            $filtre .= " and etab.id = '" . $params->all('columns')[0]['search']['value'] . "' ";
        } 
        if (!empty($params->all('columns')[1]['search']['value'])) {
                $filtre .= " and form.id = '" . $params->all('columns')[1]['search']['value'] . "' ";
        }    
        if (!empty($params->all('columns')[2]['search']['value'])) {
            $filtre .= " and prom.id = '" . $params->all('columns')[2]['search']['value'] . "' ";
        }    
        if (!empty($params->all('columns')[3]['search']['value'])) {
            $filtre .= " and an.id = '" . $params->all('columns')[3]['search']['value'] . "' ";
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
            array( 'db' => 'grp.niveau','dt' => 11),
           
            
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
        left join pgroupe grp on grp.id = ins.groupe_id 
        $filtre ";
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
        $changed_column = $params->all('order')[0]['column'] > 0 ? $params->all('order')[0]['column'] - 1 : 0;
        $sqlRequest .= " ORDER BY " .DatatablesController::Pluck($columns, 'db')[$changed_column] . "   " . $params->all('order')[0]['dir'] . "  LIMIT " . $params->get('start') . " ," . $params->get('length') . " ";
        // $sqlRequest .= DatatablesController::Order($request, $columns);
        
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
                    if ($key == 11) {
                        $nestedData[] = "<center><b>$value</b></center>";
                    }else {
                        $nestedData[] = $value;
                    }
                }
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

    #[Route('/affectation_canvas', name: 'affectation_canvas')]
    public function affectation_canvas(): Response
    {   
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'Inscription_id');
        $sheet->setCellValue('B1', 'Groupe_id');
        $writer = new Xlsx($spreadsheet);
        $fileName = 'affectation_canvas.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }

    #[Route('/groupes_canvas', name: 'groupes_canvas')]
    public function groupes_canvas(): Response
    {   
        $groupes = $this->em->getRepository(PGroupe::class)->findAll();
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'Id');
        $sheet->setCellValue('B1', 'Niveau');
        $i=2;
        foreach ($groupes as $groupe) {
            $sheet->setCellValue('A'.$i, $groupe->getId());
            $sheet->setCellValue('B'.$i, $groupe->getNiveau());
            $i++;
        }
        $writer = new Xlsx($spreadsheet);
        $fileName = 'groupes_canvas.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
    
    #[Route('/import_groupe', name: 'import_groupe')]
    public function import_groupe(Request $request, SluggerInterface $slugger): Response
    {
        $file = $request->files->get('file');
        if(!$file){
            return new JsonResponse('Prière d\'importer le fichier',500);
        }
        if($file->guessExtension() !== 'xlsx'){
            return new JsonResponse('Prière d\'enregister un fichier xlsx', 500);            
        }
        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        // this is needed to safely include the file name as part of the URL
        $safeFilename = $slugger->slug($originalFilename);
        $newFilename = $safeFilename.'-'.uniqid().'_'.$this->getUser()->getUsername().'.'.$file->guessExtension();

        // Move the file to the directory where brochures are stored
        try {
            $file->move(
                $this->getParameter('inscription_groupes_directory'),
                $newFilename
            );
        } catch (FileException $e) {
            throw new \Exception($e);
        }
        $reader = new reader();
        $spreadsheet = $reader->load($this->getParameter('inscription_groupes_directory').'/'.$newFilename);
        $worksheet = $spreadsheet->getActiveSheet();
        $spreadSheetArys = $worksheet->toArray();

        unset($spreadSheetArys[0]);
        $sheetCount = count($spreadSheetArys);
        if ($sheetCount == 0){
            return new Response('Inscription ou Niveau Introuvable!',500);
        }
        foreach ($spreadSheetArys as $sheet) {
            if($sheet[0] != Null){
                $inscription = $this->em->getRepository(TInscription::class)->find($sheet[0]);
                if ($inscription != Null) {
                    $inscription->setGroupe($this->em->getRepository(PGroupe::class)->find($sheet[1]));
                    $inscription->setUpdated(new DateTime('now'));
                    $inscription->setUserUpdated($this->getUser());
                }
            }else {
                return new Response('Inscription ou Niveau Introuvable!',200);
            }
        }
        $this->em->flush();
        return new Response('Inscription Bien Modifier!',200);
    }
    
    // #[Route('/exportbypromotion/{promotion}/{annee}', name: 'exportbypromotion')]
    // public function exportbypromotion($promotion,$annee): Response
    // {   
    //     $inscriptions = $this->em->getRepository(TInscription::class)->findBy(['promotion'=>$promotion,'annee'=>$annee]);
    //     if ($inscriptions == Null) {
    //         return new Response('Inscriptions Introuvable!!',500);
    //     }
    //     $spreadsheet = new Spreadsheet();
    //     $sheet = $spreadsheet->getActiveSheet();
    //     $sheet->setCellValue('A1', 'Id');
    //     $sheet->setCellValue('B1', 'Code Inscription');
    //     $sheet->setCellValue('C1', 'Nom');
    //     $sheet->setCellValue('D1', 'Prenom');
    //     $sheet->setCellValue('E1', 'Etablissement');
    //     $sheet->setCellValue('F1', 'Formation');
    //     $sheet->setCellValue('G1', 'Promotion');
    //     $sheet->setCellValue('H1', 'Année');
    //     $sheet->setCellValue('I1', 'Niveau1');
    //     $sheet->setCellValue('J1', 'Niveau2');
    //     $sheet->setCellValue('K1', 'Niveau3');
    //     $i=2;
    //     foreach ($inscriptions as $inscription) {
    //         $sheet->setCellValue('A'.$i, $inscription->getId());
    //         $sheet->setCellValue('B'.$i, $inscription->getCode());
    //         $sheet->setCellValue('C'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getNom());
    //         $sheet->setCellValue('D'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getPrenom());
    //         $sheet->setCellValue('E'.$i, $inscription->getPromotion()->getFormation()->getEtablissement()->getDesignation());
    //         $sheet->setCellValue('F'.$i, $inscription->getPromotion()->getFormation()->getDesignation());
    //         $sheet->setCellValue('G'.$i, $inscription->getPromotion()->getDesignation());
    //         $sheet->setCellValue('H'.$i, $inscription->getAnnee()->getDesignation());
    //         if ($inscription->getGroupe() != Null) {
    //             if ($inscription->getGroupe()->getGroupe() == Null) {
    //                 $sheet->setCellValue('I'.$i, $inscription->getGroupe()->getNiveau());
    //             }elseif ($inscription->getGroupe()->getGroupe()->getGroupe() == Null) {
    //                 $sheet->setCellValue('I'.$i, $inscription->getGroupe()->getGroupe()->getNiveau());
    //                 $sheet->setCellValue('J'.$i, $inscription->getGroupe()->getNiveau());
    //             }else {
    //                 $sheet->setCellValue('I'.$i, $inscription->getGroupe()->getGroupe()->getGroupe()->getNiveau());
    //                 $sheet->setCellValue('J'.$i, $inscription->getGroupe()->getGroupe()->getNiveau());
    //                 $sheet->setCellValue('K'.$i, $inscription->getGroupe()->getNiveau());
    //             }
    //         }
    //         $i++;
    //     }
    //     $writer = new Xlsx($spreadsheet);
    //     $fileName = 'Inscriptions.xlsx';
    //     $temp_file = tempnam(sys_get_temp_dir(), $fileName);
    //     $writer->save($temp_file);
    //     return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    // }
    #[Route('/exportAllgroupes', name: 'exportAllgroupes')]
    public function exportAllgroupes(): Response
    {   
        $current_year = date('m') > 7 ? $current_year = date('Y').'/'.date('Y')+1 : $current_year = date('Y') - 1 .'/' .date('Y');
        $inscriptions = $this->em->getRepository(TInscription::class)->getActiveInscriptionByCurrentAnnee($current_year);
        // $inscriptions = $this->em->getRepository(TInscription::class)->findBy(['annee'=>$annee,'statut'=>13]);
        if ($inscriptions == Null) {
            return new Response('Inscriptions Introuvable!!',500);
        }
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'Id');
        $sheet->setCellValue('B1', 'Code Pre-Inscription');
        $sheet->setCellValue('C1', 'Code Admission');
        $sheet->setCellValue('D1', 'ID Inscription'); // Nouvelle colonne ajoutée
        $sheet->setCellValue('E1', 'Code Inscription');
        $sheet->setCellValue('F1', 'Nom');
        $sheet->setCellValue('G1', 'Prenom');
        $sheet->setCellValue('H1', 'Cin');
        $sheet->setCellValue('I1', 'DateNaissance');
        $sheet->setCellValue('J1', 'LieuNaissance');
        $sheet->setCellValue('K1', 'Sexe');
        $sheet->setCellValue('L1', 'Adresse');
        $sheet->setCellValue('M1', 'Tel');
        $sheet->setCellValue('N1', 'Email');
        $sheet->setCellValue('O1', 'Nationalité');
        $sheet->setCellValue('P1', 'Etablissement');
        $sheet->setCellValue('Q1', 'Formation');
        $sheet->setCellValue('R1', 'Promotion');
        $sheet->setCellValue('S1', 'Année');
        $sheet->setCellValue('T1', 'Niveau1');
        $sheet->setCellValue('U1', 'Niveau2');
        $sheet->setCellValue('V1', 'Niveau3');
        $sheet->setCellValue('W1', 'STATUT');

        $i=2;
        foreach ($inscriptions as $inscription) {
            $sheet->setCellValue('A'.$i, $inscription->getId());
            $sheet->setCellValue('B'.$i, $inscription->getAdmission()->getPreinscription()->getCode());
            $sheet->setCellValue('C'.$i, $inscription->getAdmission()->getCode());
            $sheet->setCellValue('D'.$i, $inscription->getId()); // Ajout de la nouvelle colonne "ID Inscription"
            $sheet->setCellValue('E'.$i, $inscription->getCode()); // Décalage de la colonne "Code Inscription"
            $sheet->setCellValue('F'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getNom());
            $sheet->setCellValue('G'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getPrenom());
            $sheet->setCellValue('H'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getCin());

            if ($inscription->getAdmission()->getPreinscription()->getEtudiant()->getDateNaissance() != null) {
                $sheet->setCellValue('I'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getDateNaissance()->format('d-m-Y'));
            }

            $sheet->setCellValue('J'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getLieuNaissance());
            $sheet->setCellValue('K'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getSexe());
            $sheet->setCellValue('L'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getAdresse());
            $sheet->setCellValue('M'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getTel1());
            $sheet->setCellValue('N'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getMail1());
            $sheet->setCellValue('O'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getNationalite());

            // Promotion et formation
            $sheet->setCellValue('P'.$i, $inscription->getPromotion()->getFormation()->getEtablissement()->getDesignation());
            $sheet->setCellValue('Q'.$i, $inscription->getPromotion()->getFormation()->getDesignation());
            $sheet->setCellValue('R'.$i, $inscription->getPromotion()->getDesignation());
            $sheet->setCellValue('S'.$i, $inscription->getAnnee()->getDesignation());

            // Gestion des niveaux
            if ($inscription->getGroupe() != null) {
                if ($inscription->getGroupe()->getGroupe() == null) {
                    $sheet->setCellValue('T'.$i, $inscription->getGroupe()->getNiveau());
                } elseif ($inscription->getGroupe()->getGroupe()->getGroupe() == null) {
                    $sheet->setCellValue('T'.$i, $inscription->getGroupe()->getGroupe()->getNiveau());
                    $sheet->setCellValue('U'.$i, $inscription->getGroupe()->getNiveau());
                } else {
                    $sheet->setCellValue('T'.$i, $inscription->getGroupe()->getGroupe()->getGroupe()->getNiveau());
                    $sheet->setCellValue('U'.$i, $inscription->getGroupe()->getGroupe()->getNiveau());
                    $sheet->setCellValue('V'.$i, $inscription->getGroupe()->getNiveau());
                }
            }

            // Statut
            $sheet->setCellValue('W'.$i, $inscription->getStatut()->getDesignation());
            $i++;
        }
        $writer = new Xlsx($spreadsheet);
        $fileName = 'Inscriptions Groupe.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }

    
}
