<?php

namespace App\Repository;

use App\Entity\AcElement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AcElement|null find($id, $lockMode = null, $lockVersion = null)
 * @method AcElement|null findOneBy(array $criteria, array $orderBy = null)
 * @method AcElement[]    findAll()
 * @method AcElement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AcElementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AcElement::class);
        $this->em = $registry->getManager();
    }

    // /**
    //  * @return AcElement[] Returns an array of AcElement objects
    //  */
    
    public function getElementsBySemestre($semestre)
    {
        return $this->createQueryBuilder('a')
            ->innerJoin("a.module", "module")
            ->where('module.semestre = :semestre')
            ->andWhere("module.active = 1")
            ->andWhere("a.active = 1")
            ->setParameter('semestre', $semestre)
            ->getQuery()
            ->getResult()
        ;
    }
    public function getElementsByPromotion($promotion)
    {
        return $this->createQueryBuilder('a')
            ->innerJoin("a.module", "module")
            ->innerJoin("module.semestre", "semestre")
            ->where('semestre.promotion = :promotion')
            ->andWhere("module.active = 1")
            ->andWhere("a.active = 1")
            ->setParameter('promotion', $promotion)
            ->getQuery()
            ->getResult()
        ;
    }
    
    public function findArchitectureByCurrentYear($currentyear)
    {
        $sqls="SELECT etab.id 'Etablissement_id',etab.code 'Etablissement_code', etab.designation 'Etablissement',frm.id 'Formation_id',frm.code 'Formation_code',frm.designation 'Formation',ann.id 'Annee_id',ann.code 'Annee_code',ann.designation 'Annee',prm.id 'Promotion_id',prm.code 'Promotion_code',prm.designation 'Promotion', sem.id 'Semestre_id', sem.code 'Semestre_code',sem.designation 'Semestre',mdl.id 'Module_id',mdl.code 'Module_code',mdl.designation 'Module',mdl.active 'Module_active',elm.id 'Element_id',elm.code 'Element_code', elm.designation 'Element', elm.coefficient 'coefficient',elm.coefficient_epreuve 'coefficient_epreuve',elm.active 'Element_active', prog.volume 'Volume',nat.id 'Nature_id', nat.code 'Nature_code',nat.designation 'Nature'
        FROM ac_etablissement etab
        inner join ac_formation frm on frm.etablissement_id = etab.id
        inner join ac_annee ann on ann.formation_id = frm.id
        inner join ac_promotion prm on prm.formation_id = frm.id
        inner join ac_semestre sem on sem.promotion_id = prm.id
        inner join ac_module mdl on mdl.semestre_id = sem.id
        inner join ac_element elm on elm.module_id = mdl.id
        inner join pr_programmation prog on prog.element_id = elm.id
        inner join pnature_epreuve nat on nat.id = prog.nature_epreuve_id
        where ann.designation = '$currentyear' ";
        // dd($sqls);
        $stmts = $this->em->getConnection()->prepare($sqls);
        $resultSets = $stmts->executeQuery();
        $result = $resultSets->fetchAll();
        return $result;
    }

    /*
    public function findOneBySomeField($value): ?AcElement
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
