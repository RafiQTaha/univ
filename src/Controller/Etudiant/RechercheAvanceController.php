<?php

namespace App\Controller\Etudiant;

use App\Entity\TAdmission;
use App\Entity\TInscription;
use App\Controller\ApiController;
use App\Entity\AcSemestre;
use App\Entity\ExAnotes;
use App\Entity\ExMnotes;
use App\Entity\ExSnotes;
use Doctrine\Persistence\ManagerRegistry;
use Mpdf\Mpdf;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/etudiant/rechercheavance')]
class RechercheAvanceController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'etudiant_recherche_avance')]
    public function index(Request $request)
    {
        //check if user has access to this page
        $operations = ApiController::check($this->getUser(), 'etudiant_recherche_avance', $this->em, $request);
        // dd($operations);
        if (!$operations) {
            return $this->render("errors/403.html.twig");
        }
        // $admissions = $this->em->getRepository(TAdmission::class)->findAll();
        return $this->render('etudiant/recherche_avance/index.html.twig', [
            'operations' => $operations
        ]);
    }
    #[Route('/find', name: 'etudiant_recherche_avance_find')]
    public function find(Request $request)
    {
        $admissions = $this->em->getRepository(TAdmission::class)->findAdmssions($request->query->get("search"));

        // dd($admissions);
        return new Response(json_encode($admissions));
    }
    #[Route('/findAnnee/{admission}', name: 'etudiant_recherche_avance_findannee')]
    public function findAnnee(TAdmission $admission)
    {
        $html = "<option value=''>Choix année</option>";
        // dd($admission->getInscriptions());
        foreach ($admission->getInscriptions() as $inscription) {
            $html .= "<option value='" . $inscription->getId() . "'>" . $inscription->getAnnee()->getDesignation() . "</option>";
        }
        return new JsonResponse($html);
    }
    #[Route('/recherche/{inscription}', name: 'etudiant_recherche_avance_recherche')]
    public function recherche(TInscription $inscription)
    {
        $administratif = $this->render("etudiant/recherche_avance/page/administratif.html.twig", ['inscription' => $inscription])->getContent();
        $academique = $this->render("etudiant/recherche_avance/page/academique.html.twig", ['inscription' => $inscription])->getContent();
        $informations = $this->render("etudiant/recherche_avance/page/informations.html.twig", ['inscription' => $inscription])->getContent();
        // dd($informations);

        return new JsonResponse([
            'informations' => $informations,
            'administratif' => $administratif,
            'academique' => $academique
        ]);
    }
    #[Route('/attestation/inscription/{inscription}', name: 'etudiant_recherche_attestation_inscription')]
    public function attestationInscription(TInscription $inscription)
    {
        $html = $this->render("etudiant/recherche_avance/pdf/attestations/inscription.html.twig", [
            'inscription' => $inscription
        ])->getContent();
        // dd($html);
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'margin_left' => 5,
            'margin_right' => 5,
        ]);
        // $mpdf->SetHTMLHeader(
        //     $this->render("etudiant/recherche_avance/pdf/attestations/header.html.twig")->getContent()
        // );
        $mpdf->SetHTMLFooter(
            $this->render("etudiant/recherche_avance/pdf/attestations/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle('Attestation d\'inscription');
        $mpdf->Output("attestaion.pdf", "I");
    }
    #[Route('/attestation/scolarite/{inscription}', name: 'etudiant_recherche_attestation_scolarite')]
    public function attestationScolarite(TInscription $inscription)
    {
        $html = $this->render("etudiant/recherche_avance/pdf/attestations/scolarite.html.twig", [
            'inscription' => $inscription,
            'laz' => 0
        ])->getContent();
        // dd($html);
        $mpdf = new Mpdf([
            'margin_left' => 5,
            'margin_right' => 5,
        ]);
        // $mpdf->SetHTMLHeader(
        //     $this->render("etudiant/recherche_avance/pdf/attestations/header.html.twig")->getContent()
        // );
        $mpdf->SetHTMLFooter(
            $this->render("etudiant/recherche_avance/pdf/attestations/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle('Attestation de scolarité');
        $mpdf->Output("scolarite.pdf", "I");
    }
    #[Route('/attestation/suiviFr/{inscription}', name: 'etudiant_recherche_attestation_suivi')]
    public function attestationSiuvi(TInscription $inscription)
    {
        $html = $this->render("etudiant/recherche_avance/pdf/attestations/suivifr.html.twig", [
            'inscription' => $inscription,
            'laz' => 0
        ])->getContent();
        // dd($html);
        $mpdf = new Mpdf([
            'margin_left' => 5,
            'margin_right' => 5,
        ]);
        // $mpdf->SetHTMLHeader(
        //     $this->render("etudiant/recherche_avance/pdf/attestations/header.html.twig")->getContent()
        // );
        $mpdf->SetHTMLFooter(
            $this->render("etudiant/recherche_avance/pdf/attestations/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle('ATTESTATION DU SUIVI d\'ETUDES EN LANGUE FRANCAISE');
        $mpdf->Output("suivi.pdf", "I");
    }

    #[Route('/attestation/scolariteLaz/{inscription}', name: 'etudiant_recherche_attestation_scolarite_laz')]
    public function attestationScolariteLaz(TInscription $inscription)
    {
        $html = $this->render("etudiant/recherche_avance/pdf/attestations/scolarite.html.twig", [
            'inscription' => $inscription,
            'laz' => 1
        ])->getContent();
        // dd($html);
        $mpdf = new Mpdf([
            'margin_left' => 5,
            'margin_right' => 5,
        ]);
        // $mpdf->SetHTMLHeader(
        //     $this->render("etudiant/recherche_avance/pdf/attestations/header.html.twig")->getContent()
        // );
        $mpdf->SetHTMLFooter(
            $this->render("etudiant/recherche_avance/pdf/attestations/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle('Attestation de scolarité LAZ');
        $mpdf->Output("scolarite.pdf", "I");
    }

    #[Route('/attestation/cerificat/{inscription}', name: 'etudiant_recherche_attestation_cerificat')]
    public function attestationcerificat(TInscription $inscription)
    {
        $html = $this->render("etudiant/recherche_avance/pdf/attestations/Cerficationscolarite.html.twig", [
            'inscription' => $inscription,
            'laz' => 0,
            'certif' => 1,
        ])->getContent();
        // dd($html);
        $mpdf = new Mpdf([
            'margin_left' => 5,
            'margin_right' => 5,
        ]);
        // $mpdf->SetHTMLHeader(
        //     $this->render("etudiant/recherche_avance/pdf/attestations/header.html.twig")->getContent()
        // );
        $mpdf->SetHTMLFooter(
            $this->render("etudiant/recherche_avance/pdf/attestations/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle('Attestation de scolarité LAZ');
        $mpdf->Output("scolarite.pdf", "I");
    }

    #[Route('/attestation/scolariteAnglais/{inscription}', name: 'etudiant_recherche_attestation_scolarite_anglais')]
    public function attestationScolariteAngalis(TInscription $inscription)
    {
        $html = $this->render("etudiant/recherche_avance/pdf/attestations/scolariteAnglais.html.twig", [
            'inscription' => $inscription,
            'laz' => 0
        ])->getContent();
        // dd($html);
        $mpdf = new Mpdf([
            'margin_left' => 5,
            'margin_right' => 5,
        ]);
        // $mpdf->SetHTMLHeader(
        //     $this->render("etudiant/recherche_avance/pdf/attestations/header.html.twig")->getContent()
        // );
        $mpdf->SetHTMLFooter(
            $this->render("etudiant/recherche_avance/pdf/attestations/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle('Attestation de scolarité (Anglais)');
        $mpdf->Output("scolarite.pdf", "I");
    }

    #[Route('/attestation/scolariteAnglaisLaz/{inscription}', name: 'etudiant_recherche_attestation_scolarite_anglais_laz')]
    public function attestationScolariteAngalisLaz(TInscription $inscription)
    {
        $html = $this->render("etudiant/recherche_avance/pdf/attestations/scolariteAnglais.html.twig", [
            'inscription' => $inscription,
            'laz' => 1
        ])->getContent();
        // dd($html);
        $mpdf = new Mpdf([
            'margin_left' => 5,
            'margin_right' => 5,
        ]);
        // $mpdf->SetHTMLHeader(
        //     $this->render("etudiant/recherche_avance/pdf/attestations/header.html.twig")->getContent()
        // );
        $mpdf->SetHTMLFooter(
            $this->render("etudiant/recherche_avance/pdf/attestations/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle('Attestation de scolarité LAZ (Anglais)');
        $mpdf->Output("scolarite.pdf", "I");
    }

    #[Route('/attestation/reussite/{inscription}', name: 'etudiant_recherche_attestation_reussite')]
    public function attestationReussite(TInscription $inscription)
    {
        $prm = $this->em->getRepository(TInscription::class)->findBy([
            'admission' => $inscription->getAdmission(),
            'promotion' => $inscription->getPromotion()
        ]);
        // ,'statutAff'=>[41,42,43,44,70,73]
        $anote = $this->em->getRepository(ExAnotes::class)->findOneBy(['inscription' => $inscription]);
        if (!$anote) {
            return new JsonResponse('Note Annee Introuvable!!', 500);
        }
        if (!in_array($anote->getStatutAff()->getId(), [41, 42, 43, 70, 73])) {
            return new JsonResponse('Redoublant!!', 500);
        }
        $html = $this->render("etudiant/recherche_avance/pdf/attestations/reussite.html.twig", [
            'inscription' => $inscription,
        ])->getContent();
        // dd($html);
        $mpdf = new Mpdf([
            'margin_left' => 5,
            'margin_right' => 5,
        ]);
        // $mpdf->SetHTMLHeader(
        //     $this->render("etudiant/recherche_avance/pdf/attestations/header.html.twig")->getContent()
        // );
        $mpdf->SetHTMLFooter(
            $this->render("etudiant/recherche_avance/pdf/attestations/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle('Attestation de réussite');
        $mpdf->Output("reussite.pdf", "I");
    }

    ////////////////////////////////////////////////////

    #[Route('/attestation/reussiteAll/{inscription}', name: 'etudiant_recherche_attestation_reussite_all')]
    public function attestationReussiteAll(TInscription $inscription)
    {

        $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByAdmission($inscription->getAdmission());
        $html = "";
        $i = 1;
        foreach ($inscriptions as $inscription) {
            $prm = $this->em->getRepository(TInscription::class)->findBy([
                'admission' => $inscription->getAdmission(),
                'promotion' => $inscription->getPromotion()
            ]);
            // ,'statutAff'=>[41,42,43,44,70,73]
            $anote = $this->em->getRepository(ExAnotes::class)->findOneBy(['inscription' => $inscription]);
            if ($anote and in_array($anote->getStatutAff()->getId(), [41, 42, 43, 70, 73])) {
                if ($i > 1) {
                    $html .= "<pagebreak>";
                }
                $html .= $this->render("etudiant/recherche_avance/pdf/attestations/reussite.html.twig", [
                    'inscription' => $inscription,
                ])->getContent();
            }
            $i++;
        }

        // dd($html);
        $mpdf = new Mpdf([
            'margin_left' => 5,
            'margin_right' => 5,
        ]);
        // $mpdf->SetHTMLHeader(
        //     $this->render("etudiant/recherche_avance/pdf/attestations/header.html.twig")->getContent()
        // );
        $mpdf->SetHTMLFooter(
            $this->render("etudiant/recherche_avance/pdf/attestations/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle('Attestation de réussite (cursus)');
        $mpdf->Output("reussite.pdf", "I");
    }
    ////////////////////////////////////////////////////

    #[Route('/attestation/reussitenote/{inscription}', name: 'etudiant_recherche_attestation_reussite_note')]
    public function attestationReussiteNote(TInscription $inscription)
    {
        if ($inscription->getAnotes() == null) {
            die('Notes Inrouvable!!');
        }
        $html = $this->render("etudiant/recherche_avance/pdf/attestations/reussite_avec_moyenne.html.twig", [
            'inscription' => $inscription
        ])->getContent();
        // dd($html);
        $mpdf = new Mpdf([
            'margin_left' => 5,
            'margin_right' => 5,
        ]);
        // $mpdf->SetHTMLHeader(
        //     $this->render("etudiant/recherche_avance/pdf/attestations/header.html.twig")->getContent()
        // );
        $mpdf->SetHTMLFooter(
            $this->render("etudiant/recherche_avance/pdf/attestations/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle('Attestation de réussite Avec Moyenne');
        $mpdf->Output("reussite.pdf", "I");
    }
    #[Route('/attestation/releve/module/{inscription}/{semestre}/{assiduite}', name: 'etudiant_recherche_releve_module')]
    public function attestationReleveModule(TInscription $inscription, AcSemestre $semestre, $assiduite)
    {
        if ($assiduite == 0) {
            $noteModulesBySemestre = $this->em->getRepository(ExMnotes::class)->getNotesModuleSansAssiduiteBySemestre($semestre, $inscription);
        } else {
            $noteModulesBySemestre = $this->em->getRepository(ExMnotes::class)->getNotesModuleBySemestre($semestre, $inscription);
        }
        $noteSemestre = $this->em->getRepository(ExSnotes::class)->findOneBy(['semestre' => $semestre, 'inscription' => $inscription]);
        $html = $this->render("etudiant/recherche_avance/pdf/academique/note_module.html.twig", [
            'inscription' => $inscription,
            'noteModulesBySemestre' => $noteModulesBySemestre,
            'semestre' => $semestre,
            'assiduite' => $assiduite,
            'noteSemestre' => $noteSemestre
        ])->getContent();
        // dd($html);
        $mpdf = new Mpdf([
            'margin_left' => 5,
            'margin_right' => 5,
        ]);
        $mpdf->SetHTMLHeader(
            $this->render("etudiant/recherche_avance/pdf/academique/header.html.twig")->getContent()
        );
        $mpdf->SetHTMLFooter(
            $this->render("etudiant/recherche_avance/pdf/academique/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle('Relevé de note modulaire');
        $mpdf->Output("releve_module.pdf", "I");
    }
    #[Route('/attestation/releve/annee/{inscription}/{assiduite}', name: 'etudiant_recherche_releve_annee')]
    public function attestationReleveAnnee(TInscription $inscription, $assiduite)
    {
        $semestres = $this->em->getRepository(ExSnotes::class)->findBy(['inscription' => $inscription], ['semestre' => 'ASC']);
        // dd($semestres);
        $noteSemestre2 = null;
        $noteModulesBySemestre2 = null;
        $noteSemestre1 = $semestres ? $semestres[0] : die("Note semestre introuvable");
        if (count($semestres) > 1) {
            $noteSemestre2 = $semestres[1];
        }
        if ($assiduite == 0) {
            $noteModulesBySemestre1 = $this->em->getRepository(ExMnotes::class)->getNotesModuleSansAssiduiteBySemestre($noteSemestre1->getSemestre(), $inscription);
            if ($noteSemestre2 != null) {
                $noteModulesBySemestre2 = $this->em->getRepository(ExMnotes::class)->getNotesModuleSansAssiduiteBySemestre($noteSemestre2->getSemestre(), $inscription);
            }
        } else {
            $noteModulesBySemestre1 = $this->em->getRepository(ExMnotes::class)->getNotesModuleBySemestre($noteSemestre1->getSemestre(), $inscription);
            if ($noteSemestre2 != null) {
                $noteModulesBySemestre2 = $this->em->getRepository(ExMnotes::class)->getNotesModuleBySemestre($noteSemestre2->getSemestre(), $inscription);
            }
        }
        $html = $this->render("etudiant/recherche_avance/pdf/academique/note_annee.html.twig", [
            'inscription' => $inscription,
            'noteModulesBySemestre1' => $noteModulesBySemestre1,
            'noteModulesBySemestre2' => $noteModulesBySemestre2,
            'noteSemestre1' => $noteSemestre1,
            'noteSemestre2' => $noteSemestre2,
            'assiduite' => $assiduite
        ])->getContent();
        // dd($html);
        $mpdf = new Mpdf([
            'margin_left' => 5,
            'margin_right' => 5,
        ]);
        $mpdf->SetHTMLHeader(
            $this->render("etudiant/recherche_avance/pdf/academique/header.html.twig")->getContent()
        );
        $mpdf->SetHTMLFooter(
            $this->render("etudiant/recherche_avance/pdf/academique/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle('Relevé de note annuel');
        $mpdf->Output("releve_annee.pdf", "I");
    }

    ///////////////////////////////////////////////////////

    #[Route('/attestation/releveAll/annee/{inscription}/{assiduite}', name: 'etudiant_recherche_releve_annee_all')]
    public function attestationReleveAllAnnee(TInscription $inscription, $assiduite)
    {
        $admission = $inscription->getAdmission();
        $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByAdmission($admission);
        // dd($inscriptions);
        $html = "";
        $i = 1;
        foreach ($inscriptions as $key => $inscription) {
            $semestres = $this->em->getRepository(ExSnotes::class)->findBy(['inscription' => $inscription], ['semestre' => 'ASC']);
            // dd($semestres);
            $noteSemestre2 = null;
            $noteModulesBySemestre2 = null;
            if (count($semestres) > 1) {
                $noteSemestre1 = $semestres[0];
                $noteSemestre2 = $semestres[1];
                if ($assiduite == 0) {
                    $noteModulesBySemestre1 = $this->em->getRepository(ExMnotes::class)->getNotesModuleSansAssiduiteBySemestre($noteSemestre1->getSemestre(), $inscription);
                    if ($noteSemestre2 != null) {
                        $noteModulesBySemestre2 = $this->em->getRepository(ExMnotes::class)->getNotesModuleSansAssiduiteBySemestre($noteSemestre2->getSemestre(), $inscription);
                    }
                } else {
                    $noteModulesBySemestre1 = $this->em->getRepository(ExMnotes::class)->getNotesModuleBySemestre($noteSemestre1->getSemestre(), $inscription);
                    if ($noteSemestre2 != null) {
                        $noteModulesBySemestre2 = $this->em->getRepository(ExMnotes::class)->getNotesModuleBySemestre($noteSemestre2->getSemestre(), $inscription);
                    }
                }
                if ($i > 1) {
                    $html .= "<pagebreak>";
                }
                $html .= $this->render("etudiant/recherche_avance/pdf/academique/note_annee.html.twig", [
                    'inscription' => $inscription,
                    'noteModulesBySemestre1' => $noteModulesBySemestre1,
                    'noteModulesBySemestre2' => $noteModulesBySemestre2,
                    'noteSemestre1' => $noteSemestre1,
                    'noteSemestre2' => $noteSemestre2,
                    'assiduite' => $assiduite
                ])->getContent();
            }
            $i++;
        }

        // dd($html);
        $mpdf = new Mpdf([
            'margin_left' => 5,
            'margin_right' => 5,
        ]);
        $mpdf->SetHTMLHeader(
            $this->render("etudiant/recherche_avance/pdf/academique/header.html.twig")->getContent()
        );
        $mpdf->SetHTMLFooter(
            $this->render("etudiant/recherche_avance/pdf/academique/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle('Relevé de note annuel');
        $mpdf->Output("releve_annee.pdf", "I");
    }
    //////////////////////////////////////////////////////
    #[Route('/attestation/bonne_conduite/{inscription}', name: 'etudiant_recherche_attestation_bonne_conduite')]
    public function attestation_bonne_conduite(TInscription $inscription)
    {
        $html = $this->render("etudiant/recherche_avance/pdf/attestations/bonne_conduite.html.twig", [
            'inscription' => $inscription,
        ])->getContent();
        // dd($html);
        $mpdf = new Mpdf([
            'margin_left' => 15,
            'margin_right' => 15,
        ]);
        // $mpdf->SetHTMLHeader(
        //     $this->render("etudiant/recherche_avance/pdf/attestations/header.html.twig")->getContent()
        // );
        $mpdf->SetHTMLFooter(
            $this->render("etudiant/recherche_avance/pdf/attestations/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle('Attestation de bonne conduite');
        $mpdf->Output("Bonne conduite.pdf", "I");
    }
    #[Route('/attestation/hebergement/{inscription}', name: 'etudiant_recherche_attestation_hebergement')]
    public function attestation_hebergement(TInscription $inscription)
    {
        // die("l'attestation d'hebergement est en cours de developpement");
        // dd(->getCin());
        $etudiant = $inscription->getAdmission()->getPreinscription()->getEtudiant();
        $passeportType = $etudiant->getCin() != null ? "Cin n° " : "Passeport n° ";
        $passeport = $etudiant->getCin() != null ? $etudiant->getCin() : $etudiant->getPasseport();
        // $passeport = "Passeport n° <b>".$etudiant->getPasseport()."</b>";
        $html = $this->render("etudiant/recherche_avance/pdf/attestations/hebergement.html.twig", [
            'inscription' => $inscription,
            'passeport' => $passeport,
            'passeportType' => $passeportType,
        ])->getContent();
        // dd($html);
        $mpdf = new Mpdf([
            'margin_left' => 15,
            'margin_right' => 15,
        ]);
        // $mpdf->SetHTMLHeader(
        //     $this->render("etudiant/recherche_avance/pdf/attestations/header.html.twig")->getContent()
        // );
        $mpdf->SetHTMLFooter(
            $this->render("etudiant/recherche_avance/pdf/attestations/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle('Attestation d’hebergement');
        $mpdf->Output("Hebergement.pdf", "I");
    }
    #[Route('/attestation/cursus/{inscription}', name: 'etudiant_recherche_attestation_cursus')]
    public function attestation_cursus(TInscription $inscription)
    {
        // dd($inscription->getAnotes());
        // die("l'attestation de reussite (cursus) est en cours de developpement");
        $html = $this->render("etudiant/recherche_avance/pdf/attestations/cursus.html.twig", [
            'inscription' => $inscription,
        ])->getContent();
        // dd($html);
        $mpdf = new Mpdf([
            'margin_left' => 5,
            'margin_right' => 5,
        ]);
        // $mpdf->SetHTMLHeader(
        //     $this->render("etudiant/recherche_avance/pdf/attestations/header.html.twig")->getContent()
        // );
        $mpdf->SetHTMLFooter(
            $this->render("etudiant/recherche_avance/pdf/attestations/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle('Attestation de réussite (cursus)');
        $mpdf->Output("Reussite (cursus).pdf", "I");
    }

    #[Route('/avc/{inscription}', name: 'etudiant_recherche_attestation_avc')]
    public function evaluationAnneeAvc(TInscription $inscription, Request $request)
    {
        $anotes = $this->em->getRepository(ExAnotes::class)->findAnoteByAdmission($inscription->getAdmission());
        $html = $this->render("etudiant/recherche_avance/pdf/attestations/avc.html.twig", ['inscription' => $inscription, "anotes" => $anotes])->getContent();
        $mpdf = new Mpdf([
            'format' => 'A4-L',
            'mode' => 'utf-8',
            'margin_left' => '3',
            'margin_right' => '3',
            'margin_top' => '3',
            'margin_bottom' => '15',
            'format' => 'A4-L',
            'margin_header' => '2',
            'margin_footer' => '2'
        ]);
        $mpdf->defaultfooterline = 0;
        $mpdf->SetFooter('Page {PAGENO} / {nb}');
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle('Attestation de validation du cursus - ' . $inscription->getAdmission()->getCode());
        $mpdf->Output("avc" . $inscription->getId() . ".pdf", "I");
    }

    public function validationModules($inscription, $semestre)
    {
        return new Response(count($this->em->getRepository(ExMnotes::class)->getModulesTheoriqueBySemestre($semestre, $inscription)), 200, ['Content-Type' => 'text/html']);
    }

    public function validationStages($inscription, $semestre)
    {
        return new Response(count($this->em->getRepository(ExMnotes::class)->getModulesPratiqueBySemestre($semestre, $inscription)), 200, ['Content-Type' => 'text/html']);
    }
    public function nbrModulesStages($inscription, $semestre)
    {
        return new Response(count($this->em->getRepository(ExMnotes::class)->getNbrModulesPratiqueBySemestre($semestre, $inscription)), 200, ['Content-Type' => 'text/html']);
    }

    // #[Route('/impression_delib/{ins}', name: 'evaluation_semestre_impression_deliberation')]
    // public function evaluationSemestreImpressionDeliberation(Request $request,TInscription $inscription) 
    // {         
    //     $session = $request->getSession();
    //     $snote= $this->em->getRepository(ExSnotes::class)->findBy(['inscription'=>$inscription, 'semestre' =>$semestre]);

    //     $snotes = $this->em->getRepository(ExSnotes::class)->findByAdmission($inscription->getAdmission());
    //     $count_module_non_aquis = $this->em->getRepository(ExMnotes::class)->getModuleNonAquis($semestre, $inscription);
    //     $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($semestre->getPromotion()->getFormation());
    //     $infos =  [
    //         'nbr_nonAcis'=> count($count_module_non_aquis),
    //         'derogation' => count($snotes),
    //         'semestre' => $semestre,
    //         'snote' => $snote[0],
    //         'inscription' => $inscription,
    //         'modules' => $modules,
    //         'statutModules' => $this->em->getRepository(PeStatut::class)->findBy(['type' => 'M']),
    //         'statutSemestres' => $this->em->getRepository(PeStatut::class)->findBy(['type' => 'S']),
    //         'etablissement' => $annee->getFormation()->getEtablissement(),
    //     ];

    //     $html = $this->render("evaluation/semestre/pdfs/deliberation_individuel.html.twig", $infos)->getContent();

    //     $html .= $this->render("evaluation/semestre/pdfs/footer.html.twig")->getContent();
    //     $mpdf = new Mpdf([
    //         'mode' => 'utf-8',
    //         'margin_left' => '5',
    //         'margin_right' => '5',
    //         'margin_top' => '35',
    //         'margin_bottom' => '20',
    //         'format' => 'A4-L',
    //         'margin_header' => '2',
    //         'margin_footer' => '2'
    //         ]);
    //     $mpdf->SetHTMLHeader($this->render("evaluation/semestre/pdfs/header_deliberation_individuel.html.twig", [
    //         'semestre' => $semestre,
    //         'annee' => $annee
    //     ])->getContent());
    //     $mpdf->defaultfooterline = 0;
    //     $mpdf->SetFooter('Page {PAGENO} / {nb}');
    //     $mpdf->WriteHTML($html);
    //     $mpdf->Output("semestre_deliberation_individuel".$semestre->getId().".pdf", "I");
    // }
}
