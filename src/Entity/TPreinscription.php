<?php

namespace App\Entity;

use App\Repository\TPreinscriptionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TPreinscriptionRepository::class)]
class TPreinscription
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: PStatut::class)]
    private $statut;

    #[ORM\ManyToOne(targetEntity: TEtudiant::class, inversedBy: 'preinscriptions')]
    #[ORM\JoinColumn(nullable: false)]
    private $etudiant;

    #[ORM\ManyToOne(targetEntity: PStatut::class, inversedBy: 'preinscriptions')]
    private $statutDeliberation;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $code;

    #[ORM\Column(type: 'smallint', nullable: true)]
    private $inscriptionValide;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $rangP;

    #[ORM\Column(type: 'integer')]
    private $rangS;

    #[ORM\Column(type: 'string', length: 100, nullable: true)]
    private $categorieListe;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $admissionListe;

    #[ORM\Column(type: 'string', length: 100, nullable: true)]
    private $teleListe;

    #[ORM\Column(type: 'smallint', nullable: true)]
    private $active;

    #[ORM\Column(type: 'smallint', nullable: true)]
    private $mentionnerAdmissible;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $created;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $updated;

    #[ORM\OneToMany(mappedBy: 'preinscription', targetEntity: TAdmission::class)]
    private $admissions;

    public function __construct()
    {
        $this->admissions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getEtudiant(): ?TEtudiant
    {
        return $this->etudiant;
    }

    public function setEtudiant(?TEtudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    public function getStatutDeliberation(): ?PStatut
    {
        return $this->statutDeliberation;
    }

    public function setStatutDeliberation(?PStatut $statutDeliberation): self
    {
        $this->statutDeliberation = $statutDeliberation;

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

    public function getInscriptionValide(): ?int
    {
        return $this->inscriptionValide;
    }

    public function setInscriptionValide(?int $inscriptionValide): self
    {
        $this->inscriptionValide = $inscriptionValide;

        return $this;
    }

    public function getRangP(): ?int
    {
        return $this->rangP;
    }

    public function setRangP(?int $rangP): self
    {
        $this->rangP = $rangP;

        return $this;
    }

    public function getRangS(): ?int
    {
        return $this->rangS;
    }

    public function setRangS(int $rangS): self
    {
        $this->rangS = $rangS;

        return $this;
    }

    public function getCategorieListe(): ?string
    {
        return $this->categorieListe;
    }

    public function setCategorieListe(?string $categorieListe): self
    {
        $this->categorieListe = $categorieListe;

        return $this;
    }

    public function getAdmissionListe(): ?string
    {
        return $this->admissionListe;
    }

    public function setAdmissionListe(?string $admissionListe): self
    {
        $this->admissionListe = $admissionListe;

        return $this;
    }

    public function getTeleListe(): ?string
    {
        return $this->teleListe;
    }

    public function setTeleListe(?string $teleListe): self
    {
        $this->teleListe = $teleListe;

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

    public function getMentionnerAdmissible(): ?int
    {
        return $this->mentionnerAdmissible;
    }

    public function setMentionnerAdmissible(?int $mentionnerAdmissible): self
    {
        $this->mentionnerAdmissible = $mentionnerAdmissible;

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
     * @return Collection|TAdmission[]
     */
    public function getAdmissions(): Collection
    {
        return $this->admissions;
    }

    public function addAdmission(TAdmission $admission): self
    {
        if (!$this->admissions->contains($admission)) {
            $this->admissions[] = $admission;
            $admission->setPreinscription($this);
        }

        return $this;
    }

    public function removeAdmission(TAdmission $admission): self
    {
        if ($this->admissions->removeElement($admission)) {
            // set the owning side to null (unless already changed)
            if ($admission->getPreinscription() === $this) {
                $admission->setPreinscription(null);
            }
        }

        return $this;
    }
}
