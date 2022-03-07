<?php

namespace App\Repository;

use App\Entity\PlEmptime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method PlEmptime|null find($id, $lockMode = null, $lockVersion = null)
 * @method PlEmptime|null findOneBy(array $criteria, array $orderBy = null)
 * @method PlEmptime[]    findAll()
 * @method PlEmptime[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlEmptimeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PlEmptime::class);
    }

    // /**
    //  * @return PlEmptime[] Returns an array of PlEmptime objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?PlEmptime
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    
    public function getEmptimeBySemestreAndGroupe($semestre,$groupe)
    {
        return $this->createQueryBuilder('e')
            ->innerJoin("e.groupe", "groupe")
            ->innerJoin("e.programmation", "programmation")
            ->innerJoin("programmation.element", "element")
            ->innerJoin("element.module", "module")
            ->innerJoin("module.semestre", "semestre")
            ->where('semestre.id = :semestre')
            ->andWhere("groupe = :groupe")
            ->setParameter('semestre', $semestre)
            ->setParameter('groupe', $groupe)
            ->getQuery()
            ->getResult()
        ;
        // dd($test);
    }
}
