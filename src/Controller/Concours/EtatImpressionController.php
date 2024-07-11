<?php

namespace App\Controller\Concours;

use DateTime;
use Mpdf\Mpdf;
use App\Entity\PEnseignant;
use App\Entity\TInscription;
use App\Entity\AcEtablissement;
use App\Controller\ApiController;
use App\Controller\DatatablesController;
use App\Entity\AcSemestre;
use App\Entity\Semaine;
use Doctrine\Persistence\ManagerRegistry;
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

#[Route('/concours/etat_impression')]
class EtatImpressionController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
        
    }
    #[Route('/', name: 'concours_etat_impression')]
    public function index(Request $request): Response
    {
        $operations = ApiController::check($this->getUser(), 'concours_etat_impression', $this->em,$request);

        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $etbalissements =  $this->em->getRepository(AcEtablissement::class)->findBy(['active'=>1]);
        $professeurs = $this->em->getRepository(PEnseignant::class)->findAll();
        $semaines = $this->em->getRepository(Semaine::class)->findAll();
        return $this->render('concours/etat_impression.html.twig', [
            'etablissements' => $etbalissements,
            'professeurs' => $professeurs,
            'operations' => $operations,
            'semaines' => $semaines
        ]);
        
    }
   
    #[Route('/etat_controle/{semestre}', name: 'concours_etat_controle')]
    public function etat_controle(AcSemestre $semestre)
    {   
        // dd($semestre);
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $i=2;
        $j=1;
        $inscriptions = $this->em->getRepository(TInscription::class)->getEtiquettesSommeControle($semestre);
        $sheet->fromArray(
            array_keys($inscriptions[0]),
            null,
            'A1'
        );
        foreach ($inscriptions as $inscription) {
            $sheet->fromArray(
                $inscription,
                null,
                'A'.$i
            );
            $i++;
            $j++;
        }
        $writer = new Xlsx($spreadsheet);
        $fileName = 'Export 2.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
}
