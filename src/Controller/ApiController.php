<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\AcEtablissement;
use App\Entity\AcFormation;
use App\Entity\AcAnnee;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

#[Route('api')]
class ApiController extends AbstractController
{
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
        // $em = $this->getDoctrine()->getManager();
    }
    #[Route('/etbalissement', name: 'getetbalissement')]
    public function getetbalissement(): Response
    {
        $etbalissements = $this->em->getRepository(AcEtablissement::class)->findAll();
        $data = $this->dropdown($etbalissements,'Etablissement');
        return new JsonResponse($data);
        
    }
    #[Route('/formation/{id}', name: 'getformation')]
    public function getformation($id): Response
    {
        $formations = $this->em->getRepository(AcFormation::class)->findBy(['etablissement'=>$id]);
        $data = $this->dropdown($formations,'Formation');
        return new JsonResponse($data);
    }

    
    #[Route('/annee/{id}', name: 'getannee')]
    public function getannee($id): Response
    {   
        $formations = $this->em->getRepository(AcFormation::class)->find($id);
        // dd($formations->getDesignation());
        if(strpos($formations->getDesignation(), 'Résidanat') === false){
            return new JsonResponse(1);
        }else{
            $annee = $this->em->getRepository(AcAnnee::class)->findBy(['formation'=>$id],['id'=>'DESC'],2);
            $data = $this->dropdown($annee,'Annee');
            return new JsonResponse($data);
        }
        
    }

    public function dropdown($objects,$choix)
    {
        $data = "<option selected enabled>Choix ".$choix."</option>";
        foreach ($objects as $object) {
            $data .="<option value=".$object->getId().">".$object->getDesignation()."</option>";
         }
         return $data;
    }

}
