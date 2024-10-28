<?php

namespace App\Entity;

use App\Repository\TOperationcabRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TOperationcabRepository::class)]
class TOperationcab
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $code;

    #[ORM\ManyToOne(targetEntity: TPreinscription::class, inversedBy: 'operationcabs')]
    private $preinscription;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $categorie;

    #[ORM\ManyToOne(targetEntity: AcAnnee::class, inversedBy: 'operationcabs')]
    private $annee;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $observation;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $created;

    // #[ORM\ManyToOne(targetEntity: POrganisme::class, inversedBy: 'operationcabs')]
    // private $organisme;

    #[ORM\OneToMany(mappedBy: 'operation', targetEntity: TReglement::class)]
    private $reglements;

    #[ORM\OneToMany(mappedBy: 'operationcab', targetEntity: TOperationdet::class)]
    private $operationdets;

    #[ORM\ManyToOne(targetEntity: User::class)]
    private $userCreated;

    #[ORM\Column(type: 'float', nullable: true)]
    private $active;

    #[ORM\Column(type: 'float', nullable: true)]
    private $synFlag = 0;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $dateContable;

    #[ORM\Column(type: 'string', length: 25, nullable: true)]
    private $organisme;

    #[ORM\Column(type: 'float', nullable: true)]
    private $annuler = 0;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $facAnnuler;

    #[ORM\ManyToOne(targetEntity: Pec::class, inversedBy: 'operatioCab')]
    private $pec;

    #[ORM\Column(type: 'string', length: 20, nullable: true)]
    private $npec;

    #[ORM\Column(type: 'string', length: 30, nullable: true)]
    private $anneeDebutPec;

    #[ORM\Column(type: 'string', length: 30, nullable: true)]
    private $anneeFinPec;

    #[ORM\Column(type: 'float', nullable: true)]
    private $nbrAnneePec;

    #[ORM\Column(type: 'string', length: 50, nullable: true)]
    private $codePec;

    #[ORM\Column(type: 'float', nullable: true)]
    private $pecSocialId;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $PecRefSocial;

    #[ORM\Column(type: 'float', nullable: true)]
    private $montantPec;

    #[ORM\ManyToOne(targetEntity: InfoPec::class, inversedBy: 'tOperationcabs')]
    private $infoPec;

    #[ORM\ManyToOne(targetEntity: sousNatureDemande::class, inversedBy: 'tOperationcabs')]
    private $sousNatureDemande;
    
    #[ORM\Column(type: 'string', length: 100, nullable: true)]
    private $statut;

    #[ORM\Column(type: 'string', length: 100, nullable: true)]
    private $programmePec;

    #[ORM\Column(type: 'float', nullable: true)]
    private $mtPec;

    #[ORM\Column(type: 'string', length: 100, nullable: true)]
    private $typePec;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $motifPec;

    #[ORM\Column(type: 'string', length: 100, nullable: true)]
    private $niveau;

    public function __construct()
    {
        $this->reglements = new ArrayCollection();
        $this->operationdets = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(?string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getPreinscription(): ?TPreinscription
    {
        return $this->preinscription;
    }

    public function setPreinscription(?TPreinscription $preinscription): self
    {
        $this->preinscription = $preinscription;

        return $this;
    }

    public function getCategorie(): ?string
    {
        return $this->categorie;
    }

    public function setCategorie(?string $categorie): self
    {
        $this->categorie = $categorie;

        return $this;
    }

    public function getAnnee(): ?AcAnnee
    {
        return $this->annee;
    }

    public function setAnnee(?AcAnnee $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    public function getObservation(): ?string
    {
        return $this->observation;
    }

    public function setObservation(?string $observation): self
    {
        $this->observation = $observation;

        return $this;
    }

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(?\DateTimeInterface $created): self
    {
        $this->created = $created;

        return $this;
    }

    /**
     * @return Collection|TReglement[]
     */
    public function getReglements(): Collection
    {
        return $this->reglements;
    }

    public function addReglement(TReglement $reglement): self
    {
        if (!$this->reglements->contains($reglement)) {
            $this->reglements[] = $reglement;
            $reglement->setOperation($this);
        }

        return $this;
    }

    public function removeReglement(TReglement $reglement): self
    {
        if ($this->reglements->removeElement($reglement)) {
            // set the owning side to null (unless already changed)
            if ($reglement->getOperation() === $this) {
                $reglement->setOperation(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|TOperationdet[]
     */
    public function getOperationdets(): Collection
    {
        return $this->operationdets;
    }

    public function addOperationdet(TOperationdet $operationdet): self
    {
        if (!$this->operationdets->contains($operationdet)) {
            $this->operationdets[] = $operationdet;
            $operationdet->setOperationcab($this);
        }

        return $this;
    }

    public function removeOperationdet(TOperationdet $operationdet): self
    {
        if ($this->operationdets->removeElement($operationdet)) {
            // set the owning side to null (unless already changed)
            if ($operationdet->getOperationcab() === $this) {
                $operationdet->setOperationcab(null);
            }
        }

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

    public function getActive(): ?float
    {
        return $this->active;
    }

    public function setActive(?float $active): self
    {
        $this->active = $active;

        return $this;
    }

    public function getSynFlag(): ?float
    {
        return $this->synFlag;
    }

    public function setSynFlag(?float $synFlag): self
    {
        $this->synFlag = $synFlag;

        return $this;
    }

    public function getDateContable(): ?int
    {
        return $this->dateContable;
    }

    public function setDateContable(?int $dateContable): self
    {
        $this->dateContable = $dateContable;

        return $this;
    }

    public function getOrganisme(): ?string
    {
        return $this->organisme;
    }

    public function setOrganisme(?string $organisme): self
    {
        $this->organisme = $organisme;

        return $this;
    }

    public function getAnnuler(): ?float
    {
        return $this->annuler;
    }

    public function setAnnuler(?float $annuler): self
    {
        $this->annuler = $annuler;

        return $this;
    }

    public function getFacAnnuler(): ?int
    {
        return $this->facAnnuler;
    }

    public function setFacAnnuler(?int $facAnnuler): self
    {
        $this->facAnnuler = $facAnnuler;

        return $this;
    }

    public function getPec(): ?Pec
    {
        return $this->pec;
    }

    public function setPec(?Pec $pec): self
    {
        $this->pec = $pec;

        return $this;
    }

    public function getNpec(): ?string
    {
        return $this->npec;
    }

    public function setNpec(?string $npec): self
    {
        $this->npec = $npec;

        return $this;
    }

    public function getAnneeDebutPec(): ?string
    {
        return $this->anneeDebutPec;
    }

    public function setAnneeDebutPec(?string $anneeDebutPec): self
    {
        $this->anneeDebutPec = $anneeDebutPec;

        return $this;
    }

    public function getAnneeFinPec(): ?string
    {
        return $this->anneeFinPec;
    }

    public function setAnneeFinPec(?string $anneeFinPec): self
    {
        $this->anneeFinPec = $anneeFinPec;

        return $this;
    }

    public function getNbrAnneePec(): ?float
    {
        return $this->nbrAnneePec;
    }

    public function setNbrAnneePec(?float $nbrAnneePec): self
    {
        $this->nbrAnneePec = $nbrAnneePec;

        return $this;
    }

    public function getCodePec(): ?string
    {
        return $this->codePec;
    }

    public function setCodePec(?string $codePec): self
    {
        $this->codePec = $codePec;

        return $this;
    }

    public function getPecSocialId(): ?float
    {
        return $this->pecSocialId;
    }

    public function setPecSocialId(?float $pecSocialId): self
    {
        $this->pecSocialId = $pecSocialId;

        return $this;
    }

    public function getPecRefSocial(): ?string
    {
        return $this->PecRefSocial;
    }

    public function setPecRefSocial(?string $PecRefSocial): self
    {
        $this->PecRefSocial = $PecRefSocial;

        return $this;
    }

    public function getMontantPec(): ?float
    {
        return $this->montantPec;
    }

    public function setMontantPec(?float $montantPec): self
    {
        $this->montantPec = $montantPec;

        return $this;
    }

    public function getInfoPec(): ?InfoPec
    {
        return $this->infoPec;
    }

    public function setInfoPec(?InfoPec $infoPec): self
    {
        $this->infoPec = $infoPec;

        return $this;
    }

    public function getSousNatureDemande(): ?sousNatureDemande
    {
        return $this->sousNatureDemande;
    }

    public function setSousNatureDemande(?sousNatureDemande $sousNatureDemande): self
    {
        $this->sousNatureDemande = $sousNatureDemande;

        return $this;
    }    

    public function getStatut(): ?string
    {
        return $this->statut;
    }

    public function setStatut(?string $statut): self
    {
        $this->statut = $statut;

        return $this;
    }

    public function getProgrammePec(): ?string
    {
        return $this->programmePec;
    }

    public function setProgrammePec(?string $programmePec): self
    {
        $this->programmePec = $programmePec;

        return $this;
    }

    public function getMtPec(): ?float
    {
        return $this->mtPec;
    }

    public function setMtPec(?float $mtPec): self
    {
        $this->mtPec = $mtPec;

        return $this;
    }

    public function getTypePec(): ?string
    {
        return $this->typePec;
    }

    public function setTypePec(?string $typePec): self
    {
        $this->typePec = $typePec;

        return $this;
    }

    public function getMotifPec(): ?string
    {
        return $this->motifPec;
    }

    public function setMotifPec(?string $motifPec): self
    {
        $this->motifPec = $motifPec;

        return $this;
    }

    public function getNiveau(): ?string
    {
        return $this->niveau;
    }

    public function setNiveau(?string $niveau): self
    {
        $this->niveau = $niveau;

        return $this;
    }
}
