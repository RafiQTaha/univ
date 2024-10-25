<?php

namespace App\Entity;

use App\Repository\InfoPecRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: InfoPecRepository::class)]
class InfoPec
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 100, nullable: true)]
    private $statut;

    #[ORM\Column(type: 'string', length: 100, nullable: true)]
    private $programmePec;

    #[ORM\Column(type: 'float', nullable: true)]
    private $mtPec;

    #[ORM\Column(type: 'string', length: 100, nullable: true)]
    private $typePec;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $motifPec;

    #[ORM\Column(type: 'string', length: 100, nullable: true)]
    private $niveau;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $organisme;

    #[ORM\OneToMany(mappedBy: 'infoPec', targetEntity: TOperationcab::class)]
    private $tOperationcabs;

    public function __construct()
    {
        $this->tOperationcabs = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStatut(): ?string
    {
        return $this->statut;
    }

    public function setStatut(?string $statut): self
    {
        $this->statut = $statut;

        return $this;
    }

    public function getProgrammePec(): ?string
    {
        return $this->programmePec;
    }

    public function setProgrammePec(?string $programmePec): self
    {
        $this->programmePec = $programmePec;

        return $this;
    }

    public function getMtPec(): ?float
    {
        return $this->mtPec;
    }

    public function setMtPec(?float $mtPec): self
    {
        $this->mtPec = $mtPec;

        return $this;
    }

    public function getTypePec(): ?string
    {
        return $this->typePec;
    }

    public function setTypePec(?string $typePec): self
    {
        $this->typePec = $typePec;

        return $this;
    }

    public function getMotifPec(): ?string
    {
        return $this->motifPec;
    }

    public function setMotifPec(?string $motifPec): self
    {
        $this->motifPec = $motifPec;

        return $this;
    }

    public function getNiveau(): ?string
    {
        return $this->niveau;
    }

    public function setNiveau(?string $niveau): self
    {
        $this->niveau = $niveau;

        return $this;
    }

    public function getOrganisme(): ?string
    {
        return $this->organisme;
    }

    public function setOrganisme(?string $organisme): self
    {
        $this->organisme = $organisme;

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
            $tOperationcab->setInfoPec($this);
        }

        return $this;
    }

    public function removeTOperationcab(TOperationcab $tOperationcab): self
    {
        if ($this->tOperationcabs->removeElement($tOperationcab)) {
            // set the owning side to null (unless already changed)
            if ($tOperationcab->getInfoPec() === $this) {
                $tOperationcab->setInfoPec(null);
            }
        }

        return $this;
    }
}
