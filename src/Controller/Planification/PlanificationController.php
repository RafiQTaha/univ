<?php

namespace App\Controller\Planification;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Controller\ApiController;
use App\Entity\AcAnnee;
use App\Entity\AcEtablissement;
use App\Entity\AcModule;
use App\Entity\AcSemestre;
use App\Entity\AcElement;
use App\Entity\ISeance;
use App\Entity\PEnseignant;
use App\Entity\PGroupe;
use App\Entity\PlEmptime;
use App\Entity\PlEmptimens;
use App\Entity\PNatureEpreuve;
use App\Entity\PrProgrammation;
use App\Entity\PSalles;
use App\Entity\Semaine;
use App\Entity\TInscription;
use App\Entity\User;
use App\Entity\UsOperation;
use DateTime;
use Mpdf\Mpdf;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx as reader;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

#[Route('/planification/planifications')]
class PlanificationController extends AbstractController
{
    
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }

    #[Route('/', name: 'planification_index')]
    public function index(Request $request): Response
    {
        $operations = ApiController::check($this->getUser(), 'planification_index', $this->em, $request);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $etbalissements =  $this->em->getRepository(AcEtablissement::class)->findBy(['active'=>1]);
        return $this->render('planification/planification.html.twig', [
            'etablissements' => $etbalissements,
            'operations' => $operations,
            'professeurs' => $this->em->getRepository(PEnseignant::class)->findAll()
        ]);
    }

    // #[Route('/calendar/{semestre}/{groupe}', name: 'planifications_calendar')]
    // public function planifications_calendar(AcSemestre $semestre, $groupe): Response
    // {
    //     if($groupe == 0){
    //         $emptimes = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestre($semestre);
    //     }else{
    //         $groupes = [null];
    //         $pgroupe1 = $this->em->getRepository(PGroupe::class)->find($groupe);
    //         array_push($groupes,$pgroupe1);
    //         $pgroupe2 = $this->em->getRepository(PGroupe::class)->findGroupesByGroupes(['groupe'=>$pgroupe1]);
    //         foreach ($pgroupe2 as $pgroupe2e) {
    //             array_push($groupes,$pgroupe2e);
    //         }
    //         $pgroupe3 = $this->em->getRepository(PGroupe::class)->findGroupesByGroupes($pgroupe2);
    //         foreach ($pgroupe3 as $pgroupe3e) {
    //             array_push($groupes,$pgroupe3e);
    //         }
    //         $emptimes = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestreAndGroupe($semestre,$groupes);
    //         // $emptimes = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestreAndGroupe($semestre,$groupe);
    //     }
    //     // dd($groupes);
    //     $times = [];
    //     $nivs = "";
    //     foreach($emptimes as $emptime){
    //         // dd($emptime);
    //         $niv = $emptime->getGroupe();
    //         if ($niv != null) {
    //             if ($niv->getGroupe() == Null) {
    //                 $nivs .= $niv->getNiveau() . "\n";
    //             }elseif ($niv->getGroupe()->getGroupe() == Null) {
    //                 $nivs .= $niv->getGroupe()->getNiveau().' - ' .$niv->getNiveau() . "\n";
    //             }else {
    //                 $nivs .= $niv->getGroupe()->getGroupe()->getNiveau(). ' - ' .$niv->getGroupe()->getNiveau().' - ' .$niv->getNiveau() . "\n";
    //             }
    //         }
    //         if ($nivs == "" )  $nivs .= "\n";
            
    //         $emptimens = $this->em->getRepository(PlEmptimens::class)->findBy(['seance'=>$emptime]);
    //         // dd($enseignants[0]->getEnseignant()->getNom().' '.$emptime->getEmptimens()[0]->getPrenom(););
    //         $enseingant = "";
    //         foreach ($emptimens as $emptimen) {
    //             if ($emptimen->getEnseignant() != null ) {
    //                 $enseingant .= $emptimen->getEnseignant()->getNom()." ".$emptimen->getEnseignant()->getPrenom() ."\n";
    //             }
    //         }
    //         // dd(count($emptimens));
    //         $element = $emptime->getProgrammation()->getElement();
    //         $natureEpreuve = $emptime->getProgrammation()->getNatureEpreuve();
    //         $salle = $emptime->getSalle() == null ? "" : $emptime->getSalle()->getDesignation();
    //         $times[] = [
    //             'id' => $emptime->getId(),
    //             'title' => $emptime->getCode() . "\n".
    //                     ' Element :  '.$element->getDesignation() . "\n".
    //                     ' Type de Cours :  '.$natureEpreuve->getDesignation() . "\n".
    //                     $enseingant .
    //                     'Niv : '.$nivs  . 
    //                     'salle : '.$salle ,
    //             'start' => $emptime->getStart()->format('Y-m-d H:i:s'),
    //             'end' => $emptime->getEnd()->format('Y-m-d H:i:s'),
    //             'color'=> $element->getModule()->getColor(),
    //         ];
    //         $nivs = "";
    //     }
    //     return new Response(json_encode($times));
    // }
    
    
    #[Route('/calendar_planning', name: 'calendar_planning')]
    public function calendar_planning(Request $request): Response
    {
        // dd($request);
        $semestre = $request->get('semestre');
        $groupe = $request->get('niv');
        $professeur = $request->get('professeur');
        if ( (!$semestre || $semestre == "null") && $professeur != 'null') {
            $emptimes = $this->em->getRepository(PlEmptime::class)->getEmptimeByProfesseur($professeur);
            
        }elseif($groupe == 0 && $professeur == 'null'){
            
            $emptimes = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestre($semestre);
        }elseif ($groupe == 0 && $professeur != 'null') {
            
            $emptimes = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestreAndProfesseur($semestre,$professeur);
        }else{
            
            $groupes = [null];
            $pgroupe1 = $this->em->getRepository(PGroupe::class)->find($groupe);
            array_push($groupes,$pgroupe1);
            $pgroupe2 = $this->em->getRepository(PGroupe::class)->findGroupesByGroupes(['groupe'=>$pgroupe1]);
            foreach ($pgroupe2 as $pgroupe2e) {
                array_push($groupes,$pgroupe2e);
            }
            $pgroupe3 = $this->em->getRepository(PGroupe::class)->findGroupesByGroupes($pgroupe2);
            foreach ($pgroupe3 as $pgroupe3e) {
                array_push($groupes,$pgroupe3e);
            }
            // $emptimes = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestreAndGroupe($semestre,$groupes);
            // $emptimes = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestreAndGroupe($semestre,$groupe);
            if ($professeur == 'null') {
                $emptimes = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestreAndGroupe($semestre,$groupes);
            }else {
                $emptimes = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestreAndGroupeAndProfesseur($semestre,$groupes,$professeur);
            }
        }
        $times = [];
        $nivs = "";
        foreach($emptimes as $emptime){
            $niv = $emptime->getGroupe();
            if ($niv != null) {
                if ($niv->getGroupe() == Null) {
                    $nivs .= $niv->getNiveau() . "\n";
                }elseif ($niv->getGroupe()->getGroupe() == Null) {
                    $nivs .= $niv->getGroupe()->getNiveau().' - ' .$niv->getNiveau() . "\n";
                }else {
                    $nivs .= $niv->getGroupe()->getGroupe()->getNiveau(). ' - ' .$niv->getGroupe()->getNiveau().' - ' .$niv->getNiveau() . "\n";
                }
            }
            
            $emptimens = $this->em->getRepository(PlEmptimens::class)->findBy(['seance'=>$emptime,'active'=>1]);
            $enseingant = "";
            foreach ($emptimens as $emptimen) {
                if ($emptimen->getEnseignant() != null ) {
                    $enseingant .= $emptimen->getEnseignant()->getNom()." ".$emptimen->getEnseignant()->getPrenom() ."\n";
                }
            }
            
            $element = $emptime->getProgrammation()->getElement();
            $natureEpreuve = $emptime->getProgrammation()->getNatureEpreuve();
            $salle = $emptime->getSalle() == null ? "" : $emptime->getSalle()->getDesignation();
            $times[] = [
                'id' => $emptime->getId(),
                'title' => $emptime->getCode() . "\n".
                        ' Element :  '.$element->getDesignation() . "\n".
                        ' Type de Cours :  '.$natureEpreuve->getDesignation() . "\n".
                        $enseingant .
                        'Niv : '.$nivs  . 
                        'salle : '.$salle ,
                'start' => $emptime->getStart()->format('Y-m-d H:i:s'),
                'end' => $emptime->getEnd()->format('Y-m-d H:i:s'),
                'color'=> $element->getModule()->getColor(),
            ];
            $nivs = "";
        }
        return new Response(json_encode($times));
    }

    #[Route('/print_planning/{semestre}/{groupe}/{day}/{professeur}', name: 'print_planning')]
    public function print_planning($semestre,$groupe,$day,$professeur): Response
    { 
        if ($semestre == "false") {
            $professeur = $this->em->getRepository(PEnseignant::class)->find($professeur);
            return $this->render('planification/pages/calendar.html.twig', [
                'semestre' => $semestre,
                'groupe' => $groupe,
                'day' => $day,
                'professeur' => $professeur,
            ]);
        }
        $niveau = "";
        $semestre = $this->em->getRepository(AcSemestre::class)->find($semestre);
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($semestre->getPromotion()->getFormation());
        if ($groupe != 0 ) {
            $niveau = $this->em->getRepository(PGroupe::class)->find($groupe);
        }
        ////////////////
        return $this->render('planification/pages/calendar.html.twig', [
            'semestre' => $semestre,
            'annee' => $annee,
            'groupe' => $groupe,
            'day' => $day,
            'niveau' => $niveau,
            'professeur' => $professeur,
        ]);
    }

    #[Route('/planification_infos/{id}', name: 'planifications_planification_infos')]
    public function planification_infos(AcSemestre $semestre,Request $request)
    {
        // dd($request->request->get('start'));
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($semestre->getPromotion()->getFormation());
        // $salles = $this->em->getRepository(PSalles::class)->findEmptySallesByDateTime($request->get('start').":00",$request->get('end').":00");
        // dd($salles);
        $salles = $this->em->getRepository(PSalles::class)->findBy([],['designation'=>'ASC']);
        $natureepreuves = $this->em->getRepository(PNatureEpreuve::class)->findBy([],['designation'=>'ASC']);
        $modules = $this->em->getRepository(AcModule::class)->findBy(['semestre'=>$semestre, 'active' => 1],['designation'=>'ASC']);
        
        $html = $this->render("planification/pages/form.html.twig", [
            'semestre' => $semestre,
            'annee' => $annee,
            'natureepreuves' => $natureepreuves,
            'salles' => $salles,
            'modules' => $modules,
        ])->getContent();
        return new JsonResponse($html);
    }

    #[Route('/planification_infos_edit/{id}', name: 'planifications_planification_infos_edit')]
    public function planifications_planification_infos_edit(PlEmptime $emptime,Request $request)
    {
        
        $salles = $this->em->getRepository(PSalles::class)->findBy([],['designation'=>'ASC']);
        // $salles = $this->em->getRepository(PSalles::class)->findEmptySallesByDateTime($emptime->getStart(),$emptime->getEnd());
        // dd($salles);
        $programmation = $emptime->getProgrammation();
        $annee = $programmation->getAnnee();
        // $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($annee->getFormation());
        $natureepreuves = $this->em->getRepository(PNatureEpreuve::class)->findBy([],['designation'=>'ASC']);
        $modules = $this->em->getRepository(AcModule::class)->findBy(['semestre'=>$programmation->getElement()->getModule()->getSemestre(), 'active' => 1],['designation'=>'ASC']);
        $elements = $this->em->getRepository(AcElement::class)->findBy(['module'=>$programmation->getElement()->getModule(), 'active' => 1],['designation'=>'ASC']);
        // $enseignants = $this->em->getRepository(PlEmptimens::class)->findBy();
        $emptimens = $this->em->getRepository(PlEmptimens::class)->findBy(['seance'=>$emptime,'active'=>1]);
        $empenseignants = [];
        foreach ($emptimens as $emptimen) {
            array_push($empenseignants,$emptimen->getEnseignant());
        }
        $nivs = "";
        $niv = $emptime->getGroupe();
        if ($niv != null) {
            if ($niv->getGroupe() == Null) {
                // $nivs .= '$niv' . "\n";
                $nivs .= $niv->getNiveau() . "\n";
            }elseif ($niv->getGroupe()->getGroupe() == Null) {
                $nivs .= $niv->getGroupe()->getNiveau().' - ' .$niv->getNiveau() . "\n";
            }else {
                $nivs .= $niv->getGroupe()->getGroupe()->getNiveau(). ' - ' .$niv->getGroupe()->getNiveau().' - ' .$niv->getNiveau() . "\n";
            }
        }
        $promotion = $emptime->getProgrammation()->getElement()->getModule()->getSemestre()->getPromotion();
        $inscriptions = $this->em->getRepository(TInscription::class)->getNiveaux($promotion,$annee);
        $groupes = [];
        foreach ($inscriptions as $inscription) {
            $groupe = $inscription->getGroupe();
            if ($groupe->getGroupe() == Null) {
                if (!in_array($groupe, $groupes)){
                    array_push($groupes,$groupe);
                }
            }elseif ($groupe->getGroupe()->getGroupe() == Null) {
                $groupe = $groupe->getGroupe();
                if (!in_array($groupe, $groupes)){
                    array_push($groupes,$groupe);
                }
            }else {
                $groupe = $groupe->getGroupe()->getGroupe();
                if (!in_array($groupe, $groupes)){
                    array_push($groupes,$groupe);
                }
            }
        }
        
        $isAdmin = in_array('ROLE_ADMIN',$this->getUser()->getRoles());
        $havePermission = $this->em->getRepository(UsOperation::class)->havePermission(302,$this->getUser());
        if ($emptime->getVerifier() == 0 or $havePermission or $isAdmin) {
            $html = $this->render("planification/pages/full_update_form.html.twig", [
                'emptime' => $emptime,
                'empenseignants' => $empenseignants,
                'annee' => $annee,
                'natureepreuves' => $natureepreuves,
                'salles' => $salles,
                'modules' => $modules,
                'elements' => $elements,
                'nivs' => $nivs,
                'groupes' => $groupes,
            ])->getContent();
        }else {
            $html = $this->render("planification/pages/update_form.html.twig", [
                'emptime' => $emptime,
                'empenseignants' => $empenseignants,
                'annee' => $annee,
                'natureepreuves' => $natureepreuves,
                'salles' => $salles,
                'modules' => $modules,
                'elements' => $elements,
                'nivs' => $nivs,
                'groupes' => $groupes,
            ])->getContent();
        }

        return new JsonResponse($html);
    }

    #[Route('/planifications_calendar_add', name: 'planifications_calendar_add')]
    public function planifications_calendar_add(Request $request): Response
    {
        if ($request->get('nature_seance') == "" || $request->get('element') =="" ) {
            return new Response('Merci de renseignez tout les champs',500);
        }
        $element = $this->em->getRepository(AcElement::class)->find($request->get('element'));
        if (!str_contains($element->getModule()->getSemestre()->getPromotion()->getFormation()->getDesignation(), 'Résidanat') && $request->get('salle') == "") { 
            return new Response('Merci de renseignez tout les champs',500);
        }
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($element->getModule()->getSemestre()->getPromotion()->getFormation());
        $programmation = $this->em->getRepository(PrProgrammation::class)->findOneBy(['element'=>$request->get('element'),'nature_epreuve'=>$request->get('nature_seance'),'annee'=>$annee]);

        if ($programmation == null) {
            return new Response("Programmation introuvable ou l'annee ".$annee->getDesignation()." est cloturée!!",500);
        }
        if ($annee->getFormation()->getEtablissement()->getId() != 28) {
            // $inscriptions = $this->em->getRepository(TInscription::class)->getNiveaux($element->getModule()->getSemestre()->getPromotion(),$annee);
            // $groupes = [];
            // foreach ($inscriptions as $inscription) {
            //     $groupe = $inscription->getGroupe();
            //     if ($groupe->getGroupe() == Null) {
            //         if (!in_array($groupe, $groupes)){
            //             array_push($groupes,$groupe);
            //         }
            //     }elseif ($groupe->getGroupe()->getGroupe() == Null) {
            //         $groupe = $groupe->getGroupe();
            //         if (!in_array($groupe, $groupes)){
            //             array_push($groupes,$groupe);
            //         }
            //     }else {
            //         $groupe = $groupe->getGroupe()->getGroupe();
            //         if (!in_array($groupe, $groupes)){
            //             array_push($groupes,$groupe);
            //         }
            //     }
            // }
            // $CountGroupe = count($groupes);
            // $totalMinute =0;
            // $seancesActive = $this->em->getRepository(PlEmptime::class)->findBy(['active' => 1,'programmation' => $programmation,'annuler'=>0]);

            // foreach ($seancesActive as $seance) {
            //     $interval = $seance->getHeurDb()->diff($seance->getHeurFin());
            //     $totalMinute += $interval->h * 60 + $interval->i;
            // }
            $MaxVolumeHoraire = $this->MaxVolumeHoraire($element,$annee,$programmation);
            if (!$MaxVolumeHoraire) {
                return new Response("Vous avez atteint le maximum des heures pour cet élément !",500); 
            }
        }
        

        if ($request->get('enseignant') == NULL) return new Response('Merci de Choisir Au Moins Un Enseignant!!',500);

        $semaine = $this->em->getRepository(Semaine::class)->findOneBy(['nsemaine'=>$request->get('n_semaine'),'anneeS'=>$annee->getDesignation()]);
        if ($semaine == null) {
            return new Response("Semaine Introuvable ou l'annee ".$annee->getDesignation()." est cloturée!!",500);
        }
        $emptime = new PlEmptime();
        $emptime->setDescription($request->get('description'));
        $emptime->setProgrammation($programmation);
        $emptime->setSalle($this->em->getRepository(PSalles::class)->find($request->get('salle')));
        $emptime->setXsalle($this->em->getRepository(PSalles::class)->find($request->get('salle')));
        $emptime->setSemaine($semaine);
        $emptime->setGroupe($this->em->getRepository(PGroupe::class)->find($request->get('groupe')));
        // $emptime->setGroupe($this->em->getRepository(PGroupe::class)->find(4));
        ////////////
        $emptime->setStart(new \DateTime($request->get('day') .' '. $request->get('h_debut').':00'));
        $emptime->setEnd(new \DateTime($request->get('day') .' '. $request->get('h_fin').':00'));
        $emptime->setHeurDb(new \DateTime($request->get('h_debut')));
        $emptime->setHeurFin(new \DateTime($request->get('h_fin')));
        $emptime->setValider(0);
        $emptime->setAnnuler(0);
        $emptime->setGenerer(0);
        $emptime->setActive(1);
        $emptime->setUserCreated($this->getUser());
        $emptime->setCreated(new \DateTime('now'));
        $this->em->persist($emptime);
        $this->em->flush();
        $epreuve = $this->em->getRepository(PNatureEpreuve::class)->find($request->get('nature_seance'))->getAbreviation();
        $etab = $element->getModule()->getSemestre()->getPromotion()->getFormation()->getEtablissement()->getAbreviation();
        $emptime->setCode($epreuve.'-'.$etab.str_pad($emptime->getId(), 7, '0', STR_PAD_LEFT).'/'.date('Y'));
        if ($request->get('enseignant') != NULL) {
            foreach ($request->get('enseignant') as $enseignant) {
                $emptimens = new PlEmptimens();
                $emptimens->setSeance($emptime);
                $emptimens->setEnseignant(
                    $this->em->getRepository(PEnseignant::class)->find($enseignant)
                );
                $emptimens->setGenerer(0);
                $emptimens->setActive(1);
                $emptimens->setCreated(new \DateTime('now'));
                $this->em->persist($emptimens);
            }
        }
        $this->em->flush();
        return new Response('Planification bien Ajouter!!',200);
    }

    public function MaxVolumeHoraire($element,$annee,$programmation){
        $inscriptions = $this->em->getRepository(TInscription::class)->getNiveaux($element->getModule()->getSemestre()->getPromotion(),$annee);
            $groupes = [];
            foreach ($inscriptions as $inscription) {
                $groupe = $inscription->getGroupe();
                if ($groupe->getGroupe() == Null) {
                    if (!in_array($groupe, $groupes)){
                        array_push($groupes,$groupe);
                    }
                }elseif ($groupe->getGroupe()->getGroupe() == Null) {
                    $groupe = $groupe->getGroupe();
                    if (!in_array($groupe, $groupes)){
                        array_push($groupes,$groupe);
                    }
                }else {
                    $groupe = $groupe->getGroupe()->getGroupe();
                    if (!in_array($groupe, $groupes)){
                        array_push($groupes,$groupe);
                    }
                }
            }
            $CountGroupe = count($groupes);
            $totalMinute =0;
            $seancesActive = $this->em->getRepository(PlEmptime::class)->findBy(['active' => 1,'programmation' => $programmation,'annuler'=>0]);

            foreach ($seancesActive as $seance) {
                $interval = $seance->getHeurDb()->diff($seance->getHeurFin());
                $totalMinute += $interval->h * 60 + $interval->i;
            }
            if ($totalMinute / 60  >= $programmation->getVolume() * $CountGroupe) {
                return false;
            }
            return true;
    }
    // #[Route('/planifications_calendar_edit/{id}', name: 'planifications_calendar_edit')]
    // public function planifications_calendar_edit(PlEmptime $emptime,Request $request): Response
    // {
    //     // return new Response("Vous n'anvez pas le droit!!",500);
    //     if ($emptime->getValider() == 1) {
    //         return new Response("Vous ne pouvez pas modifer une seance déja valider!",500);
    //     }
    //     $element = $emptime->getProgrammation()->getElement();
    //     if ((!str_contains($element->getModule()->getSemestre()->getPromotion()->getFormation()->getDesignation(), 'Résidanat') && $request->get('salle') == "")) {
    //         return new Response('Merci de choisir une salle',500);
    //     }
    //     $salle = $this->em->getRepository(PSalles::class)->find($request->get('salle'));
    //     $emptime->setSalle($salle);
    //     $emptime->setXsalle($salle);
    //     if ($request->get('vide') == "on") {
    //         $emptime->setGroupe(null);
    //     }elseif ($request->get('edit_groupe') != 0) {
    //         $emptime->setGroupe($this->em->getRepository(PGroupe::class)->find($request->get('edit_groupe')));
    //     }
    //     $emptime->setUserUpdated($this->getUser());
    //     $emptime->setUpdated(new \DateTime('now'));
    //     $this->em->flush();
        
    //     return new Response('Planification bien Modifier!!',200);
        
    // }

    // #[Route('/planifications_calendar_edit/{id}', name: 'planifications_calendar_edit')]
    // public function planifications_calendar_edit(PlEmptime $emptime,Request $request): Response
    // {
    //     // return new Response("Vous n'anvez pas le droit!!",500);
    //     if($emptime->getValider() != 1){
    //         $element = $this->em->getRepository(AcElement::class)->find($request->get('element'));
    //         $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($element->getModule()->getSemestre()->getPromotion()->getFormation());
    //         $programmation = $this->em->getRepository(PrProgrammation::class)->findOneBy(['element'=>$request->get('element'),'nature_epreuve'=>$request->get('nature_seance'),'annee'=>$annee]);
    //         if ($programmation == null) {
    //             return new Response("Programmation introuvable ou l'annee ".$annee->getDesignation()." est cloturée!!",500);
    //         }
        
    //         $totalMinute =0;
    //         $seancesActive = $this->em->getRepository(PlEmptime::class)->findBy(['active' => 1,'programmation' => $programmation]);
    //         foreach ($seancesActive as $seance) {
    //             $interval = $seance->getHeurDb()->diff($seance->getHeurFin());
    //             $totalMinute += $interval->h * 60 + $interval->i;
    //         }
            
    //         if ($totalMinute >= $programmation->getVolume()) return new Response("Vous avez atteint le maximum des heures pour cet élément !",500); 
    //         if ($request->get('nature_seance') == "" || $request->get('nature_seance') == "" || (!str_contains($element->getModule()->getSemestre()->getPromotion()->getFormation()->getDesignation(), 'Résidanat') && $request->get('salle') == "")) {
    //             return new Response('Merci de renseignez tout les champs',500);
    //         }
    //         $semaine = $this->em->getRepository(Semaine::class)->findOneBy(['nsemaine'=>$request->get('n_semaine'),'anneeS'=>$annee->getDesignation()]);
    //         if ($semaine == null) {
    //             return new Response("Semaine Introuvable ou l'annee ".$annee->getDesignation()." est cloturée!!",500);
    //         }
    //         $emptime->setSemaine($semaine);
    //         $emptime->setProgrammation($programmation);
    //         $emptime->setDescription($request->get('description'));
    //         $emptime->setSalle($this->em->getRepository(PSalles::class)->find($request->get('salle')));
    //         $emptime->setXsalle($this->em->getRepository(PSalles::class)->find($request->get('salle')));
    //         if ($request->get('vide') == "on") {
    //             $emptime->setGroupe(null);
    //         }elseif ($request->get('edit_groupe') != 0) {
    //             $emptime->setGroupe($this->em->getRepository(PGroupe::class)->find($request->get('edit_groupe')));
    //         }
    //     }
    //     if ($request->get('enseignant') == NULL) {
    //         return new Response('Merci de Choisir Au Moins Un Enseignant!!',500);
    //     } 
    //     $emptime->setUserUpdated($this->getUser());
    //     $emptime->setUpdated(new \DateTime('now'));
    //     $emptimens = $this->em->getRepository(PlEmptimens::class)->findBy(['seance'=>$emptime]);
    //     $empenseignants = [];
    //     foreach ($emptimens as $emptimen) {
    //         $this->em->remove($emptimen);
    //     }
    //     foreach ($request->get('enseignant') as $enseignant) {
    //         $emptimens = new PlEmptimens();
    //         $emptimens->setSeance($emptime);
    //         $emptimens->setEnseignant(
    //             $this->em->getRepository(PEnseignant::class)->find($enseignant)
    //         );
    //         $emptimens->setGenerer(0);
    //         $emptimens->setActive(1);
    //         $emptimens->setCreated(new \DateTime('now'));
    //         $this->em->persist($emptimens);
    //     }
    //     $this->em->flush();
        
    //     return new Response('Planification bien Modifier!!',200);
    // }

    
    #[Route('/planifications_calendar_edit/{id}', name: 'planifications_calendar_edit')]
    public function planifications_calendar_edit(PlEmptime $emptime,Request $request): Response
    {
        if ($emptime->getValider() == 1) {
            return new Response("Vous ne pouvez pas modifer une seance déja valider!",500);
        }
        $havePermission = $this->em->getRepository(UsOperation::class)->havePermission(302,$this->getUser());
        $isAdmin = in_array('ROLE_ADMIN',$this->getUser()->getRoles());
        if ($emptime->getVerifier() == 0 or $havePermission or $isAdmin) {
            $message = $this->editPlanningFull($emptime, $request);
        }else{
            $message = $this->editPlanning($emptime, $request);
        }
        return new Response($message->getContent(),$message->getStatusCode());
    }

    public function editPlanning($emptime,Request $request){
        $element = $emptime->getProgrammation()->getElement();
        if ((!str_contains($element->getModule()->getSemestre()->getPromotion()->getFormation()->getDesignation(), 'Résidanat') && $request->get('salle') == "")) {
            return new Response('Merci de choisir une salle',500);
        }
        $salle = $this->em->getRepository(PSalles::class)->find($request->get('salle'));
        $emptime->setSalle($salle);
        $emptime->setXsalle($salle);
        if ($request->get('vide') == "on") {
            $emptime->setGroupe(null);
        }elseif ($request->get('edit_groupe') != 0) {
            $emptime->setGroupe($this->em->getRepository(PGroupe::class)->find($request->get('edit_groupe')));
        }
        $emptime->setUserUpdated($this->getUser());
        $emptime->setUpdated(new \DateTime('now'));
        $this->em->flush();
        return new Response('Planification bien Modifier!!',200);
    }
    public function editPlanningFull($emptime,Request $request){
        $element = $this->em->getRepository(AcElement::class)->find($request->get('element'));
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($element->getModule()->getSemestre()->getPromotion()->getFormation());
        $programmation = $this->em->getRepository(PrProgrammation::class)->findOneBy(['element'=>$request->get('element'),'nature_epreuve'=>$request->get('nature_seance'),'annee'=>$annee]);
        if ($programmation == null) {
            return new Response("Programmation introuvable ou l'annee ".$annee->getDesignation()." est cloturée!!",500);
        }
        // $totalMinute =0;
        // $seancesActive = $this->em->getRepository(PlEmptime::class)->findBy(['active' => 1,'programmation' => $programmation]);
        // foreach ($seancesActive as $seance) {
        //     if ($seance->getId() == $emptime->getId()) {
        //         continue;
        //     }
        //     $interval = $seance->getHeurDb()->diff($seance->getHeurFin());
        //     $totalMinute += $interval->h * 60 + $interval->i;
        // }
        // if ($totalMinute >= $programmation->getVolume()) {
        //     return new Response("Vous avez atteint le maximum des heures pour cet élément !",500); 
        // }
        
        $MaxVolumeHoraire = $this->MaxVolumeHoraire($element,$annee,$programmation);
        if (!$MaxVolumeHoraire) {
            return new Response("Vous avez atteint le maximum des heures pour cet élément !",500); 
        }

        if ($request->get('nature_seance') == "" || (!str_contains($annee->getFormation()->getDesignation(), 'Résidanat') && $request->get('salle') == "")) {
            return new Response('Merci de renseignez tout les champs',500);
        }
        $semaine = $this->em->getRepository(Semaine::class)->findOneBy(['nsemaine'=>$request->get('n_semaine'),'anneeS'=>$annee->getDesignation()]);
        if ($semaine == null) {
            return new Response("Semaine Introuvable ou l'annee ".$annee->getDesignation()." est cloturée!!",500);
        }
        
        $emptime->setSemaine($semaine);
        $emptime->setProgrammation($programmation);
        $emptime->setDescription($request->get('description'));
        $emptime->setSalle($this->em->getRepository(PSalles::class)->find($request->get('salle')));
        $emptime->setXsalle($this->em->getRepository(PSalles::class)->find($request->get('salle')));
        if ($request->get('vide') == "on") {
            $emptime->setGroupe(null);
        }elseif ($request->get('edit_groupe') != 0) {
            $emptime->setGroupe($this->em->getRepository(PGroupe::class)->find($request->get('edit_groupe')));
        }
        // }
        
        
        if ($request->get('enseignant') == NULL) {
            return new Response('Merci de Choisir Au Moins Un Enseignant!!',500);
        } 
        
        $emptime->setUserUpdated($this->getUser());
        $emptime->setUpdated(new \DateTime('now'));
        $emptimens = $this->em->getRepository(PlEmptimens::class)->findBy(['seance'=>$emptime]);
        foreach ($emptimens as $emptimen) {
            $this->em->remove($emptimen);
        }
        foreach ($request->get('enseignant') as $enseignant) {
            $emptimens = new PlEmptimens();
            $emptimens->setSeance($emptime);
            $emptimens->setEnseignant(
                $this->em->getRepository(PEnseignant::class)->find($enseignant)
            );
            $emptimens->setGenerer(0);
            $emptimens->setActive(1);
            $emptimens->setCreated(new \DateTime('now'));
            $this->em->persist($emptimens);
        }
        $this->em->flush();
        return new Response('Planification bien Modifier!!',200);
    }

    
    #[Route('/delete_planning/{id}', name: 'delete_planning')]
    public function delete_planning(PlEmptime $emptime): Response
    {   
        // return new Response("Vous n'anvez pas le droit!!",500);
        
        if ($emptime->getValider() == 1) {
            return new Response('Vous ne pouvez pas supprimer une seance déja valider!',500);
        }
        $havePermission = $this->em->getRepository(UsOperation::class)->havePermission(302,$this->getUser());
        $isAdmin = in_array('ROLE_ADMIN',$this->getUser()->getRoles());
        if (!$isAdmin && !$havePermission && $emptime->getVerifier() == 1) {
            return new Response("Vous ne pouvez pas supprimer une seance déja verifier!",500);
        }

        $havePermission = $this->em->getRepository(UsOperation::class)->havePermission(302,$this->getUser());
        $isAdmin = in_array('ROLE_ADMIN',$this->getUser()->getRoles());
        if ($emptime->getVerifier() == 0 or $havePermission or $isAdmin) {
            // if ($emptime) {
            $iseances = $this->em->getRepository(ISeance::class)->findBy(['seance'=>$emptime]);
            foreach($iseances as $iseance){
                $iseance->setStatut(5);
            }
            $emptime->setActive(0);
            $emptime->setDeleted(new \DateTime('now'));
            $emptime->setUserDeleted($this->getUser());
            $this->em->flush();
            return new Response('Planification bien supprimée',200);
            // }
        }
        return new Response("Vous n'anvez pas le droit!!",500);
        // return new Response('Suppression Echouée',500);
    }

    #[Route('/generer_planning/{semestre}/{groupe}', name: 'generer_planning')]
    public function generer_planning(AcSemestre $semestre,$groupe,Request $request): Response
    {   
        // dd($request->get('nsemaine'),$request->get('crntday') , $semestre ,$groupe);
        if ($request->get('nsemaine') != "" && $semestre) {
            $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($semestre->getPromotion()->getFormation());
            $semaine = $this->em->getRepository(Semaine::class)->findOneBy(['nsemaine'=>$request->get('nsemaine'),'anneeS'=>$annee->getDesignation()]);
            if ($groupe == 0) {
                $emptimesValider = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestreAndSemaineToGenerer($semestre,$semaine);
                $emptimesAnnuler = $this->em->getRepository(PlEmptime::class)->getEmptimeAnnulerBySemestreAndSemaineToGenerer($semestre,$semaine);
                $Allemptimes = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestreAndSemaine($semestre,$semaine);
            }else{
                $emptimesValider = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestreAndGroupeAndSemaineToGenerer($semestre,$groupe,$semaine);
                $emptimesAnnuler = $this->em->getRepository(PlEmptime::class)->getEmptimeAnnulerBySemestreAndGroupeAndSemaineToGenerer($semestre,$groupe,$semaine);
                $Allemptimes = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestreAndGroupeAndSemaine($semestre,$groupe,$semaine);
            }
            $count = count($emptimesValider) + count($emptimesAnnuler);
            if (count($Allemptimes) == $count && $emptimesValider != NULL) {
                foreach($emptimesValider as $emptime){
                    $emptime->setGenerer(1);
                    $this->em->flush();
                }
                return new Response('Géneration bien Effectuée',200);
            }else {
                return new Response('Merci de Valider tout les seances de cette semaine!',500);
            }
        }
        return new Response('Generation Echouée',500);
    }
