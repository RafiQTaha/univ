<?php

namespace App\Controller\Evaluation;

use App\Controller\ApiController;
use App\Entity\AcAnnee;
use App\Entity\AcEtablissement;
use App\Entity\AcModule;
use App\Entity\AcSemestre;
use App\Entity\ExControle;
use App\Entity\ExEnotes;
use App\Entity\ExMnotes;
use App\Entity\ExSnotes;
use App\Entity\PeStatut;
use App\Entity\TInscription;
use Doctrine\Persistence\ManagerRegistry;
use Mpdf\Mpdf;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/evaluation/semestre')]
class SemestreController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'evaluation_semestre')]
    public function index(Request $request): Response
    {
        $operations = ApiController::check($this->getUser(), 'evaluation_semestre', $this->em, $request);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $etablissements =  $this->em->getRepository(AcEtablissement::class)->findBy(['active'=>1]);

        return $this->render('evaluation/semestre/index.html.twig', [
            'operations' => $operations,
            'etablissements' => $etablissements,
        ]);
    }
    #[Route('/list/{semestre}', name: 'evaluation_semestre_list')]
    public function evaluationSemestreList(Request $request, AcSemestre $semestre): Response
    {
        $order = $request->get('order');
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($semestre->getPromotion()->getFormation());
        $verify = $this->em->getRepository(ExControle::class)->checkIfyoucanCalculSemestre($annee, $semestre);

        $check = 0; //valider cette opération
        if(!$verify){
            $check = 1; //opération déja validé
        }
        
        $promotion = $semestre->getPromotion();
        $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByAnneeAndPromo($annee, $promotion, $order);
        $data_saved = [];
        $modules = $this->em->getRepository(AcModule::class)->getMdouleBySemestreAndExControle($semestre, $annee);
        foreach ($inscriptions as $inscription) {
            $moyenne = 0;
            $moyenne_normal = 0;
            $note_rachat = 0;
            $total_coef = 0;
            $total_coef_normal = 0;
            $noteModules = [];
            foreach ($modules as $module) {
                $total_coef += $module->getCoefficient();
                $mnote = $this->em->getRepository(ExMnotes::class)->findOneBy(['module' => $module, 'inscription' => $inscription]);

                $moyenne += $mnote->getNote() * $module->getCoefficient();
                
                if ($module->getType() == 'N') {
                    $moyenne_normal += $mnote->getNote() * $module->getCoefficient();
                    $note_rachat += $mnote->getNoteRachat() * $module->getCoefficient();
                    $total_coef_normal += $module->getCoefficient();
                }

                array_push($noteModules, [
                    'note' => $mnote->getNote(),
                    'statut' => $this->getStatutModule($inscription, $module)
                ]);

            }
            // $categorie="";
            $snote = $this->em->getRepository(ExSnotes::class)->findOneBy(['inscription' => $inscription, 'semestre' => $semestre]);
            $categorie = $snote != null ? $snote->getCategorie() : "";
            if($snote && $snote->getNoteRachat()) {
                // dd('amine');
                $note_rachat_semstre = $snote->getNoteRachat();
            } else {
                $note_rachat_semstre = 0;
            }
            $moyenneSec = number_format($moyenne / $total_coef, 2, '.', ' ');
            $moyenneNormal = number_format($moyenne_normal / $total_coef_normal, 2, '.', ' ');
            $noteRachat = $note_rachat / $total_coef_normal;
            // dd($categorie);

            array_push($data_saved, [
                'inscription' => $inscription,
                'noteModules' => $noteModules,
                'noteRachat' => $noteRachat, 
                'noteRachatSemstre' => $note_rachat_semstre,
                'moyenneNormal' =>$moyenneNormal, 
                'moyenneSec' => $moyenneSec,
                'categorie' => $categorie 
            ]);
        }
        
        if($order == 3) {
            $moyenne = array_column($data_saved, 'moyenneNormal');
            array_multisort($moyenne, SORT_DESC, $data_saved);
        } else if($order == 4){
            $moyenne = array_column($data_saved, 'moyenneNormal');
            array_multisort($moyenne, SORT_ASC, $data_saved);
        }elseif ($order == 5) {
            $categorieSort = array_column($data_saved, 'categorie');
            $moyenne = array_column($data_saved, 'moyenneNormal');
            array_multisort($categorieSort, SORT_ASC,$moyenne, SORT_DESC, $data_saved);
        }
        // dd($data_saved);
        $session = $request->getSession();
        $session->set('data_semestre', [
            'data_saved' => $data_saved, 
            'modules' => $modules,
            'semestre' => $semestre
        ]);
        $html = $this->render('evaluation/semestre/pages/list_epreuve_normal.html.twig', [
            'data_saved' => $data_saved,
            'modules' => $modules
        ])->getContent();
        // dd($html);
        return new JsonResponse(['html' => $html, 'check' => $check]);
    } 
    #[Route('/impression/{type}/{affichage}', name: 'evaluation_semestre_impression')]
    public function evaluationSemestreImpression(Request $request, $type, $affichage) 
    {         
        $session = $request->getSession();
        $dataSaved = $session->get('data_semestre')['data_saved'];
        $semestre = $session->get('data_semestre')['semestre'];
        $modules = $session->get('data_semestre')['modules'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($semestre->getPromotion()->getFormation());
        $infos =  [
            'dataSaved' => $dataSaved,
            'semestre' => $semestre,
            'modules' => $modules,
            'affichage' => $affichage,
            'statutModules' => $this->em->getRepository(PeStatut::class)->findBy(['type' => 'M']),
            'statutSemestres' => $this->em->getRepository(PeStatut::class)->findBy(['type' => 'S']),
            'etablissement' => $annee->getFormation()->getEtablissement(),
        ];
        if($type == "normal"){
            $html = $this->render("evaluation/semestre/pdfs/normal.html.twig", $infos)->getContent();
        } else if ($type == "anonymat") {
            $html = $this->render("evaluation/semestre/pdfs/anonymat.html.twig", $infos)->getContent();
        }
        else if ($type == "clair") {
            $html = $this->render("evaluation/semestre/pdfs/clair.html.twig", $infos)->getContent();
        }
        else if ($type == "rat") {
            foreach($dataSaved as $key => $value) {
                if($value['moyenneSec'] >= 10) {  
                  unset($dataSaved[$key]);
                }
            }
            // dd($inscriptionsArray);
            $infos['dataSaved'] = $dataSaved;
            $html = $this->render("evaluation/semestre/pdfs/rattrapage.html.twig", $infos)->getContent();
        } else {
            die("403 something wrong !");
        }
        $html .= $this->render("evaluation/semestre/pdfs/footer.html.twig")->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'margin_left' => '5',
            'margin_right' => '5',
            'margin_top' => '35',
            'margin_bottom' => '25',
            'format' => 'A4-L',
            'margin_header' => '2',
            'margin_footer' => '2'
            ]);
        $mpdf->SetHTMLHeader($this->render("evaluation/semestre/pdfs/header.html.twig", [
            'semestre' => $semestre,
            'annee' => $annee,
            'affichage' => $affichage
        ])->getContent());
        $mpdf->defaultfooterline = 0;
        $mpdf->SetFooter('Page {PAGENO} / {nb}');
        $mpdf->WriteHTML($html);
        $mpdf->Output("semestre_deliberation_".$semestre->getId().".pdf", "I");
    }

    // impression deliberation

    #[Route('/impression_delib/{ins}', name: 'evaluation_semestre_impression_deliberation')]
    public function evaluationSemestreImpressionDeliberation(Request $request, $ins) 
    {         
        $session = $request->getSession();
        $semestre = $session->get('data_semestre')['semestre'];
        $modules = $session->get('data_semestre')['modules'];
        $inscription = $this->em->getRepository(TInscription::class)->find($ins);
        $snote= $this->em->getRepository(ExSnotes::class)->findOneBy(['inscription'=>$inscription, 'semestre' =>$semestre]); 

        $noteAssiduite = $this->em->getRepository(ExMnotes::class)->getNotesModuleAssiduiteBySemestre($semestre,$inscription);
        $palier = ($snote->getNote() + $noteAssiduite->getNote()) / 2;

        $snotes = $this->em->getRepository(ExSnotes::class)->findByAdmission($inscription->getAdmission());
        $count_module_non_aquis = $this->em->getRepository(ExMnotes::class)->getModuleNonAquis($semestre, $inscription);
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($semestre->getPromotion()->getFormation());
        $infos =  [
            'nbr_nonAcis'=> count($count_module_non_aquis),
            'derogation' => count($snotes),
            'semestre' => $semestre,
            'snote' => $snote,
            'inscription' => $inscription,
            'modules' => $modules,
            'palier' => $palier,
            'statutModules' => $this->em->getRepository(PeStatut::class)->findBy(['type' => 'M']),
            'statutSemestres' => $this->em->getRepository(PeStatut::class)->findBy(['type' => 'S']),
            'etablissement' => $annee->getFormation()->getEtablissement(),
        ];

        $html = $this->render("evaluation/semestre/pdfs/deliberation_individuel.html.twig", $infos)->getContent();
        
        $html .= $this->render("evaluation/semestre/pdfs/footer.html.twig")->getContent();
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
        $mpdf->SetHTMLHeader($this->render("evaluation/semestre/pdfs/header_deliberation_individuel.html.twig", [
            'semestre' => $semestre,
            'annee' => $annee
        ])->getContent());
        $mpdf->defaultfooterline = 0;
        $mpdf->SetFooter('Page {PAGENO} / {nb}');
        $mpdf->WriteHTML($html);
        $mpdf->Output("semestre_deliberation_individuel".$semestre->getId().".pdf", "I");
    }


    // get enotes by module and inscription and semestre

    public function getEnotesBySemestreAction($module, $inscription)
    {

        
        $enotes = $this->em->getRepository(ExEnotes::class)->findByModule($module, $inscription);

        $html = "";

        $count = 0;

        foreach ($enotes as $key => $enote) {
            $html .= $this->render("evaluation/semestre/pages/enotes.html.twig", ['enote'=>$enote, 'enotes'=>$enotes, 'count'=>$count])->getContent();
            $count++;
        }

        return new response($html);
    }
    


    public function getStatut($inscription, $semestre, $statut)
    {
        $abreviation = $this->em->getRepository(ExSnotes::class)->getStatutByColumn($inscription, $semestre, $statut);
        if ($abreviation != null) {
            return new Response($this->em->getRepository(ExSnotes::class)->getStatutByColumn($inscription, $semestre, $statut)['abreviation'], 200, ['Content-Type' => 'text/html']);
        }else{
            return new Response("");
        }
    }
    public function getStatutModule($inscription, $module)
    {
        return $this->em->getRepository(ExMnotes::class)->getStatutAffDef($inscription, $module);
    }

    #[Route('/enregistre', name: 'evaluation_semestre_enregistre')]
    public function evaluationSemetreEnregistre(Request $request) 
    {         
        $session = $request->getSession();
        $dataSaved = $session->get('data_semestre')['data_saved'];
        $semestre = $this->em->getRepository(AcSemestre::class)->find($session->get('data_semestre')['semestre']->getId());
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($semestre->getPromotion()->getFormation());
        $exControle = $this->em->getRepository(ExControle::class)->alreadyValidateSemestre($semestre, $annee);
        $verify = $this->em->getRepository(ExControle::class)->checkIfyoucanCalculSemestre($annee, $semestre);
        if(!$exControle) {
            return new JsonResponse("Semestre deja valide", 500);
        }
        if(!$verify){
            return new JsonResponse("Operation déja valider", 500);
        }

        foreach ($dataSaved as $data) {
            $inscription = $this->em->getRepository(TInscription::class)->find($data['inscription']->getId());
            $inscriptionSemstre  = $this->em->getRepository(ExSnotes::class)->findOneBy(['inscription' => $inscription, 'semestre' => $semestre]);
            if(!$inscriptionSemstre) {
                $inscriptionSemstre = new ExSnotes();
                $inscriptionSemstre->setInscription($inscription);
                $inscriptionSemstre->setSemestre($semestre);
                $inscriptionSemstre->setUser($this->getUser());
                $inscriptionSemstre->setCreated(new \DateTime("now"));
                $this->em->persist($inscriptionSemstre);
                $this->em->flush();
            }
            $inscriptionSemstre->setNote(
                $data['moyenneNormal']
            );
            $inscriptionSemstre->setNoteSec(
                $data['moyenneSec']
            );
            $inscriptionSemstre->setNoteRachat(
                $data['noteRachat'] > 0 ?  $data['noteRachat'] : null
            );
            ApiController::mouchard($this->getUser(), $this->em,$inscriptionSemstre, 'ExSnotes', 'Enregistrer noteSemestre');
            $this->em->flush();
        }      
        
        return new JsonResponse("Bien Enregistre", 200);
    }

    #[Route('/valider', name: 'evaluation_semestre_valider')]
    public function evaluationSemestreValider(Request $request) 
    {         
        $session = $request->getSession();
        $semestre = $session->get('data_semestre')['semestre'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($semestre->getPromotion()->getFormation());
        $exControle = $this->em->getRepository(ExControle::class)->canValidateSemestre($semestre, $annee);
        // dd($exControle);
        if($exControle) {
            return new JsonResponse("Veuillez Valider Toutes les modules pour valider ce semestre ", 500);
        }
        $this->em->getRepository(ExControle::class)->updateSemestreByElement($semestre, $annee, 1);
        
        ApiController::mouchard($this->getUser(), $this->em,$semestre, 'exControle', 'Validation Circuit SEM');
        $this->em->flush();
        return new JsonResponse("Bien Valider", 200);
    }
    #[Route('/devalider', name: 'evaluation_semestre_devalider')]
    public function evaluationSemestreDevalider(Request $request) 
    {         
        $session = $request->getSession();
        $semestre = $session->get('data_semestre')['semestre'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($semestre->getPromotion()->getFormation());
        $this->em->getRepository(ExControle::class)->updateSemestreByElement($semestre, $annee, 0);
        ApiController::mouchard($this->getUser(), $this->em,$semestre, 'exControle', 'Dévalidation Circuit SEM');
        $this->em->flush();

        return new JsonResponse("Bien Devalider", 200);
    }
    #[Route('/recalculer', name: 'evaluation_semestre_recalculer')]
    public function evaluationSemesetrecalculer(Request $request) 
    {         
        $session = $request->getSession();
        $dataSaved = $session->get('data_semestre')['data_saved'];
        $semestre = $this->em->getRepository(AcSemestre::class)->find($session->get('data_semestre')['semestre']->getId());
        foreach ($dataSaved as $data) {
            $inscription = $this->em->getRepository(TInscription::class)->find($data['inscription']->getId());
            $inscriptionSemstre  = $this->em->getRepository(ExSnotes::class)->findOneBy(['inscription' => $inscription, 'semestre' => $semestre]);
            $inscriptionSemstre->setNote(
                $data['moyenneNormal']
            );
            $inscriptionSemstre->setNoteSec(
                $data['moyenneSec']
            );
            $inscriptionSemstre->setNoteRachat(
                $data['noteRachat'] > 0 ?  $data['noteRachat'] : null
            );
        }
        ApiController::mouchard($this->getUser(), $this->em,$inscriptionSemstre, 'ExSnotes', 'Recalcule NoteSemestre');
        $this->em->flush();
        return new JsonResponse("Bien Recalculer", 200);

    }
    #[Route('/statut/{type}', name: 'administration_semestre_statut')]
    public function administrationSemestreStatut(Request $request, $type) 
    {         
        $session = $request->getSession();
        $dataSaved = $session->get('data_semestre')['data_saved'];
        $modules = $session->get('data_semestre')['modules'];
        $semestre = $session->get('data_semestre')['semestre'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($semestre->getPromotion()->getFormation());
        if($type == 'avantrachat'){
            foreach ($dataSaved as $data) {
                $inscription = $this->em->getRepository(TInscription::class)->find($data['inscription']->getId());
                $count_module_non_aquis = $this->em->getRepository(ExMnotes::class)->getModuleNonAquis($semestre, $inscription);
                $snote = $this->em->getRepository(ExSnotes::class)->findOneBy(['semestre' => $semestre, 'inscription' => $inscription]);
                $data_module_min = $this->em->getRepository(ExMnotes::class)->GetModuleByCodeAnneeCodeSemstre($annee, $semestre, $inscription, 'min', 'statutDef');
                $data_module_max = $this->em->getRepository(ExMnotes::class)->GetModuleByCodeAnneeCodeSemstre($annee, $semestre, $inscription, 'max', 'statutDef');
                $data_module_max_aff = $this->em->getRepository(ExMnotes::class)->GetModuleByCodeAnneeCodeSemstre($annee, $semestre, $inscription, 'max', 'statutAff');
                $min_module_statut_def = $max_module_statut_def = "";
                // dd($data_elements_min);
                if ($data_module_min) {
                    $min_module_statut_def = $data_module_min[0]->getStatutDef()->getId();
                }
                if ($data_module_max) {
                    $max_module_statut_def = $data_module_max[0]->getStatutDef()->getId();
                    $max_module_statut_aff = $data_module_max_aff[0]->getStatutAff()->getId();
                }
                $result = $this->SemestreGetStatutAvantRachat($snote, 7, 10, $min_module_statut_def, $max_module_statut_def, $max_module_statut_aff, count($count_module_non_aquis));

                if (isset($result) and !empty($result)) {
                    $snote->setStatutS2(
                        $this->em->getRepository(PeStatut::class)->find($result['statut_s2'])
                    );
                    $snote->setStatutAff(
                        $this->em->getRepository(PeStatut::class)->find($result['statut_aff'])
                    );
                    $snote->setStatutDef(
                        $this->em->getRepository(PeStatut::class)->find($result['statut_def'])
                    );
                }
            }
        
        }
        elseif($type == "apresrachat") {
            foreach ($dataSaved as $data) {
                $inscription = $this->em->getRepository(TInscription::class)->find($data['inscription']->getId());
                $snote = $this->em->getRepository(ExSnotes::class)->findOneBy(['semestre' => $semestre, 'inscription' => $inscription]);                
                $data_modules = $this->em->getRepository(ExMnotes::class)->GetModuleByCodeAnneeCodeSemstre($annee, $semestre, $inscription, 'all', 'statutDef');                
                $result = $this->SemestreGetStatutApresRachat($data_modules);
 
                if (isset($result) and !empty($result)) {
                    $snote->setStatutS2(
                        $this->em->getRepository(PeStatut::class)->find($result['statut_s2'])
                    );
                    $snote->setStatutAff(
                        $this->em->getRepository(PeStatut::class)->find($result['statut_aff'])
                    );
                    $snote->setStatutDef(
                        $this->em->getRepository(PeStatut::class)->find($result['statut_def'])
                    );
                }
            }
        }  
        elseif ($type == 'statutsemestrecategorie') {
            foreach ($dataSaved as $data) {
                $inscription = $this->em->getRepository(TInscription::class)->find($data['inscription']->getId());
                $snote = $this->em->getRepository(ExSnotes::class)->findOneBy(['semestre' => $semestre, 'inscription' => $inscription]);                
                $data_modules = $this->em->getRepository(ExMnotes::class)->GetModuleByCodeAnneeCodeSemstre($annee, $semestre, $inscription, 'all', 'statutAff');                
                $result = $this->SemestreGetStatutCategories($data_modules, $inscription, $annee, $semestre);
 
                if (isset($result) and !empty($result)) {
                    $snote->setCategorie($result);
                }
            }
        }
        
        ApiController::mouchard($this->getUser(), $this->em,$snote, 'ExSnotes', 'Statuté NoteSemestre');
        $this->em->flush();
        return new JsonResponse("Bien enregistre", 200);

    }

    public function SemestreGetStatutAvantRachat($snote, $note_eliminatoire, $note_validation, $min_module_statut_def, $max_module_statut_def, $max_module_statut_aff, $count_module_non_aquis) {
        $send_data = array();
        
        $etablissement_id = $snote->getInscription()->getAnnee()->getFormation()->getEtablissement()->getId();
        $note_validation = $etablissement_id == 26 ? 12 : 10;
        // if ($min_module_statut_def == 29 || $count_module_non_aquis > 2) {
        if ($min_module_statut_def == 29) {
            $send_data['statut_s2'] = 57;
            $send_data['statut_def'] = 57;
            $send_data['statut_aff'] = 57;
        } else {
            // if ($snote->getNote() < $note_validation) {
            if ($snote->getNote() < $note_validation || $count_module_non_aquis > 2) {
                $send_data['statut_s2'] = 39;
                $send_data['statut_def'] = 39;
                $send_data['statut_aff'] = 39;
            } else {

                switch ($min_module_statut_def) {
                    case 31:
                        $send_data['statut_s2'] = 37;
                        $send_data['statut_def'] = 37;
                        $send_data['statut_aff'] = 37;
                        break;
                    case 32:
                        $send_data['statut_s2'] = 37;
                        $send_data['statut_def'] = 37;
                        if ($max_module_statut_aff == 55) {
                            $send_data['statut_aff'] = 56;
                        } else {
                            $send_data['statut_aff'] = 36;
                        }
                        break;
                    case 34:
                        if ($max_module_statut_aff == 55) {
                            $send_data['statut_s2'] = 56;
                            $send_data['statut_def'] = 56;
                            $send_data['statut_aff'] = 56;
                        } else {
                            $send_data['statut_s2'] = 36;
                            $send_data['statut_def'] = 36;
                            $send_data['statut_aff'] = 36;
                        }
                        break;
                    case 35:
                        $send_data['statut_s2'] = 40;
                        $send_data['statut_def'] = 40;
                        $send_data['statut_aff'] = 40;
                        break;
                    case 53 :
                        if ($max_module_statut_aff == 53) {
                            $send_data['statut_s2'] = 71;
                            $send_data['statut_def'] = 71;
                            $send_data['statut_aff'] = 71;
                        }
                        break;
                    case 55:
                        $send_data['statut_s2'] = 56;
                        $send_data['statut_def'] = 56;
                        $send_data['statut_aff'] = 56;
                        break;
                }
            }
        }
        //  var_dump($send_data); die();
        return $send_data;
    }
    public function SemestreGetStatutApresRachat($data) {
        $send_data = array();
        foreach ($data as $key => $value) {
            if ($value->getStatutDef()->getId()== 30 || $value->getStatutDef()->getId() == 33) {

                $send_data['statut_s2'] = 38;
                $send_data['statut_def'] = 38;
                $send_data['statut_aff'] = 38;
                break;
            }
        }
        return $send_data;
    }
    public function SemestreGetStatutCategories($data_module, $inscription, $annee, $semestre) 
    {
        
        $etablissement_id = $annee->getFormation()->getEtablissement()->getId();
        $moy = $etablissement_id == 26 ? 12 : 10;
        $data_snotes = $this->em->getRepository(ExSnotes::class)->findOneBy(["inscription" => $inscription, "semestre" => $semestre]);
        $categorie = "";
        if ($data_snotes) {
            if ($data_snotes->getStatutAff()->getId() == 36 || $data_snotes->getStatutAff()->getId() == 71 ) {
                $categorie = 'A';
            } elseif ($data_snotes->getStatutAff()->getId() == 56) {
                $categorie = 'B';
            } elseif ($data_snotes->getStatutAff()->getId() == 37) {
                $categorie = 'C';
            } elseif ($data_snotes->getStatutAff()->getId() == 38) {
                $categorie = 'CR';
            } elseif ($data_snotes->getStatutAff()->getId() == 72) {
                $categorie = 'D';
            } elseif ($data_snotes->getStatutAff()->getId() == 39) {
                $count_module_non_aquis = $this->em->getRepository(ExMnotes::class)->getModuleNonAquis($semestre, $inscription);
                if (count($count_module_non_aquis) > 2 and $data_snotes->getNote() >= $moy ) {
                    $categorie = 'F';
                }elseif ($data_snotes->getNote() >= 9 and $data_snotes->getNote() < $moy) {
                    $categorie = 'E';
                }
            }elseif ($data_snotes->getStatutAff()->getId() == 57) {
                $ModuleTheoriqueEliminatoire = $this->em->getRepository(ExMnotes::class)->getModulesTheoriqueBySemestre($semestre,$inscription);
                $ModulePratiqueEliminatoire = $this->em->getRepository(ExMnotes::class)->getModulesPratiqueBySemestre($semestre,$inscription);
                $noteAssiduite = $this->em->getRepository(ExMnotes::class)->getNotesModuleAssiduiteBySemestre($semestre,$inscription);
                $derogations = $this->em->getRepository(ExSnotes::class)->findByAdmission($inscription->getAdmission());
                // if ($inscription->getId() == 15067  ) {
                //     dd($ModuleTheoriqueEliminatoire);
                // }
                $palier = ($data_snotes->getNote() + $noteAssiduite->getNote()) / 2;
                if ($data_snotes->getNote() >= $moy and count($derogations) > 0 and ($ModulePratiqueEliminatoire || $palier < 10)) {
                    $categorie = 'HD';
                }elseif ($data_snotes->getNote() >= $moy and $palier >= 10 and $ModulePratiqueEliminatoire) {
                    $categorie = 'HB';
                }elseif ($data_snotes->getNote() >= $moy and $palier >= 10 and $ModuleTheoriqueEliminatoire) {
                    $categorie = 'HA';
                }elseif ($data_snotes->getNote() >= $moy and $palier < 10) {
                    $categorie = 'HC';
                }elseif ($data_snotes->getNote() < $moy and $palier >= 10) {
                    $categorie = 'IA';
                }elseif ($data_snotes->getNote() < $moy and $palier < 10) {
                    $categorie = 'IB';
                }
            } 
        }

        return $categorie;
    }
    
    #[Route('/extraction_semestre/{etab}', name: 'evaluation_semestre_extraction_semestre')]
    public function evaluationSemestreExtraction(AcEtablissement $etab,Request $request) 
    {   
        $current_year = date('m') > 7 ? date('Y').'/'.date('Y')+1 :  date('Y') - 1 .'/' .date('Y');
        // $elements = $this->em->getRepository(AcElement::class)->getElementByCurrentYear($current_year);
        $semestres = $this->em->getRepository(ExSnotes::class)->getSemestreByCurrentYear($current_year, $etab->getId());
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $i=2;
        $j=1;
        // dump($gnotes);die;
        $sheet->fromArray(
            array_keys($semestres[0]),
            null,
            'A1'
        );
        foreach ($semestres as $semestre) {
            $sheet->fromArray(
                $semestre,
                null,
                'A'.$i
            );
            $i++;
            $j++;
        }
        $writer = new Xlsx($spreadsheet);
        $year = date('m') > 7 ? date('Y').'-'.date('Y')+1 : date('Y') - 1 .'-' .date('Y');
        $fileName = "Extraction semestres $year.xlsx";
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
        
    }
}
