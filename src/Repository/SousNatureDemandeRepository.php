<?php

namespace App\Repository;

use App\Entity\SousNatureDemande;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<SousNatureDemande>
 *
 * @method SousNatureDemande|null find($id, $lockMode = null, $lockVersion = null)
 * @method SousNatureDemande|null findOneBy(array $criteria, array $orderBy = null)
 * @method SousNatureDemande[]    findAll()
 * @method SousNatureDemande[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SousNatureDemandeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SousNatureDemande::class);
    }

    public function add(SousNatureDemande $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(SousNatureDemande $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return SousNatureDemande[] Returns an array of SousNatureDemande objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('s.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?SousNatureDemande
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
