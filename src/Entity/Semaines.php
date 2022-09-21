<?php

namespace App\Entity;

use App\Repository\SemainesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SemainesRepository::class)]
class Semaines
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $semaine;

    #[ORM\Column(type: 'string', length: 20, nullable: true)]
    private $DateD;

    #[ORM\Column(type: 'string', length: 20, nullable: true)]
    private $DateF;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $Tranche;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Position;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $AnneéS;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSemaine(): ?int
    {
        return $this->semaine;
    }

    public function setSemaine(?int $semaine): self
    {
        $this->semaine = $semaine;

        return $this;
    }

    public function getDateD(): ?string
    {
        return $this->DateD;
    }

    public function setDateD(?string $DateD): self
    {
        $this->DateD = $DateD;

        return $this;
    }

    public function getDateF(): ?string
    {
        return $this->DateF;
    }

    public function setDateF(?string $DateF): self
    {
        $this->DateF = $DateF;

        return $this;
    }

    public function getTranche(): ?int
    {
        return $this->Tranche;
    }

    public function setTranche(?int $Tranche): self
    {
        $this->Tranche = $Tranche;

        return $this;
    }

    public function getPosition(): ?string
    {
        return $this->Position;
    }

    public function setPosition(?string $Position): self
    {
        $this->Position = $Position;

        return $this;
    }

    public function getAnneéS(): ?string
    {
        return $this->AnneéS;
    }

    public function setAnneéS(?string $AnneéS): self
    {
        $this->AnneéS = $AnneéS;

        return $this;
    }
}
