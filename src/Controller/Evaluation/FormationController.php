<?php

namespace App\Controller\Evaluation;

use Mpdf\Mpdf;
use App\Entity\AcAnnee;
use App\Entity\PStatut;
use App\Entity\AcModule;
use App\Entity\ExAnotes;
use App\Entity\ExEnotes;
use App\Entity\ExFnotes;
use App\Entity\ExMnotes;
use App\Entity\PeStatut;
use App\Entity\AcElement;
use App\Entity\DDiplomes;
use App\Entity\PDiplomes;
use App\Entity\ExControle;
use App\Entity\TAdmission;
use App\Entity\AcPromotion;
use App\Entity\PSignataire;
use App\Entity\DPrediplomes;
use App\Entity\TInscription;
use App\Entity\AcEtablissement;
use App\Controller\ApiController;
use App\Entity\AnoteExterne;
use App\Entity\TEtudiant;
use Doctrine\Persistence\ManagerRegistry;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/evaluation/formation')]
class FormationController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'evaluation_formation')]
    public function index(Request $request): Response
    {
        $operations = ApiController::check($this->getUser(), 'evaluation_formation', $this->em, $request);
        if (!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $etablissements =  $this->em->getRepository(AcEtablissement::class)->findBy(['active' => 1]);

        return $this->render('evaluation/formation/index.html.twig', [
            'operations' => $operations,
            'etablissements' => $etablissements,
        ]);
    }
    #[Route('/list/{annee}', name: 'evaluation_formation_list_etudiant')]
    public function evaluationFormationList(Request $request, AcAnnee $annee): Response
    {

        // dd($this->em->getRepository(TEtudiant::class)->find(10721));
        $typeSearch = $request->get("typeSearch");

        $dataInfosGenerales = $this->em->getRepository(AcAnnee::class)->getInfosGenerales($annee);
        $nbr_annee = $dataInfosGenerales['nbr_annee'];
        $data_annee = $this->em->getRepository(AcAnnee::class)->getAnnee($annee, $nbr_annee);

        // dd($nbr_annee);

        $promotion = $this->em->getRepository(AcPromotion::class)->findOneBy(['formation' => $annee->getFormation(), 'ordre' => $nbr_annee]);
        // $promotion = $this->em->getRepository(AcPromotion::class)->find(384);
        $inscriptions = $this->em->getRepository(TInscription::class)->findBy(['annee' => $annee, 'promotion' => $promotion, 'statut' => 13]);
        $lastYear = $annee->getId();

        // dd($dataInfosGenerales);
        $array_etudiants = [];
        $array_informations = [];
        $admissions = [];
        $notFullTest = 0;

        if (!$inscriptions) {
            return new jsonResponse('Aucune Inscription Trouver!', 500);
        }

        if (!empty($inscriptions)) {
            foreach ($inscriptions as $key => $value) {
                if (!in_array($value->getAdmission(), $admissions)) {
                    $admissions[] = $value->getAdmission();
                }
            }
            foreach ($admissions as $admission) {
                // if($admission->getCode() == 'ADM-CFC_DUPOP00006106'){
                $etudiant = $admission->getPreinscription()->getEtudiant();
                // dd($etudiant);
                $array_informations['etudiantInfo'] = $etudiant;
                $array_informations['admission'] = $admission;
                $moyenne = 0;
                $moyenneSec = 0;
                $array_notes = [];
                $countAnote = 0;
                $array_informations['notFull'] = 0;

                $ins = $this->em->getRepository(TInscription::class)->findBy(['admission' => $admission, 'statut' => 13], ['id' => 'DESC']);
                // dd($ins);
                if (count($ins) == 1 && $ins[0]->getAnotes()->getStatutAff()->getId() == 44) {
                    // dd($admission->getCode());
                    continue;
                }
                foreach ($ins as $inscription) {
                    $anote = $inscription->getAnotes();

                    if (!$anote) {
                        array_push($array_notes, 'Actuellement');
                    } else {

                        if ($anote->getStatutAff()->getId() != 44) {
                            $moyenne = ($moyenne + $anote->getNote());
                            $moyenneSec = ($moyenneSec + $anote->getNoteSec());
                            array_push($array_notes, number_format($anote->getNote(), 2, '.', ' '));
                            $countAnote++;
                        }
                    }
                }
                // dd($moyenne);

                // if($admission->getCode() =="ADM-CFC_DUPOP00006106"){
                //     dd(count($array_informations['notes']) < $nbr_annee);
                // }

                $array_informations['notes'] = $array_notes;
                $array_informations['lastYear'] = $lastYear;
                if (count($array_informations['notes']) < $nbr_annee) {
                    // dd("hi");
                    for ($i = count($array_informations['notes']); $i < $nbr_annee; $i++) {
                        // dd($data_annee[$i]['id']);
                        $annee = $this->em->getRepository(AcAnnee::class)->findOneBy(['id' => $data_annee[$i]['id']]);
                        $noteExterne = $this->em->getRepository(AnoteExterne::class)->findNoteByAdmission($admission, $annee);
                        if ($noteExterne) {
                            $array_informations['notes'][$i] = $noteExterne->getNote();
                            $moyenne = ($moyenne + $noteExterne->getNote());
                            $moyenneSec = ($moyenneSec + $noteExterne->getNote());
                            $countAnote++;
                        } else {
                            $array_informations['notes'][$i] = 'indispo';
                            $array_informations['notFull'] = 1;
                            $notFullTest = 1;
                        }
                    }
                    if (count($array_informations['notes']) < $nbr_annee) {
                        $array_informations['moyenne'] = 'indispo';
                        $array_informations['moyenneSec'] = 'indispo';
                    } else {
                        $array_informations['moyenne'] = number_format($moyenne / $nbr_annee, 2, '.', ' ');
                        $array_informations['moyenneSec'] = number_format($moyenneSec / $nbr_annee, 2, '.', ' ');
                    }
                }

                if ($countAnote == $nbr_annee && $countAnote > 0) {
                    $array_informations['moyenne'] = number_format($moyenne / $nbr_annee, 2, '.', ' ');
                    $array_informations['moyenneSec'] = number_format($moyenneSec / $nbr_annee, 2, '.', ' ');
                }
                if ($typeSearch == 'notFull') {
                    if ($array_informations['notFull'] == 1) {
                        array_push($array_etudiants, $array_informations);
                    }
                } elseif ($typeSearch == 'Full') {
                    if ($array_informations['notFull'] == 0) {
                        array_push($array_etudiants, $array_informations);
                    }
                } else {
                    array_push($array_etudiants, $array_informations);
                }
                // }



            }
        }


        $cechekIfExistAllAnneeExist = $this->em->getRepository(ExFnotes::class)->getFnotesByAdmissions($admissions);
        // dd(count($cechekIfExistAllAnneeExist) == count($admissions));
        $check = 0; //valider cette opération
        if (!$cechekIfExistAllAnneeExist && $notFullTest == 0) {
            // dd('hi');
            $check = 1;
        } elseif (count($cechekIfExistAllAnneeExist) == count($admissions)) {
            // dd('2');
            $check = 2;
        }
        // dd($array_etudiants);
        $session = $request->getSession();
        $session->set('data_fnotes', [
            'etudiants' => $array_etudiants,
            'infos_general' => $dataInfosGenerales,
            'dataAnnee' => $data_annee,
            'annee' => $annee,
            'nbrAnnee' => $nbr_annee
        ]);

        $html1 = $this->render('evaluation/formation/pages/infos.html.twig', [
            'dataInfosGenerales' => $dataInfosGenerales,
        ])->getContent();
        $html2 = $this->render('evaluation/formation/pages/list.html.twig', [
            'etudiants' => $array_etudiants,
            'nbrAnnee' => $nbr_annee,
            'dataAnnee' => $data_annee,
            'countAnote' => $countAnote
        ])->getContent();
        return new JsonResponse([
            'html1' => $html1,
            'html2' => $html2,
            'check' => $check
        ]);
    }


    #[Route('/enregistrer', name: 'evaluation_formation_enregistre')]
    public function EvaluationFormationEnregistre(Request $request)
    {
        $session = $request->getSession();
        $etudiants = $session->get('data_fnotes')['etudiants'];
        // dd($etudiants[0]['lastYear']);
        $check = 2;

        // dd($lastYear);

        //insertion de pdiplome

        $admission = $this->em->getRepository(TAdmission::class)->find($etudiants[0]['admission']);
        $formation = $admission->getPreinscription()->getAnnee()->getFormation();
        $pdiplome = $this->em->getRepository(PDiplomes::class)->findOneBy(['formation' => $formation]);
        // dd($pdiplome);

        if (!$pdiplome) {
            $pdiplome = new PDiplomes();
            $pdiplome->setFormation($formation);
            $pdiplome->setUserCreated($this->getUser());
            $pdiplome->setDesignation($formation->getDesignation());
            $pdiplome->setAbreviation($formation->getAbreviation());
            $pdiplome->setCreated(new \DateTime('now'));

            $this->em->persist($pdiplome);
            $this->em->flush();

            $pdiplome->setCode('DIP' . str_pad($pdiplome->getId(), 8, '0', STR_PAD_LEFT));
            $this->em->flush();
        }



        foreach ($etudiants as $etudiant) {
            if ($etudiant['moyenne'] < 10) {
                continue;
            }
            $fnote = $this->em->getRepository(ExFnotes::class)->findOneByAdmission($etudiant['admission']);
            $admission = $this->em->getRepository(TAdmission::class)->find($etudiant['admission']);
            // $annee = $admission->getPreinscription()->getAnnee();
            $etablissement = $admission->getPreinscription()->getAnnee()->getFormation()->getEtablissement();
            $Year = $this->em->getRepository(AcAnnee::class)->find($etudiant['lastYear']);
            $Predip = $this->em->getRepository(DPrediplomes::class)->findBy(['annee' => $Year]);
            $countPredip = count($Predip);

            $Ddip = $this->em->getRepository(DDiplomes::class)->findBy(['annee' => $Year]);
            $countDdip = count($Ddip);

            $lastYear = substr($Year->getDesignation(), 5);
            if (!$fnote) {
                $fnote = new ExFnotes();
                $fnote->setAdmission($admission);
                $fnote->setFormation($admission->getPreinscription()->getAnnee()->getFormation());
                $fnote->setUserCreated($this->getUser());
                $fnote->setCreated(new \DateTime("now"));
                $fnote->setFlag(0);
                $fnote->setNote($etudiant['moyenne']);
                $fnote->setNoteSec($etudiant['moyenneSec']);
                $this->em->persist($fnote);
                $this->em->flush();
            } else {
                $fnote->setNote($etudiant['moyenne']);
                $fnote->setNoteSec($etudiant['moyenneSec']);
                $this->em->flush();
                // dd($prediplome);    
            }


            $prediplome = $this->em->getRepository(DPrediplomes::class)->findOneBy(['fnote' => $fnote]);

            if (!$prediplome) {

                $prediplome = new DPrediplomes();
                // $admission = $this->em->getRepository(TAdmission::class)->find($etudiant['admission']);
                // $pdiplome = $this->em->getRepository(PDiplomes::class)->find($pdiplome[0]->getId());
                // $fnote = $this->em->getRepository(ExFnotes::class)->findOneByAdmission($etudiant['admission']);
                $prediplome->setFnote($fnote);
                $prediplome->setDiplome($pdiplome);
                $prediplome->setUserCreated($this->getUser());
                $prediplome->setAnnee($Year);
                // if($fnote == null){dd($fnote);}
                $note = $fnote->getNote();
                $prediplome->setNote($note);

                switch ($note) {
                    case ($note >= 10 && $note <= 12):
                        $mention = 'Passable';
                        break;
                    case ($note > 12 && $note <= 14):
                        $mention = 'Assez bien';
                        break;
                    case ($note > 14 && $note <= 16):
                        $mention = 'Bien';
                        break;
                    case ($note > 16 && $note <= 18):
                        $mention = 'Très bien';
                        break;
                    case ($note > 18):
                        $mention = 'Excellent';
                        break;
                }

                $prediplome->setMention($mention);
                $prediplome->setCreated(new \DateTime('now'));

                $countPredip = $countPredip + 1;
                // dd($countPredip);
                $prediplome->setCode('PRD_UIA_' . $etablissement->getAbreviation() . '_' . $formation->getAbreviation() . '_' . str_pad($countPredip, 3, '0', STR_PAD_LEFT) . '/' . $lastYear);

                $this->em->persist($prediplome);
                $this->em->flush();
                // $annee = $admission->getPreinscription()->getAnnee();

                // dd(count($countPredip));

                // $this->em->persist($prediplome);
                // $this->em->flush();  
                $statutSignataire = $Year->getFormation()->getEtablissement()->getStatut();
                if ($statutSignataire == 'Doyen') {
                    $signataire = $this->em->getRepository(PSignataire::class)->find(1);
                } else if ($statutSignataire == 'Directeur') {
                    $signataire = $this->em->getRepository(PSignataire::class)->find(2);
                } else {
                    $signataire = null;
                }
                $note = $fnote->getNote();

                // $prediplome = $this->em->getRepository(DPrediplomes::class)->find($prediplome[0]->getId());
                $ddiplome = $this->em->getRepository(DDiplomes::class)->findOneBy(['prediplome' => $prediplome]);
                if (!$ddiplome) {

                    $ddiplome = new DDiplomes();
                    $ddiplome->setPrediplome($prediplome);
                    $ddiplome->setAnnee($Year);
                    // dd($prediplome);
                    $ddiplome->setUserCreated($this->getUser());
                    // if($signataire){     
                    $ddiplome->setSignataire($signataire);
                    // }
                    $countDdip = $countDdip + 1;
                    $ddiplome->setCode('DIP_UIA_' . $etablissement->getAbreviation() . '_' . $formation->getAbreviation() . '_' . str_pad($countDdip, 3, '0', STR_PAD_LEFT) . '/' . $lastYear);
                    $ddiplome->setNote($note);
                    $ddiplome->setCreated(new \DateTime('now'));
                    $ddiplome->setDate(new \DateTime('now'));
                    $this->em->persist($ddiplome);
                    $this->em->flush();
                }
            }
        }





        return new JsonResponse(['message' => "Bien Enregistre", 'check' => $check], 200);
    }

    #[Route('/impression', name: 'evaluation_formation_impression')]
    public function evaluationFormationImpression(Request $request)
    {
        $session = $request->getSession();
        $etudiantsArray = $session->get('data_fnotes')['etudiants'];
        // dd($etudiantsArray);
        $annee = $this->em->getRepository(AcAnnee::class)->find($session->get('data_fnotes')['annee']);
        // dd($session->get('data_fnotes')['annee']);  
        // $annee = $this->em->getRepository(AcAnnee::class)->find($session->get('data_fnotes')['annee']->getId());
        $infosGeneral = $session->get('data_fnotes')['infos_general'];
        $dataAnnee = $session->get('data_fnotes')['dataAnnee'];
        $stautsFormation = $this->em->getRepository(PeStatut::class)->findBy(['type' => 'F']);
        $stautsSemestre = $this->em->getRepository(PeStatut::class)->findBy(['type' => 'S']);
        $stautsAnnee = $this->em->getRepository(PeStatut::class)->findBy(['type' => 'A']);
        // dd($session->get('data_fnotes')['etudiants'][0]['inscription']);

        // dd($etudiantsArray);
        $infos =  [
            'infosGeneral' => $infosGeneral,
            'dataAnnee' => $dataAnnee,
            'annee' => $annee,
            'etudiantsArray' => $etudiantsArray,
            'stautsFormation' => $stautsFormation,
            'stautsSemestre' => $stautsSemestre,
            'stautsAnnee' => $stautsAnnee

        ];
        $html = $this->render("evaluation/formation/pdfs/normal.html.twig", $infos)->getContent();

        $html .= $this->render("evaluation/formation/pdfs/footer.html.twig")->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'margin_left' => '5',
            'margin_right' => '5',
            'margin_top' => '35',
            'margin_bottom' => '15',
            'format' => 'A4-L',
            'margin_header' => '2',
            'margin_footer' => '2'
        ]);
        $mpdf->SetHTMLHeader($this->render("evaluation/formation/pdfs/header.html.twig", [
            'infosGeneral' => $infosGeneral,
            'annee' => $annee
        ])->getContent());
        $mpdf->SetFooter('Page {PAGENO} / {nb}');
        $mpdf->WriteHTML($html);
        $mpdf->Output("epreuve_deliberation_.pdf", "I");
    }

    #[Route('/recalculer', name: 'evaluation_formation_recalculer')]
    public function evaluationFormationRecalculer(Request $request)
    {
        $session = $request->getSession();
        $etudiantsArray = $session->get('data_fnotes')['etudiants'];

        $annee = $this->em->getRepository(AcAnnee::class)->find($session->get('data_fnotes')['annee']);
        foreach ($etudiantsArray as $etudiant) {
            // dd($etudiant['admission']);
            $admission = $this->em->getRepository(TAdmission::class)->find($etudiant['admission']);

            $fnote  = $this->em->getRepository(ExFnotes::class)->findOneBy(['admission' => $admission]);
            $fnote->setNote(
                $etudiant['moyenneSec'] < 0 ? null : $etudiant['moyenneSec']
            );
            $fnote->getNoteSec(
                $etudiant['moyenne'] < 0 ? null : $etudiant['moyenne']
            );
        }
        $this->em->flush();
        return new JsonResponse("Bien Recalculer", 200);
    }

    #[Route('/extractiondiplome', name: 'evaluation_formation_extractiondiplome')]
    public function evaluationFormationExtractionDiplome(Request $request)
    {
        $admissions = array_unique(json_decode($request->get("admissions")));
        // dd($admissions);

        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'ORD');
        $sheet->setCellValue('B1', 'Serie');
        $sheet->setCellValue('C1', 'ID_ADM');
        $sheet->setCellValue('D1', 'ID_DIP');
        $sheet->setCellValue('E1', 'ID_PRD');
        $i = 2;
        $j = 1;


        foreach ($admissions as $admission) {
            $admission = $this->em->getRepository(TAdmission::class)->find($admission);
            $formation = $admission->getPreinscription()->getAnnee()->getFormation();

            $pdiplome = $this->em->getRepository(PDiplomes::class)->findOneBy(['formation' => $formation]);
            $fnote = $this->em->getRepository(ExFnotes::class)->findOneByAdmission($admission);

            if (!$fnote || !$pdiplome || !$fnote->getDPrediplomes()[0]->getDDiplomes()[0] || !$fnote->getDPrediplomes()[0]) {
                return new JsonResponse("veuillez d'abord enregistrer ! ", 500);
            }
            $annee = $fnote->getDPrediplomes()[0]->getDDiplomes()[0]->getAnnee()->getDesignation();
            $lastyear = substr($annee, 5);

            $sheet->setCellValue('A' . $i, $j);
            $sheet->setCellValue('B' . $i, $pdiplome->getCode());
            $sheet->setCellValue('C' . $i, $admission->getCode());
            $sheet->setCellValue('E' . $i, $fnote->getDPrediplomes()[0]->getDDiplomes()[0]->getCode());
            $sheet->setCellValue('D' . $i, $fnote->getDPrediplomes()[0]->getCode());
            $i++;
            $j++;
        }

        $year = intval($lastyear) - 1;
        $year = $year . '_' . $lastyear;

        $writer = new Xlsx($spreadsheet);
        $fileName = $formation->getDesignation() . '_' . $year . '.xlsx';
        $fileName = str_replace(" : ", "_", $fileName);
        //dd($fileName);
        $writer->save($fileName);
        // return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
        return new JsonResponse(['file' => $fileName]);
    }

    // get etudiant note infos

    #[Route('/getEtudiantNotes/{admission}', name: 'getEtudiantNotes')]
    public function getEtudiantInfos(Request $request, $admission)
    {
        $session = $request->getSession();

        $etudiants = $session->get('data_fnotes')['etudiants'];
        foreach ($etudiants as $etudiant) {
            if ($etudiant['admission']->getId() == $admission) {
                $candidats_notes = $this->render("evaluation/formation/pages/candidats_notes.html.twig", [
                    'etudiant' => $etudiant,
                    'nbrAnnee' => $session->get('data_fnotes')['nbrAnnee'],
                    'dataAnnee' => $session->get('data_fnotes')['dataAnnee']
                ])->getContent();   //dd($etudiant);
            }
        }
        $info_etudiant = ['candidats_notes' => $candidats_notes];
        return new JsonResponse($info_etudiant);
    }


    #[Route('/add_notes', name: 'add_notes')]
    public function add_notes(Request $request)
    {
        $annee = $this->em->getRepository(AcAnnee::class)->findOneBy(['id' => $request->get('annee')]);
        $note = $request->get('note');
        if ($note < 10 || $note > 20) {
            return new JsonResponse("la note doit étre entre 10 et 20!!", 500);
        }
        $admission = $this->em->getRepository(TAdmission::class)->findOneBy(['id' => $request->get('admission')]);
        // dd($admission);
        $noteExterne = $this->em->getRepository(AnoteExterne::class)->findNoteByAdmission($admission, $annee);

        if ($noteExterne) {
            $noteExterne->setNote($note);
            $noteExterne->setUserUpdated($this->getUser());
            $noteExterne->setUpdated(new \DateTime('now'));
            $this->em->flush();
            return new JsonResponse("Bien Modifier", 200);
        }

        $AnoteExterne = new AnoteExterne();
        $AnoteExterne->setAdmission($admission);
        $AnoteExterne->setAnnee($annee);
        $AnoteExterne->setNote($note);
        $AnoteExterne->setUserCreated($this->getUser());
        $AnoteExterne->setCreated(new \DateTime('now'));

        $this->em->persist($AnoteExterne);
        $this->em->flush();

        return new JsonResponse("Bien Enregistre", 200);
    }


    #[Route('/forceEnregistrer', name: 'forceEnregistrer')]
    public function forceEnregistrer(Request $request)
    {
        $admissions = [];
        if ($admissions == null) {
            die('admissions vide!');
        }
        foreach ($admissions as $admission_code) {
            $admission = $this->em->getRepository(TAdmission::class)->findOneBy(['code' => $admission_code]);
            $inscriptions = $this->em->getRepository(TInscription::class)->findBy(['admission' => $admission, 'statut' => 13]);
            // dd($inscriptions);
            $annee = end($inscriptions)->getAnnee();
            $formation = $annee->getFormation();
            $pdiplome = $this->em->getRepository(PDiplomes::class)->findOneBy(['formation' => $formation]);
            // dd($pdiplome);

            if (!$pdiplome) {
                $pdiplome = new PDiplomes();
                $pdiplome->setFormation($formation);
                $pdiplome->setUserCreated($this->getUser());
                $pdiplome->setDesignation($formation->getDesignation());
                $pdiplome->setAbreviation($formation->getAbreviation());
                $pdiplome->setCreated(new \DateTime('now'));

                $this->em->persist($pdiplome);
                $this->em->flush();

                $pdiplome->setCode('DIP' . str_pad($pdiplome->getId(), 8, '0', STR_PAD_LEFT));
                $this->em->flush();
            }
            $fnote = $this->em->getRepository(ExFnotes::class)->findOneByAdmission($admission);
            $admission = $this->em->getRepository(TAdmission::class)->find($admission);
            $nbr_annee = $formation->getNbrAnnee();
            $anote = $this->em->getRepository(ExAnotes::class)->CalculeMoyenneNote($admission->getId());
            if (!$fnote) {
                $fnote = new ExFnotes();
                $fnote->setAdmission($admission);
                $fnote->setFormation($formation);
                $fnote->setUserCreated($this->getUser());
                $fnote->setCreated(new \DateTime("now"));
                $fnote->setFlag(0);
                $fnote->setNote(round($anote['moyenne'] / $nbr_annee, 2));
                $fnote->setNote(round($anote['moyenneSec'] / $nbr_annee, 2));
                $this->em->persist($fnote);
                $this->em->flush();
            } else {
                $fnote->setNote(round($anote['moyenne'] / $nbr_annee, 2));
                $fnote->setNote(round($anote['moyenneSec'] / $nbr_annee, 2));
                $this->em->flush();
            }
            $lastYear = substr($annee->getDesignation(), 5);
            $Predip = $this->em->getRepository(DPrediplomes::class)->findBy(['annee' => $annee]);
            $countPredip = count($Predip);
            $prediplome = $this->em->getRepository(DPrediplomes::class)->findOneBy(['fnote' => $fnote]);
            if (!$prediplome) {
                $prediplome = new DPrediplomes();
                $prediplome->setFnote($fnote);
                $prediplome->setDiplome($pdiplome);
                $prediplome->setUserCreated($this->getUser());
                $prediplome->setAnnee($annee);
                $note = $fnote->getNote();
                $prediplome->setNote($note);
                // dd($note);
                switch ($note) {
                    case ($note < 10):
                        $mention = 'a modifier';
                    case ($note >= 10 && $note <= 12):
                        $mention = 'Passable';
                        break;
                    case ($note > 12 && $note <= 14):
                        $mention = 'Assez bien';
                        break;
                    case ($note > 14 && $note <= 16):
                        $mention = 'Bien';
                        break;
                    case ($note > 16 && $note <= 18):
                        $mention = 'Très bien';
                        break;
                    case ($note > 18):
                        $mention = 'Excellent';
                        break;
                }

                $prediplome->setMention($mention);
                $prediplome->setCreated(new \DateTime('now'));

                $countPredip = $countPredip + 1;
                $prediplome->setCode('PRD_UIA_' . $formation->getEtablissement()->getAbreviation() . '_' . $formation->getAbreviation() . '_' . str_pad($countPredip, 3, '0', STR_PAD_LEFT) . '/' . $lastYear);

                $this->em->persist($prediplome);
                $this->em->flush();
                $statutSignataire = $formation->getEtablissement()->getStatut();
                if ($statutSignataire == 'Doyen') {
                    $signataire = $this->em->getRepository(PSignataire::class)->find(1);
                } else if ($statutSignataire == 'Directeur') {
                    $signataire = $this->em->getRepository(PSignataire::class)->find(2);
                } else {
                    $signataire = null;
                }
                $note = $fnote->getNote();

                $Ddip = $this->em->getRepository(DDiplomes::class)->findBy(['annee' => $annee]);
                $countDdip = count($Ddip);
                $ddiplome = $this->em->getRepository(DDiplomes::class)->findOneBy(['prediplome' => $prediplome]);
                if (!$ddiplome) {
                    $ddiplome = new DDiplomes();
                    $ddiplome->setPrediplome($prediplome);
                    $ddiplome->setAnnee($annee);
                    $ddiplome->setUserCreated($this->getUser());
                    $ddiplome->setSignataire($signataire);
                    $countDdip = $countDdip + 1;
                    $ddiplome->setCode('DIP_UIA_' . $formation->getEtablissement()->getAbreviation() . '_' . $formation->getAbreviation() . '_' . str_pad($countDdip, 3, '0', STR_PAD_LEFT) . '/' . $lastYear);
                    $ddiplome->setNote($note);
                    $ddiplome->setCreated(new \DateTime('now'));
                    $ddiplome->setDate(new \DateTime('now'));
                    $this->em->persist($ddiplome);
                    $this->em->flush();
                }
            }
        }
        dd('done');
    }


    #[Route('/impressionDiplome/{admission}', name: 'impressionDiplome')]
    public function impressionDiplome(TAdmission $admission)
    {
        // dd($pv);
        // dd($admission);
        $html = $this->render("evaluation/formation/pdfs/diplome.html.twig", [
            'admission' => $admission,
        ])->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'format' => 'A4-L',
            'margin_top' => 0,
            'margin_left' => 2,
            'margin_right' => 2,
            'default_font' => 'arial'
            // 'default_font' => 'dejavusans'
        ]);
        // $mpdf->SetFont('Arial');
        $mpdf->SetFont('ArialMT', '', 14);
        $mpdf->autoScriptToLang = true;
        $mpdf->autoLangToFont = true;
        // $mpdf->SetHTMLFooter(
        //     $this->render("evaluation/formation/pdf/footer.html.twig")->getContent()
        // );
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle("Diplome");
        $mpdf->Output("Diplome " . $admission->getCode() . ".pdf", "I");
    }
}
