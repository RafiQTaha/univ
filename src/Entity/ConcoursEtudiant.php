<?php

namespace App\Entity;

use App\Repository\ConcoursEtudiantRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ConcoursEtudiantRepository::class)]
class ConcoursEtudiant
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Nom;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $prenom;

    #[ORM\Column(type: 'string', length: 15, nullable: true)]
    private $cin;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $anonymat;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $created;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'concoursEtudiants')]
    private $UserCreated;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $updated;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'concoursEtudiantsUpdated')]
    private $userUpdated;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $groupement;

    #[ORM\OneToMany(mappedBy: 'Etudiant', targetEntity: ConcoursEtudiantLog::class)]
    private $concoursEtudiantLogs;

    #[ORM\OneToMany(mappedBy: 'etudiant', targetEntity: ConcoursEtudiantControle::class)]
    private $concoursEtudiantControles;

    public function __construct()
    {
        $this->concoursEtudiantLogs = new ArrayCollection();
        $this->concoursEtudiantControles = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->Nom;
    }

    public function setNom(?string $Nom): self
    {
        $this->Nom = $Nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(?string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getCin(): ?string
    {
        return $this->cin;
    }

    public function setCin(?string $cin): self
    {
        $this->cin = $cin;

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

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(?\DateTimeInterface $created): self
    {
        $this->created = $created;

        return $this;
    }

    public function getUserCreated(): ?User
    {
        return $this->UserCreated;
    }

    public function setUserCreated(?User $UserCreated): self
    {
        $this->UserCreated = $UserCreated;

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

    public function getUserUpdated(): ?User
    {
        return $this->userUpdated;
    }

    public function setUserUpdated(?User $userUpdated): self
    {
        $this->userUpdated = $userUpdated;

        return $this;
    }

    public function getGroupement(): ?string
    {
        return $this->groupement;
    }

    public function setGroupement(?string $groupement): self
    {
        $this->groupement = $groupement;

        return $this;
    }

    /**
     * @return Collection<int, ConcoursEtudiantLog>
     */
    public function getConcoursEtudiantLogs(): Collection
    {
        return $this->concoursEtudiantLogs;
    }

    public function addConcoursEtudiantLog(ConcoursEtudiantLog $concoursEtudiantLog): self
    {
        if (!$this->concoursEtudiantLogs->contains($concoursEtudiantLog)) {
            $this->concoursEtudiantLogs[] = $concoursEtudiantLog;
            $concoursEtudiantLog->setEtudiant($this);
        }

        return $this;
    }

    public function removeConcoursEtudiantLog(ConcoursEtudiantLog $concoursEtudiantLog): self
    {
        if ($this->concoursEtudiantLogs->removeElement($concoursEtudiantLog)) {
            // set the owning side to null (unless already changed)
            if ($concoursEtudiantLog->getEtudiant() === $this) {
                $concoursEtudiantLog->setEtudiant(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ConcoursEtudiantControle>
     */
    public function getConcoursEtudiantControles(): Collection
    {
        return $this->concoursEtudiantControles;
    }

    public function addConcoursEtudiantControle(ConcoursEtudiantControle $concoursEtudiantControle): self
    {
        if (!$this->concoursEtudiantControles->contains($concoursEtudiantControle)) {
            $this->concoursEtudiantControles[] = $concoursEtudiantControle;
            $concoursEtudiantControle->setEtudiant($this);
        }

        return $this;
    }

    public function removeConcoursEtudiantControle(ConcoursEtudiantControle $concoursEtudiantControle): self
    {
        if ($this->concoursEtudiantControles->removeElement($concoursEtudiantControle)) {
            // set the owning side to null (unless already changed)
            if ($concoursEtudiantControle->getEtudiant() === $this) {
                $concoursEtudiantControle->setEtudiant(null);
            }
        }

        return $this;
    }
}
