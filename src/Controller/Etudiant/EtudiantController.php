<?php

namespace App\Controller\Etudiant;

use DateTime;
use App\Entity\PStatut;
use App\Entity\XTypeBac;
use App\Entity\TEtudiant;
use App\Entity\TPreinscription;
use App\Entity\XAcademie;
use App\Entity\NatureDemande;
use App\Entity\AcAnnee;
use App\Controller\DatatablesController;
use App\Entity\AcFormation;
use App\Entity\PMatiere;
use App\Entity\TPreinscriptionReleveNote;
use Doctrine\Persistence\ManagerRegistry;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx as Reader;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

#[Route('/etudiant')]
class EtudiantController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'etudiant_index')]
    public function index(): Response
    {
        return $this->render('etudiant/index.html.twig');
    }
    
    #[Route('/list', name: 'etudiant_list')]
    public function list(Request $request): Response
    {
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1 = 1 ";
        if (!empty($params->get('columns')[0]['search']['value'])) {
            $filtre .= " and grp.id = '" . $params->get('columns')[0]['search']['value'] . "' ";
        }

        
        $columns = array(
            array( 'db' => 'etu.id','dt' => 0 ),
            array( 'db' => 'etu.code','dt' => 1),
            array( 'db' => 'etu.nom','dt' => 2),
            array( 'db' => 'etu.prenom','dt' => 3),
            array( 'db' => 'nd.designation','dt' => 4),
            array( 'db' => 'LOWER(xtb.designation)','dt' => 5),
            array( 'db' => 'etu.moyenne_bac','dt' => 6),
            array( 'db' => 'etu.tel1','dt' => 7),
            array( 'db' => 'etu.tel2','dt' => 8),
            array( 'db' => 'LOWER(st.designation)','dt' => 9),
            array( 'db' => 'etu.tele_liste','dt' => 10),
            array( 'db' => 'etu.created','dt' => 11 )
        );
        // dd($columns);
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
                      
                FROM tetudiant etu
                inner join pstatut st on st.id = etu.statut_id
                inner join nature_demande nd on nd.id = etu.nature_demande_id
                inner join xtype_bac xtb on xtb.id = etu.type_bac_id              

                $filtre"
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

        foreach ($result as $key => $row) {
            // dump($row);
            $nestedData = array();
            $cd = $row['id'];
            // $nestedData[] = $cd;
            $i = 0;
            foreach (array_values($row) as $key => $value) {
                if($i == 9) {
                    $nestedData[] = count($this->em->getRepository(TEtudiant::class)->find($row['id'])->getPreinscriptions()) > 0 ? 'Valider' : 'N.V';
                } 
                $nestedData[] = $value;
                $i++;
            }
            $nestedData[] = 'N.R';
            $nestedData["DT_RowId"] = $cd;
            $nestedData["DT_RowClass"] = $cd;
            $data[] = $nestedData;
            // dd($nestedData);
            
        }
        $json_data = array(
            "draw" => intval($params->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data   
        );
        // die;
        return new Response(json_encode($json_data));
    }

  
    #[Route('/import', name: 'etudiant_import')]
    public function etudiantImport(Request $request, SluggerInterface $slugger) {
        $file = $request->files->get('file');
        if(!$file){
            return new JsonResponse('Prière d\'importer le fichier', 500);
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
                $this->getParameter('etudiant_directory'),
                $newFilename
            );
        } catch (FileException $e) {
            return new JsonResponse($e, 500);
        }
        $reader = new Reader();
        $spreadsheet = $reader->load($this->getParameter('etudiant_directory').'/'.$newFilename);
        $worksheet = $spreadsheet->getActiveSheet();
        $spreadSheetArys = $worksheet->toArray();
        unset($spreadSheetArys[0]);
        $sheetCount = count($spreadSheetArys);
        $exist = 0;
        $inserted = 0;
        $exist_array = [];
        foreach ($spreadSheetArys as $sheet) {
            $etudiantExist = $this->em->getRepository(TEtudiant::class)->findOneBy(['cin' => $sheet[10]]);
            if($etudiantExist) {
                $exist++;
                array_push($exist_array, [
                    $etudiantExist->getId()
                ]);
            } else {
                $etudiant = new TEtudiant();
                $etudiant->setNom($sheet[2]);
                $etudiant->setPrenom($sheet[3]);
                $date = new DateTime();
                $etudiant->setDateNaissance($date->setTimestamp(strtotime($sheet[4])));
                $etudiant->setLieuNaissance($sheet[5]);
                $etudiant->setSexe($sheet[6]);
                $etudiant->setTeleListe('Intéressé');
                // $etudiant->setStFamille();
                // $etudiant->setStFamilleParent();
                $etudiant->setNationalite($sheet[9]);
                $etudiant->setCin($sheet[10]);
                $etudiant->setPasseport($sheet[11]);
                $etudiant->setAdresse($sheet[12]);
                $etudiant->setVille($sheet[13]);
                $etudiant->setTel1($sheet[14]);
                $etudiant->setTel2($sheet[15]);
                $etudiant->setTel3($sheet[16]);
                $etudiant->setMail1($sheet[17]);
                $etudiant->setMail2($sheet[18]);
                $etudiant->setNomPere($sheet[19]);
                $etudiant->setPrenomPere($sheet[20]);
                $etudiant->setNationalitePere($sheet[21]);
                $etudiant->setProfessionPere($sheet[22]);
                $etudiant->setEmployePere($sheet[23]);
                $etudiant->setCategoriePere($sheet[24]);
                $etudiant->setTelPere($sheet[25]);
                $etudiant->setMailPere($sheet[26]);
                $etudiant->setSalairePere($sheet[27]);
                $etudiant->setNomMere($sheet[28]);
                $etudiant->setPrenomMere($sheet[29]);
                $etudiant->setNationaliteMere($sheet[30]);
                $etudiant->setProfessionMere($sheet[31]);
                $etudiant->setEmployeMere($sheet[32]);
                $etudiant->setCategorieMere($sheet[33]);
                $etudiant->setTelMere($sheet[34]);
                $etudiant->setMailMere($sheet[35]);
                $etudiant->setSalaireMere($sheet[36]);
                $etudiant->setCne($sheet[37]);
                $etudiant->setAcademie(
                    $this->em->getRepository(XAcademie::class)->findOneBy(['code' => $sheet[38]])
                );
                $etudiant->setEtablissement($sheet[39]);
                // $etudiant->setFiliere($sheet[40]);
                $etudiant->setTypeBac(
                    $this->em->getRepository(XTypeBac::class)->findOneBy(['code' => $sheet[41]])
                );
                $etudiant->setAnneeBac($sheet[42]);
                $etudiant->setMoyenneBac(str_replace(',', '.', $sheet[43]));
                // $etudiant->setLangueConcours($sheet[44]);
                $etudiant->setNombreEnfants($sheet[45]);
                $etudiant->setNatureDemande(
                    $this->em->getRepository(NatureDemande::class)->findOneBy(['code' => $sheet[46]])
                );
                if ($sheet[47] == "oui") {
                    $etudiant->setBourse(1);
                }
                if ($sheet[48] == "oui"){
                    $etudiant->setLogement(1);
                }
                if ($sheet[49] == "oui") {
                    $etudiant->setParking(1);
                }                    
                if ($sheet[50] == "oui") {
                    $etudiant->setCpgem(1);
                }
                if ($sheet[51] == "oui") {
                    $etudiant->setCpge1(1);
                }
                if ($sheet[52] == "oui") {
                    $etudiant->setCpge2(1);
                }                    
                if ($sheet[53] == "oui") {
                    $etudiant->setVet(1);
                }
                if ($sheet[54] == "oui") {
                    $etudiant->setCam(1);
                }
                if ($sheet[55] == "oui") {
                    $etudiant->setIst(1);
                }
                if ($sheet[56] == "oui") {
                    $etudiant->setIp(1);
                }                    
                if ($sheet[57] == "oui") {
                    $etudiant->setFpa(1);
                }
                if ($sheet[58] == "oui") {
                    $etudiant->setFda(1);
                }                   
                if ($sheet[59] == "oui") {
                    $etudiant->setFma(1);
                }
                if ($sheet[60] == "oui") {
                    $etudiant->setEia(1);
                }
                $etudiant->setSourceSite(1);
                $etudiant->setUserCreated($this->getUser());
                $etudiant->setStatut(
                    $this->em->getRepository(PStatut::class)->find(20)
                );
                $this->em->persist($etudiant);
                $this->em->flush();
                $etudiant->setCode('CND_UA'.str_pad($etudiant->getId(), 8, '0', STR_PAD_LEFT).'/'.date('Y'));
                $this->em->flush();

                $inserted++;

            }
        }

        $session = $request->getSession();
        $session->set('arrayOfExistEtudiant', $exist_array);
        return new JsonResponse([
            'inserted' => $inserted,
            'existed' => $exist
        ]);
    }
    #[Route('/download', name: 'etudiant_exist')]
    public function download(Request $request): Response
    {

        $session = $request->getSession();
        $arraysOfEtudiant = $session->get('arrayOfExistEtudiant');
        $spreadsheetExist = new Spreadsheet();
        $sheetExist = $spreadsheetExist->getActiveSheet();
        $sheetExist->setCellValue('A1', 'code');
        $sheetExist->setCellValue('B1', 'nom');
        $sheetExist->setCellValue('C1', 'prenom');
        $i = 2;
        // dd($arraysOfEtudiant);
        foreach ($arraysOfEtudiant as $etudiant) {
            $etudiantExist = $this->em->getRepository(TEtudiant::class)->find($etudiant[0]);
            $sheetExist->setCellValue('A'.$i , $etudiantExist->getCode());
            $sheetExist->setCellValue('B'.$i , $etudiantExist->getNom());
            $sheetExist->setCellValue('C'.$i , $etudiantExist->getPrenom());
            $i++;
        }
        
        $writer = new Xlsx($spreadsheetExist);
        $fileName = 'etudiant_exists.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        // $session->remove('arrayOfExistEtudiant');
        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);

       
    }
    #[Route('/etudiant_valider/{etudiant}', name: 'etudiant_valider')]
    public function etudiant_valider(Request $request,TEtudiant $etudiant): Response
    {   
        $current_year = date('Y').'/'.date('Y')+1; 
        $id_formation = $request->get('formation');
        $formation = $this->em->getRepository(AcFormation::class)->find($id_formation);
        $annee = $this->em->getRepository(AcAnnee::class)->findOneBy(['formation'=>$formation,'designation'=>'2021/2022']);
        if(!$annee) {
            return new JsonResponse('Annee untrouvable!', 500);
        }
        $preinsctiption = new TPreinscription();
        $preinsctiption->setStatut($etudiant->getStatut());
        $preinsctiption->setEtudiant($etudiant);
        $preinsctiption->setInscriptionValide(1);
        $preinsctiption->setRangP(0);
        $preinsctiption->setRangS(0);
        $preinsctiption->setActive(1);
        $preinsctiption->setCreated(new DateTime('now'));
        $preinsctiption->setAnnee($annee);
        $this->em->persist($preinsctiption);
        $this->em->flush();
        $preinsctiption->setCode('PRE-'.$formation->getAbreviation().str_pad($preinsctiption->getId(), 8, '0', STR_PAD_LEFT).'/'.date('Y'));
        $this->em->flush();
        return new JsonResponse('Bien Enregistrer');
    }
    
    #[Route('/list/preinscription/{etudiant}', name: 'list_etudiant_preinscription')]
    public function listPreinscription(Request $request,TEtudiant $etudiant): Response
    {   
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1 = 1 and pre.etudiant_id =" . $etudiant->getId();        
        $columns = array(
            array( 'db' => 'pre.code','dt' => 0 ),
            array( 'db' => 'etu.nom','dt' => 1),
            array( 'db' => 'etu.prenom','dt' => 2),
            array( 'db' => 'etab.abreviation','dt' => 3),
            array( 'db' => 'UPPER(form.abreviation)','dt' => 4),
        );
        // dd($columns);
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
                      
                FROM tpreinscription pre
                inner join tetudiant etu on etu.id = pre.etudiant_id
                inner join ac_annee an on an.id = pre.annee_id
                inner join ac_formation form on form.id = an.formation_id              
                inner join ac_etablissement etab on etab.id = form.etablissement_id           

                $filtre"
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
            // dump($row);
            $nestedData = array();
            $cd = $i;
            $nestedData[] = $cd;
            foreach (array_values($row) as $key => $value) {
                $nestedData[] = $value;
            }
            $data[] = $nestedData;
            // dd($nestedData);
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

    #[Route('/matiere/{etudiant}', name: 'etudiant_exist_matiere')]
    public function getMatiere(Request $request, TEtudiant $etudiant) 
    {
        $matiereExist = '';
        $i = 1;
        $arrayOfExistMatiere = [];
        foreach ($etudiant->getTPreinscritionReleveNotes() as $etudiantMatiere) {
            $matiereExist .= "
                <tr>
                    <td>".$i."</td> 
                    <td>".$etudiantMatiere->getMatiere()->getDesignation()."</td> 
                    <td>".$etudiantMatiere->getNote()."</td>
                    <td><i class='delete_matiere fa fa-trash'  id='".$etudiantMatiere->getId()."' style='cursor:pointer; color:red' ></i></td>
                </tr>";
            $i++;
            array_push($arrayOfExistMatiere, $etudiantMatiere->getMatiere()->getId());
        }
        // dd($matiereExist);
        $matiereNotSelected = $this->em->getRepository(PMatiere::class)->findAll();
        $data = "<option selected enabled>Selection une matiere</option>";
        foreach ($matiereNotSelected as $matiere) {
           if(!in_array($matiere->getId(), $arrayOfExistMatiere)) {
                $data .="<option value=".$matiere->getId().">".$matiere->getDesignation()."</option>";
           }
        }
        return new JsonResponse([
            'table' => $matiereExist,
            'matieres' => $data
        ]);
    }
    #[Route('/addmatiere/{etudiant}', name: 'etudiant_add_matiere')]
    public function addMatiere(Request $request, TEtudiant $etudiant) 
    {
        $matiere = $request->get('matiere');
        $note = $request->get('note');
        // dd($matiere);
        $preinscriptioReleveNote = new TPreinscriptionReleveNote();
        $preinscriptioReleveNote->setUserCreated($this->getUser());
        $preinscriptioReleveNote->setNote($note);
        $preinscriptioReleveNote->setEtudiant($etudiant);
        $preinscriptioReleveNote->setMatiere(
            $this->em->getRepository(PMatiere::class)->find($matiere)
        );
        $preinscriptioReleveNote->setCreated(new \DateTime('now'));
        $this->em->persist($preinscriptioReleveNote);
        $this->em->flush();
       
        return new JsonResponse("Bien enregistre");
    }

    #[Route('/matiere/delete/{preinscriptionnote}', name: 'etudiant_remove_matiere')]
    public function removeMatiere(Request $request, TPreinscriptionReleveNote $preinscriptionnote) 
    {
        
        $this->em->remove($preinscriptionnote);
        $this->em->flush();
       
        return new JsonResponse("Bien enregistre");
    }

    #[Route('/datedernierappel/{etudiant}', name: 'etudiant_dernier_appele')]
    public function dateDernierAppele(Request $request, TEtudiant $etudiant) 
    {
        $etudiant->setTeleListe($request->get('dateappelle'));
        $this->em->flush();
        return new JsonResponse("Bien enregistre");
    }

    #[Route('/statut/{etudiant}', name: 'etudiant_statut')]
    public function statutEtudiant(Request $request, TEtudiant $etudiant) 
    {
        $status = $this->em->getRepository(PStatut::class)->findBy(['table0' => 'etudiant']);
        $html = "<option value=''>Choix statut</option>";
        foreach ($status as $statut) {
            if($statut->getId() == $etudiant->getStatut()->getId()) {
                $html .= "<option value='".$statut->getId()."' selected>".$statut->getDesignation()."</option>";
            } else {
                $html .= "<option value='".$statut->getId()."'>".$statut->getDesignation()."</option>";
            }
        }
        return new JsonResponse($html);
    }
    #[Route('/statut/persist/{etudiant}', name: 'etudiant_statut_persist')]
    public function persistStatutEtudiant(Request $request, TEtudiant $etudiant) 
    {
        $statut = $this->em->getRepository(PStatut::class)->find($request->get('statut'));
        $etudiant->setStatut($statut);
        $this->em->flush();
        return new JsonResponse("Bien Enregistre");
    }


   
}
