<?php

namespace App\Entity;

use App\Repository\XModalitesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: XModalitesRepository::class)]
class XModalites
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $code;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $designation;

    #[ORM\OneToMany(mappedBy: 'paiement', targetEntity: TRegelement::class)]
    private $regelements;

    #[ORM\OneToMany(mappedBy: 'modalite', targetEntity: TBrdpaiement::class)]
    private $bordereaux;

    public function __construct()
    {
        $this->regelements = new ArrayCollection();
        $this->bordereaux = new ArrayCollection();
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

    public function getDesignation(): ?string
    {
        return $this->designation;
    }

    public function setDesignation(?string $designation): self
    {
        $this->designation = $designation;

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
            $regelement->setPaiement($this);
        }

        return $this;
    }

    public function removeRegelement(TRegelement $regelement): self
    {
        if ($this->regelements->removeElement($regelement)) {
            // set the owning side to null (unless already changed)
            if ($regelement->getPaiement() === $this) {
                $regelement->setPaiement(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|TBrdpaiement[]
     */
    public function getBordereaux(): Collection
    {
        return $this->bordereaux;
    }

    public function addBordereaux(TBrdpaiement $bordereaux): self
    {
        if (!$this->bordereaux->contains($bordereaux)) {
            $this->bordereaux[] = $bordereaux;
            $bordereaux->setModalite($this);
        }

        return $this;
    }

    public function removeBordereaux(TBrdpaiement $bordereaux): self
    {
        if ($this->bordereaux->removeElement($bordereaux)) {
            // set the owning side to null (unless already changed)
            if ($bordereaux->getModalite() === $this) {
                $bordereaux->setModalite(null);
            }
        }

        return $this;
    }
}
