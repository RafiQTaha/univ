<?php

namespace App\Repository;

use App\Entity\AcModule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AcModule|null find($id, $lockMode = null, $lockVersion = null)
 * @method AcModule|null findOneBy(array $criteria, array $orderBy = null)
 * @method AcModule[]    findAll()
 * @method AcModule[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AcModuleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AcModule::class);
    }

    // /**
    //  * @return AcModule[] Returns an array of AcModule objects
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
    public function findOneBySomeField($value): ?AcModule
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
