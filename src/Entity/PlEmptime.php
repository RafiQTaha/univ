<?php

namespace App\Entity;

use App\Repository\PlEmptimeRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlEmptimeRepository::class)]
class PlEmptime
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $code;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $description;

    #[ORM\ManyToOne(targetEntity: PrProgrammation::class, inversedBy: 'emtimes')]
    private $programmation;

    #[ORM\ManyToOne(targetEntity: Semaine::class, inversedBy: 'emptimes')]
    private $semaine;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $dateemploi;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $start;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $end;

    #[ORM\Column(type: 'time', nullable: true)]
    private $heur_db;

    #[ORM\Column(type: 'time', nullable: true)]
    private $heur_fin;

    #[ORM\Column(type: 'float', nullable: true)]
    private $valider;

    #[ORM\Column(type: 'float', nullable: true)]
    private $annuler;

    #[ORM\Column(type: 'float', nullable: true)]
    private $generer;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $motif_annuler;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'emptimes')]
    private $UserCreated;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'emptimes')]
    private $UserUpdated;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $Created;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $Updated;

    #[ORM\ManyToOne(targetEntity: PSalles::class, inversedBy: 'emptimes')]
    private $salle;

    #[ORM\ManyToOne(targetEntity: Color::class, inversedBy: 'emptimes')]
    private $color;

    #[ORM\ManyToOne(targetEntity: PGroupe::class, inversedBy: 'emptimes')]
    private $groupe;

    #[ORM\ManyToOne(targetEntity: ISeance::class, inversedBy: 'seance')]
    private $iSeance;

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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getProgrammation(): ?PrProgrammation
    {
        return $this->programmation;
    }

    public function setProgrammation(?PrProgrammation $programmation): self
    {
        $this->programmation = $programmation;

        return $this;
    }

    public function getSemaine(): ?Semaine
    {
        return $this->semaine;
    }

    public function setSemaine(?Semaine $semaine): self
    {
        $this->semaine = $semaine;

        return $this;
    }

    public function getDateemploi(): ?\DateTimeInterface
    {
        return $this->dateemploi;
    }

    public function setDateemploi(?\DateTimeInterface $dateemploi): self
    {
        $this->dateemploi = $dateemploi;

        return $this;
    }

    public function getStart(): ?\DateTimeInterface
    {
        return $this->start;
    }

    public function setStart(?\DateTimeInterface $start): self
    {
        $this->start = $start;

        return $this;
    }

    public function getEnd(): ?\DateTimeInterface
    {
        return $this->end;
    }

    public function setEnd(?\DateTimeInterface $end): self
    {
        $this->end = $end;

        return $this;
    }

    public function getHeurDb(): ?\DateTimeInterface
    {
        return $this->heur_db;
    }

    public function setHeurDb(?\DateTimeInterface $heur_db): self
    {
        $this->heur_db = $heur_db;

        return $this;
    }

    public function getHeurFin(): ?\DateTimeInterface
    {
        return $this->heur_fin;
    }

    public function setHeurFin(?\DateTimeInterface $heur_fin): self
    {
        $this->heur_fin = $heur_fin;

        return $this;
    }

    public function getValider(): ?float
    {
        return $this->valider;
    }

    public function setValider(?float $valider): self
    {
        $this->valider = $valider;

        return $this;
    }

    public function getAnnuler(): ?float
    {
        return $this->annuler;
    }

    public function setAnnuler(?float $annuler): self
    {
        $this->annuler = $annuler;

        return $this;
    }

    public function getGenerer(): ?float
    {
        return $this->generer;
    }

    public function setGenerer(?float $generer): self
    {
        $this->generer = $generer;

        return $this;
    }

    public function getMotifAnnuler(): ?string
    {
        return $this->motif_annuler;
    }

    public function setMotifAnnuler(?string $motif_annuler): self
    {
        $this->motif_annuler = $motif_annuler;

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

    public function getUserUpdated(): ?User
    {
        return $this->UserUpdated;
    }

    public function setUserUpdated(?User $UserUpdated): self
    {
        $this->UserUpdated = $UserUpdated;

        return $this;
    }

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->Created;
    }

    public function setCreated(?\DateTimeInterface $Created): self
    {
        $this->Created = $Created;

        return $this;
    }

    public function getUpdated(): ?\DateTimeInterface
    {
        return $this->Updated;
    }

    public function setUpdated(?\DateTimeInterface $Updated): self
    {
        $this->Updated = $Updated;

        return $this;
    }

    public function getSalle(): ?PSalles
    {
        return $this->salle;
    }

    public function setSalle(?PSalles $salle): self
    {
        $this->salle = $salle;

        return $this;
    }

    public function getColor(): ?Color
    {
        return $this->color;
    }

    public function setColor(?Color $color): self
    {
        $this->color = $color;

        return $this;
    }

    public function getGroupe(): ?PGroupe
    {
        return $this->groupe;
    }

    public function setGroupe(?PGroupe $groupe): self
    {
        $this->groupe = $groupe;

        return $this;
    }

    public function getISeance(): ?ISeance
    {
        return $this->iSeance;
    }

    public function setISeance(?ISeance $iSeance): self
    {
        $this->iSeance = $iSeance;

        return $this;
    }
}
