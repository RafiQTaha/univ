<?php

namespace App\Repository;

use App\Entity\TRegelement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TRegelement|null find($id, $lockMode = null, $lockVersion = null)
 * @method TRegelement|null findOneBy(array $criteria, array $orderBy = null)
 * @method TRegelement[]    findAll()
 * @method TRegelement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TRegelementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TRegelement::class);
    }

    // /**
    //  * @return TRegelement[] Returns an array of TRegelement objects
    //  */
    
    public function getSumMontantByCodeFacture($operation)
    {
        $request = $this->createQueryBuilder('t')
            ->select("SUM(t.montant) as total")
            ->Where('t.impayer = 0')
            ->andWhere('t.operation = :operation')
            ->setParameter('operation', $operation)
            ->groupBy('t.operation')
            ->getQuery()
            ->getOneOrNullResult()
        ;
        if(!$request) {
            return ['total' => 0];
        } 
        return $request;
    }
    

    /*
    public function findOneBySomeField($value): ?TRegelement
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
