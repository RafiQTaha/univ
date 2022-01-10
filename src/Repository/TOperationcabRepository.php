<?php

namespace App\Repository;

use App\Entity\TOperationcab;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TOperationcab|null find($id, $lockMode = null, $lockVersion = null)
 * @method TOperationcab|null findOneBy(array $criteria, array $orderBy = null)
 * @method TOperationcab[]    findAll()
 * @method TOperationcab[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TOperationcabRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TOperationcab::class);
    }

    // /**
    //  * @return TOperationcab[] Returns an array of TOperationcab objects
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
    
    public function findetatbyoperation($value)
    {
        return $this->createQueryBuilder('t')
            ->innerJoin()
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
*/
    
}
