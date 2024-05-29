<?php

namespace App\Repository;

use App\Entity\PSalles;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PSalles|null find($id, $lockMode = null, $lockVersion = null)
 * @method PSalles|null findOneBy(array $criteria, array $orderBy = null)
 * @method PSalles[]    findAll()
 * @method PSalles[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PSallesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PSalles::class);
    }

    // /**
    //  * @return PSalles[] Returns an array of PSalles objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?PSalles
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
    public function findEmptySallesByDateTime($start,$end)
    {
        $salleIn =  $this->createQueryBuilder('salle')
            ->innerJoin('salle.emptimes','seance')
            ->Where('seance.start BETWEEN :start and :end OR seance.end BETWEEN :start and :end ')
            ->setParameter('start', $start)
            ->setParameter('end', $end)
            ->groupBy('salle.id')
            ->orderBy('salle.designation', 'ASC')
            ->getQuery()
            ->getResult();
            
        return $this->createQueryBuilder('salle')
            ->Where('salle not in (:salleIn) ')
            ->setParameter('salleIn', $salleIn)
            ->groupBy('salle.id')
            ->orderBy('salle.designation', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
