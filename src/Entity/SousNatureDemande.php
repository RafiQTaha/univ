<?php

namespace App\Entity;

use App\Repository\SousNatureDemandeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SousNatureDemandeRepository::class)]
class SousNatureDemande
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 25, nullable: true)]
    private $code;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $designation;

    #[ORM\Column(type: 'string', length: 10, nullable: true)]
    private $abreviation;

    #[ORM\Column(type: 'float', nullable: true)]
    private $active;

    #[ORM\ManyToOne(targetEntity: NatureDemande::class, inversedBy: 'sousNatureDemandes')]
    private $natureDemande;

    #[ORM\OneToMany(mappedBy: 'sousNature', targetEntity: EtudiantSousNatureDemande::class)]
    private $etudiantSousNatureDemandes;

    #[ORM\ManyToOne(targetEntity: POrganisme::class, inversedBy: 'sousNatureDemandes')]
    private $organisme;

    #[ORM\OneToMany(mappedBy: 'sousNatureDemande', targetEntity: PriseEnCharge::class)]
    private $priseEnCharges;

    #[ORM\OneToMany(mappedBy: 'sousNatureDemande', targetEntity: TOperationcab::class)]
    private $tOperationcabs;

    public function __construct()
    {
        $this->etudiantSousNatureDemandes = new ArrayCollection();
        $this->priseEnCharges = new ArrayCollection();
        $this->tOperationcabs = new ArrayCollection();
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

    public function getDesignation(): ?string
    {
        return $this->designation;
    }

    public function setDesignation(?string $designation): self
    {
        $this->designation = $designation;

        return $this;
    }

    public function getAbreviation(): ?string
    {
        return $this->abreviation;
    }

    public function setAbreviation(?string $abreviation): self
    {
        $this->abreviation = $abreviation;

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

    public function getNatureDemande(): ?NatureDemande
    {
        return $this->natureDemande;
    }

    public function setNatureDemande(?NatureDemande $natureDemande): self
    {
        $this->natureDemande = $natureDemande;

        return $this;
    }

    /**
     * @return Collection<int, EtudiantSousNatureDemande>
     */
    public function getEtudiantSousNatureDemandes(): Collection
    {
        return $this->etudiantSousNatureDemandes;
    }

    public function addEtudiantSousNatureDemande(EtudiantSousNatureDemande $etudiantSousNatureDemande): self
    {
        if (!$this->etudiantSousNatureDemandes->contains($etudiantSousNatureDemande)) {
            $this->etudiantSousNatureDemandes[] = $etudiantSousNatureDemande;
            $etudiantSousNatureDemande->setSousNature($this);
        }

        return $this;
    }

    public function removeEtudiantSousNatureDemande(EtudiantSousNatureDemande $etudiantSousNatureDemande): self
    {
        if ($this->etudiantSousNatureDemandes->removeElement($etudiantSousNatureDemande)) {
            // set the owning side to null (unless already changed)
            if ($etudiantSousNatureDemande->getSousNature() === $this) {
                $etudiantSousNatureDemande->setSousNature(null);
            }
        }

        return $this;
    }

    public function getOrganisme(): ?POrganisme
    {
        return $this->organisme;
    }

    public function setOrganisme(?POrganisme $organisme): self
    {
        $this->organisme = $organisme;

        return $this;
    }

    /**
     * @return Collection<int, PriseEnCharge>
     */
    public function getPriseEnCharges(): Collection
    {
        return $this->priseEnCharges;
    }

    public function addPriseEnCharge(PriseEnCharge $priseEnCharge): self
    {
        if (!$this->priseEnCharges->contains($priseEnCharge)) {
            $this->priseEnCharges[] = $priseEnCharge;
            $priseEnCharge->setSousNatureDemande($this);
        }

        return $this;
    }

    public function removePriseEnCharge(PriseEnCharge $priseEnCharge): self
    {
        if ($this->priseEnCharges->removeElement($priseEnCharge)) {
            // set the owning side to null (unless already changed)
            if ($priseEnCharge->getSousNatureDemande() === $this) {
                $priseEnCharge->setSousNatureDemande(null);
            }
        }

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
            $tOperationcab->setSousNatureDemande($this);
        }

        return $this;
    }

    public function removeTOperationcab(TOperationcab $tOperationcab): self
    {
        if ($this->tOperationcabs->removeElement($tOperationcab)) {
            // set the owning side to null (unless already changed)
            if ($tOperationcab->getSousNatureDemande() === $this) {
                $tOperationcab->setSousNatureDemande(null);
            }
        }

        return $this;
    }
}
