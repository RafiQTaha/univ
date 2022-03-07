<?php

namespace App\Controller\Planification;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Controller\ApiController;
use App\Entity\AcAnnee;
use App\Entity\AcEpreuve;
use App\Entity\AcEtablissement;
use App\Entity\AcModule;
use App\Entity\AcSemestre;
use App\Entity\AcElement;
use App\Entity\Color;
use App\Entity\PEnseignant;
use App\Entity\PGrade;
use App\Entity\PGroupe;
use App\Entity\PlEmptime;
use App\Entity\PNatureEpreuve;
use App\Entity\PrProgrammation;
use App\Entity\PSalles;
use App\Entity\Semaine;
use DateTime;
use IntlCalendar;
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
    public function index(): Response
    {
        $etbalissements = $this->em->getRepository(AcEtablissement::class)->findAll();
        $operations = ApiController::check($this->getUser(), 'planification_index', $this->em);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        return $this->render('planification/planification.html.twig', [
            'etablissements' => $etbalissements,
            'operations' => $operations,
        ]);
    }

    #[Route('/calendar/{semestre}/{groupe}/', name: 'planifications_calendar')]
    public function planifications_calendar(AcSemestre $semestre, PGroupe $groupe): Response
    {
        $emptimes = $this->em->getRepository(PlEmptime::class)->getEmptimeBySemestreAndGroupe($semestre,$groupe);
        $times = [];
        foreach($emptimes as $emptime){
            $enseingant = "";
            $element = $emptime->getProgrammation()->getElement();
            $natureEpreuve = $emptime->getProgrammation()->getNatureEpreuve();
            $epreuve = $this->em->getRepository(AcEpreuve::class)->findOneBy(['id'=>2]);
            if($emptime->getProgrammation()->getEnseignants() != Null){
                if($emptime->getProgrammation()->getEnseignants()[0] != Null){
                    $enseingant .= $enseingant != "" ? ", " : ""; 
                    $enseingant .= $emptime->getProgrammation()->getEnseignants()[0]->getNom().' '.$emptime->getProgrammation()->getEnseignants()[0]->getPrenom();
                }
            }
            $times[] = [
                'id' => $emptime->getId(),
                'title' => $emptime->getCode() . "\n".
                        ' Element :  '.$element->getDesignation() . "\n".
                        ' Type de Cours :  '.$natureEpreuve->getDesignation() . "\n".
                        $enseingant,
                'start' => $emptime->getStart()->format('Y-m-d H:i:s'),
                'end' => $emptime->getEnd()->format('Y-m-d H:i:s'),
                'color'=> $emptime->getColor() == NUll  ? "" : $emptime->getColor()->getCouleur(),
            ];
        }
        // dd($times);
        return new Response(json_encode($times));
    }

    #[Route('/planification_infos/{id}', name: 'planifications_planification_infos')]
    public function planification_infos(AcSemestre $semestre,Request $request): Response
    {
        $annee = $this->em->getRepository(AcAnnee::class)->findOneBy([
            'formation'=>$semestre->getPromotion()->getFormation(),
            'validation_academique'=>'non',
            'cloture_academique'=>'non',
        ]);
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
    public function planifications_planification_infos_edit(PlEmptime $emptime,Request $request): Response
    {
        $salles = $this->em->getRepository(PSalles::class)->findBy([],['designation'=>'ASC']);
        $programmation = $emptime->getProgrammation();
        $annee = $this->em->getRepository(AcAnnee::class)->findOneBy([
            'formation'=>$programmation->getElement()->getModule()->getSemestre()->getPromotion()->getFormation(),
            'validation_academique'=>'non',
            'cloture_academique'=>'non',
        ]);
        $natureepreuves = $this->em->getRepository(PNatureEpreuve::class)->findBy([],['designation'=>'ASC']);
        $modules = $this->em->getRepository(AcModule::class)->findBy(['semestre'=>$programmation->getElement()->getModule()->getSemestre(), 'active' => 1],['designation'=>'ASC']);
        $elements = $this->em->getRepository(AcElement::class)->findBy(['module'=>$programmation->getElement()->getModule(), 'active' => 1],['designation'=>'ASC']);
        $html = $this->render("planification/pages/update_form.html.twig", [
            'emptime' => $emptime,
            'annee' => $annee,
            'natureepreuves' => $natureepreuves,
            'salles' => $salles,
            'modules' => $modules,
            'elements' => $elements,
        ])->getContent();
        return new JsonResponse($html);
    }

    #[Route('/planifications_calendar_add', name: 'planifications_calendar_add')]
    public function planifications_calendar_add(Request $request): Response
    {
        // dd($request->get('enseignant')[0]);
        if ($request->get('nature_seance') == "" || $request->get('element') =="" || $request->get('salle') =="") {
            return new Response('Merci de renseignez tout les champs',500);
        }
        $programmation = $this->em->getRepository(PrProgrammation::class)->findOneBy(['element'=>$request->get('element'),'nature_epreuve'=>$request->get('nature_seance')]);
        if($programmation != Null){
            $element = $this->em->getRepository(AcElement::class)->find($request->get('element'));
            $annee = $this->em->getRepository(AcAnnee::class)->findOneBy([
                'formation'=>$element->getModule()->getSemestre()->getPromotion()->getFormation(),
                'validation_academique'=>'non',
                'cloture_academique'=>'non',
                ])->getDesignation();
            $semaine = $this->em->getRepository(Semaine::class)->findOneBy(['nsemaine'=>$request->get('n_semaine'),'anneeS'=>$annee]);
            $emptime = new PlEmptime();
            $emptime->setDescription($request->get('description'));
            $emptime->setProgrammation($programmation);
            $emptime->setSalle($this->em->getRepository(PSalles::class)->find($request->get('salle')));
            $emptime->setSemaine($semaine);
            $emptime->setGroupe($this->em->getRepository(PGroupe::class)->find($request->get('groupe')));
            $emptime->setStart(new \DateTime($request->get('day') .' '. $request->get('h_debut').':00'));
            $emptime->setEnd(new \DateTime($request->get('day') .' '. $request->get('h_fin').':00'));
            $emptime->setHeurDb(new \DateTime($request->get('h_debut')));
            $emptime->setHeurFin(new \DateTime($request->get('h_fin')));
            $emptime->setValider(0);
            $emptime->setAnnuler(0);
            $emptime->setGenerer(0);
            $emptime->setUserCreated($this->getUser());
            $emptime->setCreated(new \DateTime('now'));
            $this->em->persist($emptime);
            $this->em->flush();
            $epreuve = $this->em->getRepository(PNatureEpreuve::class)->find($request->get('nature_seance'))->getAbreviation();
            $etab = $element->getModule()->getSemestre()->getPromotion()->getFormation()->getEtablissement()->getAbreviation();
            $emptime->setCode($epreuve.'-'.$etab.str_pad($emptime->getId(), 7, '0', STR_PAD_LEFT).'/'.date('Y'));
            $this->em->flush();
            return new Response('Planification bien Ajouter!!',200);
        }
        return new Response('Programme Introuvable!!',500);        
    }



    #[Route('/planifications_calendar_edit/{id}', name: 'planifications_calendar_edit')]
    public function planifications_calendar_edit(PlEmptime $emptime,Request $request): Response
    {
        // dd($request);
        if ($request->get('nature_seance') == "" || $request->get('element') =="" || $request->get('salle') =="") {
            return new Response('Merci de renseignez tout les champs',500);
        }
        if($emptime->getValider() == 0){
            return new Response('Seance déja validée!!',500);
        }
        $programmation = $this->em->getRepository(PrProgrammation::class)->findOneBy(['element'=>$request->get('element'),'nature_epreuve'=>$request->get('nature_seance')]);  
        if ($programmation != Null) {
            $element = $this->em->getRepository(AcElement::class)->find($request->get('element'));   
            $annee = $this->em->getRepository(AcAnnee::class)->findOneBy([
                'formation'=>$element->getModule()->getSemestre()->getPromotion()->getFormation(),
                'validation_academique'=>'non',
                'cloture_academique'=>'non',
            ])->getDesignation();
            $semaine = $this->em->getRepository(Semaine::class)->findOneBy(['nsemaine'=>$request->get('n_semaine'),'anneeS'=>$annee]);
            $emptime->setProgrammation($programmation);
            $emptime->setDescription($request->get('description'));
            $emptime->setSalle($this->em->getRepository(PSalles::class)->find($request->get('salle')));
            $emptime->setSemaine($semaine);
            $emptime->setUserUpdated($this->getUser());
            $emptime->setUpdated(new \DateTime('now'));
            $this->em->flush();
            $epreuve = $this->em->getRepository(PNatureEpreuve::class)->find($request->get('nature_seance'))->getAbreviation();
            $etab = $element->getModule()->getSemestre()->getPromotion()->getFormation()->getEtablissement()->getAbreviation();
            $emptime->setCode($epreuve.'-'.$etab.str_pad($emptime->getId(), 7, '0', STR_PAD_LEFT).'/'.date('Y'));
            $this->em->flush();
            return new Response('Planification bien Ajouter!!',200);
        }
        return new Response('Programme Introuvable',500);
        
    }

    #[Route('/planifications_editEventDate/{id}', name: 'planifications_editEventDate')]
    public function planifications_editEventDate(PlEmptime $emptime,Request $request): Response
    {   
        if ($request->get('start') != "" && $request->get('start') != "") {
            $start = new \DateTime($request->get('start'));
            $end = new \DateTime($request->get('end'));
            $h_debut = new \DateTime($start->format('H:i'));
            $emptime->setStart($start);
            $emptime->setEnd($end);
            $emptime->setHeurDb($start);
            $emptime->setHeurFin($end);
            $this->em->flush();
            return new Response('ok',200);
        }
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
    #[Route('/import', name: 'administration_note_import')]
    public function epreuveEnMasse(Request $request, SluggerInterface $slugger) 
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
    #[Route('/delete_planning/{id}', name: 'delete_planning')]
    public function delete_planning(PlEmptime $emptime): Response
    {   
        if ($emptime) {
            $this->em->remove($emptime);
            $this->em->flush();
            return new Response('Planification bien supprimée',200);
        }
        return new Response('Suppression Echouée',500);
    }
}
