<?php

namespace App\Controller\Parametre;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ElementController extends AbstractController
{
    #[Route('/parametre/element', name: 'parametre_element')]
    public function index(): Response
    {
        return $this->render('parametre/element/index.html.twig', [
            'controller_name' => 'ElementController',
        ]);
    }
}
