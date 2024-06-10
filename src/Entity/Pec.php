<?php

namespace App\Entity;

use App\Repository\PecRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PecRepository::class)]
class Pec
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $designation;

    #[ORM\Column(type: 'string', length: 10, nullable: true)]
    private $abreviation;

    #[ORM\Column(type: 'float', nullable: true)]
    private $active = 1;

    #[ORM\OneToMany(mappedBy: 'pec', targetEntity: TPreinscription::class)]
    private $tPreinscriptions;

    #[ORM\OneToMany(mappedBy: 'pec', targetEntity: TOperationcab::class)]
    private $operatioCab;

    public function __construct()
    {
        $this->tPreinscriptions = new ArrayCollection();
        $this->operatioCab = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    /**
     * @return Collection<int, TPreinscription>
     */
    public function getTPreinscriptions(): Collection
    {
        return $this->tPreinscriptions;
    }

    public function addTPreinscription(TPreinscription $tPreinscription): self
    {
        if (!$this->tPreinscriptions->contains($tPreinscription)) {
            $this->tPreinscriptions[] = $tPreinscription;
            $tPreinscription->setPec($this);
        }

        return $this;
    }

    public function removeTPreinscription(TPreinscription $tPreinscription): self
    {
        if ($this->tPreinscriptions->removeElement($tPreinscription)) {
            // set the owning side to null (unless already changed)
            if ($tPreinscription->getPec() === $this) {
                $tPreinscription->setPec(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TOperationcab>
     */
    public function getOperatioCab(): Collection
    {
        return $this->operatioCab;
    }

    public function addOperatioCab(TOperationcab $operatioCab): self
    {
        if (!$this->operatioCab->contains($operatioCab)) {
            $this->operatioCab[] = $operatioCab;
            $operatioCab->setPec($this);
        }

        return $this;
    }

    public function removeOperatioCab(TOperationcab $operatioCab): self
    {
        if ($this->operatioCab->removeElement($operatioCab)) {
            // set the owning side to null (unless already changed)
            if ($operatioCab->getPec() === $this) {
                $operatioCab->setPec(null);
            }
        }

        return $this;
    }
}
