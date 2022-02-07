<?php

namespace App\Repository;

use App\Entity\ExSnotes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ExSnotes|null find($id, $lockMode = null, $lockVersion = null)
 * @method ExSnotes|null findOneBy(array $criteria, array $orderBy = null)
 * @method ExSnotes[]    findAll()
 * @method ExSnotes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ExSnotesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ExSnotes::class);
    }

    // /**
    //  * @return ExSnotes[] Returns an array of ExSnotes objects
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
    public function findOneBySomeField($value): ?ExSnotes
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
    public function getStatutByColumn($inscription, $semestre, $statut)
    {
        // dd('e.'.$statut);
        if($statut == "statutDef") {
            $request = $this->createQueryBuilder('e')
                ->select("statut.abreviation")
                ->innerJoin("e.statutDef", "statut")
                ->where('e.semestre = :semestre')
                ->andWhere('e.inscription = :inscription')
                ->setParameter('semestre', $semestre)
                ->setParameter('inscription', $inscription)
                ->getQuery()
                ->getOneOrNullResult()
            ;
        } else {
            $request = $this->createQueryBuilder('e')
                ->select("statut.abreviation")
                ->innerJoin("e.statutAff", "statut")
                ->where('e.semestre = :semestre')
                ->andWhere('e.inscription = :inscription')
                ->setParameter('semestre', $semestre)
                ->setParameter('inscription', $inscription)
                ->getQuery()
                ->getOneOrNullResult()
            ;
        }
        if(!$request) {
            return "";
        } 

        return $request;
    }
}
