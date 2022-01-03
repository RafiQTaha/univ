<?php

namespace App\Entity;

use App\Repository\AcFormationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AcFormationRepository::class)]
class AcFormation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'acFormations')]
    private $user_created;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'acFormations')]
    private $user_updated;

    #[ORM\ManyToOne(targetEntity: AcEtablissement::class, inversedBy: 'acFormations')]
    private $etablissement;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $code;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $designation;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $abreviation;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $nbr_annee;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $active;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $created;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $updated;

    #[ORM\OneToMany(mappedBy: 'formation', targetEntity: AcPromotion::class)]
    private $acPromotions;

    public function __construct()
    {
        $this->acPromotions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserCreated(): ?User
    {
        return $this->user_created;
    }

    public function setUserCreated(?User $user_created): self
    {
        $this->user_created = $user_created;

        return $this;
    }

    public function getUserUpdated(): ?User
    {
        return $this->user_updated;
    }

    public function setUserUpdated(?User $user_updated): self
    {
        $this->user_updated = $user_updated;

        return $this;
    }

    public function getEtablissement(): ?AcEtablissement
    {
        return $this->etablissement;
    }

    public function setEtablissement(?AcEtablissement $etablissement): self
    {
        $this->etablissement = $etablissement;

        return $this;
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

    public function getNbrAnnee(): ?int
    {
        return $this->nbr_annee;
    }

    public function setNbrAnnee(?int $nbr_annee): self
    {
        $this->nbr_annee = $nbr_annee;

        return $this;
    }

    public function getActive(): ?int
    {
        return $this->active;
    }

    public function setActive(?int $active): self
    {
        $this->active = $active;

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

    public function getUpdated(): ?\DateTimeInterface
    {
        return $this->updated;
    }

    public function setUpdated(?\DateTimeInterface $updated): self
    {
        $this->updated = $updated;

        return $this;
    }

    /**
     * @return Collection|AcPromotion[]
     */
    public function getAcPromotions(): Collection
    {
        return $this->acPromotions;
    }

    public function addAcPromotion(AcPromotion $acPromotion): self
    {
        if (!$this->acPromotions->contains($acPromotion)) {
            $this->acPromotions[] = $acPromotion;
            $acPromotion->setFormation($this);
        }

        return $this;
    }

    public function removeAcPromotion(AcPromotion $acPromotion): self
    {
        if ($this->acPromotions->removeElement($acPromotion)) {
            // set the owning side to null (unless already changed)
            if ($acPromotion->getFormation() === $this) {
                $acPromotion->setFormation(null);
            }
        }

        return $this;
    }
}
