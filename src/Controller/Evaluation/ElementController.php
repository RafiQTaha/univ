<?php

namespace App\Controller\Evaluation;

use Mpdf\Mpdf;
use App\Entity\AcAnnee;
use App\Entity\ExEnotes;
use App\Entity\PeStatut;
use App\Entity\AcElement;
use App\Entity\ExControle;
use App\Entity\AcFormation;
use App\Entity\TInscription;
use App\Entity\AcEtablissement;
use App\Controller\ApiController;
use App\Entity\ExGnotes;
use Doctrine\Persistence\ManagerRegistry;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/evaluation/element')]
class ElementController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'evaluation_element')]
    public function index(Request $request): Response
    {
        $operations = ApiController::check($this->getUser(), 'evaluation_element', $this->em, $request);
        // dd($operations);
        if (!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $etablissements =  $this->em->getRepository(AcEtablissement::class)->findBy(['active' => 1]);
        return $this->render('evaluation/element/index.html.twig', [
            'operations' => $operations,
            'etablissements' => $etablissements,
        ]);
    }
    #[Route('/list/{element}', name: 'evaluation_element_list')]
    public function evaluationElementList(Request $request, AcElement $element): Response
    {
        $order = $request->get('order');
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($element->getModule()->getSemestre()->getPromotion()->getFormation());
        $verify = $this->em->getRepository(ExControle::class)->checkIfyoucanElement($annee, $element);
        $check = 0; //valider cette opération
        // dd($verify);
        if (!$verify) {
            $check = 1; //opération déja validé
        }
        $promotion = $element->getModule()->getSemestre()->getPromotion();
        $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByAnneeAndPromoAndElement($annee, $promotion, $element, $order);
        $data_saved = [];
        // dd($inscriptions);
        foreach ($inscriptions as $inscription) {
            $enote = $this->em->getRepository(ExEnotes::class)->findOneBy(['element' => $element, 'inscription' => $inscription]);
            $statutS1 = $enote->getStatutS1() ? $enote->getStatutS1()->getId() : null;
            $m_cc = $enote->getCcr() < $enote->getMcc() || !$enote->getCcr() ? $enote->getMcc() : $enote->getCcr();
            $m_tp = $enote->getTpr() < $enote->getMtp() || !$enote->getTpr() ? $enote->getMtp() : $enote->getTpr();
            $m_ef = $enote->getEfr() < $enote->getMef() || !$enote->getEfr() ? $enote->getMef() : $enote->getEfr();
            if ($element->getNature()->getCode() == "NE003" || $element->getNature()->getCode() == "NE004" || $element->getNature()->getCode() == "NE005") {
                $moyenne_ini = $this->CalculMoyenneElement($element->getCoefficientEpreuve(), $m_cc, $m_tp, $enote->getPondMef() * $enote->getMef());
                if ($moyenne_ini < 10 || $enote->getMef() < 10 || (!empty($enote->getMtp()) && $enote->getMtp() >= 0 && $enote->getMtp() < 10) || (!empty($enote->getMcc()) && $enote->getMcc() >= 0 && $enote->getMcc() < 10) || $statutS1 == 12 || $statutS1 == 13) {
                    $moyenne_rat = $this->CalculMoyenneElement($element->getCoefficientEpreuve(), $m_cc, $m_tp, $enote->getPondMef() * $m_ef);
                    $moyenne_tot = $moyenne_rat + $enote->getNoteRachat();
                } else {
                    $moyenne_rat = null;
                    $moyenne_tot = $moyenne_ini + $enote->getNoteRachat();
                }
            } else {
                $moyenne_ini = $this->CalculMoyenneElement($element->getCoefficientEpreuve(), $m_cc, $m_tp, $enote->getPondMef() * $enote->getMef());
                // [10119,10120] deux element avec moyen de validation 13 c'est temporaire à changer apres les delebiration annuelle 2022/2023.
                if ($moyenne_ini < (in_array($element->getId(), [10119, 10120]) ? 13 : 10) || $enote->getMef() < 7 || $statutS1 == 12 || $statutS1 == 13) {
                    $moyenne_rat = $this->CalculMoyenneElement($element->getCoefficientEpreuve(), $m_cc, $m_tp, $m_ef);
                    $moyenne_tot = $moyenne_rat + $enote->getNoteRachat();
                } else {
                    $moyenne_rat = null;
                    $moyenne_tot = $moyenne_ini + $enote->getNoteRachat();
                }
            }

            array_push($data_saved, [
                'inscription' => $inscription,
                'mcc' => $m_cc,
                'mef' => $m_ef,
                'mtp' => $m_tp,
                'mefini' => $enote->getMef(),
                'noteRachat' => $enote->getNoteRachat(),
                'moyenneIni' => $moyenne_ini,
                'moyenneRat' => $moyenne_rat,
                'moyenneTot' => $moyenne_tot,
                'enote' => $enote
            ]);
        }
        // dd($data_saved);
        if ($order == 3) {
            $moyenne = array_column($data_saved, 'moyenneTot');
            array_multisort($moyenne, SORT_DESC, $data_saved);
        } else if ($order == 4) {
            $moyenne = array_column($data_saved, 'moyenneTot');
            array_multisort($moyenne, SORT_ASC, $data_saved);
        }
        $session = $request->getSession();
        $session->set('data_element', [
            'data_saved' => $data_saved,
            'element' => $element
        ]);
        $html = $this->render('evaluation/element/pages/list_epreuve_normal.html.twig', [
            'data_saved' => $data_saved,
        ])->getContent();
        // dd($html);
        return new JsonResponse(['html' => $html, 'check' => $check]);
    }


    public function CalculMoyenneElement($coef, $m_cc, $m_tp, $m_ef)
    {
        $m_cc = $m_cc ? $m_cc : 0;
        $m_tp = $m_tp ? $m_tp : 0;
        $m_ef = $m_ef ? $m_ef : 0;
        $total_coef = intval($coef['NAT000000001'] + $coef['NAT000000002'] + $coef['NAT000000003']);
        return (number_format(((($coef['NAT000000001'] * $m_cc) + ($coef['NAT000000002'] * $m_tp) + ($coef['NAT000000003'] * $m_ef)) / $total_coef), 2, '.', ' '));
    }

    #[Route('/impression/{type}/{affichage}', name: 'administration_element_impression')]
    public function administrationElementImpression(Request $request, $type, $affichage)
    {
        $session = $request->getSession();
        $dataSaved = $session->get('data_element')['data_saved'];
        $element = $session->get('data_element')['element'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($element->getModule()->getSemestre()->getPromotion()->getFormation());
        $infos =  [
            'dataSaved' => $dataSaved,
            'element' => $element,
            'affichage' => $affichage,
            'etablissement' => $annee->getFormation()->getEtablissement(),
        ];
        if ($type == "normal") {
            $html = $this->render("evaluation/element/pdfs/normal.html.twig", $infos)->getContent();
        } else if ($type == "anonymat") {
            $html = $this->render("evaluation/element/pdfs/anonymat.html.twig", $infos)->getContent();
        } else if ($type == "clair") {
            $html = $this->render("evaluation/element/pdfs/clair.html.twig", $infos)->getContent();
        } else if ($type == "rat") {
            $moy = $annee->getFormation()->getEtablissement()->getId() == 26 ? 12 : 10;
            foreach ($dataSaved as $key => $value) {
                if ($value['moyenneTot'] >= $moy and $value['enote']->getStatutDef()->getId() != 12) {
                    unset($dataSaved[$key]);
                }
            }
            // dd($inscriptionsArray);
            $infos['dataSaved'] = $dataSaved;
            $html = $this->render("evaluation/element/pdfs/rattrapage.html.twig", $infos)->getContent();
        } else {
            die("403 something wrong !");
        }
        $html .= $this->render("evaluation/element/pdfs/footer.html.twig")->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'margin_left' => '5',
            'margin_right' => '5',
            'margin_top' => '35',
            'margin_bottom' => '10',
            'format' => 'A4-L',
            'margin_header' => '2',
            'margin_footer' => '2'
        ]);
        $mpdf->SetHTMLHeader($this->render("evaluation/element/pdfs/header.html.twig", [
            'element' => $element,
            'annee' => $annee,
            'affichage' => $affichage
        ])->getContent());
        $mpdf->defaultfooterline = 0;
        $mpdf->SetFooter('Page {PAGENO} / {nb}');
        $mpdf->WriteHTML($html);
        $mpdf->Output("element_deliberation_" . $element->getDesignation() . "_" . $element->getId() . ".pdf", "I");
    }

    #[Route('/impression_excel/{type}', name: 'administration_element_impression_excel')]
    public function administration_element_impression_excel(Request $request, $type)
    {
        $session = $request->getSession();
        $inscriptionsArray = $session->get('data_element')['data_saved'];
        $element = $session->get('data_element')['element'];
        // dd($inscriptionsArray);
        // $natureEpreuve = $session->get('data_epreuves')['natureEpreuve'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($element->getModule()->getSemestre()->getPromotion()->getFormation());
        $infos =  [
            'inscriptionsArray' => $inscriptionsArray,
            // 'epreuves' => $epreuves,
            'element' => $element,
            'etablissement' => $annee->getFormation()->getEtablissement(),
            // 'natureEpreuve' => $natureEpreuve
        ];
        if ($type == "excel_rat") {

            $spreadsheet = new Spreadsheet();
            $sheet = $spreadsheet->getActiveSheet();
            $sheet->setCellValue('A1', 'ORD');
            $sheet->setCellValue('B1', 'CODE');
            $sheet->setCellValue('C1', 'NOM');
            $sheet->setCellValue('D1', 'Prenom');
            $i = 2;
            $j = 1;
            // dd($operationcabs);
            $moy = $annee->getFormation()->getEtablissement()->getId() == 26 ? 12 : 10;
            foreach ($inscriptionsArray as $key => $value) {
                $etudiant = $value['inscription']->getAdmission()->getPreinscription()->getEtudiant();
                if (($value['moyenneTot'] < $moy && !str_contains($etudiant->getNom(), 'test')) || $value['enote']->getStatutDef()->getId() == 12) {
                    $sheet->setCellValue('A' . $i, $j);
                    $sheet->setCellValue('B' . $i, $value['inscription']->getId());
                    $sheet->setCellValue('C' . $i, $etudiant->getNom());
                    $sheet->setCellValue('D' . $i, $etudiant->getPrenom());
                    $i++;
                    $j++;
                }
            }

            $writer = new Xlsx($spreadsheet);
            $fileName = $element->getDesignation() . "_" . $element->getId() . ".xlsx";
            $temp_file = tempnam(sys_get_temp_dir(), $fileName);
            $writer->save($temp_file);
            return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
        } else {
            die("403 something wrong !");
        }
    }
    #[Route('/enregistre', name: 'administration_element_enregistre')]
    public function administrationElementEnregistre(Request $request)
    {
        $session = $request->getSession();
        $dataSaved = $session->get('data_element')['data_saved'];
        $element = $session->get('data_element')['element'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($element->getModule()->getSemestre()->getPromotion()->getFormation());
        $verify = $this->em->getRepository(ExControle::class)->checkIfyoucanElement($annee, $element);
        if (!$verify) {
            return new JsonResponse("Operation déja valider", 500);
        }
        if (count($dataSaved) == 0) {
            return new JsonResponse("No data à enregistre", 500);
        }
        foreach ($dataSaved as $data) {
            $inscription = $this->em->getRepository(TInscription::class)->find($data['inscription']->getId());
            $noteElement  = $this->em->getRepository(ExEnotes::class)->findOneBy(['inscription' => $inscription, 'element' => $element]);
            $moyenne_ini = $data['moyenneIni'];
            $moyenne_rat = $data['moyenneRat'];
            $moyenne_tot = $data['moyenneTot'];

            $noteElement->setNote($moyenne_tot);
            $noteElement->setNoteIni($moyenne_ini);
            if ($moyenne_ini < 10 || $data['mefini'] < 7 || $moyenne_rat > 0) {
                $noteElement->setNoteRat($moyenne_rat);
            } elseif ($moyenne_rat <= 0) {
                $noteElement->setNoteRat(null);
            }
            ApiController::mouchard($this->getUser(), $this->em, $noteElement, 'ExEnotes', 'Enregistrer ENotes');
            $this->em->flush();
        }
        // create exControle if not exist
        $coef = $element->getCoefficientEpreuve();
        $exControle = $this->em->getRepository(ExControle::class)->findOneBy(['element' => $element, 'annee' => $annee]);
        if ($coef['NAT000000001'] == 0) {
            // $_POST['m_cc']=1;
            $exControle->setMcc(1);
        }
        if ($coef['NAT000000002'] == 0) {
            $exControle->setMtp(1);
        }
        if ($coef['NAT000000003'] == 0) {
            $exControle->setMef(1);
        }
        $this->em->flush();

        return new JsonResponse("Bien Enregistre", 200);
    }
    #[Route('/valider', name: 'administration_element_valider')]
    public function administrationElementValider(Request $request)
    {
        $session = $request->getSession();
        $element = $session->get('data_element')['element'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($element->getModule()->getSemestre()->getPromotion()->getFormation());
        $exControle = $this->em->getRepository(ExControle::class)->canValidateElement($element, $annee);
        if (!$exControle) {
            return new JsonResponse("Veuillez Valider Toutes les Contrôles continus , Travaux pratiques , Examen Final pour valider cet élément ", 500);
        }
        $exControle->setMelement(1);
        ApiController::mouchard($this->getUser(), $this->em, $exControle, 'exControle', 'Validation Circuit ELE');
        $this->em->flush();

        return new JsonResponse("Bien Valider", 200);
    }
    #[Route('/devalider', name: 'administration_element_devalider')]
    public function administrationElementDealider(Request $request)
    {
        $session = $request->getSession();
        $element = $session->get('data_element')['element'];
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($element->getModule()->getSemestre()->getPromotion()->getFormation());
        $exControle = $this->em->getRepository(ExControle::class)->findOneBy(['element' => $element, 'annee' => $annee]);
        $exControle->setMelement(0);
        ApiController::mouchard($this->getUser(), $this->em, $exControle, 'exControle', 'Dévalidation Circuit ELE');
        $this->em->flush();

        return new JsonResponse("Bien Devalider", 200);
    }
    #[Route('/recalculer', name: 'administration_element_recalculer')]
    public function administrationElementDeder(Request $request)
    {
        $session = $request->getSession();
        $dataSaved = $session->get('data_element')['data_saved'];
        $element = $session->get('data_element')['element'];
        foreach ($dataSaved as $data) {
            $inscription = $this->em->getRepository(TInscription::class)->find($data['inscription']->getId());
            $noteElement  = $this->em->getRepository(ExEnotes::class)->findOneBy(['inscription' => $inscription, 'element' => $element]);
            $moyenne_ini = $data['moyenneIni'];
            $moyenne_rat = $data['moyenneRat'];
            $moyenne_tot = $data['moyenneTot'];
            $noteElement->setNote($moyenne_tot);
            $noteElement->setNoteIni($moyenne_ini);
            // if (($moyenne_rat > 0 && ($element->getNature()->getCode() == "NE003" || $element->getNature()->getCode() == "NE004" || $element->getNature()->getCode() == "NE005"))
            //     or ($moyenne_ini < 10 || $data['mefini'] < 7 || $moyenne_rat > 0)
            // ) {
                $noteElement->setNoteRat($moyenne_rat);
            // }
            
            // dd($moyenne_rat > 0);
        }
        ApiController::mouchard($this->getUser(), $this->em, $noteElement, 'ExEnotes', 'Recalcule noteElement');
        $this->em->flush();
        return new JsonResponse("Bien Recalculer", 200);
    }
    #[Route('/statut/{type}', name: 'administration_element_statut')]
    public function administrationElementStatut(Request $request, $type)
    {
        $session = $request->getSession();
        $dataSaved = $session->get('data_element')['data_saved'];
        // dd($dataSaved);
        $element = $session->get('data_element')['element'];
        if ($type == 's1') {
            foreach ($dataSaved as $data) {
                $inscription = $this->em->getRepository(TInscription::class)->find($data['inscription']->getId());
                $enote = $this->em->getRepository(ExEnotes::class)->findOneBy(['element' => $element, 'inscription' => $inscription]);
                $m_cc = $enote->getCcr() < $enote->getMcc() ?? 0 || !$enote->getCcr() ? $enote->getMcc() : $enote->getCcr();
                $m_tp = $enote->getTpr() < $enote->getMtp() ?? 0 || !$enote->getTpr() ? $enote->getMtp() : $enote->getTpr();
                $m_ef = $enote->getEfr() < $enote->getMef() ?? 0 || !$enote->getEfr() ? $enote->getMef() : $enote->getEfr();
                if ($element->getNature()->getCode() == "NE003" || $element->getNature()->getCode() == "NE004" || $element->getNature()->getCode() == "NE005") {
                    $result = $this->ElementGetStatutS1_pratique($enote, ['mcc' => $m_cc, 'mtp' => $m_tp, 'mef' => $m_ef], 10, 10);
                } else {
                    $result = $this->ElementGetStatutS1($enote, ['mcc' => $m_cc, 'mtp' => $m_tp, 'mef' => $m_ef], 7, 10);
                }
                if (isset($result) and !empty($result)) {
                    $enote->setStatutS1(
                        $this->em->getRepository(PeStatut::class)->find($result['statut_s1'])
                    );
                    $enote->setStatutAff(
                        $this->em->getRepository(PeStatut::class)->find($result['statut_aff'])
                    );
                    $enote->setStatutDef(
                        $this->em->getRepository(PeStatut::class)->find($result['statut_def'])
                    );
                }
            }
        } elseif ($type == "s2") {
            foreach ($dataSaved as $data) {
                $inscription = $this->em->getRepository(TInscription::class)->find($data['inscription']->getId());
                $enote = $this->em->getRepository(ExEnotes::class)->findOneBy(['element' => $element, 'inscription' => $inscription]);
                $m_cc = $enote->getCcr() < $enote->getMcc() ?? 0 || !$enote->getCcr() ? $enote->getMcc() : $enote->getCcr();
                $m_tp = $enote->getTpr() < $enote->getMtp() ?? 0 || !$enote->getTpr() ? $enote->getMtp() : $enote->getTpr();
                $m_ef = $enote->getEfr() < $enote->getMef() ?? 0 || !$enote->getEfr() ? $enote->getMef() : $enote->getEfr();
                if ($element->getNature()->getCode() == "NE003" || $element->getNature()->getCode() == "NE004" || $element->getNature()->getCode() == "NE005") {
                    $result = $this->ElementGetStatutS2_pratique($enote, ['mcc' => $m_cc, 'mtp' => $m_tp, 'mef' => $m_ef], 10, 10);
                } else {
                    $result = $this->ElementGetStatutS2($enote, ['mcc' => $m_cc, 'mtp' => $m_tp, 'mef' => $m_ef], 7, 10);
                }
                if (isset($result) and !empty($result)) {
                    $enote->setStatutS2(
                        $this->em->getRepository(PeStatut::class)->find($result['statut_s2'])
                    );
                    $enote->setStatutAff(
                        $this->em->getRepository(PeStatut::class)->find($result['statut_aff'])
                    );
                    $enote->setStatutDef(
                        $this->em->getRepository(PeStatut::class)->find($result['statut_def'])
                    );
                }
            }
        } elseif ($type == "rachat") {
            foreach ($dataSaved as $data) {
                $inscription = $this->em->getRepository(TInscription::class)->find($data['inscription']->getId());
                $enote = $this->em->getRepository(ExEnotes::class)->findOneBy(['element' => $element, 'inscription' => $inscription]);
                if ($element->getNature()->getCode() == "NE003" || $element->getNature()->getCode() == "NE004" || $element->getNature()->getCode() == "NE005") {
                    $result = $this->ElementGetStatutRachat_pratique($enote);
                    if (isset($result) and !empty($result)) {
                        $enote->setStatutS2(
                            $this->em->getRepository(PeStatut::class)->find($result['statut_s2'])
                        );
                        $enote->setStatutAff(
                            $this->em->getRepository(PeStatut::class)->find($result['statut_aff'])
                        );
                        $enote->setStatutDef(
                            $this->em->getRepository(PeStatut::class)->find($result['statut_def'])
                        );
                    }
                } else {
                    $result = $this->ElementGetStatutRachat($enote);

                    if (isset($result) and !empty($result)) {
                        $enote->setStatutRachat(
                            $this->em->getRepository(PeStatut::class)->find($result['statut_rachat'])
                        );
                        $enote->setStatutAff(
                            $this->em->getRepository(PeStatut::class)->find($result['statut_aff'])
                        );
                        $enote->setStatutDef(
                            $this->em->getRepository(PeStatut::class)->find($result['statut_def'])
                        );
                    }
                }
            }
        }
        ApiController::mouchard($this->getUser(), $this->em, $enote, 'ExEnotes', 'Statuée noteElement');
        $this->em->flush();
        return new JsonResponse("Bien enregistre", 200);
    }

    public function ElementGetStatutS1_pratique($enote, $noteComposantInitial, $note_eliminatoire, $note_validation)
    {
        //var_dump($data);
        $moy = $enote->getInscription()->getAnnee()->getFormation()->getEtablissement()->getId() == 26 ? 12 : 10;
        $ntpJdb = $this->em->getRepository(ExGnotes::class)->getNoteTpByInscription($enote, 'Journal de bord', 2);
        $ntpJdbRatt = $this->em->getRepository(ExGnotes::class)->getNoteTpByInscription($enote, 'Journal de bord', 12);
        $ntpPerformance = $this->em->getRepository(ExGnotes::class)->getNoteTpByInscription($enote, 'Performance', 2);
        $send_data = array();
        if (($ntpPerformance and $ntpPerformance[0]->getNote() < 10) || ($ntpJdb and $ntpJdb[0]->getNote() < 10 and $ntpJdbRatt and $ntpJdbRatt[0]->getNote() < 10)) {
            $send_data['statut_s1'] = 16;
            $send_data['statut_def'] = 16;
            $send_data['statut_aff'] = 16;
        } elseif ($enote->getNoteIni() < $moy || ($enote->getMef() && $enote->getMef() < $moy)) {
            // if ($enote->getNoteIni() < $moy || ($enote->getMef() && $enote->getMef() < $moy) || ($ntp1 < 10 || $ntp2 < 10))   {
            $send_data['statut_s1'] = 12;
            $send_data['statut_def'] = 12;
            $send_data['statut_aff'] = 12;
        } else {
            if ((isset($noteComposantInitial["mcc"]) && $noteComposantInitial["mcc"] < $moy) || (isset($noteComposantInitial["mtp"]) && $noteComposantInitial["mtp"] < $moy)) {
                $send_data['statut_s1'] = 16;
                $send_data['statut_def'] = 16;
                $send_data['statut_aff'] = 16;
            } else {
                $send_data['statut_s1'] = 15;
                $send_data['statut_def'] = 15;
                $send_data['statut_aff'] = 15;
            }
        }
        return $send_data;
    }
    public function ElementGetStatutS1($enote, $noteComposantInitial, $note_eliminatoire, $note_validation)
    {
        $etablissement_id = $enote->getInscription()->getAnnee()->getFormation()->getEtablissement()->getId();
        if ($enote->getElement()->getModule()->getId() == 7419) {
            ////temporaire
            $moy = 10;
            $moyIni = 10;
            // if (in_array($enote->getElement()->getId(), [10119, 10120])) {
            //     $moy = 13;
            // } else {
            //     $moy = 10;
            // }
            // $moyIni = 10;
        } else {
            $moy = $etablissement_id == 26 ? 12 : 10;
            $moyIni = $etablissement_id == 26 ? 8 : 7;
        }
        // $moy = $etablissement_id == 26 ? 12 : 10;
        // $moyIni = $etablissement_id == 26 ? 8 : 7;
        $send_data = array();
        $capitaliser = $this->em->getRepository(ExGnotes::class)->checkIfModuleCapitaliser($enote);
        if (count($capitaliser) > 0) {
            $send_data['statut_s1'] = 52;
            $send_data['statut_def'] = 52;
            $send_data['statut_aff'] = 52;
        } elseif ($enote->getNoteIni() < $moyIni) {
            $send_data['statut_s1'] = 12;
            $send_data['statut_def'] = 12;
            $send_data['statut_aff'] = 12;
        } else {
            if ($enote->getNoteIni() < $moy) {

                //NE PAS METTRE A JOUR. MERCI
                if ((isset($noteComposantInitial["mcc"]) && $noteComposantInitial["mcc"] < $moyIni) || (isset($noteComposantInitial["mtp"]) && $noteComposantInitial["mtp"] < $moyIni) || ($enote->getMef() && $enote->getMef() < $moyIni)) {
                    $send_data['statut_s1'] = 12;
                    $send_data['statut_def'] = 12;
                    $send_data['statut_aff'] = 12;
                } else {
                    $send_data['statut_s1'] = 13;
                    $send_data['statut_def'] = 13;
                    $send_data['statut_aff'] = 13;
                }
            } else {
                if (($enote->getMef() && $enote->getMef() < $moyIni)) {
                    $send_data['statut_s1'] = 12;
                    $send_data['statut_def'] = 12;
                    $send_data['statut_aff'] = 12;
                } else {
                    if ((isset($noteComposantInitial["mcc"]) && $noteComposantInitial["mcc"] < $moyIni) || (isset($noteComposantInitial["mtp"]) && $noteComposantInitial["mtp"] < $moyIni)) {
                        //                    if ((isset($noteComposantInitial['mtp']) && $noteComposantInitial['mtp'] < $moyIni)) {
                        $send_data['statut_s1'] = 16;
                        $send_data['statut_def'] = 16;
                        $send_data['statut_aff'] = 16;
                    } else {
                        if ((isset($noteComposantInitial["mcc"]) && $noteComposantInitial["mcc"] < $moy) || (isset($noteComposantInitial["mtp"]) && $noteComposantInitial["mtp"] < $moy) || ($enote->getMef() && $enote->getMef() < $moy)) {
                            $send_data['statut_s1'] = 19;
                            $send_data['statut_def'] = 19;
                        } else {
                            $send_data['statut_s1'] = 15;
                            $send_data['statut_def'] = 15;
                        }
                        $send_data['statut_aff'] = 15;
                    }
                }
            }
        }
        return $send_data;
    }
    public function ElementGetStatutS2_pratique($enote, $noteComposantInitial, $note_eliminatoire, $note_validation)
    {
        //  var_dump($data); die();
        $send_data = array();

        if ($enote->getStatutS1()->getId() == 15) {
            $send_data['statut_s2'] = 21;
            $send_data['statut_def'] = 21;
            $send_data['statut_aff'] = 21;
        } else {
            if ($enote->getStatutS1()->getId() == 16 || (isset($noteComposantInitial['mcc']) && $noteComposantInitial['mcc'] < 10) || (isset($noteComposantInitial['mtp']) && $noteComposantInitial['mtp'] < 10) || (isset($noteComposantInitial['mef']) && $noteComposantInitial['mef'] < 10) || $enote->getNote() < 10) {
                $send_data['statut_s2'] = 16;
                $send_data['statut_def'] = 16;
                $send_data['statut_aff'] = 16;
            } else {
                $send_data['statut_s2'] = 54;
                $send_data['statut_def'] = 54;
                $send_data['statut_aff'] = 54;
            }
        }

        return $send_data;
    }
    public function ElementGetStatutS2($enote, $noteComposantInitial, $note_eliminatoire, $note_validation)
    {
        $etablissement_id = $enote->getInscription()->getAnnee()->getFormation()->getEtablissement()->getId();
        if ($enote->getElement()->getModule()->getId() == 7419) {
            $moy = 10;
            $moyIni = 10;
            // //temporaire
            // if (in_array($enote->getElement()->getId(), [10119, 10120])) {
            //     $moy = 13;
            // } else {
            //     $moy = 10;
            // }
            // $moyIni = 10;
        } else {
            $moy = $etablissement_id == 26 ? 12 : 10;
            $moyIni = $etablissement_id == 26 ? 8 : 7;
        }
        $send_data = array();

        if ($enote->getStatutS1()->getId() == 52) {
            $send_data['statut_s2'] = 52;
            $send_data['statut_def'] = 52;
            $send_data['statut_aff'] = 52;
        } else {

            if ($enote->getStatutS1()->getId() == 15) {
                $send_data['statut_s2'] = 21;
                $send_data['statut_def'] = 21;
                $send_data['statut_aff'] = 21;
            }
            if ($enote->getStatutS1()->getId() == 19) {
                $send_data['statut_s2'] = 19;
                $send_data['statut_def'] = 19;
                $send_data['statut_aff'] = 21;
            } else {

                if ((isset($noteComposantInitial['mcc']) && $noteComposantInitial['mcc'] < $moyIni) || (isset($noteComposantInitial['mtp']) && $noteComposantInitial['mtp'] < $moyIni) || (isset($noteComposantInitial['mef']) && $noteComposantInitial['mef'] < $moyIni) || ($enote->getNote() && $enote->getNote() == 0.0 ? 0 : $enote->getNote() < $note_eliminatoire)) {
                    $send_data['statut_s2'] = 16;
                    $send_data['statut_def'] = 16;
                    $send_data['statut_aff'] = 16;
                } else {
                    if ($enote->getNote() < $moy) {
                        $send_data['statut_s2'] = 18;
                        $send_data['statut_def'] = 18;
                        $send_data['statut_aff'] = 18;
                    } else {
                        if ((isset($noteComposantInitial['mcc']) && $noteComposantInitial['mcc'] < $moy) || (isset($noteComposantInitial['mtp']) && $noteComposantInitial['mtp'] < $moy) || (isset($noteComposantInitial['mef']) && $noteComposantInitial['mef'] < $moy)) {
                            $send_data['statut_s2'] = 19;
                            $send_data['statut_def'] = 19;
                            if ($enote->getStatutS1()->getId() == 12 || $enote->getStatutS1()->getId() == 13 || $enote->getStatutS1()->getId() == 11) {
                                $send_data['statut_aff'] = 54;
                            } else {
                                $send_data['statut_aff'] = 21;
                            }
                        } else {
                            if ($enote->getStatutS1()->getId() == 12 || $enote->getStatutS1()->getId() == 13) {
                                $send_data['statut_s2'] = 54;
                                $send_data['statut_def'] = 54;
                                $send_data['statut_aff'] = 54;
                            }
                        }
                    }
                }
            }
        }
        return $send_data;
    }
    public function ElementGetStatutRachat_pratique($enote)
    {
        $send_data = array();
        $etablissement_id = $enote->getInscription()->getAnnee()->getFormation()->getEtablissement()->getId();
        $moy = $etablissement_id == 26 ? 12 : 10;
        if ($enote->getNoteRachat() > 0 && $enote->getNote() >= $moy) {
            $send_data['statut_s2'] = 20;
            $send_data['statut_def'] = 20;
            $send_data['statut_aff'] = 20;
        }
        return $send_data;
    }
    public function ElementGetStatutRachat($enote)
    {
        $send_data = array();
        $etablissement_id = $enote->getInscription()->getAnnee()->getFormation()->getEtablissement()->getId();
        $moy = $etablissement_id == 26 ? 12 : 10;
        if ($enote->getNoteRachat() > 0) {
            if ($enote->getNote() < $moy) {
                $send_data['statut_rachat'] = 17;
                $send_data['statut_def'] = 17;
                $send_data['statut_aff'] = 17;
            } else {
                $send_data['statut_rachat'] = 20;
                $send_data['statut_def'] = 20;
                $send_data['statut_aff'] = 20;
            }
        }

        return $send_data;
    }


    #[Route('/extraction_element/{etab}', name: 'evaluation_element_extraction_element')]
    public function evaluationElementExtraction($etab, Request $request)
    {
        $etablissement = $this->em->getRepository(AcEtablissement::class)->find($etab);
        $current_year = date('m') > 8 ? date('Y') . '/' . date('Y') + 1 :  date('Y') - 1 . '/' . date('Y');
        // $elements = $this->em->getRepository(AcElement::class)->getElementByCurrentYear($current_year);
        $elements = $this->em->getRepository(ExEnotes::class)->getElementByCurrentYear($current_year, $etablissement ? $etablissement->getId() : null);
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $i = 2;
        // $j=1;
        // dump($gnotes);die;
        $sheet->fromArray(
            array_keys($elements[0]),
            null,
            'A1'
        );
        foreach ($elements as $element) {
            $sheet->fromArray(
                $element,
                null,
                'A' . $i
            );
            $i++;
            // $j++;
        }
        $writer = new Xlsx($spreadsheet);
        $year = date('m') > 7 ? date('Y') . '-' . date('Y') + 1 : date('Y') - 1 . '-' . date('Y');
        $fileName = "Extraction elements $year.xlsx";
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
    public function getStatut($id)
    {
        return new Response($this->em->getRepository(PeStatut::class)->find($id)->getAbreviation(), 200, ['Content-Type' => 'text/html']);
    }
}
