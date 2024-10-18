<?php

namespace App\Entity;

use App\Repository\PriseEnChargeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PriseEnChargeRepository::class)]
class PriseEnCharge
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: TPreinscription::class, inversedBy: 'priseEnCharges')]
    private $preinscription;

    // #[ORM\ManyToOne(targetEntity: POrganisme::class, inversedBy: 'priseEnCharges')]
    // private $organisme;

    #[ORM\Column(type: 'string', length: 20, nullable: true)]
    private $codePec;

    #[ORM\Column(type: 'float', nullable: true)]
    private $montant;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $annee;

    #[ORM\Column(type: 'float', nullable: true)]
    private $active = 1;

    #[ORM\ManyToOne(targetEntity: user::class, inversedBy: 'priseEnCharges')]
    private $userCreated;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $created;

    #[ORM\ManyToOne(targetEntity: SousNatureDemande::class, inversedBy: 'priseEnCharges')]
    private $sousNatureDemande;

    #[ORM\OneToMany(mappedBy: 'priseEnCharge', targetEntity: TOperationcab::class)]
    private $tOperationcabs;

    public function __construct()
    {
        $this->tOperationcabs = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    // public function getOrganisme(): ?POrganisme
    // {
    //     return $this->organisme;
    // }

    // public function setOrganisme(?POrganisme $organisme): self
    // {
    //     $this->organisme = $organisme;

    //     return $this;
    // }

    public function getCodePec(): ?string
    {
        return $this->codePec;
    }

    public function setCodePec(?string $codePec): self
    {
        $this->codePec = $codePec;

        return $this;
    }

    public function getMontant(): ?float
    {
        return $this->montant;
    }

    public function setMontant(?float $montant): self
    {
        $this->montant = $montant;

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

    public function getActive(): ?float
    {
        return $this->active;
    }

    public function setActive(?float $active): self
    {
        $this->active = $active;

        return $this;
    }

    public function getUserCreated(): ?user
    {
        return $this->userCreated;
    }

    public function setUserCreated(?user $userCreated): self
    {
        $this->userCreated = $userCreated;

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

    public function getSousNatureDemande(): ?SousNatureDemande
    {
        return $this->sousNatureDemande;
    }

    public function setSousNatureDemande(?SousNatureDemande $sousNatureDemande): self
    {
        $this->sousNatureDemande = $sousNatureDemande;

        return $this;
    }

    /**
     * @return Collection<int, TOperationcab>
     */
    public function getTOperationcabs(): Collection
    {
        return $this->tOperationcabs;
    }

    public function addTOperationcab(TOperationcab $tOperationcab): self
    {
        if (!$this->tOperationcabs->contains($tOperationcab)) {
            $this->tOperationcabs[] = $tOperationcab;
            $tOperationcab->setPriseEnCharge($this);
        }

        return $this;
    }

    public function removeTOperationcab(TOperationcab $tOperationcab): self
    {
        if ($this->tOperationcabs->removeElement($tOperationcab)) {
            // set the owning side to null (unless already changed)
            if ($tOperationcab->getPriseEnCharge() === $this) {
                $tOperationcab->setPriseEnCharge(null);
            }
        }

        return $this;
    }
}
