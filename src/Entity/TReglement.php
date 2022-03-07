<?php

namespace App\Entity;
    
use App\Repository\TReglementRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TReglementRepository::class)]
class TReglement
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $code;

    #[ORM\ManyToOne(targetEntity: TOperationcab::class, inversedBy: 'Reglements')]
    private $operation;

    #[ORM\Column(type: 'smallint', nullable: true)]
    private $montant;

    #[ORM\Column(type: 'smallint', nullable: true)]
    private $remise;

    #[ORM\Column(type: 'date', nullable: true)]
    private $date_reglement;

    #[ORM\ManyToOne(targetEntity: XBanque::class, inversedBy: 'Reglements')]
    private $banque;

    #[ORM\ManyToOne(targetEntity: XModalites::class, inversedBy: 'Reglements')]
    private $paiement;
    
    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $reference;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $created;

    #[ORM\ManyToOne(targetEntity: TBrdpaiement::class, inversedBy: 'Reglements')]
    private $bordereau;

    #[ORM\Column(type: 'float', nullable: true)]
    private $impayer;

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

    public function getOperation(): ?TOperationcab
    {
        return $this->operation;
    }

    public function setOperation(?TOperationcab $operation): self
    {
        $this->operation = $operation;

        return $this;
    }

    public function getMontant(): ?int
    {
        return $this->montant;
    }

    public function setMontant(?int $montant): self
    {
        $this->montant = $montant;

        return $this;
    }

    public function getRemise(): ?int
    {
        return $this->remise;
    }

    public function setRemise(?int $remise): self
    {
        $this->remise = $remise;

        return $this;
    }

    public function getDateReglement(): ?\DateTimeInterface
    {
        return $this->date_reglement;
    }

    public function setDateReglement(?\DateTimeInterface $date_reglement): self
    {
        $this->date_reglement = $date_reglement;

        return $this;
    }

    public function getBanque(): ?XBanque
    {
        return $this->banque;
    }

    public function setBanque(?XBanque $banque): self
    {
        $this->banque = $banque;

        return $this;
    }

    public function getPaiement(): ?XModalites
    {
        return $this->paiement;
    }

    public function setPaiement(?XModalites $paiement): self
    {
        $this->paiement = $paiement;

        return $this;
    }

    public function getReference(): ?string
    {
        return $this->reference;
    }

    public function setReference(?string $reference): self
    {
        $this->reference = $reference;

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

    public function getBordereau(): ?TBrdpaiement
    {
        return $this->bordereau;
    }

    public function setBordereau(?TBrdpaiement $bordereau): self
    {
        $this->bordereau = $bordereau;

        return $this;
    }

    public function getImpayer(): ?float
    {
        return $this->impayer;
    }

    public function setImpayer(?float $impayer): self
    {
        $this->impayer = $impayer;

        return $this;
    }
}
