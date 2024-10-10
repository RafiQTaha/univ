<?php

namespace App\Repository;

use App\Entity\EtudiantSousNatureDemande;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<EtudiantSousNatureDemande>
 *
 * @method EtudiantSousNatureDemande|null find($id, $lockMode = null, $lockVersion = null)
 * @method EtudiantSousNatureDemande|null findOneBy(array $criteria, array $orderBy = null)
 * @method EtudiantSousNatureDemande[]    findAll()
 * @method EtudiantSousNatureDemande[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EtudiantSousNatureDemandeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EtudiantSousNatureDemande::class);
    }

    public function add(EtudiantSousNatureDemande $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(EtudiantSousNatureDemande $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return EtudiantSousNatureDemande[] Returns an array of EtudiantSousNatureDemande objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('e.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?EtudiantSousNatureDemande
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
