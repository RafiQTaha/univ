<?php

namespace App\Entity;

use App\Repository\AcModuleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AcModuleRepository::class)]
class AcModule
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'acModules')]
    private $user_created;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'acModules')]
    private $user_updated;

    #[ORM\ManyToOne(targetEntity: AcSemestre::class, inversedBy: 'acModules')]
    private $semestre;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $code;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $designation;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $active;

    #[ORM\Column(type: 'float', nullable: true)]
    private $coefficient;

    #[ORM\Column(type: 'string', length: 1, nullable: true)]
    private $type;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $created;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $updated;

    #[ORM\OneToMany(mappedBy: 'module', targetEntity: AcElement::class)]
    private $acElements;

    public function __construct()
    {
        $this->acElements = new ArrayCollection();
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

    public function getSemestre(): ?AcSemestre
    {
        return $this->semestre;
    }

    public function setSemestre(?AcSemestre $semestre): self
    {
        $this->semestre = $semestre;

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

    public function getActive(): ?int
    {
        return $this->active;
    }

    public function setActive(?int $active): self
    {
        $this->active = $active;

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

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): self
    {
        $this->type = $type;

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
     * @return Collection|AcElement[]
     */
    public function getAcElements(): Collection
    {
        return $this->acElements;
    }

    public function addAcElement(AcElement $acElement): self
    {
        if (!$this->acElements->contains($acElement)) {
            $this->acElements[] = $acElement;
            $acElement->setModule($this);
        }

        return $this;
    }

    public function removeAcElement(AcElement $acElement): self
    {
        if ($this->acElements->removeElement($acElement)) {
            // set the owning side to null (unless already changed)
            if ($acElement->getModule() === $this) {
                $acElement->setModule(null);
            }
        }

        return $this;
    }
}
