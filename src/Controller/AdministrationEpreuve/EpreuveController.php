<?php

namespace App\Controller\AdministrationEpreuve;

use Mpdf\Mpdf;
use ZipArchive;
use App\Entity\AcAnnee;
use App\Entity\PStatut;
use App\Entity\ExGnotes;
use App\Entity\ExMnotes;
use App\Entity\AcElement;
use App\Entity\AcEpreuve;
use App\Entity\PEnseignant;
use App\Entity\TInscription;
use App\Entity\PNatureEpreuve;
use App\Entity\AcEtablissement;
use App\Controller\ApiController;
use App\Controller\DatatablesController;
use DateTime;
use Doctrine\Persistence\ManagerRegistry;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx as reader;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

#[Route('/administration/epreuve')]

class EpreuveController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
        
    }
    #[Route('/', name: 'administration_epreuve')]
    public function index(Request $request): Response
    {
        //check if user has access to this page
        $operations = ApiController::check($this->getUser(), 'administration_epreuve', $this->em, $request);
        if(!$operations) {
            return $this->render("errors/403.html.twig");

        }
        $etablissements =  $this->em->getRepository(AcEtablissement::class)->findBy(['active'=>1]);
        $natureEpreuves = $this->em->getRepository(PNatureEpreuve::class)->findAll();
        $enseignants = $this->em->getRepository(PEnseignant::class)->findAll();
        return $this->render('administration_epreuve/epreuve.html.twig', [
            'operations' => $operations,
            'etablissements' => $etablissements,
            'natureEpreuves' => $natureEpreuves,
            'enseignants' => $enseignants,
        ]);
        
    }

    #[Route('/list/normal', name: 'administration_epreuve_list_normal')]
    public function epreuveListNormal(Request $request): Response
    {
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1 = 1 and an.validation_academique = 'non' and nepv.nature = 'normale'";   
        // dd($params->all('columns')[0]);
        
        // if (!empty($params->all('columns')[0]['search']['value'])) {
        //     // dd("in");
        //     $filtre .= " and etab.id = '" . $params->all('columns')[0]['search']['value'] . "' ";
        // } 
        // if (!empty($params->all('columns')[1]['search']['value'])) {
        //         $filtre .= " and form.id = '" . $params->all('columns')[1]['search']['value'] . "' ";
        // }    
        // if (!empty($params->all('columns')[2]['search']['value'])) {
        //     $filtre .= " and prom.id = '" . $params->all('columns')[2]['search']['value'] . "' ";
        // }    
        // if (!empty($params->all('columns')[3]['search']['value'])) {
        //     $filtre .= " and an.id = '" . $params->all('columns')[3]['search']['value'] . "' ";
        // }   
        
        if (!empty($params->all('columns')[0]['search']['value'])) {
            $filtre .= " and etab.id = '" . $params->all('columns')[0]['search']['value'] . "' ";
        }
        if (!empty($params->all('columns')[1]['search']['value'])) {
            $filtre .= " and frm.id = '" . $params->all('columns')[1]['search']['value'] . "' ";
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
            $filtre .= " and ele.id = '" . $params->all('columns')[5]['search']['value'] . "' ";
        }   
        if (!empty($params->all('columns')[6]['search']['value'])) {
            $filtre .= " and epv.date_epreuve = '" . $params->all('columns')[6]['search']['value'] . "' ";
        }

        $columns = array(
            array( 'db' => 'epv.id','dt' => 0),
            array( 'db' => 'right (epv.code , 10)','dt' => 1),
            array( 'db' => 'epv.date_epreuve','dt' => 2),
            array( 'db' => 'nepv.abreviation','dt' => 3),
            array( 'db' => 'left(mdl.designation , 8)','dt' => 4),
            array( 'db' => 'left(ele.designation , 8)','dt' => 5),
            array( 'db' => 'UPPER(etab.abreviation)','dt' => 6),
            array( 'db' => 'UPPER(frm.abreviation)','dt' => 7),
            array( 'db' => 'UPPER(prm.designation)','dt' => 8),
            array( 'db' => 'CONCAT(ens.nom," ",ens.prenom)','dt' => 9),
            array( 'db' => 'st.designation','dt' => 10),
            array( 'db' => 'users.username','dt' => 11), 
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        
        FROM ac_epreuve epv 
        left join users on users.id = epv.user_created_id
        INNER JOIN ac_element ele ON ele.id = epv.element_id
        INNER JOIN ac_module mdl ON mdl.id = ele.module_id
        INNER JOIN ac_semestre sem ON sem.id = mdl.semestre_id
        INNER JOIN ac_promotion prm ON prm.id = sem.promotion_id
        INNER JOIN ac_formation frm ON frm.id = prm.formation_id
        INNER JOIN ac_etablissement etab ON etab.id = frm.etablissement_id
        INNER JOIN ac_annee an ON an.id = epv.annee_id
        left JOIN ac_epreuve_penseignant epvens ON epvens.ac_epreuve_id = epv.id
        left JOIN penseignant ens ON ens.id = epvens.penseignant_id
        INNER JOIN pnature_epreuve nepv ON nepv.id = epv.nature_epreuve_id  
        INNER JOIN pstatut st on st.id = epv.statut_id
    
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
        // dd($sql);
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
            $username = "";
            // dd($row);
            
            foreach (array_values($row) as $key => $value) {
                if($key > 0) {
                    $nestedData[] = $value;
                }
            }
            $epv = $this->em->getRepository(AcEpreuve::class)->find($cd);
            if ($epv->getUserValidated() != null && $epv->getStatut()->getId() == 30) {
                $username = $this->em->getRepository(AcEpreuve::class)->find($cd)->getUserValidated()->getUsername();
            }
            $nestedData[] = $username;
            $nestedData["DT_RowId"] = $cd;
            $nestedData["DT_RowClass"] = '';
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
    #[Route('/list/rattrapage', name: 'administration_epreuve_list_rattrapage')]
    public function epreuveListRattrapage(Request $request): Response
    {
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1 = 1 and an.validation_academique = 'non' and nepv.nature = 'rattrapage'";   
        // dd($params->all('columns')[0]);
        
        // if (!empty($params->all('columns')[0]['search']['value'])) {
        //     // dd("in");
        //     $filtre .= " and etab.id = '" . $params->all('columns')[0]['search']['value'] . "' ";
        // } 
        // if (!empty($params->all('columns')[1]['search']['value'])) {
        //         $filtre .= " and form.id = '" . $params->all('columns')[1]['search']['value'] . "' ";
        // }    
        // if (!empty($params->all('columns')[2]['search']['value'])) {
        //     $filtre .= " and prom.id = '" . $params->all('columns')[2]['search']['value'] . "' ";
        // }    
        // if (!empty($params->all('columns')[3]['search']['value'])) {
        //     $filtre .= " and an.id = '" . $params->all('columns')[3]['search']['value'] . "' ";
        // }
        
        if (!empty($params->all('columns')[0]['search']['value'])) {
            $filtre .= " and etab.id = '" . $params->all('columns')[0]['search']['value'] . "' ";
        }
        if (!empty($params->all('columns')[1]['search']['value'])) {
            $filtre .= " and frm.id = '" . $params->all('columns')[1]['search']['value'] . "' ";
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
            $filtre .= " and ele.id = '" . $params->all('columns')[5]['search']['value'] . "' ";
        }   
        if (!empty($params->all('columns')[6]['search']['value'])) {
            $filtre .= " and epv.date_epreuve = '" . $params->all('columns')[6]['search']['value'] . "' ";
        }

        $columns = array(
            array( 'db' => 'epv.id','dt' => 0),
            array( 'db' => 'right (epv.code , 10)','dt' => 1),
            array( 'db' => 'epv.date_epreuve','dt' => 2),
            array( 'db' => 'nepv.abreviation','dt' => 3),
            array( 'db' => 'left(mdl.designation , 8)','dt' => 4),
            array( 'db' => 'left(ele.designation , 8)','dt' => 5),
            array( 'db' => 'UPPER(etab.abreviation)','dt' => 6),
            array( 'db' => 'UPPER(frm.abreviation)','dt' => 7),
            array( 'db' => 'UPPER(prm.designation)','dt' => 8),
            array( 'db' => 'CONCAT(ens.nom," ",ens.prenom)','dt' => 9),
            array( 'db' => 'st.designation','dt' => 10),
            array( 'db' => 'users.username','dt' => 11),
           
            
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        
        FROM ac_epreuve epv 
        left join users on users.id = epv.user_created_id
        INNER JOIN ac_element ele ON ele.id = epv.element_id
        INNER JOIN ac_module mdl ON mdl.id = ele.module_id
        INNER JOIN ac_semestre sem ON sem.id = mdl.semestre_id
        INNER JOIN ac_promotion prm ON prm.id = sem.promotion_id
        INNER JOIN ac_formation frm ON frm.id = prm.formation_id
        INNER JOIN ac_etablissement etab ON etab.id = frm.etablissement_id
        INNER JOIN ac_annee an ON an.id = epv.annee_id
        left JOIN ac_epreuve_penseignant epvens ON epvens.ac_epreuve_id = epv.id
        left JOIN penseignant ens ON ens.id = epvens.penseignant_id
        INNER JOIN pnature_epreuve nepv ON nepv.id = epv.nature_epreuve_id  
        INNER JOIN pstatut st on st.id = epv.statut_id
    
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
        $changed_column = $params->all('order')[0]['column'] > 0 ? $params->all('order')[0]['column'] - 1 : 0;
        $sqlRequest .= " ORDER BY " .DatatablesController::Pluck($columns, 'db')[$changed_column] . "   " . $params->all('order')[0]['dir'] . "  LIMIT " . $params->get('start') . " ," . $params->get('length') . " ";
        // $sqlRequest .= DatatablesController::Order($request, $columns);
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
            $username = "";
            // dd($row);
            
            foreach (array_values($row) as $key => $value) {
                if($key > 0) {
                    $nestedData[] = $value;
                }
            }
            $epv = $this->em->getRepository(AcEpreuve::class)->find($cd);
            if ($epv->getUserValidated() != null && $epv->getStatut()->getId() == 30) {
                $username = $this->em->getRepository(AcEpreuve::class)->find($cd)->getUserValidated()->getUsername();
            }
            $nestedData[] = $username;
            $nestedData["DT_RowId"] = $cd;
            // $nestedData["DT_RowClass"] = $cd;
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

    #[Route('/canvas', name: 'administration_epreuve_canvas')]
    public function epreuveCanvas() {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'coefficient');
        $sheet->setCellValue('B1', 'id_annee');
        $sheet->setCellValue('C1', 'id_element');
        $sheet->setCellValue('D1', 'id_nature_epreuve');
        $sheet->setCellValue('E1', 'id_enseignant');
        $sheet->setCellValue('F1', 'date_epreuve');
        $sheet->setCellValue('G1', 'anonymat');
        $sheet->setCellValue('H1', 'Observation');
        $sheet->setCellValue('I1', 'Nature');

        $writer = new Xlsx($spreadsheet);
        $fileName = 'epreuves.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
    #[Route('/import', name: 'administration_epreuve_import')]
    public function epreuveEnMasse(Request $request, SluggerInterface $slugger) {
        $file = $request->files->get('file');
        // dd($file);
        if(!$file){
            return new JsonResponse('Prière d\'importer le fichier',500);
        }
        if($file->guessExtension() !== 'xlsx'){
            return new JsonResponse('Prière d\'enregister un fichier xlsx', 500);            
        }

        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        // this is needed to safely include the file name as part of the URL
        $safeFilename = $slugger->slug($originalFilename);
        $newFilename = $safeFilename.'-'.uniqid().'_'.$this->getUser()->getId().'.'.$file->guessExtension();

        // Move the file to the directory where brochures are stored
        try {
            $file->move(
                $this->getParameter('epreuve_create_directory'),
                $newFilename
            );
        } catch (FileException $e) {
            throw new \Exception($e);
        }
        $reader = new reader();
        $spreadsheet = $reader->load($this->getParameter('epreuve_create_directory').'/'.$newFilename);
        $worksheet = $spreadsheet->getActiveSheet();
        $spreadSheetArys = $worksheet->toArray();

        unset($spreadSheetArys[0]);
        $sheetCount = count($spreadSheetArys);

        $spreadsheetGenerer = new Spreadsheet();
        $sheetGenerer = $spreadsheetGenerer->getActiveSheet();
        $sheetGenerer->setCellValue('A1', 'id');
        $sheetGenerer->setCellValue('B1', 'code');
        $sheetGenerer->setCellValue('C1', 'coefficient');
        $sheetGenerer->setCellValue('D1', 'id_annee');
        $sheetGenerer->setCellValue('E1', 'id_element');
        $sheetGenerer->setCellValue('F1', 'id_nature_epreuve');
        $sheetGenerer->setCellValue('G1', 'id_enseignant');
        $sheetGenerer->setCellValue('H1', 'date_epreuve');
        $sheetGenerer->setCellValue('I1', 'anonymat');
        $sheetGenerer->setCellValue('J1', 'Observation');
        $sheetGenerer->setCellValue('K1', 'Nature');
        $sheetGenerer->setCellValue('L1', 'User');
        $i = 2;
        foreach ($spreadSheetArys as $sheet) {
            $annee = $this->em->getRepository(AcAnnee::class)->find($sheet[1]);
            $element = $this->em->getRepository(AcElement::class)->find($sheet[2]);

            $epreuve = new AcEpreuve();
            $epreuve->setUserCreated($this->getUser());
            $epreuve->setCoefficient($sheet[0]);
            $epreuve->setElement($element);
            $epreuve->setAnnee($annee);
            $date = new \DateTime();
            $epreuve->setDateEpreuve($date->setTimestamp(strtotime($sheet[5])));
            $epreuve->setStatut(
                $this->em->getRepository(PStatut::class)->find(28)
            );
            $epreuve->setAnonymat($sheet[6]);
            $epreuve->setObservation($sheet[7]);
            $epreuve->setNatureEpreuve(
                $this->em->getRepository(PNatureEpreuve::class)->find($sheet[3])
            );
            $epreuve->setNature($sheet[8]);
            $epreuve->setCreated(new \DateTime("now"));
            $this->em->persist($epreuve);
            $this->em->flush();
            $epreuve->addEnseignant(
                $this->em->getRepository(PEnseignant::class)->find($sheet[4])
            );
            $epreuve->setCode('EPV-'.$annee->getFormation()->getEtablissement()->getAbreviation().str_pad($epreuve->getId(), 8, '0', STR_PAD_LEFT).'/'.date('Y'));     
            $this->em->flush();
            
            ApiController::mouchard($this->getUser(), $this->em,$epreuve, 'AcEpreuve', 'Importation Epreuve');

            // dump(37015));
            $sheetGenerer->setCellValue('A'.$i, $epreuve->getId());
            $sheetGenerer->setCellValue('B'.$i, $epreuve->getCode());
            $sheetGenerer->setCellValue('C'.$i, $epreuve->getCoefficient());
            $sheetGenerer->setCellValue('D'.$i, $annee->getId());
            $sheetGenerer->setCellValue('E'.$i, $element->getId());
            $sheetGenerer->setCellValue('F'.$i, $sheet[3]);
            $sheetGenerer->setCellValue('G'.$i, $sheet[4]);
            $sheetGenerer->setCellValue('H'.$i, date_format($epreuve->getDateEpreuve(), 'Y-m-d'));
            $sheetGenerer->setCellValue('I'.$i, $epreuve->getAnonymat());
            $sheetGenerer->setCellValue('J'.$i, $epreuve->getObservation());
            $sheetGenerer->setCellValue('K'.$i, $epreuve->getNature());
            $sheetGenerer->setCellValue('L'.$i, $epreuve->getUserCreated()->getUsername());
            $i++;
        }
        // die;
        $writer = new Xlsx($spreadsheetGenerer);
        $fileName = 'epreuve'.uniqid().'.xlsx';
        $writer->save($fileName);
        return new JsonResponse(['message' => "Total des epreuves crée est ".$sheetCount, 'file' => $fileName]);
    }
    #[Route('/affiliation_normale', name: 'administration_epreuve_affiliation_normal')]
    public function administrationEpreuveAffiliationNormal(Request $request) {
        $idEpreuves = json_decode($request->get("epreuves"));
        $zip = new ZipArchive();
        $zipname = 'affilation_epreuves'.uniqid().'.zip';
        $totalEpreuves = 0;
        $zip->open($zipname, ZipArchive::CREATE);
        foreach($idEpreuves as $idEpreuve) {
            $epreuve = $this->em->getRepository(AcEpreuve::class)->find($idEpreuve);
            if($epreuve->getStatut()->getId() == 28) {
                $spreadsheet = new Spreadsheet();
                $sheet = $spreadsheet->getActiveSheet();
                $sheet->setCellValue('A1', 'Code Epreuve');
                $sheet->setCellValue('B1', 'Inscription');
                if($epreuve->getAnonymat() == 1) {
                    $sheet->setCellValue('C1', 'Anonymat');
                }
                $i = 2;
                $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByEpreuve($epreuve);
                foreach($inscriptions as $inscription) {
                    $gnote = new ExGnotes();
                    $gnote->setEpreuve($epreuve);
                    $gnote->setInscription($inscription);
                    $gnote->setUserCreated($this->getUser());
                    $gnote->setCreated(new \DateTime("now"));
                    if($epreuve->getAnonymat() == 1) {                        
                        if($epreuve->getNatureEpreuve()->getNature() == 'normale') {
                            $gnote->setAnonymat($inscription->getCodeAnonymat() ? $inscription->getCodeAnonymat() : null);     
                            $sheet->setCellValue('C'.$i, $inscription->getCodeAnonymat() ? $inscription->getCodeAnonymat() : null);
                        } else {
                            $gnote->setAnonymat($inscription->getCodeAnonymatRat());
                            $sheet->setCellValue('C'.$i, $inscription->getCodeAnonymatRat());
                        }                        
                    }
                    $this->em->persist($gnote);
                    $sheet->setCellValue('A'.$i, $epreuve->getId());
                    $sheet->setCellValue('B'.$i, $inscription->getId());
                    $i++;
                }
                $epreuve->setStatut(
                    $this->em->getRepository(PStatut::class)->find(29)
                );
                $this->em->flush();
                ApiController::mouchard($this->getUser(), $this->em,$epreuve, 'AcEpreuve', 'Affiliation Epreuve');
                $writer = new Xlsx($spreadsheet);
                $fileName = 'affiliation_'.$epreuve->getId().'.xlsx';
                // $temp_file = tempnam(sys_get_temp_dir(), $fileName);
                $writer->save($fileName);
                $zip->addFile($fileName);
                $totalEpreuves++;
            }
        }
        $zip->close();
        array_map('unlink', glob( "*.xlsx"));
        return new JsonResponse(['zipname' => $zipname, 'total' => $totalEpreuves]);
    }
    #[Route('/etudiants/{epreuve}', name: 'administration_epreuve_get_etudiants')]
    public function administrationEpreuveGetEtudiants(AcEpreuve $epreuve) {
        // 28 Statut En Cours
        if($epreuve->getStatut()->getId() != 28) {
            return new JsonResponse("Epreuve déja affilier", 500);
        }
        $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByEpreuve($epreuve);
        $html = "";
        foreach ($inscriptions as $key => $inscription) {
            $html .= '<tr>
                        <td><input type ="checkbox" class="check_etudiant" value="'.$inscription->getId().'" > </td>
                        <td>'.$inscription->getId().'</td>
                        <td>'.$inscription->getAdmission()->getPreinscription()->getEtudiant()->getNom().'</td>
                        <td>'.$inscription->getAdmission()->getPreinscription()->getEtudiant()->getPrenom().'</td>
                    </tr>'
            ;
        }
        return new JsonResponse($html);
    }
    #[Route('/affiliation_rattrapage', name: 'administration_epreuve_affiliation_rattrapage')]
    public function administrationEpreuveAffiliationRattrapage(Request $request) {
        $idInscriptions = json_decode($request->get("idInscriptions"));
        $epreuve = $this->em->getRepository(AcEpreuve::class)->find($request->get("idEpreuve"));
        foreach ($idInscriptions as $idInscription) {
            $inscription = $this->em->getRepository(TInscription::class)->find($idInscription);
            $gnote = new ExGnotes();
            $gnote->setEpreuve($epreuve);
            $gnote->setInscription($inscription);
            $gnote->setUserCreated($this->getUser());
            $gnote->setCreated(new \DateTime("now"));
            if($epreuve->getAnonymat() == 1) {
                if($epreuve->getNatureEpreuve()->getNature() == 'normale') {
                    $gnote->setAnonymat($inscription->getCodeAnonymat());                    
                } else {
                    $gnote->setAnonymat($inscription->getCodeAnonymatRat());
                }
            }
            $this->em->persist($gnote);
        }
        $epreuve->setStatut(
            $this->em->getRepository(PStatut::class)->find(29)
        );
        $this->em->flush();
        
        ApiController::mouchard($this->getUser(), $this->em,$epreuve, 'AcEpreuve', 'Affiliation Rattrapage');

        return new JsonResponse("Bien Enregistre", 200);

    }
   
    #[Route('/add_epreuve', name: 'administration_epreuve_add_epreuve')]
    public function administrationEpreuveaddepreuve(Request $request) 
    {
        if (empty($request->get('id_element')) || empty($request->get('id_Nature')) || empty($request->get('id_enseignant')) || empty($request->get('d_epreuve'))) {
            return new JsonResponse('Merci de remplir tout les champs!', 500);
        }
        // dd($request);
        $epreuve = new AcEpreuve();
        $epreuve->setCoefficient(1);
        $epreuve->setStatut($this->em->getRepository(PStatut::class)->find(28));
        $epreuve->setAnonymat($request->get('anonymat'));
        $epreuve->setCreated(new \DateTime('now'));
        $epreuve->setDateEpreuve(new \DateTime($request->get('d_epreuve')));
        $epreuve->setElement($this->em->getRepository(AcElement::class)->find($request->get('id_element')));
        $epreuve->setNature($request->get('nature'));
        $epreuve->setNatureEpreuve($this->em->getRepository(PNatureEpreuve::class)->find($request->get('id_Nature')));
        $epreuve->setObservation($request->get('obs') == '' ? Null : $request->get('obs'));
        $epreuve->setAnnee($this->em->getRepository(AcAnnee::class)->findOneBy(['formation'=>$request->get('id_formation'),'validation_academique'=>'non']));
        $epreuve->setUserCreated($this->getUser());
        $this->em->persist($epreuve);
        $this->em->flush();
        $etablissement = $this->em->getRepository(AcEtablissement::class)->find($request->get('id_etablissement'));
        foreach ($request->get('id_enseignant') as $id) {
            $epreuve->addEnseignant(
                $this->em->getRepository(PEnseignant::class)->find($id)
            );
        };
        $epreuve->setCode('EPV-'.$etablissement->getAbreviation().str_pad($epreuve->getId(), 8, '0', STR_PAD_LEFT).'/'.date('Y'));     
        $this->em->flush();
        ApiController::mouchard($this->getUser(), $this->em,$epreuve, 'AcEpreuve', 'Ajouter Epreuve');

        return new JsonResponse('Epreuve Bien Ajouter',200);
    }
    #[Route('/cloture', name: 'administration_epreuve_cloture')]
    public function administrationEpreuveCloture(Request $request) 
    {
        $idEpreuves = array_unique(json_decode($request->get("idEpreuves")));
        if ($idEpreuves == null) {
            return new JsonResponse('Merci de choisir une epreuve!',500);
        }
        foreach ($idEpreuves as $key => $id) {
            $epreuve = $this->em->getRepository(AcEpreuve::class)->find($id);
            if($epreuve->getStatut()->getDesignation() == "Affilier") {
                // dd($epreuve);
                $epreuve->setStatut(
                    $this->em->getRepository(PStatut::class)->find(30) //Valider
                );
                $epreuve->setUserValidated($this->getUser());
                $epreuve->setValidated(new \DateTime('now'));
                ApiController::mouchard($this->getUser(), $this->em,$epreuve, 'AcEpreuve', 'Valider Epreuve');
            }
        }
        $this->em->flush();
        // dd($idEpreuves);
        return new JsonResponse('Bien clôturer',200);
    }
    #[Route('/decloture', name: 'administration_epreuve_decloture')]
    public function administrationEpreuveDecloture(Request $request) 
    {
        $idEpreuves = array_unique(json_decode($request->get("idEpreuves")));
        foreach ($idEpreuves as $key => $id) {
            $epreuve = $this->em->getRepository(AcEpreuve::class)->find($id);
            if($epreuve->getStatut()->getDesignation() == "Valider") {
                $epreuve->setStatut(
                    $this->em->getRepository(PStatut::class)->find(29) //Affilier
                );
                ApiController::mouchard($this->getUser(), $this->em,$epreuve, 'AcEpreuve', 'Dévalider Epreuve');
            }
        }
        $this->em->flush();
        // dd($idEpreuves);
        return new JsonResponse('Bien delôturer',200);
    }
    #[Route('/checkifanonymat/{epreuve}', name: 'administration_epreuve_checkifanonymat')]
    public function administrationEpreuveCheckifanonymat(AcEpreuve $epreuve) {
        $html = "<p><span>Etablissement</span> : ".$epreuve->getAnnee()->getFormation()->getEtablissement()->getDesignation()."</p>
          <p><span>Formation</span> : ".$epreuve->getAnnee()->getFormation()->getDesignation()."</p>
          <p><span>Promotion</span> : ".$epreuve->getElement()->getModule()->getSemestre()->getPromotion()->getDesignation()."</p>
          <p><span>Module</span> : ".$epreuve->getElement()->getModule()->getDesignation()."</p>
          <p><span>Element</span> : ".$epreuve->getElement()->getDesignation()."</p>";
        if($epreuve->getAnonymat() == 1) {
            $anonymat = "oui";
        } else {
            $anonymat = "non";
        }
        return new JsonResponse(['html' => $html,'id' => $epreuve->getId(), 'anonymat' => $anonymat], 200);

    }
    #[Route('/impression/{epreuve}/{anonymat}', name: 'administration_epreuve_impression_c_a')]
    public function administrationEpreuveImpression(AcEpreuve $epreuve, $anonymat) {
        
            
        $html = $this->render("administration_epreuve/pdfs/header.html.twig")->getContent();
        if($epreuve->getAnonymat() == 1 && $anonymat == 1){
            $html .= $this->render("administration_epreuve/pdfs/anonymat.html.twig", [
                'epreuve' => $epreuve
            ])->getContent();
        } else {
            $html .= $this->render("administration_epreuve/pdfs/clair.html.twig", [
                'epreuve' => $epreuve
            ])->getContent();
            
        }
        $html .= $this->render("administration_epreuve/pdfs/footer.html.twig")->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'margin_left' => '5',
            'margin_right' => '5',
            'margin_top' => '5',
            'margin_bottom' => '5',
            ]);
        // $mpdf->SetHTMLHeader(
        // );
        // $mpdf->SetHTMLFooter(
        //     $this->render("administration_epreuve/pdfs/footer.html.twig")->getContent()
        // );
        $mpdf->WriteHTML($html);
        $mpdf->Output("epreuve_".$epreuve->getId().".pdf", "I");
    }
    
    #[Route('/capitaliser', name: 'administration_epreuve_capitaliser')]
    public function administrationEpreuveCapitaliser(Request $request) {
        $idEpreuves = array_unique(json_decode($request->get("idEpreuves")));
        $count = 0;
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'inscription');
        $sheet->setCellValue('B1', 'nom');
        $sheet->setCellValue('C1', 'prenom');
        $sheet->setCellValue('D1', 'epreuve');
        $sheet->setCellValue('E1', 'note');
        $i=2;
       
        foreach ($idEpreuves as $idEpreuve) {
            $epreuve = $this->em->getRepository(AcEpreuve::class)->find($idEpreuve);
            // dd($epreuve->getElement()->getModule());
            foreach ($epreuve->getGnotes() as $gnote) {
                // dump($gnote->getInscription()->getId());
                $inscription = $gnote->getInscription();
                // dump($inscription);
                // if ($inscription->getId() == 16322) {
                    $previousInscription = $this->em->getRepository(TInscription::class)->getPreviousInsription($inscription);
                    // dd($previousInscription);
                    if($previousInscription) {
                        $previousNoteModule = $this->em->getRepository(ExMnotes::class)->findOneBy(['module' => $epreuve->getElement()->getModule(), 'inscription' => $previousInscription]);
                        // dd($previousNoteModule);
                        if ($previousNoteModule != null) {
                            $stat = $previousNoteModule->getStatutAff() != null ? $previousNoteModule->getStatutAff()->getId() : "";
                            // dump($stat);
                            if($stat == 53) {
                                $gnote->setNote($previousNoteModule->getNote());
                                $gnote->setObservation('CAP');
                                $sheet->setCellValue('A'.$i, $inscription->getId());
                                $sheet->setCellValue('B'.$i, $gnote->getInscription()->getAdmission()->getPreinscription()->getEtudiant()->getNom());
                                $sheet->setCellValue('C'.$i, $gnote->getInscription()->getAdmission()->getPreinscription()->getEtudiant()->getPrenom());
                                $sheet->setCellValue('D'.$i, $epreuve->getId());
                                $sheet->setCellValue('E'.$i, $previousNoteModule->getNote());
                                $i++;
                                $count++;
                            }
                        }
                    }
                // }
                
            }
            // dd('tewst');
        }
        $this->em->flush();
        $fileName = null;
        if($count > 0) {
            $writer = new Xlsx($spreadsheet);
            $fileName = 'epreuves_capitaliser_'.uniqid().'.xlsx';
            $writer->save($fileName);
        }

        return new JsonResponse(['fileName' => $fileName, 'count' => $count]);

    }
    #[Route('/edit/{epreuve}', name: 'administration_epreuve_edit')]
    public function administrationEpreuveEdit(AcEpreuve $epreuve) {
        $enseignants = $this->em->getRepository(PEnseignant::class)->findAll();
        $html = $this->renderView('administration_epreuve/pages/epreuve_edit.html.twig', [
            'epreuve' => $epreuve,
            'enseignants' => $enseignants
        ]);
        return new JsonResponse($html);
    }
    #[Route('/update/{epreuve}', name: 'administration_epreuve_update')]
    public function administrationEpreuveUpdate(Request $request, AcEpreuve $epreuve) {
        // dd($request);
       
        if(empty($request->get('id_enseignant')) or empty($request->get('d_epreuve'))) {
            return new JsonResponse("Veuillez remplir tous les champs!", 500);
        }
        $epreuve->setDateEpreuve(new \DateTime($request->get('d_epreuve')));
        foreach ($epreuve->getEnseignants() as $key => $enseignant) {
            $epreuve->removeEnseignant($enseignant);
        }
        foreach ($request->get('id_enseignant') as $id) {
            $epreuve->addEnseignant(
                $this->em->getRepository(PEnseignant::class)->find($id)
            );
        };

        $this->em->flush();
        return new JsonResponse('Bien enregistre',200);

        
    } 
    
    #[Route('/extraction_epreuve_valide', name: 'extraction_epreuve_valide')]
    public function extraction_epreuve_valide()
    {   
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $i=2;
        $j=1;
        $currentyear = date('m') > 7 ? date('Y').'/'.date('Y')+1 : date('Y') - 1 .'/' .date('Y');
        $epreuves = $this->em->getRepository(AcEpreuve::class)->findEpreuveValideByCurrentYear($currentyear);
        // dd($epreuves);
        $sheet->fromArray(
            array_keys($epreuves[0]),
            null,
            'A1'
        );
        foreach ($epreuves as $epreuve) {
            $sheet->fromArray(
                $epreuve,
                null,
                'A'.$i
            );
            $i++;
            $j++;
        }
        $writer = new Xlsx($spreadsheet);
        $currentyear = date('m') > 7 ? date('Y').'-'.date('Y')+1 : date('Y') - 1 .'-' .date('Y');
        $fileName = 'Extraction Epreuves Valide '.$currentyear.'.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
    
    #[Route('/extraction_epreuve_valide_s2', name: 'extraction_epreuve_valide_s2')]
    public function extraction_epreuve_valide_s2()
    {   
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $i=2;
        $j=1;
        $currentyear = date('m') > 7 ? date('Y').'/'.date('Y')+1 : date('Y') - 1 .'/' .date('Y');
        $epreuves = $this->em->getRepository(AcEpreuve::class)->findEpreuveValideS2ByCurrentYear($currentyear);
        // dd($epreuves);
        $sheet->fromArray(
            array_keys($epreuves[0]),
            null,
            'A1'
        );
        foreach ($epreuves as $epreuve) {
            $sheet->fromArray(
                $epreuve,
                null,
                'A'.$i
            );
            $i++;
            $j++;
        }
        $writer = new Xlsx($spreadsheet);
        $currentyear = date('m') > 7 ? date('Y').'-'.date('Y')+1 : date('Y') - 1 .'-' .date('Y');
        $fileName = 'Extraction Epreuves Valide Session 2 '.$currentyear.'.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
    
    #[Route('/extraction_emargement/{epreuve}', name: 'administration_epreuve_emargement')]
    public function administration_epreuve_emargement(AcEpreuve $epreuve) 
    {
        // dd($epreuve);
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'ORD');
        $sheet->setCellValue('B1', 'DATE');
        $sheet->setCellValue('C1', 'MODULE');
        $sheet->setCellValue('D1', 'ELEMENT');
        $sheet->setCellValue('E1', 'SESSION');
        $sheet->setCellValue('F1', 'TYPE');
        $sheet->setCellValue('G1', 'CODE INSCRIPTION');
        $sheet->setCellValue('H1', 'NOM');
        $sheet->setCellValue('I1', 'PRENOM');
        $sheet->setCellValue('J1', 'PROMOTION');
        $sheet->setCellValue('K1', 'EMPLACEMENT');
        $sheet->setCellValue('L1', 'EMARGEMENT DE PRESENCE');
        $sheet->setCellValue('M1', 'ETUDIANT');
        $sheet->setCellValue('N1', 'RESP. SALLE');
        $sheet->setCellValue('O1', 'COPIE RENSEIGNEE');
        $sheet->setCellValue('P1', 'VIDE');
        $sheet->setCellValue('Q1', 'EMARGEMENT DE REMISE DES COPIES');
        $i=2;
        $count = 1 ;
        foreach ($epreuve->getGnotes() as $gnote) {
            $sheet->setCellValue('A'.$i, $count++);
            $sheet->setCellValue('B'.$i, $epreuve->getDateEpreuve()->format('d/m/Y'));
            $sheet->setCellValue('C'.$i, $epreuve->getElement()->getModule()->getDesignation());
            $sheet->setCellValue('D'.$i, $epreuve->getElement()->getDesignation());
            $sheet->setCellValue('E'.$i, $epreuve->getNatureEpreuve()->getNature());
            $sheet->setCellValue('F'.$i, $epreuve->getNatureEpreuve()->getDesignation());
            $sheet->setCellValue('G'.$i, $gnote->getInscription()->getCode());
            $sheet->setCellValue('H'.$i, $gnote->getInscription()->getAdmission()->getPreinscription()->getEtudiant()->getNom());
            $sheet->setCellValue('I'.$i, $gnote->getInscription()->getAdmission()->getPreinscription()->getEtudiant()->getPrenom());
            $sheet->setCellValue('J'.$i, $gnote->getInscription()->getPromotion()->getDesignation());
            $i++;
        }
            
        $this->em->flush();
        $fileName = null;
        $writer = new Xlsx($spreadsheet);
        $fileName = 'epreuves_emargement.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }

    
    #[Route('/affiliation_ParInscriptions', name: 'administration_epreuve_affiliation_ParInscriptions')]
    public function administrationEpreuveaffiliationParInscriptions(Request $request, SluggerInterface $slugger) 
    {
        $file = $request->files->get('files_inscriptions_ids');
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
                $this->getParameter('inscriptions_affiliation_directory'),
                $newFilename
            );
        } catch (FileException $e) {
            throw new \Exception($e);
        }
        $reader = new reader();
        $spreadsheet = $reader->load($this->getParameter('inscriptions_affiliation_directory').'/'.$newFilename);
        $worksheet = $spreadsheet->getActiveSheet();
        $spreadSheetArys = $worksheet->toArray();

        unset($spreadSheetArys[0]);
        $sheetCount = count($spreadSheetArys);
        $idInscriptions = [];
        foreach ($spreadSheetArys as $value) {
            if ($value[1]) {
                array_push($idInscriptions ,$value[1]);
            }
        }
        if ($idInscriptions == []) {
            return new JsonResponse("Le Fichier est vide!!", 500);
        }
        // dd($idInscriptions);

        $epreuve = $this->em->getRepository(AcEpreuve::class)->find($request->get("idEpreuve"));
        foreach ($idInscriptions as $idInscription) {
            $inscription = $this->em->getRepository(TInscription::class)->find($idInscription);
            $gnote = new ExGnotes();
            $gnote->setEpreuve($epreuve);
            $gnote->setInscription($inscription);
            $gnote->setUserCreated($this->getUser());
            $gnote->setCreated(new \DateTime("now"));
            if($epreuve->getAnonymat() == 1) {
                if($epreuve->getNatureEpreuve()->getNature() == 'normale') {
                    $gnote->setAnonymat($inscription->getCodeAnonymat());                    
                } else {
                    $gnote->setAnonymat($inscription->getCodeAnonymatRat());
                }
            }
            $this->em->persist($gnote);
        }
        $epreuve->setStatut(
            $this->em->getRepository(PStatut::class)->find(29)
        );
        
        // dd($gnote);
        $this->em->flush();
        
        ApiController::mouchard($this->getUser(), $this->em,$epreuve, 'AcEpreuve', 'Affiliation Rat Ins');

        return new JsonResponse("Epreuve Bien Affilier", 200);

    }
}
