<?php

namespace App\Controller\Evaluation;

use Mpdf\Mpdf;
use App\Entity\AcAnnee;
use App\Entity\AcModule;
use App\Entity\ExEnotes;
use App\Entity\AcElement;
use App\Entity\ExControle;
use App\Entity\TInscription;
use App\Entity\AcEtablissement;
use App\Controller\ApiController;
use App\Entity\AcPromotion;
use App\Entity\DDiplomes;
use App\Entity\DPrediplomes;
use App\Entity\ExAnotes;
use App\Entity\ExFnotes;
use App\Entity\ExMnotes;
use App\Entity\PDiplomes;
use App\Entity\PeStatut;
use App\Entity\PSignataire;
use App\Entity\PStatut;
use App\Entity\TAdmission;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
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
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $etablissements =  $this->em->getRepository(AcEtablissement::class)->findBy(['active'=>1]);

        return $this->render('evaluation/formation/index.html.twig', [
            'operations' => $operations,
            'etablissements' => $etablissements,
        ]);
    }
    #[Route('/list/{annee}', name: 'evaluation_formation_list_etudiant')]
    public function evaluationFormationList(Request $request, AcAnnee $annee): Response
    {   

        $dataInfosGenerales = $this->em->getRepository(AcAnnee::class)->getInfosGenerales($annee);
        $nbr_annee = $dataInfosGenerales['nbr_annee'];
        $data_annee = $this->em->getRepository(AcAnnee::class)->getAnnee($annee);
        $promotion = $this->em->getRepository(AcPromotion::class)->findOneBy(['formation'=>$annee->getFormation(),'ordre'=>1]);
        $inscriptions = $this->em->getRepository(TInscription::class)->findBy(['annee'=>$annee,'promotion'=>$promotion,'statut'=>13]);
        $array_etudiants = [];
        $array_informations = [];
        $admissions = [];
        if (!empty($inscriptions)) {
		    foreach ($inscriptions as $key => $value) {
                if (!in_array($value->getAdmission(),$admissions)) {
                    $admissions[] = $value->getAdmission();
                }
            }
            foreach ($admissions as $admission) {
                $etudiant = $admission->getPreinscription()->getEtudiant();
                $array_informations['nom'] = $etudiant->getNom();
                $array_informations['prenom'] = $etudiant->getPrenom();
                $array_informations['codeAdm'] = $admission->getCode();
                $array_informations['admission'] = $admission;
                $moyenne = 0;
                $moyenneSec = 0 ;
                $array_notes = [];
                for($i=0; $i < $nbr_annee; $i++ ){
                    if (!empty($data_annee[$i])) {
                        $anote =$this->em->getRepository(ExAnotes::class)->getNoteFromExAnotes($admission->getCode(), $data_annee[$i]['code']);
                        // dd($lastYear);
                        // dd($anote);
                        if (count($anote) >0) {
                            $lastYear = $anote[0]['annee_id'];
                            $moyenne =($moyenne + $anote[0]['note']);
                            $moyenneSec =($moyenneSec + $anote[0]['note_sec']);
                            array_push($array_notes , $anote[0]['note']);
                            
                        }else{
                            array_push($array_notes , 0);
                        }
                    }else{
                        array_push($array_notes , 'Prochainement');
                    }
                }
                $array_informations['notes'] = $array_notes;
                $array_informations['lastYear'] = $lastYear;

                if( count($data_annee) == $nbr_annee && count($data_annee)>0){
                    $array_informations['moyenne'] = number_format($moyenne/$nbr_annee, 2, '.', ' ');
                    $array_informations['moyenneSec'] = number_format($moyenneSec/$nbr_annee, 2, '.', ' ');
                }
                array_push($array_etudiants, $array_informations);
            }
        }
        $cechekIfExistAllAnneeExist = $this->em->getRepository(ExFnotes::class)->getFnotesByAdmissions($admissions);
        
        $check = 0; //valider cette opération
        if(!$cechekIfExistAllAnneeExist && count($data_annee) == $nbr_annee && count($data_annee)>0){
            $check = 1; 
        }elseif (count($cechekIfExistAllAnneeExist) == count($admissions)) {
            $check = 2;
        }
        $session = $request->getSession();
        $session->set('data_fnotes', [
            'etudiants' => $array_etudiants,
            'infos_general' => $dataInfosGenerales,
            'dataAnnee'=>$data_annee,
            'annee' => $annee
        ]);

        $html1 = $this->render('evaluation/formation/pages/infos.html.twig', [
            'dataInfosGenerales' => $dataInfosGenerales,
        ])->getContent();
        $html2 = $this->render('evaluation/formation/pages/list.html.twig', [
            'etudiants' => $array_etudiants,
            'nbrAnnee' => $nbr_annee,
            'dataAnnee' => $data_annee,
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
        $formation =$admission->getPreinscription()->getAnnee()->getFormation();
        $pdiplome = $this->em->getRepository(PDiplomes::class)->findOneBy(['formation'=> $formation]);
        // dd($pdiplome);

        if(!$pdiplome){
            $pdiplome = new PDiplomes();
            $pdiplome->setFormation($formation);
            $pdiplome->setUserCreated($this->getUser());
            $pdiplome->setDesignation($formation->getDesignation());
            $pdiplome->setAbreviation($formation->getAbreviation());
            $pdiplome->setCreated(new \DateTime('now'));
            
            $this->em->persist($pdiplome);
            $this->em->flush();

            $pdiplome->setCode('DIP'.str_pad($pdiplome->getId(), 8, '0', STR_PAD_LEFT));
            $this->em->flush();
        }

        

        foreach ($etudiants as $etudiant){
            $fnote = $this->em->getRepository(ExFnotes::class)->findOneByAdmission($etudiant['admission']);
            $admission = $this->em->getRepository(TAdmission::class)->find($etudiant['admission']);
            // $annee = $admission->getPreinscription()->getAnnee();
            $etablissement = $admission->getPreinscription()->getAnnee()->getFormation()->getEtablissement();
            $Year = $this->em->getRepository(AcAnnee::class)->find($etudiant['lastYear']);
            $Predip = $this->em->getRepository(DPrediplomes::class)->findBy(['annee'=>$Year]);
            $countPredip = count($Predip);

            $Ddip = $this->em->getRepository(DDiplomes::class)->findBy(['annee'=>$Year]);
            $countDdip = count($Ddip);

            $lastYear = substr($Year->getDesignation(), 5);
            if(!$fnote) {
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
            }else {
                $fnote->setNote($etudiant['moyenne']);
                $fnote->setNoteSec($etudiant['moyenneSec']);
                $this->em->flush();
                // dd($prediplome);    
            }

            
            $prediplome = $this->em->getRepository(DPrediplomes::class)->findOneBy(['fnote'=>$fnote]);

            if(!$prediplome){

                $prediplome = new DPrediplomes();
                // $admission = $this->em->getRepository(TAdmission::class)->find($etudiant['admission']);
                // $pdiplome = $this->em->getRepository(PDiplomes::class)->find($pdiplome[0]->getId());
                // $fnote = $this->em->getRepository(ExFnotes::class)->findOneByAdmission($etudiant['admission']);
                $prediplome->setFnote($fnote);
                $prediplome->setDiplome($pdiplome);
                $prediplome->setUserCreated($this->getUser());
                $prediplome->setAnnee($Year);
                // if($fnote == null){dd($fnote);}
                $note= $fnote->getNote();
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
                $prediplome->setCode('PRD_UIA_'.$etablissement->getAbreviation().'_'.$formation->getAbreviation().'_'.str_pad($countPredip, 3, '0', STR_PAD_LEFT).'/'.$lastYear);

                $this->em->persist($prediplome);
                $this->em->flush();
                // $annee = $admission->getPreinscription()->getAnnee();

                // dd(count($countPredip));

                // $this->em->persist($prediplome);
                // $this->em->flush();  
                $statutSignataire = $Year->getFormation()->getEtablissement()->getStatut();
                if($statutSignataire == 'Doyen'){
                    $signataire = $this->em->getRepository(PSignataire::class)->find(1);
                }else if($statutSignataire == 'Directeur'){
                    $signataire = $this->em->getRepository(PSignataire::class)->find(2);
                }else{
                    $signataire = null;
                }
                $note= $fnote->getNote();
                
                // $prediplome = $this->em->getRepository(DPrediplomes::class)->find($prediplome[0]->getId());
                $ddiplome = $this->em->getRepository(DDiplomes::class)->findOneBy(['prediplome'=>$prediplome]);
                if(!$ddiplome){
                    
                    $ddiplome = new DDiplomes();
                    $ddiplome->setPrediplome($prediplome);
                    $ddiplome->setAnnee($Year);
                    // dd($prediplome);
                    $ddiplome->setUserCreated($this->getUser());
                    // if($signataire){     
                    $ddiplome->setSignataire($signataire);
                    // }
                    $countDdip = $countDdip + 1;
                    $ddiplome->setCode('DIP_UIA_'.$etablissement->getAbreviation().'_'.$formation->getAbreviation().'_'.str_pad($countDdip, 3, '0', STR_PAD_LEFT).'/'.$lastYear);
                    $ddiplome->setNote($note);
                    $ddiplome->setCreated(new \DateTime('now'));
                    $ddiplome->setDate(new \DateTime('now'));
                    $this->em->persist($ddiplome);
                    $this->em->flush();
                }            
            }
            
            
        }

        



        return new JsonResponse(['message'=>"Bien Enregistre",'check' => $check],200);
    }

    #[Route('/impression/{type}/{affichage}', name: 'evaluation_formation_impression')]
    public function evaluationFormationImpression(Request $request, $type,$affichage) 
    {         
        $session = $request->getSession();
        $etudiantsArray = $session->get('data_fnotes')['etudiants'];
        // dd($etudiantsArray);
        $annee = $this->em->getRepository(AcAnnee::class)->find($session->get('data_fnotes')['annee']);
        // dd($session->get('data_fnotes')['annee']);  
        // $annee = $this->em->getRepository(AcAnnee::class)->find($session->get('data_fnotes')['annee']->getId());
        $infosGeneral = $session->get('data_fnotes')['infos_general'];
        $dataAnnee = $session->get('data_fnotes')['dataAnnee'];
        $stautsFormation = $this->em->getRepository(PeStatut::class)->findBy(['type'=>'F']);
        $stautsSemestre = $this->em->getRepository(PeStatut::class)->findBy(['type'=>'S']);
        $stautsAnnee = $this->em->getRepository(PeStatut::class)->findBy(['type'=>'A']);
        // dd($session->get('data_fnotes')['etudiants'][0]['inscription']);

        // dd($dataAnnee);
        $infos =  [
            'infosGeneral' => $infosGeneral,
            'dataAnnee' => $dataAnnee,
            'annee' => $annee,
            'etudiantsArray' => $etudiantsArray,
            'stautsFormation' => $stautsFormation,
            'stautsSemestre' => $stautsSemestre,
            'stautsAnnee' => $stautsAnnee,
            'affichage' => $affichage,

        ];
        if($type == "normal"){
            $html = $this->render("evaluation/formation/pdfs/normal.html.twig", $infos)->getContent();
        } else if ($type == "anonymat") {
            $html = $this->render("evaluation/formation/pdfs/anonymat.html.twig", $infos)->getContent();
        }
        else if ($type == "clair") {
            $html = $this->render("evaluation/formation/pdfs/clair.html.twig", $infos)->getContent();
        }
        
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
            'annee' => $annee,
            'affichage' => $affichage
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
            $inscription = $this->em->getRepository(TInscription::class)->find($etudiant['inscription']->getId());
            $admission = $inscription->getAdmission();
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
}
