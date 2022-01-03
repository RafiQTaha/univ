<?php

namespace App\Entity;

use App\Repository\AcEpreuveRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AcEpreuveRepository::class)]
class AcEpreuve
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'acEpreuves')]
    private $user_created;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'acEpreuves')]
    private $user_updated;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $nature_epreuve;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $enseignant;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $statut;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $groupe;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $controle_epreuve;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $code;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $designation;

    #[ORM\Column(type: 'float', nullable: true)]
    private $coefficient;

    #[ORM\Column(type: 'date', nullable: true)]
    private $date_epreuve;

    #[ORM\Column(type: 'text', nullable: true)]
    private $observation;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $anonymat;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $nature_anonymat;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $nature;

    #[ORM\Column(type: 'smallint', nullable: true)]
    private $active;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $reference;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $created;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $updated;

    #[ORM\Column(type: 'text', nullable: true)]
    private $position_actuel;

    #[ORM\Column(type: 'text', nullable: true)]
    private $historique;

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

    public function getNatureEpreuve(): ?int
    {
        return $this->nature_epreuve;
    }

    public function setNatureEpreuve(?int $nature_epreuve): self
    {
        $this->nature_epreuve = $nature_epreuve;

        return $this;
    }

    public function getEnseignant(): ?int
    {
        return $this->enseignant;
    }

    public function setEnseignant(?int $enseignant): self
    {
        $this->enseignant = $enseignant;

        return $this;
    }

    public function getStatut(): ?int
    {
        return $this->statut;
    }

    public function setStatut(?int $statut): self
    {
        $this->statut = $statut;

        return $this;
    }

    public function getGroupe(): ?int
    {
        return $this->groupe;
    }

    public function setGroupe(?int $groupe): self
    {
        $this->groupe = $groupe;

        return $this;
    }

    public function getControleEpreuve(): ?int
    {
        return $this->controle_epreuve;
    }

    public function setControleEpreuve(?int $controle_epreuve): self
    {
        $this->controle_epreuve = $controle_epreuve;

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

    public function getCoefficient(): ?float
    {
        return $this->coefficient;
    }

    public function setCoefficient(?float $coefficient): self
    {
        $this->coefficient = $coefficient;

        return $this;
    }

    public function getDateEpreuve(): ?\DateTimeInterface
    {
        return $this->date_epreuve;
    }

    public function setDateEpreuve(?\DateTimeInterface $date_epreuve): self
    {
        $this->date_epreuve = $date_epreuve;

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

    public function getAnonymat(): ?int
    {
        return $this->anonymat;
    }

    public function setAnonymat(?int $anonymat): self
    {
        $this->anonymat = $anonymat;

        return $this;
    }

    public function getNatureAnonymat(): ?int
    {
        return $this->nature_anonymat;
    }

    public function setNatureAnonymat(?int $nature_anonymat): self
    {
        $this->nature_anonymat = $nature_anonymat;

        return $this;
    }

    public function getNature(): ?string
    {
        return $this->nature;
    }

    public function setNature(?string $nature): self
    {
        $this->nature = $nature;

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

    public function getReference(): ?string
    {
        return $this->reference;
    }

    public function setReference(?string $reference): self
    {
        $this->reference = $reference;

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

    public function getPositionActuel(): ?string
    {
        return $this->position_actuel;
    }

    public function setPositionActuel(?string $position_actuel): self
    {
        $this->position_actuel = $position_actuel;

        return $this;
    }

    public function getHistorique(): ?string
    {
        return $this->historique;
    }

    public function setHistorique(?string $historique): self
    {
        $this->historique = $historique;

        return $this;
    }
}
