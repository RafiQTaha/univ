<?php

namespace App\Entity;

use App\Repository\ConcoursEvaluationRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ConcoursEvaluationRepository::class)]
class ConcoursEvaluation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: TEtudiant::class, inversedBy: 'concoursEvaluations')]
    private $etudiant;

    #[ORM\Column(type: 'float', nullable: true)]
    private $FMA;

    #[ORM\Column(type: 'float', nullable: true)]
    private $FMDA;

    #[ORM\Column(type: 'float', nullable: true)]
    private $FPA;

    #[ORM\Column(type: 'float', nullable: true)]
    private $ISITS;

    #[ORM\Column(type: 'float', nullable: true)]
    private $FASIMH;

    #[ORM\Column(type: 'float', nullable: true)]
    private $Maths;

    #[ORM\Column(type: 'float', nullable: true)]
    private $Physique;

    #[ORM\Column(type: 'float', nullable: true)]
    private $chimie;

    #[ORM\Column(type: 'float', nullable: true)]
    private $Svt;

    #[ORM\Column(type: 'float', nullable: true)]
    private $ABS;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $Created;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'concoursEvaluations')]
    private $userCreated;

    #[ORM\Column(type: 'string', length: 20, nullable: true)]
    private $annee;

    #[ORM\Column(type: 'float', nullable: true)]
    private $MoyenConcour;

    // #[ORM\Column(type: 'float', nullable: true)]
    // private $MoyenConcour2;

    #[ORM\Column(type: 'float', nullable: true)]
    private $listFMA = 0;

    #[ORM\Column(type: 'float', nullable: true)]
    private $listFMDA = 0;

    #[ORM\Column(type: 'float', nullable: true)]
    private $listFPA = 0;

    #[ORM\Column(type: 'float', nullable: true)]
    private $listISITS = 0;

    #[ORM\Column(type: 'float', nullable: true)]
    private $listFASIMH = 0;

    #[ORM\Column(type: 'string', length: 30, nullable: true)]
    private $TypeCondidat;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $updated;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'concoursEtudiantsUpdated')]
    private $userUpdated;

    #[ORM\Column(type: 'float', nullable: true)]
    private $rangFMA = null;

    #[ORM\Column(type: 'float', nullable: true)]
    private $rangFMDA = null;

    #[ORM\Column(type: 'float', nullable: true)]
    private $rangFPA = null;

    #[ORM\Column(type: 'float', nullable: true)]
    private $rangISITS = null;

    #[ORM\Column(type: 'float', nullable: true)]
    private $rangFASIMH = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEtudiant(): ?TEtudiant
    {
        return $this->etudiant;
    }

    public function setEtudiant(?TEtudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    public function getFMA(): ?float
    {
        return $this->FMA;
    }

    public function setFMA(?float $FMA): self
    {
        $this->FMA = $FMA;

        return $this;
    }

    public function getFMDA(): ?float
    {
        return $this->FMDA;
    }

    public function setFMDA(?float $FMDA): self
    {
        $this->FMDA = $FMDA;

        return $this;
    }

    public function getFPA(): ?float
    {
        return $this->FPA;
    }

    public function setFPA(?float $FPA): self
    {
        $this->FPA = $FPA;

        return $this;
    }

    public function getISITS(): ?float
    {
        return $this->ISITS;
    }

    public function setISITS(?float $ISITS): self
    {
        $this->ISITS = $ISITS;

        return $this;
    }

    public function getFASIMH(): ?float
    {
        return $this->FASIMH;
    }

    public function setFASIMH(?float $FASIMH): self
    {
        $this->FASIMH = $FASIMH;

        return $this;
    }

    public function getMaths(): ?float
    {
        return $this->Maths;
    }

    public function setMaths(?float $Maths): self
    {
        $this->Maths = $Maths;

        return $this;
    }

    public function getPhysique(): ?float
    {
        return $this->Physique;
    }

    public function setPhysique(?float $Physique): self
    {
        $this->Physique = $Physique;

        return $this;
    }

    public function getChimie(): ?float
    {
        return $this->chimie;
    }

    public function setChimie(?float $chimie): self
    {
        $this->chimie = $chimie;

        return $this;
    }

    public function getSvt(): ?float
    {
        return $this->Svt;
    }

    public function setSvt(?float $Svt): self
    {
        $this->Svt = $Svt;

        return $this;
    }

    public function getABS(): ?float
    {
        return $this->ABS;
    }

    public function setABS(?float $ABS): self
    {
        $this->ABS = $ABS;

        return $this;
    }

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->Created;
    }

    public function setCreated(?\DateTimeInterface $Created): self
    {
        $this->Created = $Created;

        return $this;
    }

    public function getUserCreated(): ?User
    {
        return $this->userCreated;
    }

    public function setUserCreated(?User $userCreated): self
    {
        $this->userCreated = $userCreated;

        return $this;
    }

    public function getAnnee(): ?string
    {
        return $this->annee;
    }

    public function setAnnee(?string $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    public function getMoyenConcour(): ?float
    {
        return $this->MoyenConcour;
    }

    public function setMoyenConcour(?float $MoyenConcour): self
    {
        $this->MoyenConcour = $MoyenConcour;

        return $this;
    }

    // public function getMoyenConcour2(): ?float
    // {
    //     return $this->MoyenConcour2;
    // }

    // public function setMoyenConcour2(?float $MoyenConcour2): self
    // {
    //     $this->MoyenConcour2 = $MoyenConcour2;

    //     return $this;
    // }

    public function getListFMA(): ?float
    {
        return $this->listFMA;
    }

    public function setListFMA(?float $listFMA): self
    {
        $this->listFMA = $listFMA;

        return $this;
    }

    public function getListFMDA(): ?float
    {
        return $this->listFMDA;
    }

    public function setListFMDA(?float $listFMDA): self
    {
        $this->listFMDA = $listFMDA;

        return $this;
    }

    public function getListFPA(): ?float
    {
        return $this->listFPA;
    }

    public function setListFPA(?float $listFPA): self
    {
        $this->listFPA = $listFPA;

        return $this;
    }

    public function getListISITS(): ?float
    {
        return $this->listISITS;
    }

    public function setListISITS(?float $listISITS): self
    {
        $this->listISITS = $listISITS;

        return $this;
    }

    public function getListFASIMH(): ?float
    {
        return $this->listFASIMH;
    }

    public function setListFASIMH(?float $listFASIMH): self
    {
        $this->listFASIMH = $listFASIMH;

        return $this;
    }

    public function getTypeCondidat(): ?string
    {
        return $this->TypeCondidat;
    }

    public function setTypeCondidat(?string $TypeCondidat): self
    {
        $this->TypeCondidat = $TypeCondidat;

        return $this;
    }

    public function getUpdated(): ?\DateTimeInterface
    {
        return $this->updated;
    }

    public function setUpdated(?\DateTimeInterface $updated): self
    {
        $this->updated = $updated;

        return $this;
    }

    public function getUserUpdated(): ?User
    {
        return $this->userUpdated;
    }

    public function setUserUpdated(?User $userUpdated): self
    {
        $this->userUpdated = $userUpdated;

        return $this;
    }

    public function getRangFMA(): ?float
    {
        return $this->rangFMA;
    }

    public function setRangFMA(?float $rangFMA): self
    {
        $this->rangFMA = $rangFMA;

        return $this;
    }

    public function getRangFMDA(): ?float
    {
        return $this->rangFMDA;
    }

    public function setRangFMDA(?float $rangFMDA): self
    {
        $this->rangFMDA = $rangFMDA;

        return $this;
    }

    public function getRangFPA(): ?float
    {
        return $this->rangFPA;
    }

    public function setRangFPA(?float $rangFPA): self
    {
        $this->rangFPA = $rangFPA;

        return $this;
    }

    public function getRangISITS(): ?float
    {
        return $this->rangISITS;
    }

    public function setRangISITS(?float $rangISITS): self
    {
        $this->rangISITS = $rangISITS;

        return $this;
    }

    public function getRangFASIMH(): ?float
    {
        return $this->rangFASIMH;
    }

    public function setRangFASIMH(?float $rangFASIMH): self
    {
        $this->rangFASIMH = $rangFASIMH;

        return $this;
    }
}
