<?php

namespace App\Controller\AdministrationEpreuve;

use App\Entity\AcAnnee;
use App\Entity\PStatut;
use App\Entity\ExGnotes;
use App\Entity\AcElement;
use App\Entity\AcEpreuve;
use App\Entity\PEnseignant;
use App\Entity\TInscription;
use App\Entity\PNatureEpreuve;
use App\Controller\ApiController;
use App\Controller\DatatablesController;
use App\Entity\AcEtablissement;
use Doctrine\Persistence\ManagerRegistry;
use Mpdf\Mpdf;
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
use ZipArchive;

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
        $etablissements = $this->em->getRepository(AcEtablissement::class)->findAll();
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
            array( 'db' => 'user.username','dt' => 11),
           
            
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        
        FROM ac_epreuve epv 
        left join user on user.id = epv.user_created_id
        INNER JOIN ac_element ele ON ele.id = epv.element_id
        INNER JOIN ac_module mdl ON mdl.id = ele.module_id
        INNER JOIN ac_semestre sem ON sem.id = mdl.semestre_id
        INNER JOIN ac_promotion prm ON prm.id = sem.promotion_id
        INNER JOIN ac_formation frm ON frm.id = prm.formation_id
        INNER JOIN ac_etablissement etab ON etab.id = frm.etablissement_id
        INNER JOIN ac_annee an ON an.id = epv.annee_id
        INNER JOIN penseignant ens ON ens.id = epv.enseignant_id
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
            array( 'db' => 'user.username','dt' => 11),
           
            
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        
        FROM ac_epreuve epv 
        left join user on user.id = epv.user_created_id
        INNER JOIN ac_element ele ON ele.id = epv.element_id
        INNER JOIN ac_module mdl ON mdl.id = ele.module_id
        INNER JOIN ac_semestre sem ON sem.id = mdl.semestre_id
        INNER JOIN ac_promotion prm ON prm.id = sem.promotion_id
        INNER JOIN ac_formation frm ON frm.id = prm.formation_id
        INNER JOIN ac_etablissement etab ON etab.id = frm.etablissement_id
        INNER JOIN ac_annee an ON an.id = epv.annee_id
        left JOIN penseignant ens ON ens.id = epv.enseignant_id
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
        $newFilename = $safeFilename.'-'.uniqid().'_'.$this->getUser()->getUserIdentifier().'.'.$file->guessExtension();

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
            $epreuve->setEnseignant(
                $this->em->getRepository(PEnseignant::class)->find($sheet[4])
            );
            $epreuve->setNature($sheet[8]);
            $epreuve->setCreated(new \DateTime("now"));
            $this->em->persist($epreuve);
            $this->em->flush();
            $epreuve->setCode('EPV-'.$annee->getFormation()->getEtablissement()->getAbreviation().str_pad($epreuve->getId(), 8, '0', STR_PAD_LEFT).'/'.date('Y'));     
            $this->em->flush();
        }
        return new JsonResponse("Total des epreuves crée est ".$sheetCount);
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
                            $gnote->setAnonymat($inscription->getCodeAnonymat());     
                            $sheet->setCellValue('C'.$i, $inscription->getCodeAnonymat());

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

        return new JsonResponse("Bien Enregistre", 200);

    }
    #[Route('/cloturer', name: 'administration_epreuve_cloturer')]
    public function administrationEpreuveCloturer(Request $request) {
        $idEpreuves = json_decode($request->get("epreuves"));
        foreach ($idEpreuves as $idEpreuve) {
            $epreuve = $this->em->getRepository(AcEpreuve::class)->find($idEpreuve);
            $epreuve->setStatut(
                $this->em->getRepository(PStatut::class)->find(30)
            );
            $this->em->flush();
        }
        return new JsonResponse("Bien clôturer", 200);

    }
    #[Route('/decloturer', name: 'administration_epreuve_decloturer')]
    public function administrationEpreuveDeloturer(Request $request) {
        $idEpreuves = json_decode($request->get("epreuves"));
        foreach ($idEpreuves as $idEpreuve) {
            $epreuve = $this->em->getRepository(AcEpreuve::class)->find($idEpreuve);
            $epreuve->setStatut(
                $this->em->getRepository(PStatut::class)->find(29)
            );
            $this->em->flush();
        }
        return new JsonResponse("Bien delôturer", 200);

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
        // dd($epreuve->getStatut());
        if($epreuve->getAnonymat() == 1 && $anonymat == 1){
            $html .= $this->render("administration_epreuve/pdfs/anonymat.html.twig", [
                'epreuve' => $epreuve,
                'statutId' => $epreuve->getStatut()->getId()
            ])->getContent();
        } else {
            $html .= $this->render("administration_epreuve/pdfs/clair.html.twig", [
                'epreuve' => $epreuve,
                'statutId' => $epreuve->getStatut()->getId()
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
    #[Route('/add_epreuve', name: 'administration_epreuve_add_epreuve')]
    public function administrationEpreuveaddepreuve(Request $request) 
    {
        if (empty($request->get('id_element')) || empty($request->get('id_Nature')) || empty($request->get('id_enseignant')) || empty($request->get('d_epreuve'))) {
            return new JsonResponse('Merci de remplir tout les champs!', 500);
        }
        $epreuve = new AcEpreuve();
        $epreuve->setCoefficient(1);
        $epreuve->setStatut($this->em->getRepository(PStatut::class)->find(28));
        $epreuve->setAnonymat($request->get('anonymat'));
        $epreuve->setCreated(new \DateTime('now'));
        $epreuve->setDateEpreuve(new \DateTime($request->get('d_epreuve')));
        $epreuve->setElement($this->em->getRepository(AcElement::class)->find($request->get('id_element')));
        $epreuve->setEnseignant($this->em->getRepository(PEnseignant::class)->find($request->get('id_enseignant')));
        $epreuve->setNature($request->get('nature'));
        $epreuve->setNatureEpreuve($this->em->getRepository(PNatureEpreuve::class)->find($request->get('id_Nature')));
        $epreuve->setObservation($request->get('obs') == '' ? Null : $request->get('obs'));
        $epreuve->setAnnee($this->em->getRepository(AcAnnee::class)->findOneBy(['formation'=>$request->get('id_formation'),'validation_academique'=>'non']));
        $epreuve->setUserCreated($this->getUser());
        $this->em->persist($epreuve);
        $this->em->flush();
        $etablissement = $this->em->getRepository(AcEtablissement::class)->find($request->get('id_etablissement'));
        $epreuve->setCode('EPV-'.$etablissement->getAbreviation().str_pad($epreuve->getId(), 8, '0', STR_PAD_LEFT).'/'.date('Y'));     
        $this->em->flush();

        return new JsonResponse('Epreuve Bien Ajouter',200);
    }
}
