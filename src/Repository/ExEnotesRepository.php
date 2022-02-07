<?php

namespace App\Repository;

use App\Entity\ExEnotes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ExEnotes|null find($id, $lockMode = null, $lockVersion = null)
 * @method ExEnotes|null findOneBy(array $criteria, array $orderBy = null)
 * @method ExEnotes[]    findAll()
 * @method ExEnotes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ExEnotesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ExEnotes::class);
    }

    // /**
    //  * @return ExEnotes[] Returns an array of ExEnotes objects
    //  */
    
    

    /*
    public function findOneBySomeField($value): ?ExEnotes
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
