<?php

namespace App\Entity;

use App\Repository\ConcoursEtudiantLogRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ConcoursEtudiantLogRepository::class)]
class ConcoursEtudiantLog
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: ConcoursEtudiant::class, inversedBy: 'concoursEtudiantLogs')]
    private $Etudiant;

    #[ORM\ManyToOne(targetEntity: user::class, inversedBy: 'concoursEtudiantLogs')]
    private $userCreated;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $nombreEtiquettes;

    #[ORM\Column(type: 'float', nullable: true)]
    private $controle;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $created;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEtudiant(): ?ConcoursEtudiant
    {
        return $this->Etudiant;
    }

    public function setEtudiant(?ConcoursEtudiant $Etudiant): self
    {
        $this->Etudiant = $Etudiant;

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

    public function getNombreEtiquettes(): ?int
    {
        return $this->nombreEtiquettes;
    }

    public function setNombreEtiquettes(?int $nombreEtiquettes): self
    {
        $this->nombreEtiquettes = $nombreEtiquettes;

        return $this;
    }

    public function getControle(): ?float
    {
        return $this->controle;
    }

    public function setControle(?float $controle): self
    {
        $this->controle = $controle;

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
}
