<?php

namespace App\Repository;

use App\Entity\TReglement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TReglement|null find($id, $lockMode = null, $lockVersion = null)
 * @method TReglement|null findOneBy(array $criteria, array $orderBy = null)
 * @method TReglement[]    findAll()
 * @method TReglement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TReglementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TReglement::class);
    }

    // /**
    //  * @return TReglement[] Returns an array of TReglement objects
    //  */
    
    public function getSumMontantByCodeFacture($operation)
    {
        $request = $this->createQueryBuilder('t')
            ->select("SUM(t.montant) as total")
            // ->Where('t.impayer = 0')
            ->andWhere('t.operation = :operation')
            ->setParameter('operation', $operation)
            ->groupBy('t.operation')
            ->getQuery()
            ->getOneOrNullResult()
        ;
        // dd($request);
        if(!$request) {
            return ['total' => 0];
        } 
        return $request;
    }
    

    /*
    public function findOneBySomeField($value): ?TReglement
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
