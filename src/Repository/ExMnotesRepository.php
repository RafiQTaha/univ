<?php

namespace App\Repository;

use App\Entity\ExMnotes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ExMnotes|null find($id, $lockMode = null, $lockVersion = null)
 * @method ExMnotes|null findOneBy(array $criteria, array $orderBy = null)
 * @method ExMnotes[]    findAll()
 * @method ExMnotes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ExMnotesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ExMnotes::class);
    }

    // /**
    //  * @return ExMnotes[] Returns an array of ExMnotes objects
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

    
    public function getStatutByColumn($inscription, $module, $statut)
    {
        // dd('e.'.$statut);
        if($statut == "statutDef") {
            $request = $this->createQueryBuilder('e')
                ->select("statut.abreviation")
                ->innerJoin("e.statutDef", "statut")
                ->where('e.module = :module')
                ->andWhere('e.inscription = :inscription')
                ->setParameter('module', $module)
                ->setParameter('inscription', $inscription)
                ->getQuery()
                ->getOneOrNullResult()
            ;
        } else {
            $request = $this->createQueryBuilder('e')
                ->select("statut.abreviation")
                ->innerJoin("e.statutAff", "statut")
                ->where('e.module = :module')
                ->andWhere('e.inscription = :inscription')
                ->setParameter('module', $module)
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
    public function getStatutAffDef($inscription, $module)
    {
        $request = $this->createQueryBuilder('e')
            ->select("statutAff.abreviation as abreviationAff,statutDef.abreviation as abreviationDef ")
            ->innerJoin("e.statutAff", "statutAff")
            ->innerJoin("e.statutDef", "statutDef")
            ->where('e.module = :module')
            ->andWhere('e.inscription = :inscription')
            ->setParameter('module', $module)
            ->setParameter('inscription', $inscription)
            ->getQuery()
            ->getOneOrNullResult()
        ;
        
        if(!$request) {
            return [
                'abreviationAff' => "",
                'abreviationDef' => ""
            ];
        } 

        return $request;
    }
    
}
