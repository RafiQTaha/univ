<?php

namespace App\Repository;

use App\Entity\ExAnotes;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ExAnotes|null find($id, $lockMode = null, $lockVersion = null)
 * @method ExAnotes|null findOneBy(array $criteria, array $orderBy = null)
 * @method ExAnotes[]    findAll()
 * @method ExAnotes[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ExAnotesRepository extends ServiceEntityRepository
{
    
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ExAnotes::class);
        $this->em = $registry->getManager();
    }

    // /**
    //  * @return ExAnotes[] Returns an array of ExAnotes objects
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
    public function findOneBySomeField($value): ?ExAnotes
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function getStatutByColumn($inscription, $statut)
    {
        // dd('e.'.$statut);
        if($statut == "statutDef") {
            $request = $this->createQueryBuilder('e')
                ->select("statut.abreviation")
                ->innerJoin("e.statutDef", "statut")
                ->where('e.inscription = :inscription')
                ->setParameter('inscription', $inscription)
                ->getQuery()
                ->getOneOrNullResult()
            ;
        } else {
            $request = $this->createQueryBuilder('e')
                ->select("statut.abreviation")
                ->innerJoin("e.statutAff", "statut")
                ->where('e.inscription = :inscription')
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
    public function getNoteFromExAnotes($codeAdm, $annee)
    {
        $sqls="SELECT ex.*
        FROM `ex_anotes` ex 
        inner join tinscription ins on ins.id = ex.inscription_id
        inner join ac_annee ann on ann.id = ex.annee_id
        inner join tadmission adm on adm.id = ins.admission_id
        where adm.code = '$codeAdm' 
        and ann.code = '$annee' limit 1";
        // dd($sqls);
        $stmts = $this->em->getConnection()->prepare($sqls);
        $resultSets = $stmts->executeQuery();
        $result = $resultSets->fetchAll();
        return $result;
    }

    public function CalculeMoyenneNote($admission)
    {
        $sqls="SELECT ins.id as inscriptoion, adm.id as admission, sum(note) as moyenne, sum(note_sec) as moyenneSec
        FROM `ex_anotes` an
        inner join tinscription ins on ins.id = an.inscription_id
        inner join tadmission adm on adm.id = ins.admission_id
        where adm.id = $admission and statut_aff_id != 44 order by ins.code desc";
        // dd($sqls);
        $stmts = $this->em->getConnection()->prepare($sqls);
        $resultSets = $stmts->executeQuery();
        $result = $resultSets->fetch();
        return $result;
    }
}
