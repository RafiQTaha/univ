<?php

namespace App\Repository;

use App\Entity\TPreinscription;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TPreinscription|null find($id, $lockMode = null, $lockVersion = null)
 * @method TPreinscription|null findOneBy(array $criteria, array $orderBy = null)
 * @method TPreinscription[]    findAll()
 * @method TPreinscription[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TPreinscriptionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TPreinscription::class);
    }

    // /**
    //  * @return TPreinscription[] Returns an array of TPreinscription objects
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
    public function findOneBySomeField($value): ?TPreinscription
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
    public function getPreinsByCurrentYear($annee)
    {
        return $this->createQueryBuilder('preins')
            ->innerJoin("preins.annee", "annee")
            ->Where('annee.designation = :annee')
            // ->andWhere('preins.active = 1')
            ->andWhere('preins.inscriptionValide = 1')
            ->setParameter('annee', $annee)
            ->getQuery()
            ->getResult()
        ;
    }

   

    public function findPreinscription($value)
    {
        return $this->createQueryBuilder('preinscription')
            ->select('preinscription.id, preinscription.code, etudiant.nom, etudiant.prenom')
            ->innerJoin("preinscription.etudiant","etudiant")
            ->innerJoin("preinscription.priseEnCharges","pec")
            ->innerJoin("pec.sousNatureDemande","snd")
            ->innerJoin("snd.natureDemande","nat")
            ->where('preinscription.code like :val')
            ->orWhere("etudiant.nom like :val")
            ->orWhere("etudiant.prenom like :val")
            ->andWhere('nat.id = :idNat')
            ->setParameter('val', "%".$value."%")
            ->setParameter('idNat', 7)
            ->orderBy('preinscription.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
}
