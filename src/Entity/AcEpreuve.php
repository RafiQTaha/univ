<?php

namespace App\Entity;

use App\Repository\AcEpreuveRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AcEpreuveRepository::class)]
class AcEpreuve
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $code;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $coefficient;

    #[ORM\ManyToOne(targetEntity: AcAnnee::class, inversedBy: 'epreuves')]
    private $annee;

    #[ORM\ManyToOne(targetEntity: AcElement::class, inversedBy: 'epreuves')]
    private $element;

    #[ORM\ManyToOne(targetEntity: PNatureEpreuve::class, inversedBy: 'epreuves')]
    private $natureEpreuve;

    #[ORM\ManyToOne(targetEntity: PEnseignant::class, inversedBy: 'epreuves')]
    private $enseignant;

    #[ORM\Column(type: 'date', nullable: true)]
    private $dateEpreuve;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $observation;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $anonymat;

    #[ORM\ManyToOne(targetEntity: PStatut::class)]
    private $statut;

    #[ORM\ManyToOne(targetEntity: User::class)]
    private $userCreated;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $created;

    #[ORM\OneToMany(mappedBy: 'epreuve', targetEntity: ExGnotes::class)]
    private $gnotes;

    public function __construct()
    {
        $this->gnotes = new ArrayCollection();
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

    public function getCoefficient(): ?int
    {
        return $this->coefficient;
    }

    public function setCoefficient(?int $coefficient): self
    {
        $this->coefficient = $coefficient;

        return $this;
    }

    public function getAnnee(): ?AcAnnee
    {
        return $this->annee;
    }

    public function setAnnee(?AcAnnee $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    public function getElement(): ?AcElement
    {
        return $this->element;
    }

    public function setElement(?AcElement $element): self
    {
        $this->element = $element;

        return $this;
    }

    public function getNatureEpreuve(): ?PNatureEpreuve
    {
        return $this->natureEpreuve;
    }

    public function setNatureEpreuve(?PNatureEpreuve $natureEpreuve): self
    {
        $this->natureEpreuve = $natureEpreuve;

        return $this;
    }

    public function getEnseignant(): ?PEnseignant
    {
        return $this->enseignant;
    }

    public function setEnseignant(?PEnseignant $enseignant): self
    {
        $this->enseignant = $enseignant;

        return $this;
    }

    public function getDateEpreuve(): ?\DateTimeInterface
    {
        return $this->dateEpreuve;
    }

    public function setDateEpreuve(?\DateTimeInterface $dateEpreuve): self
    {
        $this->dateEpreuve = $dateEpreuve;

        return $this;
    }

    public function getObservation(): ?string
    {
        return $this->observation;
    }

    public function setObservation(?string $observation): self
    {
        $this->observation = $observation;

        return $this;
    }

    public function getAnonymat(): ?int
    {
        return $this->anonymat;
    }

    public function setAnonymat(?int $anonymat): self
    {
        $this->anonymat = $anonymat;

        return $this;
    }

    public function getStatut(): ?PStatut
    {
        return $this->statut;
    }

    public function setStatut(?PStatut $statut): self
    {
        $this->statut = $statut;

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

    /**
     * @return Collection|ExGnotes[]
     */
    public function getGnotes(): Collection
    {
        return $this->gnotes;
    }

    public function addGnote(ExGnotes $gnote): self
    {
        if (!$this->gnotes->contains($gnote)) {
            $this->gnotes[] = $gnote;
            $gnote->setEpreuve($this);
        }

        return $this;
    }

    public function removeGnote(ExGnotes $gnote): self
    {
        if ($this->gnotes->removeElement($gnote)) {
            // set the owning side to null (unless already changed)
            if ($gnote->getEpreuve() === $this) {
                $gnote->setEpreuve(null);
            }
        }

        return $this;
    }
}
