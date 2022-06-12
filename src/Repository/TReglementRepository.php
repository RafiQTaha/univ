<?php

namespace App\Repository;

use App\Entity\TReglement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TReglement|null find($id, $lockMode = null, $lockVersion = null)
 * @method TReglement|null findOneBy(array $criteria, array $orderBy = null)
 * @method TReglement[]    findAll()
 * @method TReglement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TReglementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TReglement::class);
    }

    // /**
    //  * @return TReglement[] Returns an array of TReglement objects
    //  */
    
    public function getSumMontantByCodeFacture($operation)
    {
        $request = $this->createQueryBuilder('t')
            ->select("SUM(t.montant) as total")
            // ->Where('t.impayer = 0')
            ->Where('t.annuler = 0')
            ->andWhere('t.operation = :operation')
            ->setParameter('operation', $operation)
            ->groupBy('t.operation')
            ->getQuery()
            ->getOneOrNullResult()
        ;
        // dd($request);
        if(!$request) {
            return ['total' => 0];
        } 
        return $request;
    }
    public function getReglementSumMontantByCodeFactureByOrganisme($operation)
    {
        $request = $this->createQueryBuilder('t')
            ->select("SUM(t.montant) as total")
            // ->Where('t.impayer = 0')
            ->Where('t.annuler = 0')
            ->andWhere('t.operation = :operation')
            ->andWhere('t.payant = 0')
            ->setParameter('operation', $operation)
            ->groupBy('t.operation')
            ->getQuery()
            ->getOneOrNullResult()
        ;
        // dd($request);
        if(!$request) {
            return ['total' => 0];
        } 
        return $request;
    }
    public function getReglementSumMontantByCodeFactureByPayant($operation)
    {
        $request = $this->createQueryBuilder('t')
            ->select("SUM(t.montant) as total")
            // ->Where('t.impayer = 0')
            ->Where('t.annuler = 0')
            ->andWhere('t.operation = :operation')
            ->andWhere('t.payant = 1')
            ->setParameter('operation', $operation)
            ->groupBy('t.operation')
            ->getQuery()
            ->getOneOrNullResult()
        ;
        // dd($request);
        if(!$request) {
            return ['total' => 0];
        } 
        return $request;
    }
    
    
    public function getReglementsSumMontant($borderaux)
    {
        $request = $this->createQueryBuilder('reg')
            ->select("SUM(reg.montant) as total")
            ->innerJoin("reg.bordereau", "bordereau")
            ->Where('bordereau = :bordereau')
            ->setParameter('bordereau', $borderaux)
            ->getQuery()
            ->getOneOrNullResult()
        ;
        if(!$request) {
            return ['total' => 0];
        } 
        return $request;
    }
    
    public function getReglementsByCurrentYear()
    {
        return $this->createQueryBuilder('reg')
            ->select("pre.code as code_preins, cab.code as code_facture, ann.designation as annee, etu.nom as nom, etu.prenom as prenom,etu.nationalite as nationalite, etab.designation as etablissement, frm.designation as formation, prm.designation as promotion,reg.code as code_reglement,reg.montant as montant_regle, reg.date_reglement as date_reglement, reg.reference as reference,pai.code as mode_paiement,brd.code num_brd ")
            ->innerJoin("reg.operation","cab")
            ->innerJoin("cab.preinscription","pre")
            ->innerJoin("pre.etudiant","etu")
            ->leftJoin("pre.admissions","adm")
            ->leftJoin("adm.inscriptions","ins")
            ->leftJoin("ins.promotion","prm")
            ->leftJoin("ins.statut","stat")
            ->innerJoin("cab.annee","ann")
            ->leftJoin("ann.formation","frm")
            ->leftJoin("frm.etablissement","etab")
            ->leftJoin("reg.paiement","pai")
            ->leftJoin("reg.bordereau","brd")
            ->Where("ann.cloture_academique = 'non'")
            ->Where("reg.annuler = 0")
            ->getQuery()
            ->getResult()
        ;
    }
    /*
    public function findOneBySomeField($value): ?TReglement
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