// xxxxxxxxxxxxxxxxxxx
    #[Route('/verifier_planning/{semestre}/{groupe}', name: 'verifier_planning')]
    public function verifier_planning(AcSemestre $semestre,$groupe,Request $request): Response
    {   
        $professeur = $request->get('professeur');
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($semestre->getPromotion()->getFormation());
        $semaine = $this->em->getRepository(Semaine::class)->findOneBy(['nsemaine'=>$request->get('nsemaine'),'anneeS'=>$annee->getDesignation()]);
        if($groupe == 0 && $professeur == 'null'){

            $emptimes = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestreAndSemaine($semestre,$semaine);
        }elseif ($groupe == 0 && $professeur != 'null') {
            
            $emptimes = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestreAndSemaineAndProfesseur($semestre,$semaine,$professeur);
            // $emptimes = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestreAndProfesseur($semestre,$professeur);
        }else{
            $groupes = [null];
            $pgroupe1 = $this->em->getRepository(PGroupe::class)->find($groupe);
            array_push($groupes,$pgroupe1);
            $pgroupe2 = $this->em->getRepository(PGroupe::class)->findGroupesByGroupes(['groupe'=>$pgroupe1]);
            foreach ($pgroupe2 as $pgroupe2e) {
                array_push($groupes,$pgroupe2e);
            }
            $pgroupe3 = $this->em->getRepository(PGroupe::class)->findGroupesByGroupes($pgroupe2);
            foreach ($pgroupe3 as $pgroupe3e) {
                array_push($groupes,$pgroupe3e);
            }
            if ($professeur == 'null') {
                $emptimes = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestreAndGroupesAndSemaine($semestre,$groupes,$semaine);
            }else {
                $emptimes = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestreAndGroupesAndSemaineAndProfesseur($semestre,$groupes,$semaine,$professeur);
            }
        }
        if (count($emptimes) == 0) {
            return new Response('Aucune Seance Trouvé !',500);
        }
        foreach ($emptimes as $seance) {
            $seance->setVerifier(1);
            $seance->setVerified(new DateTime('now'));
            $seance->setUserVerified($this->getUser());
            $this->em->flush();
        }
        // dd($emptimes);
        return new Response('Toutes les séances de cette semaine sont bien vérifiées.',200);
    }

    #[Route('/planifications_editEventDate/{id}', name: 'planifications_editEventDate')]
    public function planifications_editEventDate(PlEmptime $emptime,Request $request): Response
    {   
        // return new Response("Vous n'anvez pas le droit!!",500);
        if ($emptime->getGenerer() ==1 || $emptime->getAnnuler() == 1) {
            return new Response('Seance déja générer',500);
        }
        $havePermission = $this->em->getRepository(UsOperation::class)->havePermission(302,$this->getUser());
        $isAdmin = in_array('ROLE_ADMIN',$this->getUser()->getRoles());
        if ($emptime->getVerifier() == 0 or $havePermission or $isAdmin) {
            if ($request->get('start') != "" && $request->get('end') != "") {
                $start = new \DateTime($request->get('start'));
                $end = new \DateTime($request->get('end'));
                // $h_debut = new \DateTime($start->format('H:i'));
                $emptime->setStart($start);
                $emptime->setEnd($end);
                $emptime->setHeurDb($start);
                $emptime->setHeurFin($end);
                $this->em->flush();
                return new Response('Planification bien Modifier!!',200);
            }
        }
        return new Response("Vous n'anvez pas le droit!!",500);
    }

    #[Route('/planning_canvas', name: 'planning_canvas')]
    public function planning_canvas(): Response
    {   
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'programmation_id');
        $sheet->setCellValue('B1', 'salle_id');
        $sheet->setCellValue('C1', 'description');
        $sheet->setCellValue('D1', 'semaine_id');
        $sheet->setCellValue('E1', 'start');
        $sheet->setCellValue('F1', 'end');
        $sheet->setCellValue('G1', 'color_id');
        $sheet->setCellValue('H1', 'groupe_id');
        $writer = new Xlsx($spreadsheet);
        $fileName = 'planning_Canvas.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
    #[Route('/import', name: 'planning_canvas_import')]
    public function planningEnMasse(Request $request, SluggerInterface $slugger) 
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
                $this->getParameter('planification_create_directory'),
                $newFilename
            );
        } catch (FileException $e) {
            throw new \Exception($e);
        }
        $reader = new reader();
        $spreadsheet = $reader->load($this->getParameter('planification_create_directory').'/'.$newFilename);
        $worksheet = $spreadsheet->getActiveSheet();
        $spreadSheetArys = $worksheet->toArray();

        unset($spreadSheetArys[0]);
        $sheetCount = count($spreadSheetArys);
        
        foreach ($spreadSheetArys as $sheet) {
            if($sheet[0] != Null){
                $programmation = $this->em->getRepository(PrProgrammation::class)->find($sheet[0]);
                $emptime = new PlEmptime();
                $emptime->setProgrammation($programmation);
                $emptime->setSalle($this->em->getRepository(PSalles::class)->find($sheet[1]));
                $emptime->setXsalle($this->em->getRepository(PSalles::class)->find($sheet[1]));
                $emptime->setDescription($sheet[2]);
                $emptime->setSemaine($this->em->getRepository(Semaine::class)->find($sheet[3]));
                $emptime->setStart(new \DateTime($sheet[4]));
                $emptime->setHeurDb(new \DateTime($sheet[4]));
                $emptime->setEnd(new \DateTime($sheet[5]));
                $emptime->setHeurFin(new \DateTime($sheet[5]));
                if ($sheet[6] != "") {
                    $emptime->setColor($sheet[6] == "" ? Null : $sheet[6]);
                }
                $emptime->setGroupe($this->em->getRepository(PGroupe::class)->find($sheet[7]));
                $emptime->setValider(0);
                $emptime->setAnnuler(0);
                $emptime->setGenerer(0);
                $emptime->setUserCreated($this->getUser());
                $emptime->setCreated(new \DateTime('now'));
                $this->em->persist($emptime);
                $this->em->flush();
                $epreuve = $programmation->getNatureEpreuve()->getAbreviation();
                $etab = $programmation->getElement()->getModule()->getSemestre()->getPromotion()->getFormation()->getEtablissement()->getAbreviation();
                $emptime->setCode($epreuve.'-'.$etab.str_pad($emptime->getId(), 7, '0', STR_PAD_LEFT).'/'.date('Y'));
                $this->em->flush();
            }
        }
        return new Response('Plannification Bien Ajouter',200);
    }

    #[Route('/GetAbsenceByGroupe/{emptime}', name: 'GetAbsenceByGroupe')]
    public function GetAbsenceByGroupe(PlEmptime $emptime)
    {   
        $element = $emptime->getProgrammation()->getElement();
        $promotion = $element->getModule()->getSemestre()->getPromotion();
        $annee = $this->em->getRepository(AcAnnee::class)->findOneBy([
            'formation'=>$promotion->getFormation(),
            'validation_academique'=>'non',
            'cloture_academique'=>'non',
        ]);
        $groupes = [];
        if( $emptime->getGroupe()){
            $groupe = $emptime->getGroupe();
            array_push($groupes,$groupe);
            foreach ($groupe->getGroupes() as $groupe) {
                if (!in_array($groupe, $groupes)){
                    array_push($groupes,$groupe);
                }
                foreach ($groupe->getGroupes() as $groupe) {
                    if (!in_array($groupe, $groupes)){
                        array_push($groupes,$groupe);
                    }
                }
            }
            $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByAnneeAndPromoAndGroupes($promotion,$annee,$groupes);
            
        }else{
            $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByAnneeAndPromoNoGroup($promotion,$annee);
        }
        $emptimenss = $this->em->getRepository(PlEmptimens::class)->findBy(['seance'=>$emptime,'active'=>1]);
        $html = $this->render("planification/pdfs/absence.html.twig", [
            'inscriptions' => $inscriptions,
            'seance' => $emptime,
            'annee' => $annee,
            'emptimenss' => $emptimenss
        ])->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'margin_left' => '5',
            'margin_right' => '5',
            ]);
        $mpdf->SetTitle('Fiche D\'abcense');
        $mpdf->SetHTMLFooter(
            $this->render("planification/pdfs/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->Output("Fiche D'abcense.pdf", "I");
    }
    
    #[Route('/Getsequence/{emptime}', name: 'Getsequence')]
    public function Getsequence(PlEmptime $emptime)
    {   
        $promotion = $emptime->getProgrammation()->getElement()->getModule()->getSemestre()->getPromotion();
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($promotion->getFormation());
        $inscriptions = $this->em->getRepository(TInscription::class)->getInscriptionsByAnneeAndPromoAndGroupe($promotion,$annee,$emptime->getGroupe());
        $diff = $emptime->getEnd()->diff($emptime->getStart());
        $hours = $diff->h;
        $hours = $hours + ($diff->days*24);
        $emptimenss = $this->em->getRepository(PlEmptimens::class)->findBy(['seance'=>$emptime,'active'=>1]);
        $html = "";
        $i=1;
        foreach ($emptimenss as $emptimens) {
            $html .= $this->render("planification/pdfs/sequence.html.twig", [
                'seance' => $emptime,
                'annee' => $annee,
                'emptimenss' => $emptimenss,
                'emptimens' => $emptimens,
                'hours' => $hours,
                'effectife' => count($inscriptions),
            ])->getContent();
            $i < count($emptimenss) ? $html .= '<page_break>':"";
            $i++;
        }
        $mpdf = new Mpdf([
            // 'mode' => 'utf-8',
            'margin_top' => '8',
            'margin_left' => '5',
            'margin_right' => '5',
        ]);
        $mpdf->SetTitle('Fiche De sequence');
        $mpdf->SetHTMLFooter(
            $this->render("planification/pdfs/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->Output("Fiche De sequence.pdf", "I");
    }

    

    #[Route('/dupliquer_planning/{semestre}/{groupe}', name: 'dupliquer_planning')]
    public function dupliquer_planning(AcSemestre $semestre,$groupe,Request $request): Response
    {   
        if ($request->get('nsemaine') != "" && $semestre) {
            $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($semestre->getPromotion()->getFormation());
            $semaine = $this->em->getRepository(Semaine::class)->findOneBy(['nsemaine'=>$request->get('nsemaine'),'anneeS'=>$annee->getDesignation()]);
            if ($groupe == 0) {
                $emptimes = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestreAndSemaine($semestre,$semaine);
            }else{
                $emptimes = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestreAndGroupeAndSemaine($semestre,$groupe,$semaine);
            }
            if ($emptimes) {
                $nextWeek = $this->em->getRepository(Semaine::class)->findOneBy([
                    'nsemaine'=> $semaine->getNsemaine() == 52 ? 1 : $semaine->getNsemaine() + 1,
                    'anneeS'=>$semaine->getAnneeS()
                ]);
                if (!$nextWeek) {
                    return new Response('La semaine suivante introuvable, merci de verifier la list des semaines!',500);
                }
                $counter = 0;
                foreach($emptimes as $emptime){
                    $dDebut = $emptime->getStart()->modify('+7 days');
                    $dFin = $emptime->getEnd()->modify('+7 days');
                    $EmptimeExist = $this->em->getRepository(PlEmptime::class)->findOneBy([
                        'programmation' => $emptime->getProgrammation(),
                        'semaine' => $nextWeek,
                        'active'  => 1,
                        'start'  => $dDebut,
                        'end'  => $dFin,
                        'groupe' => $emptime->getGroupe()]);
                        // if ($emptime->getId() == 52545) {
                        //     dd($emptime->getId(),$EmptimeExist);
                        // }
                    if (!$EmptimeExist) {
                        $empenss = $this->em->getRepository(PlEmptimens::class)->findBy([
                            'seance'=>$emptime,
                            'active'=>1
                        ]);
                        // dd($enseignants);
                        $newEmpTime = new PlEmptime();
                        $newEmpTime->setProgrammation($emptime->getProgrammation());
                        $newEmpTime->setSemaine($nextWeek);
                        $newEmpTime->setUserCreated($this->getUser());
                        $newEmpTime->setCreated(new DateTime('now'));
                        $newEmpTime->setGroupe($emptime->getGroupe());
                        $newEmpTime->setSalle($emptime->getSalle());
                        $newEmpTime->setXsalle($emptime->getSalle());
                        $newEmpTime->setDescription($emptime->getDescription());
                        $newEmpTime->setDateemploi($emptime->getDateemploi());
                        $newEmpTime->setStart($dDebut);
                        $newEmpTime->setEnd($dFin);
                        $newEmpTime->setHeurDb($emptime->getHeurDb());
                        $newEmpTime->setHeurFin($emptime->getHeurFin());
                        foreach ($empenss as $empens) {
                            $emptimens = new PlEmptimens();
                            $emptimens->setSeance($newEmpTime);
                            $emptimens->setEnseignant($empens->getEnseignant());
                            $emptimens->setGenerer(0);
                            $emptimens->setActive(1);
                            $emptimens->setCreated(new \DateTime('now'));
                            $this->em->persist($emptimens);
                        }
                        $this->em->persist($newEmpTime);
                        $this->em->flush();
                        $nat = $emptime->getProgrammation()->getNatureEpreuve()->getAbreviation();
                        $etab = $semestre->getPromotion()->getFormation()->getEtablissement()->getAbreviation();
                        $newEmpTime->setCode($nat.'-'.$etab.str_pad($newEmpTime->getId(), 7, '0', STR_PAD_LEFT).'/'.date('Y'));
                        $this->em->flush();
                        $counter++;
                    } 
                }
                if ($counter == 0) {
                    return new Response('Toutes les seances sans déja dupliquer!',500);
                }
                return new Response('Dupliquation bien Effectuée 👍',200);
            }else {
                return new Response('Aucune seance trouver pour la duplication!',500);
            }
        }
        return new Response('Generation Echouée',500);
    }
    
}
