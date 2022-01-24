<?php

namespace App\Controller\AdministrationEpreuve;

use App\Controller\ApiController;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administration/epreuve')]

class EpreuveController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
        
    }
    #[Route('/', name: 'administration_epreuve')]
    public function index(): Response
    {
        //check if user has access to this page
        $operations = ApiController::check($this->getUser(), 'administration_epreuve', $this->em);
        if(!$operations) {
            return $this->render("errors/403.html.twig");

        }
        return $this->render('administration_epreuve/epreuve.html.twig', [
            'operations' => $operations,
        ]);
    }
}
