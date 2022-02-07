<?php

namespace App\Repository;

use App\Entity\ExAnotes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ExAnotes|null find($id, $lockMode = null, $lockVersion = null)
 * @method ExAnotes|null findOneBy(array $criteria, array $orderBy = null)
 * @method ExAnotes[]    findAll()
 * @method ExAnotes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ExAnotesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ExAnotes::class);
    }

    // /**
    //  * @return ExAnotes[] Returns an array of ExAnotes objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ExAnotes
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
