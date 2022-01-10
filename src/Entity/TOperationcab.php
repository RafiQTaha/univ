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

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'operationcabs')]
    private $UserCrteated;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $created;

    #[ORM\ManyToOne(targetEntity: POrganisme::class, inversedBy: 'operationcabs')]
    private $organisme;

    #[ORM\OneToMany(mappedBy: 'operation', targetEntity: TRegelement::class)]
    private $regelements;

    public function __construct()
    {
        $this->regelements = new ArrayCollection();
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

    public function getUserCrteated(): ?User
    {
        return $this->UserCrteated;
    }

    public function setUserCrteated(?User $UserCrteated): self
    {
        $this->UserCrteated = $UserCrteated;

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
     * @return Collection|TRegelement[]
     */
    public function getRegelements(): Collection
    {
        return $this->regelements;
    }

    public function addRegelement(TRegelement $regelement): self
    {
        if (!$this->regelements->contains($regelement)) {
            $this->regelements[] = $regelement;
            $regelement->setOperation($this);
        }

        return $this;
    }

    public function removeRegelement(TRegelement $regelement): self
    {
        if ($this->regelements->removeElement($regelement)) {
            // set the owning side to null (unless already changed)
            if ($regelement->getOperation() === $this) {
                $regelement->setOperation(null);
            }
        }

        return $this;
    }
}
