<?php

namespace App\Entity;

use App\Repository\InfoPecRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: InfoPecRepository::class)]
class InfoPec
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: TPreinscription::class, inversedBy: 'infoPecs')]
    private $preinscription;

    #[ORM\Column(type: 'string', length: 50, nullable: true)]
    private $codePec;

    #[ORM\Column(type: 'float')]
    private $montantPec;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $annee;

    #[ORM\Column(type: 'float', nullable: true)]
    private $solde;

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

    public function getCodePec(): ?string
    {
        return $this->codePec;
    }

    public function setCodePec(?string $codePec): self
    {
        $this->codePec = $codePec;

        return $this;
    }

    public function getMontantPec(): ?float
    {
        return $this->montantPec;
    }

    public function setMontantPec(float $montantPec): self
    {
        $this->montantPec = $montantPec;

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

    public function getSolde(): ?float
    {
        return $this->solde;
    }

    public function setSolde(?float $solde): self
    {
        $this->solde = $solde;

        return $this;
    }
}
