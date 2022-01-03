<?php

namespace App\Repository;

use App\Entity\AcElement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AcElement|null find($id, $lockMode = null, $lockVersion = null)
 * @method AcElement|null findOneBy(array $criteria, array $orderBy = null)
 * @method AcElement[]    findAll()
 * @method AcElement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AcElementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AcElement::class);
    }

    // /**
    //  * @return AcElement[] Returns an array of AcElement objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?AcElement
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
