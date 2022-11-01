<?php

namespace App\Repository;

use App\Entity\AcEpreuve;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AcEpreuve|null find($id, $lockMode = null, $lockVersion = null)
 * @method AcEpreuve|null findOneBy(array $criteria, array $orderBy = null)
 * @method AcEpreuve[]    findAll()
 * @method AcEpreuve[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AcEpreuveRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AcEpreuve::class);
        $this->em = $registry->getManager();
    }

    // /**
    //  * @return AcEpreuve[] Returns an array of AcEpreuve objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?AcEpreuve
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
    public function findEpreuveValideByCurrentYear($currentyear)
    {
        $sqls="SELECT ins.code 'code inscriptiont', adm.code 'code admission', pre.code 'code preinscription', ins.code_anonymat, ins.code_anonymat_rat, stat.code, etu.nom, etu.prenom,ann.code, ann.designation 'Annee',etab.code, etab.designation 'Etablissement', frm.code, frm.designation 'Formation',prm.code , prm.designation 'Promotion', sem.code,sem.designation 'Semestre', mdl.code, mdl.designation as Module,elm.code, elm.designation as Designation, epv.code as code_epreuve, pr.code,pr.designation as Nature_Epreuve,epv.date_epreuve,gn.note 
        FROM `ac_epreuve` epv
        inner join ac_element elm on elm.id = epv.element_id
        inner join ac_annee ann on ann.id = epv.annee_id
        inner join ex_gnotes gn on gn.epreuve_id = epv.id
        inner join tinscription ins on ins.id = gn.inscription_id
        inner join ac_module mdl on mdl.id = elm.module_id
        inner join ac_semestre sem on sem.id = mdl.semestre_id
        inner join ac_promotion prm on prm.id = sem.promotion_id
        inner join ac_formation frm on frm.id = prm.formation_id
        inner join ac_etablissement etab on etab.id = frm.etablissement_id
        inner join tadmission adm on adm.id = ins.admission_id
        inner join tpreinscription pre on pre.id = adm.preinscription_id
        inner join tetudiant etu on etu.id = pre.etudiant_id
        inner join pnature_epreuve pr on pr.id = epv.nature_epreuve_id
        inner join pstatut stat on stat.id = ins.statut_id
        where ann.designation = '$currentyear' and epv.statut_id = 30 ";
        // dd($sqls);
        $stmts = $this->em->getConnection()->prepare($sqls);
        $resultSets = $stmts->executeQuery();
        $result = $resultSets->fetchAll();
        return $result;
    }
}
