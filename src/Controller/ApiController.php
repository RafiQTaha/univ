<?php

namespace App\Controller;

use App\Entity\PFrais;
use App\Entity\AcAnnee;
use App\Entity\PGroupe;
use App\Entity\XBanque;
use App\Entity\AcModule;
use App\Entity\UsModule;
use App\Entity\AcElement;
use App\Entity\TEtudiant;
use App\Entity\AcSemestre;
use App\Entity\POrganisme;
use App\Entity\TAdmission;
use App\Entity\AcFormation;
use App\Entity\AcPromotion;
use App\Entity\UsOperation;
use App\Entity\TInscription;
use App\Entity\UsSousModule;
use App\Entity\NatureDemande;
use App\Entity\PNatureEpreuve;
use App\Entity\AcEtablissement;
use App\Entity\PrProgrammation;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Request;
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
        $semestre = $this->em->getRepository(AcSemestre::class)->findBy(['promotion'=>$id, 'active' => 1],['designation'=>'ASC']);
        $data = self::dropdown($semestre,'Semestre');
        return new JsonResponse($data);
    }

    #[Route('/module/{id}', name: 'getModule')]
    public function getModule($id): Response
    {   
        $module = $this->em->getRepository(AcModule::class)->findBy(['semestre'=>$id, 'active' => 1],['designation'=>'ASC']);
        $data = self::dropdown($module,'Module');
        return new JsonResponse($data);
    }

    #[Route('/element/{id}', name: 'getElement')]
    public function getElement($id): Response
    {   
        $element = $this->em->getRepository(AcElement::class)->findBy(['module'=>$id, 'active' => 1],['designation'=>'ASC']);
        $data = self::dropdown($element,'Element');
        return new JsonResponse($data);
    }

    #[Route('/enseignantsByProgramme/{element}/{nature_epreuve}', name: 'enseignantsByProgramme')]
    public function enseignantsByProgramme(AcElement $element,PNatureEpreuve $nature_epreuve): Response
    {   
        $programmation = $this->em->getRepository(PrProgrammation::class)->findOneBy([
            'element'=> $element,
            'nature_epreuve' => $nature_epreuve]
        );
        $data = "<option enabled value='' disabled='disabled'>Choix Enseignants</option>";
        if ($programmation != NULL) {
            foreach ($programmation->getEnseignants() as $enseignant) {
                $data .="<option value=".$enseignant->getId().">".$enseignant->getNom()." ".$enseignant->getPrenom()."</option>";
            }
        }
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
        $frais = $this->em->getRepository(PFrais::class)->findBy(["formation" => $formation, 'categorie' => "admission"]);
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
    #[Route('/nature_erpeuve/{nature}', name: 'getNatureEpreuveByNature')]
    public function getNatureEpreuveByNature($nature): Response
    {   
        $natrueEpreuves = $this->em->getRepository(PNatureEpreuve::class)->findBy(["nature" => $nature]);
        $data = self::dropdown($natrueEpreuves,'nature epreuve');
        return new JsonResponse($data);        
    }
    
    #[Route('/niv1/{promotion}', name: 'getNiv1Bypromotion')]
    public function getNiv1Bypromotion(AcPromotion $promotion): Response
    {   
        $annee = $this->em->getRepository(AcAnnee::class)->findOneBy([
            'formation'=>$promotion->getFormation(),
            'validation_academique'=>'non',
            'cloture_academique'=>'non',
        ]);

        $inscriptions = $this->em->getRepository(TInscription::class)->getNiveaux($promotion,$annee);
        $data = "<option selected enabled value=''>Choix Niveau 1</option>";
        foreach ($inscriptions as $inscription) {
            $groupe = $inscription->getGroupe();
            // if ($groupe != Null) {
                if ($groupe->getGroupe() == Null) {
                    $data .="<option value=".$groupe->getId().">".$groupe->getNiveau()."</option>";
                }
            // }
        }
        return new JsonResponse($data);     
    }

    #[Route('/niv2/{niv1}', name: 'getNiv2ByNiv1')]
    public function getNiv2ByNiv1(PGroupe $niv1): Response
    {   
        $niveaux2 = $this->em->getRepository(PGroupe::class)->findBy(['groupe'=>$niv1]);
        $data = "<option selected enabled value=''>Choix Niveau 2</option>";
        foreach ($niveaux2 as $niveau2) {
                $data .="<option value=".$niveau2->getId().">".$niveau2->getNiveau()."</option>";
        }
        return new JsonResponse($data);     
    }

    #[Route('/niv3/{niv2}', name: 'getNiv2ByNiv3')]
    public function getNiv2ByNiv3($niv2): Response
    {   
        $niveaux3 = $this->em->getRepository(PGroupe::class)->findBy(['groupe'=>$niv2]);
        $data = "<option selected enabled value=''>Choix Niveau 2</option>";
        foreach ($niveaux3 as $niveau3) {
                $data .="<option value=".$niveau3->getId().">".$niveau3->getNiveau()."</option>"; 
        }
        return new JsonResponse($data);       
    } 
    #[Route('/salle/{promotion}', name: 'getSalle')]
    public function getSalle(AcPromotion $promotion): Response
    {   
        $annee = $this->em->getRepository(AcAnnee::class)->getActiveAnneeByFormation($promotion->getFormation());
        // dump($annee->getId(), $promotion->getId());
        $salles = $this->em->getRepository(TInscription::class)->getSalle($promotion, $annee);
        // dd($salles);
        $data = "<option selected enabled value=''>Choix Salle</option>";
        foreach ($salles as $salle) {
            $sallearray = explode("-", $salle['salle']);
            $data .="<option value=".$salle['salle'].">".$sallearray[0]." ". $sallearray[1] ."</option>";
         }
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

    static function check($user, $link, $em, $request) {
        if(!$request->getSession()->get("modules")){
            if(in_array('ROLE_ADMIN', $user->getRoles())){
                $sousModules = $em->getRepository(UsSousModule::class)->findAll();
            } else {
                $sousModules = $em->getRepository(UsSousModule::class)->findByUserOperations($user);
            }
            $modules = $em->getRepository(UsModule::class)->getModuleBySousModule($sousModules);
            $data = [];
            // dd($sousModules);
            foreach($modules as $module) {
                $sousModuleArray = [];
                foreach ($sousModules as $sousModule) {
                    if($sousModule->getModule()->getId() == $module->getId()) {
                        // dd($sousModule);
                        array_push($sousModuleArray,$sousModule);
                    }
                }
                array_push($data, [
                    'module' => $module,
                    'sousModule' => $sousModuleArray
                ]);
                
            }
            // dd($data);
            $request->getSession()->set('modules', $data);
            
        }
        if(in_array('ROLE_ADMIN', $user->getRoles())) {
            $operations = $em->getRepository(UsOperation::class)->findAllBySousModule($link);
            return $operations;
        }
        $operations = $em->getRepository(UsOperation::class)->getOperationByLinkSousModule($user, $link);
        return $operations;
    }
    

}
