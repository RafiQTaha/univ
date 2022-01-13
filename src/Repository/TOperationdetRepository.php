<?php

namespace App\Repository;

use App\Entity\TOperationdet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TOperationdet|null find($id, $lockMode = null, $lockVersion = null)
 * @method TOperationdet|null findOneBy(array $criteria, array $orderBy = null)
 * @method TOperationdet[]    findAll()
 * @method TOperationdet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TOperationdetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TOperationdet::class);
    }

    // /**
    //  * @return TOperationdet[] Returns an array of TOperationdet objects
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
    public function findOneBySomeField($value): ?TOperationdet
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
