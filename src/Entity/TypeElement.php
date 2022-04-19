<?php

namespace App\Entity;

use App\Repository\TypeElementRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TypeElementRepository::class)]
class TypeElement
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $code;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $designation;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $created;

    #[ORM\OneToMany(mappedBy: 'Type', targetEntity: AcElement::class)]
    private $elements;

    #[ORM\OneToMany(mappedBy: 'type', targetEntity: AcElement::class)]
    private $acElements;

    public function __construct()
    {
        $this->elements = new ArrayCollection();
        $this->acElements = new ArrayCollection();
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

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(?\DateTimeInterface $created): self
    {
        $this->created = $created;

        return $this;
    }

    /**
     * @return Collection<int, AcElement>
     */
    public function getElements(): Collection
    {
        return $this->elements;
    }

    public function addElement(AcElement $element): self
    {
        if (!$this->elements->contains($element)) {
            $this->elements[] = $element;
            $element->setType($this);
        }

        return $this;
    }

    public function removeElement(AcElement $element): self
    {
        if ($this->elements->removeElement($element)) {
            // set the owning side to null (unless already changed)
            if ($element->getType() === $this) {
                $element->setType(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, AcElement>
     */
    public function getAcElements(): Collection
    {
        return $this->acElements;
    }

    public function addAcElement(AcElement $acElement): self
    {
        if (!$this->acElements->contains($acElement)) {
            $this->acElements[] = $acElement;
            $acElement->setType($this);
        }

        return $this;
    }

    public function removeAcElement(AcElement $acElement): self
    {
        if ($this->acElements->removeElement($acElement)) {
            // set the owning side to null (unless already changed)
            if ($acElement->getType() === $this) {
                $acElement->setType(null);
            }
        }

        return $this;
    }
}
