<?php

namespace App\Repository;

use App\Entity\ConcoursEvaluation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ConcoursEvaluation>
 *
 * @method ConcoursEvaluation|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConcoursEvaluation|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConcoursEvaluation[]    findAll()
 * @method ConcoursEvaluation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConcoursEvaluationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ConcoursEvaluation::class);
    }

    public function add(ConcoursEvaluation $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ConcoursEvaluation $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ConcoursEvaluation[] Returns an array of ConcoursEvaluation objects
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

//    public function findOneBySomeField($value): ?ConcoursEvaluation
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
// findListEtudiantDentaire
// findListEtudiantPharmacie
    public function findListEtudiantDTR($current_year, $type)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.listFMA != 1')
            ->andWhere('c.annee = :current_year')
            ->andWhere('c.TypeCondidat = :type')
            ->andWhere('c.FMDA = 1')
            // ->setParameter('type_list', $type_list)
            ->setParameter('current_year', $current_year)
            ->setParameter('type', $type)
            ->orderBy('c.MoyenConcour', 'DESC')
            ->getQuery()
            ->getResult()
        ;
    }
    public function findListEtudiantPH($current_year, $type)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.listFMDA != 1')
            ->andWhere('c.listFPA != 1')
            ->andWhere('c.annee = :current_year')
            ->andWhere('c.TypeCondidat = :type')
            ->andWhere('c.FPA = 1')
            // ->setParameter('type_list', $type_list)
            ->setParameter('current_year', $current_year)
            ->setParameter('type', $type)
            ->orderBy('c.MoyenConcour', 'DESC')
            ->getQuery()
            ->getResult()
        ;
    }
    public function findListEtudiantDentaire($current_year, $type,$type_list)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.rangFMDA is not null')
            ->andWhere('c.listFMDA = :type_list')
            ->andWhere('c.annee = :current_year')
            ->andWhere('c.TypeCondidat = :type')
            ->andWhere('c.FMDA = 1')
            ->setParameter('type_list', $type_list)
            ->setParameter('current_year', $current_year)
            ->setParameter('type', $type)
            ->orderBy('c.rangFMDA', 'ASC')
        //    ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    public function findListEtudiantPharmacie($current_year, $type,$type_list)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.rangFMDA is not null')
            ->andWhere('c.listFPA = :type_list')
            ->andWhere('c.annee = :current_year')
            ->andWhere('c.TypeCondidat = :type')
            ->andWhere('c.FPA = 1')
            ->setParameter('type_list', $type_list)
            ->setParameter('current_year', $current_year)
            ->setParameter('type', $type)
            ->orderBy('c.rangFMDA', 'ASC')
        //    ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
}
