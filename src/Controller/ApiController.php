<?php

namespace App\Controller;

use App\Entity\PFrais;
use App\Entity\AcAnnee;
use App\Entity\POrganisme;
use App\Entity\TAdmission;
use App\Entity\AcFormation;
use App\Entity\AcEtablissement;
use App\Entity\AcPromotion;
use App\Entity\AcSemestre;
use App\Entity\XBanque;
use App\Entity\NatureDemande;
use App\Entity\UsOperation;
use App\Entity\UsSousModule;
use App\Entity\AcModule;
use App\Entity\AcElement;
use App\Entity\TEtudiant;
use App\Entity\PNatureEpreuve;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/api')]
class ApiController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
        // $em = $this->getDoctrine()->getManager();
    }
    #[Route('/etablissement', name: 'getetablissement')]
    public function getetbalissement(): Response
    {
        $etbalissements = $this->em->getRepository(AcEtablissement::class)->findAll();
        $data = self::dropdown($etbalissements,'Etablissement');
        return new JsonResponse($data);
    }
    #[Route('/formation/{id}', name: 'getformation')]
    public function getformation($id): Response
    {
        $formations = $this->em->getRepository(AcFormation::class)->findBy(['etablissement'=>$id]);
        $data = self::dropdown($formations,'Formation');
        return new JsonResponse($data);
    }

    
    #[Route('/promotion/{formation}', name: 'getPromotion')]
    public function getPromotion(AcFormation $formation): Response
    {   
        $promotions = $this->em->getRepository(AcPromotion::class)->findBy(['formation'=>$formation, 'active' => 1],['id'=>'ASC']);
        $data = self::dropdown($promotions,'promotion');
        return new JsonResponse($data);
    }
    #[Route('/annee/{id}', name: 'getAnnee')]
    public function getAnnee($id): Response
    {   
        $annee = $this->em->getRepository(AcAnnee::class)->findBy(['formation'=>$id, 'active' => 1],['id'=>'DESC']);
        $data = self::dropdown($annee,'Annee');
        return new JsonResponse($data);
    }
    
    #[Route('/semestre/{id}', name: 'getSemestre')]
    public function getSemestre($id): Response
    {   
        $semestre = $this->em->getRepository(AcSemestre::class)->findBy(['promotion'=>$id, 'active' => 1]);
        $data = self::dropdown($semestre,'Semestre');
        return new JsonResponse($data);
    }

    #[Route('/module/{id}', name: 'getModule')]
    public function getModule($id): Response
    {   
        $module = $this->em->getRepository(AcModule::class)->findBy(['semestre'=>$id, 'active' => 1]);
        $data = self::dropdown($module,'Module');
        return new JsonResponse($data);
    }

    #[Route('/element/{id}', name: 'getElement')]
    public function getElement($id): Response
    {   
        $element = $this->em->getRepository(AcElement::class)->findBy(['module'=>$id, 'active' => 1]);
        $data = self::dropdown($element,'Element');
        return new JsonResponse($data);
    }

    
    #[Route('/nature_demande', name: 'nature_demande')]
    public function getnature_demande(): Response
    {
        $nature = $this->em->getRepository(NatureDemande::class)->findAll();
        $data = self::dropdown($nature,'Nature De Demande');
        return new JsonResponse($data);
    }


    #[Route('/anneeresidanat/{id}', name: 'anneeResidanat')]
    public function anneeResidanat(AcFormation $formation): Response
    {   
        if(strpos($formation->getDesignation(), 'Résidanat') === false){
            return new JsonResponse(1);
        }else{
            $annee = $this->em->getRepository(AcAnnee::class)->findBy(['formation'=>$formation],['id'=>'DESC'],2);
            $data = self::dropdown($annee,'Annee');
            return new JsonResponse($data);
        }
        
    }
    #[Route('/organisme', name: 'getorganisme')]
    public function getOrganisme(): Response
    {   
        $organisme = $this->em->getRepository(POrganisme::class)->findAll();
        $data = self::dropdown($organisme,'organisme');
        return new JsonResponse($data);        
    }
    
    #[Route('/nature_etudiant/{admission}', name: 'getnatureetudiant')]
    public function getNatureEtudiant(TAdmission $admission): Response
    {   
        $nature = $admission->getPreinscription()->getEtudiant()->getNatureDemande()->getDesignation();
        // dd($nature);
        if ($nature !== 'Payant') {
            $organisme = $this->em->getRepository(POrganisme::class)->findAll();
        }else {
            $organisme = [];
        }
        $data = self::dropdown($organisme,'organisme');
        return new JsonResponse($data);        
    }
    #[Route('/frais/{admission}', name: 'getFraisByFormation')]
    public function getFraisByFormation(TAdmission $admission): Response
    {   
        $formation = $admission->getPreinscription()->getAnnee()->getFormation();
        $frais = $this->em->getRepository(PFrais::class)->findBy(["formation" => $formation]);
        $data = self::dropdownData($frais,'frais');
        return new JsonResponse($data);        
    }
  
    #[Route('/banque', name: 'getbanque')]
    public function getbanque(): Response
    {
        $banques = $this->em->getRepository(XBanque::class)->findAll();
        $data = self::dropdown($banques,'Banque');
        return new JsonResponse($data);
    }
  
    #[Route('/paiement', name: 'getpaiement')]
    public function getpaiement(): Response
    {
        $paiements = $this->em->getRepository(XModalites::class)->findAll();
        $data = self::dropdown($paiements,'Type De Paiement');
        return new JsonResponse($data);
    }
    #[Route('/nature_erpeuve/{nature}', name: 'getFraisByFormation')]
    public function getNatureEpreuveByNature($nature): Response
    {   
        $natrueEpreuves = $this->em->getRepository(PNatureEpreuve::class)->findBy(["nature" => $nature]);
        $data = self::dropdown($natrueEpreuves,'nature epreuve');
        return new JsonResponse($data);        
    }

    static function dropdown($objects,$choix)
    {
        $data = "<option selected enabled value=''>Choix ".$choix."</option>";
        foreach ($objects as $object) {
            $data .="<option value=".$object->getId().">".$object->getDesignation()."</option>";
         }
         return $data;
    }
    static function dropdownData($objects,$choix)
    {
        $data = "<option selected enabled value=''>Choix ".$choix."</option>";
        foreach ($objects as $object) {
            $data .="<option value=".$object->getId()." data-frais=".$object->getMontant().">".$object->getDesignation()."</option>";
         }
         return $data;
    }
    static function dropDownSelected($objects,$choix, $value)
    {
        $data = "<option selected enabled value=''>Choix ".$choix."</option>";
        foreach ($objects as $object) {
            if($object->getId() === $value->getId()) {
                $data .="<option value=".$object->getId()." selected>".$object->getDesignation()."</option>";
            } else {
                $data .="<option value=".$object->getId()." >".$object->getDesignation()."</option>";
            }
         }
         return $data;
    }

    static function check($user, $link, $em) {
        if(in_array('ROLE_ADMIN', $user->getRoles())) {
            $operations = $em->getRepository(UsOperation::class)->findAllBySousModule($link);
            return $operations;
        }
        $operations = $em->getRepository(UsOperation::class)->getOperationByLinkSousModule($user, $link);
        return $operations;
    }
    

}
