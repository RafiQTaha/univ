<?php

namespace App\Controller\AdministrationEpreuve;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administration/note')]
class NoteEpreuveController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
        
    }
    #[Route('/', name: 'administration_note')]
    public function index(): Response
    {
        return $this->render('administration_epreuve/note_epreuve.html.twig', [
            'controller_name' => 'EpreuveController',
        ]);
    }
}
