<?php

namespace App\Repository;

use App\Entity\ConcoursEtudiantControle;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ConcoursEtudiantControle>
 *
 * @method ConcoursEtudiantControle|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConcoursEtudiantControle|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConcoursEtudiantControle[]    findAll()
 * @method ConcoursEtudiantControle[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConcoursEtudiantControleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ConcoursEtudiantControle::class);
    }

    public function add(ConcoursEtudiantControle $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ConcoursEtudiantControle $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ConcoursEtudiantControle[] Returns an array of ConcoursEtudiantControle objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ConcoursEtudiantControle
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
