<?php

namespace App\Entity;

use App\Repository\EtudiantSousNatureDemandeRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EtudiantSousNatureDemandeRepository::class)]
class EtudiantSousNatureDemande
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: TEtudiant::class, inversedBy: 'etudiantSousNatureDemandes')]
    private $etudiant;

    #[ORM\ManyToOne(targetEntity: SousNatureDemande::class, inversedBy: 'etudiantSousNatureDemandes')]
    private $sousNature;

    #[ORM\Column(type: 'float', nullable: true)]
    private $active = 1;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'etudiantSousNatureDemandes')]
    private $userCreated;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $created;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $anneeDebut;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $anneeFin;

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

    public function getSousNature(): ?SousNatureDemande
    {
        return $this->sousNature;
    }

    public function setSousNature(?SousNatureDemande $sousNature): self
    {
        $this->sousNature = $sousNature;

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

    public function getUserCreated(): ?User
    {
        return $this->userCreated;
    }

    public function setUserCreated(?User $userCreated): self
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

    public function getAnneeDebut(): ?int
    {
        return $this->anneeDebut;
    }

    public function setAnneeDebut(?int $anneeDebut): self
    {
        $this->anneeDebut = $anneeDebut;

        return $this;
    }

    public function getAnneeFin(): ?int
    {
        return $this->anneeFin;
    }

    public function setAnneeFin(?int $anneeFin): self
    {
        $this->anneeFin = $anneeFin;

        return $this;
    }
}
