<?php

namespace App\Repository;

use App\Entity\ConcoursEtudiantLog;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ConcoursEtudiantLog>
 *
 * @method ConcoursEtudiantLog|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConcoursEtudiantLog|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConcoursEtudiantLog[]    findAll()
 * @method ConcoursEtudiantLog[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConcoursEtudiantLogRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ConcoursEtudiantLog::class);
    }

    public function add(ConcoursEtudiantLog $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ConcoursEtudiantLog $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ConcoursEtudiantLog[] Returns an array of ConcoursEtudiantLog objects
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

//    public function findOneBySomeField($value): ?ConcoursEtudiantLog
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
