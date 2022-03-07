<?php

namespace App\Repository;

use App\Entity\TInscription;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TInscription|null find($id, $lockMode = null, $lockVersion = null)
 * @method TInscription|null findOneBy(array $criteria, array $orderBy = null)
 * @method TInscription[]    findAll()
 * @method TInscription[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TInscriptionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TInscription::class);
    }

    // /**
    //  * @return TInscription[] Returns an array of TInscription objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TInscription
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
    public function getActiveInscriptionByAnnee($admission, $annee)
    {
        return $this->createQueryBuilder('t')
            ->innerJoin("t.annee", "annee")
            ->innerJoin("t.statut", "statut")
            ->where('t.admission = :admission')
            ->andWhere("annee.designation = :annee")
            ->andWhere("statut.id = 13")
            ->setParameter('admission', $admission)
            ->setParameter('annee', $annee)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    public function getInscriptionsByEpreuve($epreuve)
    {
        return $this->createQueryBuilder('t')
            ->innerJoin("t.promotion", "promotion")
            ->innerJoin("t.annee", "annee")
            ->innerJoin("t.statut", "statut")
            ->where('promotion = :promotion')
            ->andWhere("annee = :annee")
            ->andWhere("statut.id = 13")
            ->setParameter('promotion', $epreuve->getElement()->getModule()->getSemestre()->getPromotion())
            ->setParameter('annee', $epreuve->getAnnee())
            ->getQuery()
            ->getResult()
        ;
    }
    public function getInscriptionsByAnneeAndPromo($annee, $promotion, $order)
    {
        if($order == 2) {
            $order = 'DESC';
        } else {
            $order = 'ASC';
        }
        $request =  $this->createQueryBuilder('t')
            ->innerJoin("t.statut", "statut")
            ->innerJoin("t.admission", "admission")
            ->innerJoin("admission.preinscription", "preinscription")
            ->innerJoin("preinscription.etudiant", "etudiant")
            ->where('t.promotion = :promotion')
            ->andWhere("t.annee = :annee")
            ->andWhere("statut.id = 13")
            ->setParameter('promotion', $promotion)
            ->setParameter('annee', $annee)
            ->orderBy('etudiant.nom', $order)
            ->getQuery()
            ->getResult()
        ;
        return $request;
    }
    public function getInscriptionsByAnneeAndPromoAndElement($annee, $promotion,$element, $order)
    {
        if($order == 2) {
            $order = 'DESC';
        } else {
            $order = 'ASC';
        }
        $request =  $this->createQueryBuilder('t')
            ->innerJoin("t.statut", "statut")
            ->innerJoin("t.admission", "admission")
            ->innerJoin("admission.preinscription", "preinscription")
            ->innerJoin("preinscription.etudiant", "etudiant")
            ->innerJoin("t.enotes", "enotes")
            ->innerJoin("enotes.element", "element")
            ->where('t.promotion = :promotion')
            ->andWhere('element = :element')
            ->andWhere("t.annee = :annee")
            ->andWhere("statut.id = 13")
            ->setParameter('promotion', $promotion)
            ->setParameter('element', $element->getId())
            ->setParameter('annee', $annee)
            ->orderBy('etudiant.nom', $order)
            ->getQuery()
            ->getResult()
        ;
        return $request;
    }
    
    public function getInscriptionsByPreinsAndAnnee($preinscription)
    {
        return $this->createQueryBuilder('t')
            ->innerJoin("t.admission", "admission")
            ->innerJoin("admission.preinscription", "preinscription")
            ->innerJoin("preinscription.annee", "annee")
            ->where('preinscription = :preinscription')
            ->andWhere("annee = :annee")
            ->andWhere("t.code IS NOT NULL")
            ->setParameter('preinscription', $preinscription)
            ->setParameter('annee', $preinscription->getAnnee())
            ->getQuery()
            ->getResult()[0]
        ;
    }
    
    public function getCreance()
    {
        $org = ['PYT',null];
        return $this->createQueryBuilder('inscription')
            ->select("annee.designation as anndes, preinscription.code as code_pre , etudiant.nom as nom, etudiant.prenom as prenom,etablissement.abreviation as etab ,formation.designation as forma ,promotion.ordre as niveau,inscription.typeCand as type , organisme.abreviation as org,  SUM(operationdet.montant) as montant_det , sum(distinct reglement.montant) as montant_reg , ( SUM(operationdet.montant)  - sum(distinct reglement.montant)) as creance
            ")
            ->Join("inscription.admission", "admission")
            ->Join("inscription.promotion", "promotion")
            ->Join("admission.preinscription", "preinscription")
            ->Join("preinscription.annee", "annee")
            ->Join("annee.formation", "formation")
            ->Join("formation.etablissement", "etablissement")
            ->Join("preinscription.operationcabs", "operationcab")
            ->Join("operationcab.operationdets", "operationdet")
            ->Join("operationcab.reglements", "reglement")
            ->leftJoin("operationcab.organisme", "organisme")
            ->Join("preinscription.etudiant", "etudiant")
            ->Join("etudiant.natureDemande", "naturedemande")
            ->Where("annee.cloture_academique='non'")
            ->andWhere('organisme.abreviation IN (:ids)')
            ->setParameter('ids', $org)
            ->groupBy('preinscription.code , annee.id')
            ->orderBy('etablissement.abreviation', 'ASC')
            ->getQuery()
            ->getResult()
        ;
        // dd($return);
    }

    public function getNiveaux($promotion,$annee)
    {
        return $this->createQueryBuilder('inscription')
            ->Where("inscription.promotion = :promotion")
            ->AndWhere("inscription.annee = :annee")
            ->AndWhere("inscription.groupe is not null")
            ->setParameter('promotion', $promotion)
            ->setParameter('annee', $annee)
            ->groupBy('inscription.groupe')
            ->orderBy('inscription.groupe', 'ASC')
            ->getQuery()
            ->getResult()
        ;
    }
    
}
