<?php

namespace App\Controller\Evaluation;

use App\Controller\ApiController;
use App\Entity\AcEtablissement;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/evaluation/pv')]
class PvController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
    }
    #[Route('/', name: 'evaluation_pv_deliberation')]
    public function index(Request $request): Response
    {
        //check if user has access to this page
       $operations = ApiController::check($this->getUser(), 'evaluation_pv_deliberation', $this->em, $request);
       if(!$operations) {
           return $this->render("errors/403.html.twig");
       }
       
       return $this->render('evaluation/pv/index.html.twig', [
        'etablissements' =>  $this->em->getRepository(AcEtablissement::class)->findBy(['active'=>1]),
        'operations' => $operations
       ]);
    }
}
