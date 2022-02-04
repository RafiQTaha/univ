<?php

namespace App\Controller\Facture;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\AcEtablissement;
use App\Entity\PEnseignant;
use App\Entity\XModalites;
use App\Entity\TBrdpaiement;
use App\Controller\ApiController;

#[Route('/facture/reglements')]
class GestionReglementsController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
        
    }
    #[Route('/', name: 'gestion_reglements')]
    public function index(): Response
    {
        $etbalissements = $this->em->getRepository(AcEtablissement::class)->findAll();
        $professeurs = $this->em->getRepository(PEnseignant::class)->findAll();
        $paiements = $this->em->getRepository(XModalites::class)->findAll();
        $bordereaux = $this->em->getRepository(TBrdpaiement::class)->findAll();
        $operations = ApiController::check($this->getUser(), 'gestion_reglements', $this->em);
        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        return $this->render('facture/gestion_reglement.html.twig', [
            'etablissements' => $etbalissements,
            'professeurs' => $professeurs,
            'paiements' => $paiements,
            'bordereaux' => $bordereaux,
            'operations' => $operations
        ]);
    }
}
