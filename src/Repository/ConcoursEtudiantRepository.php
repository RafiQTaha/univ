<?php

namespace App\Repository;

use App\Entity\ConcoursEtudiant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ConcoursEtudiant>
 *
 * @method ConcoursEtudiant|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConcoursEtudiant|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConcoursEtudiant[]    findAll()
 * @method ConcoursEtudiant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConcoursEtudiantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ConcoursEtudiant::class);
    }

    public function add(ConcoursEtudiant $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ConcoursEtudiant $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ConcoursEtudiant[] Returns an array of ConcoursEtudiant objects
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

//    public function findOneBySomeField($value): ?ConcoursEtudiant
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
