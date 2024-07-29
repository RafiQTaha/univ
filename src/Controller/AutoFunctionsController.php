<?php

namespace App\Controller;

use DateTime;

use App\Entity\TReglement;
use App\Entity\XModalites;
use App\Entity\TBrdpaiement;
use App\Entity\AcEtablissement;
use App\Entity\AcFormation;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx as reader;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/auto_functions')]
class AutoFunctionsController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'auto_functions', options: ['expose' => true])]
    public function index(): Response
    {
        return $this->render('auto_function.html.twig');
    }
    #[Route('/creationBorderaux', name: 'creationBorderaux')]
    public function creationBorderaux(): Response
    {
        $modalite = $this->em->getRepository(XModalites::class)->findAll();
        $formations = $this->em->getRepository(AcFormation::class)->findAll();
        foreach ($formations as $formation) {
            foreach ($modalite as $paiement) {
                $reglements = $this->em->getRepository(TReglement::class)->getReglementByPaiementAndFormationWithoutBorderaux($paiement, $formation);
                if (!$reglements) {
                    continue;
                }
                $borderaux = new TBrdpaiement();
                $borderaux->setCreated(new DateTime('now'));
                $borderaux->setUserCreated($this->getUser());
                $this->em->persist($borderaux);
                $this->em->flush();
                $total = 0;
                foreach ($reglements as $reglement) {
                    $total = $total + $reglement->getMontant();
                    $reglement->setBordereau($borderaux);
                    $this->em->flush();
                }
                $borderaux->setModalite($paiement);
                $borderaux->setCode($formation->getEtablissement()->getAbreviation() . '-BRD' . str_pad($borderaux->getId(), 6, '0', STR_PAD_LEFT) . '/' . date('Y'));
                $borderaux->setMontant($total);
                $this->em->flush();
            }
        }

        return new JsonResponse(["done", 200]);
    }
}
