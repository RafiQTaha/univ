<?php

namespace App\Entity;

use App\Repository\ConcoursEtudiantControleRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ConcoursEtudiantControleRepository::class)]
class ConcoursEtudiantControle
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: ConcoursEtudiant::class, inversedBy: 'concoursEtudiantControles')]
    private $etudiant;

    #[ORM\ManyToOne(targetEntity: user::class, inversedBy: 'concoursEtudiantControles')]
    private $userCreated;

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
        return $this->etudiant;
    }

    public function setEtudiant(?ConcoursEtudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

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
