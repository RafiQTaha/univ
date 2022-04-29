<?php

namespace App\Controller\Parametre;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ModuleController extends AbstractController
{
    #[Route('/parametre/module', name: 'parametre_module')]
    public function index(): Response
    {
        return $this->render('parametre/module/index.html.twig', [
            'controller_name' => 'ModuleController',
        ]);
    }
}
