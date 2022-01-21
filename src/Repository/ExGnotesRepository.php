<?php

namespace App\Repository;

use App\Entity\ExGnotes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ExGnotes|null find($id, $lockMode = null, $lockVersion = null)
 * @method ExGnotes|null findOneBy(array $criteria, array $orderBy = null)
 * @method ExGnotes[]    findAll()
 * @method ExGnotes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ExGnotesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ExGnotes::class);
    }

    // /**
    //  * @return ExGnotes[] Returns an array of ExGnotes objects
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
    public function findOneBySomeField($value): ?ExGnotes
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
