<?php

namespace App\Controller\Evaluation;

use Mpdf\Mpdf;
use App\Entity\AcAnnee;
use App\Entity\AcModule;
use App\Entity\ExAnotes;
use App\Entity\ExMnotes;
use App\Entity\ExSnotes;
use App\Entity\PeStatut;
use App\Entity\AcEpreuve;
use App\Entity\AcSemestre;
use App\Entity\ExControle;
use App\Entity\AcPromotion;
use App\Entity\TInscription;
use App\Entity\AcEtablissement;
use App\Controller\ApiController;
use Doctrine\Persistence\ManagerRegistry;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx as reader;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/evaluation/annee')]
class AnneeController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }

    #[Route('/', name: 'evaluation_annee')]
    public function index(Request $request): Response
    {
        ini_set('memory_limit', '-1');
        set_time_limit(0);
        $operations = ApiController::check($this->getUser(), 'evaluation_annee', $this->em, $request);
        if (!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $etablissements =  $this->em->getRepository(AcEtablissement::class)->findBy(['active' => 1]);

        return $this->render('evaluation/annee/index.html.twig', [
            'operations' => $operations,
            'etablissements' => $etablissements,
        ]);
    }
    #[Route('/list/{promotion}', name: 'evaluation_annee_list')]
    public function evaluationAnneeList(Request $request, AcPromotion $promotion): Response
    {
        ini_set('memory_limit', '-1');
        set_time_limit(0);
        $order = $request->get('order');
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($promotion->getFormation());
        // $annee = $this->em->getRepository(AcAnnee::class)->find(494);
        $verify = $this->em->getRepository(ExControle::class)->alreadyValidateAnnee($promotion, $annee);
        $check = 0; //valider cette opération
        if (!$verify) {
            $check = 1; //opération déja validé
        }

        $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByAnneeAndPromo($annee, $promotion, $order);
        $data_saved = [];
        // dd('amine');
        $modules = $this->em->getRepository(AcModule::class)->findByPromotion($promotion, $annee);
        // $modules=['MOD00001026','MOD00001025','MOD00001023','MOD00001024','MOD00001027','MOD00001028','MOD00001375','MOD00001035','MOD00001032','MOD00001031','MOD00001034','MOD00001029','MOD00001030','MOD00002798'];
        // $modules = $this->em->getRepository(AcModule::class)->findBy(['code'=>$modules]);
        // dd($modules[1]);
        foreach ($inscriptions as $inscription) {
            $moyenne = 0;
            $moyenne_normal = 0;
            $total_coef = 0;
            $total_coef_normal = 0;
            $noteModules = [];
            foreach ($modules as $module) {

                $total_coef += $module->getCoefficient();
                $mnote = $this->em->getRepository(ExMnotes::class)->findOneBy(['module' => $module, 'inscription' => $inscription]);
                if (!$mnote) {
                    // dd($module);
                    return new JsonResponse("Note Module Introuvable", 500);
                }
                $moyenne += $mnote->getNote() * $module->getCoefficient();

                if ($module->getType() == 'N') {
                    $moyenne_normal += $mnote->getNote() * $module->getCoefficient();
                    $total_coef_normal += $module->getCoefficient();
                }

                array_push($noteModules, [
                    'note' => $mnote->getNote(),
                    'module' => $module,
                    'statut' => $this->getStatutModule($inscription, $module)
                ]);
            }
            $moyenne = number_format($moyenne / $total_coef, 2, '.', ' ');
            // dd($total_coef_normal);
            $moyenneNormal = number_format($moyenne_normal / $total_coef_normal, 2, '.', ' ');

            array_push($data_saved, [
                'inscription' => $inscription,
                'noteModules' => $noteModules,
                'moyenneNormal' => $moyenneNormal,
                'moyenneSec' => $moyenne
            ]);
        }
        // dd($data_saved);
        if ($order == 3) {
            $moyenne = array_column($data_saved, 'moyenneNormal');
            array_multisort($moyenne, SORT_DESC, $data_saved);
        } else if ($order == 4) {
            $moyenne = array_column($data_saved, 'moyenneNormal');
            array_multisort($moyenne, SORT_ASC, $data_saved);
        }
        $session = $request->getSession();
        $session->set('data_annee', [
            'data_saved' => $data_saved,
            'modules' => $modules,
            'promotion' => $promotion
        ]);
        $html = $this->render('evaluation/annee/pages/list_epreuve_normal.html.twig', [
            'data_saved' => $data_saved,
            'modules' => $modules
        ])->getContent();
        // dd($html);
        return new JsonResponse(['html' => $html, 'check' => $check]);
    }

    #[Route('/impression/{type}/{affichage}', name: 'evaluation_annee_impression')]
    public function evaluationAnneeImpression(Request $request, $type, $affichage)
    {
        ini_set('max_execution_time', '300');
        ini_set("pcre.backtrack_limit", "5000000");
        $session = $request->getSession();
        $dataSaved = $session->get('data_annee')['data_saved'];
        $modules = $session->get('data_annee')['modules'];
        $promotion = $session->get('data_annee')['promotion'];
        $semestres = $this->em->getRepository(AcSemestre::class)->findBy(['promotion' => $promotion, 'active' => 1]);
        $semstre1 = $semestres[0];
        $semstre2 = $semestres[1];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($promotion->getFormation());
        // $annee = $this->em->getRepository(AcAnnee::class)->find(494);
        $infoss =  [
            'dataSaved' => $dataSaved,
            'modules' => $modules,
            'affichage' => $affichage,
            'statutModules' => $this->em->getRepository(PeStatut::class)->findBy(['type' => 'M']),
            'statutSemestres' => $this->em->getRepository(PeStatut::class)->findBy(['type' => 'S']),
            'statutAnnees' => $this->em->getRepository(PeStatut::class)->findBy(['type' => 'A']),
            'etablissement' => $annee->getFormation()->getEtablissement(),
            'semestre1' => $semstre1,
            'semestre2' => $semstre2
        ];
        if ($type == "normal") {
            $html = $this->render("evaluation/annee/pdfs/normal.html.twig", $infoss)->getContent();
        } else if ($type == "anonymat") {
            $html = $this->render("evaluation/annee/pdfs/anonymat.html.twig", $infoss)->getContent();
        } else if ($type == "clair") {
            $html = $this->render("evaluation/annee/pdfs/clair.html.twig", $infoss)->getContent();
        } else if ($type == "rat") {
            foreach ($dataSaved as $key => $value) {
                if ($value['moyenneSec'] >= 10) {
                    unset($dataSaved[$key]);
                }
            }
            // dd($inscriptionsArray);
            $infoss['dataSaved'] = $dataSaved;
            $html = $this->render("evaluation/annee/pdfs/rattrapage.html.twig", $infoss)->getContent();
        } else {
            die("403 something wrong !");
        }
        // dd($html);

        $html .= $this->render("evaluation/annee/pdfs/footer.html.twig")->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'margin_left' => '5',
            'margin_right' => '5',
            'margin_top' => '35',
            'margin_bottom' => '20',
            'format' => 'A4-L',
            'margin_header' => '2',
            'margin_footer' => '2'
        ]);
        $mpdf->SetHTMLHeader($this->render("evaluation/annee/pdfs/header.html.twig", [
            'annee' => $annee,
            'promotion' => $promotion,
            'affichage' => $affichage
        ])->getContent());
        $mpdf->defaultfooterline = 0;
        $mpdf->SetFooter('Page {PAGENO} / {nb}');
        $mpdf->WriteHTML($html);
        $mpdf->Output("annee_deliberation_" . $promotion->getId() . ".pdf", "I");
    }

    public function getStatut($inscription, $statut)
    {
        $abreviation = $this->em->getRepository(ExAnotes::class)->getStatutByColumn($inscription, $statut);
        if ($abreviation != null) {
            return new Response($abreviation['abreviation'], 200, ['Content-Type' => 'text/html']);
        } else {
            return new Response("");
        }
        // return new Response($this->em->getRepository(ExAnotes::class)->getStatutByColumn($inscription, $statut), 200, ['Content-Type' => 'text/html']);
    }
    public function getStatutModule($inscription, $module)
    {
        return $this->em->getRepository(ExMnotes::class)->getStatutAffDef($inscription, $module);
    }
    public function getNoteSemestre($inscription, $semestre, $statut)
    {
        // $abreviation = $this->em->getRepository(ExSnotes::class)->getStatutAffDef($inscription, $semestre, $statut);
        // if ($abreviation != null) { 
        // return new Response($abreviation['abreviation'], 200, ['Content-Type' => 'text/html']);
        // }else{
        //     return new Response("");
        // }
        return new Response($this->em->getRepository(ExSnotes::class)->getStatutAffDef($inscription, $semestre, $statut), 200, ['Content-Type' => 'text/html']);
    }
    #[Route('/enregistre', name: 'evaluation_annee_enregistre')]
    public function evaluationAnneeEnregistre(Request $request)
    {
        $session = $request->getSession();
        $dataSaved = $session->get('data_annee')['data_saved'];
        $promotion = $this->em->getRepository(AcPromotion::class)->find($session->get('data_annee')['promotion']->getId());
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($promotion->getFormation());
        $exControle = $this->em->getRepository(ExControle::class)->alreadyValidateAnnee($promotion, $annee);
        $verify = $this->em->getRepository(ExControle::class)->checkIfyoucanCalculAnnee($annee, $promotion);
        if (!$exControle) {
            return new JsonResponse("Année deja valide", 500);
        }
        if (!$verify) {
            return new JsonResponse("Operation déja valider", 500);
        }

        foreach ($dataSaved as $data) {
            $inscription = $this->em->getRepository(TInscription::class)->find($data['inscription']->getId());
            $inscriptionAnnee  = $this->em->getRepository(ExAnotes::class)->findOneBy(['inscription' => $inscription]);
            if (!$inscriptionAnnee) {
                $inscriptionAnnee = new ExAnotes();
                $inscriptionAnnee->setInscription($inscription);
                $inscriptionAnnee->setAnnee($annee);
                $inscriptionAnnee->setUser($this->getUser());
                $inscriptionAnnee->setCreated(new \DateTime("now"));
                $this->em->persist($inscriptionAnnee);
                $this->em->flush();
            }
            $inscriptionAnnee->setNote(
                $data['moyenneNormal']
            );
            $inscriptionAnnee->setNoteSec(
                $data['moyenneSec']
            );
            ApiController::mouchard($this->getUser(), $this->em, $inscriptionAnnee, 'ExAnotes', 'Enregistrer NoteAnnée');
            $this->em->flush();
        }

        return new JsonResponse("Bien Enregistre", 200);
    }
    #[Route('/valider', name: 'evaluation_annee_valider')]
    public function evaluationAnneeValider(Request $request)
    {
        $session = $request->getSession();
        $promotion = $session->get('data_annee')['promotion'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($promotion->getFormation());
        $exControle = $this->em->getRepository(ExControle::class)->canValidateAnnee($promotion, $annee);
        // dd($exControle);
        if ($exControle) {
            return new JsonResponse("Veuillez Valider Toutes les semestres pour valider cet annee ", 500);
        }
        $this->em->getRepository(ExControle::class)->updateAnneeByElement($promotion, $annee, 1);
        ApiController::mouchard($this->getUser(), $this->em, $annee, 'exControle', 'Validation Circuit Ann');
        $this->em->flush();

        return new JsonResponse("Bien Valider", 200);
    }
    #[Route('/devalider', name: 'evaluation_annee_devalider')]
    public function evaluationAnneeDevalider(Request $request)
    {
        $session = $request->getSession();
        $session = $request->getSession();
        $promotion = $session->get('data_annee')['promotion'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($promotion->getFormation());
        $this->em->getRepository(ExControle::class)->updateAnneeByElement($promotion, $annee, 0);
        ApiController::mouchard($this->getUser(), $this->em, $annee, 'ExAnotes', 'Dévalidation Circuit Ann');
        $this->em->flush();

        return new JsonResponse("Bien Devalider", 200);
    }
    #[Route('/recalculer', name: 'evaluation_annee_recalculer')]
    public function evaluationAnneetrecalculer(Request $request)
    {
        $session = $request->getSession();
        $dataSaved = $session->get('data_annee')['data_saved'];
        foreach ($dataSaved as $data) {
            $inscription = $this->em->getRepository(TInscription::class)->find($data['inscription']->getId());
            $inscriptionAnnee  = $this->em->getRepository(ExAnotes::class)->findOneBy(['inscription' => $inscription]);
            $inscriptionAnnee->setNote(
                $data['moyenneNormal']
            );
            $inscriptionAnnee->setNoteSec(
                $data['moyenneSec']
            );
        }
        ApiController::mouchard($this->getUser(), $this->em, $inscriptionAnnee, 'ExAnotes', 'Recalcule Circuit Ann');
        $this->em->flush();
        return new JsonResponse("Bien Recalculer", 200);
    }
    #[Route('/statut/{type}', name: 'administration_annee_statut')]
    public function administrationAnneStatut(Request $request, $type)
    {
        $session = $request->getSession();
        $dataSaved = $session->get('data_annee')['data_saved'];
        $modules = $session->get('data_annee')['modules'];
        $promotion = $session->get('data_annee')['promotion'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($promotion->getFormation());

        if ($type == "apresrachat") {
            foreach ($dataSaved as $data) {
                $inscription = $this->em->getRepository(TInscription::class)->find($data['inscription']->getId());
                $anote = $this->em->getRepository(ExAnotes::class)->findOneBy(['inscription' => $inscription]);

                $data_semestre_min = $this->em->getRepository(ExSnotes::class)->GetSemestreByCodeAnneeCodePromotion($annee, $promotion, $inscription, 'min', 'statutDef');
                $data_semestre_min_aff = $this->em->getRepository(ExSnotes::class)->GetSemestreByCodeAnneeCodePromotion($annee, $promotion, $inscription, 'min', 'statutAff');

                $data_semestre_max = $this->em->getRepository(ExSnotes::class)->GetSemestreByCodeAnneeCodePromotion($annee, $promotion, $inscription, 'max', 'statutDef');
                $data_semestre_max_aff = $this->em->getRepository(ExSnotes::class)->GetSemestreByCodeAnneeCodePromotion($annee, $promotion, $inscription, 'max', 'statutAff');

                $nbr_modules_statut_aff = $this->em->getRepository(ExMnotes::class)->GetNbrModuleByInscription($annee, $inscription, 10);
                if ($nbr_modules_statut_aff) {
                    $nbr_modules = $nbr_modules_statut_aff[0]['nbr_modules'];
                }
                $min_semestre_statut_def = $max_semestre_statut_def = "";
                if ($data_semestre_min) {
                    $min_semestre_statut_def = $data_semestre_min[0]->getStatutDef()->getId();
                    $semestre_statut_aff = $data_semestre_min_aff[0]->getStatutAff()->getId();
                }
                if ($data_semestre_max) {
                    $max_semestre_statut_def = $data_semestre_max[0]->getStatutDef()->getId();
                    $max_semestre_statut_aff = $data_semestre_max_aff[0]->getStatutAff()->getId();
                }
                $result = $this->AnneeGetStatutApresRachat($min_semestre_statut_def, $max_semestre_statut_def, $semestre_statut_aff, $max_semestre_statut_aff, $nbr_modules);
                if (isset($result) and !empty($result)) {
                    $anote->setStatutS2(
                        $this->em->getRepository(PeStatut::class)->find($result['statut_s2'])
                    );
                    $anote->setStatutAff(
                        $this->em->getRepository(PeStatut::class)->find($result['statut_aff'])
                    );
                    $anote->setStatutDef(
                        $this->em->getRepository(PeStatut::class)->find($result['statut_def'])
                    );
                }
            }
        } elseif ($type == 'statutanneecategorie') {
            foreach ($dataSaved as $data) {
                $inscription = $this->em->getRepository(TInscription::class)->find($data['inscription']->getId());
                $anote = $this->em->getRepository(ExAnotes::class)->findOneBy(['inscription' => $inscription]);
                $data_semestre = $this->em->getRepository(ExSnotes::class)->GetCategorieSemestreByCodeAnnee($annee, $inscription);

                // $result = $this->AnneeGetStatutCategories($data_semestre[0]->getCategorie() ,$data_semestre[1]->getCategorie(),$anote->getStatutAff()->getId(),$data_semestre[0]->getStatutAff()->getId(),$data_semestre[1]->getStatutAff()->getId());

                ////////////// Si il ya qu'une semestre dans toute l'année .. DO THIS RESULT 👇 Si non DO THIS RESULT 👆 

                $result = $this->AnneeGetStatutCategories($data_semestre[0]->getCategorie(), count($data_semestre) > 1 ? $data_semestre[1]->getCategorie() : $data_semestre[0]->getCategorie(), $anote->getStatutAff()->getId(), $data_semestre[0]->getStatutAff()->getId(), count($data_semestre) > 1 ? $data_semestre[1]->getStatutAff()->getId() : $data_semestre[0]->getStatutAff()->getId());

                if (isset($result) and !empty($result)) {
                    $anote->setCategorie($result);
                }
            }
        }
        ApiController::mouchard($this->getUser(), $this->em, $anote, 'ExAnotes', 'Statué Circuit Ann');
        $this->em->flush();
        return new JsonResponse("Bien enregistre", 200);
    }
    public function AnneeGetStatutApresRachat($min_semestre_statut_def, $max_semestre_statut_def, $semestre_statut_aff, $max_semestre_statut_aff, $nbr_modules)
    {

        $send_data = array();
        if ($nbr_modules > 2) {
            $send_data['statut_s2'] = 44;
            $send_data['statut_def'] = 44;
            $send_data['statut_aff'] = 44;
        } else {
            switch ($max_semestre_statut_aff) {
                case 71:
                    switch ($semestre_statut_aff) {
                        case 37:
                            $send_data['statut_aff'] = 42;
                            break;
                        case 38:
                            $send_data['statut_aff'] = 43;
                            break;
                        case 39:
                            $send_data['statut_aff'] = 44;
                            break;
                        case 36:
                            $send_data['statut_aff'] = 70;
                            break;
                        case 56:
                            $send_data['statut_aff'] = 70;
                            break;
                    }
                    break;
                case 57:
                    $send_data['statut_aff'] = 44;
                    break;
                case 39:
                    $send_data['statut_aff'] = 44;
                    break;
                case 38:
                    $send_data['statut_aff'] = 43;
                    break;
                case 37:
                    $send_data['statut_aff'] = 42;
                    break;
                case 36:
                    $send_data['statut_aff'] = 41;
                    break;
                case 56:
                    switch ($semestre_statut_aff) {
                        case 37:
                            $send_data['statut_aff'] = 42;
                            break;
                        case 38:
                            $send_data['statut_aff'] = 43;
                            break;
                        case 39:
                            $send_data['statut_aff'] = 44;
                            break;
                        case 36:
                            $send_data['statut_aff'] = 70;
                            break;
                        case 56:
                            $send_data['statut_aff'] = 70;
                            break;
                    }
                    break;
            }
            switch ($max_semestre_statut_def) {
                case 71:
                    switch ($min_semestre_statut_def) {
                        case 37:
                            $send_data['statut_s2'] = 42;
                            $send_data['statut_def'] = 42;
                            break;
                        case 38:
                            $send_data['statut_s2'] = 43;
                            $send_data['statut_def'] = 43;
                            break;
                        case 39:
                            $send_data['statut_s2'] = 44;
                            $send_data['statut_def'] = 44;
                            break;
                        case 36:
                            $send_data['statut_s2'] = 70;
                            $send_data['statut_def'] = 70;
                            break;
                        case 56:
                            $send_data['statut_s2'] = 70;
                            $send_data['statut_def'] = 70;
                            break;
                    }
                    break;
                case 57:
                    $send_data['statut_s2'] = 44;
                    $send_data['statut_def'] = 44;
                    break;
                case 39:
                    $send_data['statut_s2'] = 44;
                    $send_data['statut_def'] = 44;
                    break;
                case 38:
                    $send_data['statut_s2'] = 43;
                    $send_data['statut_def'] = 43;
                    break;
                case 37:
                    $send_data['statut_s2'] = 42;
                    $send_data['statut_def'] = 42;
                    break;
                case 36:
                    $send_data['statut_s2'] = 41;
                    $send_data['statut_def'] = 41;
                    break;
                case 56:
                    switch ($min_semestre_statut_def) {
                        case 37:
                            $send_data['statut_s2'] = 42;
                            $send_data['statut_def'] = 42;
                            break;
                        case 38:
                            $send_data['statut_s2'] = 43;
                            $send_data['statut_def'] = 43;
                            break;
                        case 39:
                            $send_data['statut_s2'] = 44;
                            $send_data['statut_def'] = 44;
                            break;
                        case 36:
                            $send_data['statut_s2'] = 70;
                            $send_data['statut_def'] = 70;
                            break;
                        case 56:
                            $send_data['statut_s2'] = 70;
                            $send_data['statut_def'] = 70;
                            break;
                    }
            }
            if ($min_semestre_statut_def == 40) {
                $send_data['statut_s2'] = 46;
                $send_data['statut_def'] = 46;
                $send_data['statut_aff'] = 46;
            } elseif ($max_semestre_statut_def == 72) {
                $statusAquis = [36, 37, 38, 56];
                $statusNonAquis = [39, 57, 78];
                if (in_array($min_semestre_statut_def, $statusAquis)) {
                    $send_data['statut_s2'] = 73;
                    $send_data['statut_def'] = 73;
                    $send_data['statut_aff'] = 73;
                } elseif (in_array($min_semestre_statut_def, $statusNonAquis)) {
                    $send_data['statut_s2'] = 44;
                    $send_data['statut_def'] = 44;
                    $send_data['statut_aff'] = 44;
                }
            }
        }

        return $send_data;
    }
    public function AnneeGetStatutCategories($categ_semestre_1, $categ_semestre_2, $statut_annee, $statut_semestre_1, $statut_semestre_2)
    {
        $categorie = max($categ_semestre_1, $categ_semestre_2);
        return $categorie;
        // dd($categorie);
        // $categorie = null;

        // switch ($statut_annee) {
        //     case 41:
        //         $categorie = 'A';
        //         break;
        //     case 70:
        //         $categorie = 'B';
        //         break;
        //     case 42:
        //         $categorie = 'C';
        //         break;
        //     case 43:
        //         $categorie = 'CR';
        //         break;
        //     case 46:
        //         $categorie = 'D';
        //         break;
        //     case 44:
        //         if ($statut_semestre_1 == 57) {
        //             $categorie = 'E';
        //         } else {
        //             if ($statut_semestre_1 == 39) {
        //                 $categorie = 'F';
        //             } else {
        //                 $categorie = $categ_semestre_2;
        //             }
        //         }
        //         break;
        // }
        ////        echo 'categ f : '.$categorie;

        // return $categorie;
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    public function getExtractionByAmine()
    {
        //die("amine");
        $sql = "select epreuve.designation, t_inscription.code_admission, t_etudiant.nom, t_etudiant.prenom,
        epreuve_etudiant_correction.note, question.id,  question.libelle, 
         epreuve_etudiant_correction_detail.reponses
           
           from epreuve_etudiant_correction
           inner join epreuve on epreuve.id = epreuve_etudiant_correction.epreuve_id
           inner join t_inscription on t_inscription.id = epreuve_etudiant_correction.t_inscription_id
           inner join t_admission on t_admission.id = t_inscription.t_admission_id
           inner join t_preinscription on t_preinscription.id = t_admission.t_preinscription_id
           inner join t_etudiant on t_etudiant.id = t_preinscription.t_etudiant_id
           inner join epreuve_etudiant_correction_detail on epreuve_etudiant_correction_detail.epreuve_etudiant_correction_id = epreuve_etudiant_correction.id
           inner join question on question.id = epreuve_etudiant_correction_detail.question_id
           
           where epreuve.id in (477)";
        $conn = $this->em->getConnection();
        $stmt = $conn->prepare($sql);
        //    $stmt->executeQuery();
        $newstmt = $stmt->executeQuery();
        $etudiants = $newstmt->fetchAll();
        //  dd($etudiants);

        $spreadsheet = new Spreadsheet();
        //  die("amine");
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'Epreuve');
        $sheet->setCellValue('B1', 'Code Admission');
        $sheet->setCellValue('C1', 'Nom');
        $sheet->setCellValue('D1', 'Prenom');
        $sheet->setCellValue('E1', 'Note');
        $sheet->setCellValue('F1', 'id');
        $sheet->setCellValue('G1', 'libelle');
        $sheet->setCellValue('H1', 'Reponses Etudiant');
        $sheet->setCellValue('I1', 'Reponses Correct');
        $rowCount = 2;
        foreach ($etudiants as $etudiant) {
            //  dd($etudiant);
            $i = 0;
            $letters = "";
            $var = explode(";", $etudiant['reponses']);
            foreach ($var as $v) {
                if ($i > 0) {
                    $num = explode(":", $v);
                    if (isset($num[1])) {
                        if ($num[1] > 400) {
                            //dd("select lettre from question_choix where id = $num[1]");
                            $sql1 = "select lettre from question_choix where id = $num[1]";
                            $stmt1 = $conn->prepare($sql1);
                            //    $stmt1->execute();
                            //    $stmt = $conn->prepare($sql);
                            //    $stmt->executeQuery();
                            $newstmt = $stmt1->executeQuery();
                            //    dd($newstmt->fetch());
                            $letters .= $newstmt->fetch()['lettre'] . ",";
                        }
                    }
                }
                $i++;
            }
            $id = $etudiant['id'];
            $sql2 = "select lettre from question_choix where reponse = 1 and question_id = $id ";
            $stmt2 = $conn->prepare($sql2);
            //   $stmt2->execute();
            $newstmt = $stmt2->executeQuery();

            $reponses = $newstmt->fetchAll();
            $lettreReponse = "";
            foreach ($reponses as $reponse) {
                $lettreReponse .= $reponse['lettre'] . ",";
            }
            $sheet->setCellValue('A' . $rowCount, $etudiant['designation']);
            $sheet->setCellValue('B' . $rowCount, $etudiant['code_admission']);
            $sheet->setCellValue('C' . $rowCount, $etudiant['nom']);
            $sheet->setCellValue('D' . $rowCount, $etudiant['prenom']);
            $sheet->setCellValue('E' . $rowCount, $etudiant['note']);
            $sheet->setCellValue('F' . $rowCount, $etudiant['id']);
            $sheet->setCellValue('G' . $rowCount,  $etudiant['libelle']);
            $sheet->setCellValue('H' . $rowCount,  $letters);
            $sheet->setCellValue('I' . $rowCount,  $lettreReponse);

            $rowCount++;
        }


        $writer = new Xlsx($spreadsheet);
        $fileName = 'exctraction_epreuve.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);

        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }



    #[Route('/extraction_annee/{etab}', name: 'evaluation_annee_extraction_annee')]
    public function evaluationAnneeExtraction($etab, Request $request)
    {
        ini_set('memory_limit', '-1');
        set_time_limit(0);
        $etablissement = $this->em->getRepository(AcEtablissement::class)->find($etab);
        $current_year = date('m') > 7 ? date('Y') . '/' . date('Y') + 1 :  date('Y') - 1 . '/' . date('Y');
        $annees = $this->em->getRepository(ExAnotes::class)->getAnneeByCurrentYear($current_year, $etablissement ? $etablissement->getId() : null);
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $i = 2;
        $j = 1;
        // dump($annees);die;
        $sheet->fromArray(
            array_keys($annees[0]),
            null,
            'A1'
        );
        foreach ($annees as $semestre) {
            $sheet->fromArray(
                $semestre,
                null,
                'A' . $i
            );
            $i++;
            $j++;
        }
        $writer = new Xlsx($spreadsheet);
        $year = date('m') > 7 ? date('Y') . '-' . date('Y') + 1 : date('Y') - 1 . '-' . date('Y');
        $fileName = "Extraction annee $year.xlsx";
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }

    #[Route('/extraction_list', name: 'evaluation_annee_extraction_list')]
    public function evaluationAnneeExtractionList(Request $request)
    {
        ini_set('memory_limit', '-1');
        set_time_limit(0);
        $session = $request->getSession();
        $dataSaved = $session->get('data_annee')['data_saved'];
        $modules = $session->get('data_annee')['modules'];
        $promotion = $session->get('data_annee')['promotion'];
        $semestres = $this->em->getRepository(AcSemestre::class)->findBy(['promotion' => $promotion, 'active' => 1]);
        $semstre1 = $semestres[0];
        $semstre2 = $semestres[1];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($promotion->getFormation());
        // dd($dataSaved, $modules, $promotion, $semstre1, $semstre2);
        $headers = ['ord', 'idInscription', 'CodeAnonymat', 'CodeAnonymatRat', 'Nom', 'Prénom'];
        foreach ($modules as $module) {
            array_push($headers,  $module->getDesignation());
            array_push($headers, 'STAT-AFF');
        }
        array_push($headers, $semstre1->getDesignation(), "Statut S1", "categorie S1", $semstre2->getDesignation(), "Statut S2", "categorie S2", "Moyenne Validation", "Moyenne Classement", "Statut", "Catégorie");
        // dd($headers);
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $i = 2;
        // $j = 1;
        $sheet->fromArray(
            array_values($headers),
            null,
            'A1'
        );

        $ord = 1;
        foreach ($dataSaved as $data) {
            // dd($data);
            $infos = [];

            $infos[] = $ord;
            $infos[] = $data['inscription']->getId();
            $infos[] = $data['inscription']->getCodeAnonymat();
            $infos[] = $data['inscription']->getCodeAnonymatRat();
            $infos[] = $data['inscription']->getAdmission()->getPreinscription()->getEtudiant()->getNom();
            $infos[] = $data['inscription']->getAdmission()->getPreinscription()->getEtudiant()->getPrenom();

            foreach ($data['noteModules'] as $key => $noteModule) {
                $infos[] = $noteModule['note'];
                $infos[] = $noteModule['statut']['abreviationAff'];
            }

            $snote1 = $this->em->getRepository(ExSnotes::class)->getSnoteByInscriptionAndSemestre($data['inscription']->getId(), $semstre1->getId());
            $snote2 = $this->em->getRepository(ExSnotes::class)->getSnoteByInscriptionAndSemestre($data['inscription']->getId(), $semstre2->getId());

            $infos[] = round($snote1->getNote(), 2);
            $infos[] = $snote1->getStatutAff()->getAbreviation();
            $infos[] = $snote1->getCategorie();

            $infos[] = $snote2 ? round($snote2->getNote(), 2) : "null";
            $infos[] = $snote2 ? $snote2->getStatutAff()->getAbreviation() : "null";
            $infos[] = $snote2 ? $snote2->getCategorie() : "null";

            $anote = $this->em->getRepository(ExAnotes::class)->findOneBy(['inscription' => $data['inscription'], 'annee' => $annee]);
            // dd($anote);
            $categorie = $anote != null ? $anote->getCategorie() : "";

            $infos[] = round($anote->getNote(), 2);
            $infos[] = round($anote->getNoteSec(), 2);
            $infos[] = $this->getStatut($data['inscription'], statut: "statutAff")->getContent();
            $infos[] = $categorie;

            // dd($infos);
            $sheet->fromArray(
                $infos,
                null,
                'A' . $i
            );
            $i++;
            $ord++;
        }
        $writer = new Xlsx($spreadsheet);
        $current_year = date('m') > 7 ? date('Y') . '-' . date('Y') + 1 : date('Y') - 1 . '-' . date('Y');
        $fileName = "Extraction List " . $annee->getFormation()->getAbreviation() . " " . $current_year . ".xlsx";
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
}
