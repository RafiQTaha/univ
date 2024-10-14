<?php

namespace App\Repository;

use App\Entity\PriseEnCharge;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PriseEnCharge>
 *
 * @method PriseEnCharge|null find($id, $lockMode = null, $lockVersion = null)
 * @method PriseEnCharge|null findOneBy(array $criteria, array $orderBy = null)
 * @method PriseEnCharge[]    findAll()
 * @method PriseEnCharge[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PriseEnChargeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PriseEnCharge::class);
    }

    public function add(PriseEnCharge $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PriseEnCharge $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return PriseEnCharge[] Returns an array of PriseEnCharge objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?PriseEnCharge
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
