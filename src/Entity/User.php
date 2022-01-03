<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 180, unique: true)]
    private $username;

    #[ORM\Column(type: 'json')]
    private $roles = [];

    #[ORM\Column(type: 'string')]
    private $password;

    #[ORM\OneToMany(mappedBy: 'user_created', targetEntity: AcEtablissement::class)]
    private $acEtablissements;

    #[ORM\OneToMany(mappedBy: 'user_created', targetEntity: AcFormation::class)]
    private $acFormations;

    #[ORM\OneToMany(mappedBy: 'user_created', targetEntity: AcPromotion::class)]
    private $acPromotions;

    #[ORM\OneToMany(mappedBy: 'user_created', targetEntity: AcSemestre::class)]
    private $acSemestres;

    #[ORM\OneToMany(mappedBy: 'user_created', targetEntity: AcModule::class)]
    private $acModules;

    #[ORM\OneToMany(mappedBy: 'user_created', targetEntity: AcElement::class)]
    private $acElements;

    #[ORM\OneToMany(mappedBy: 'user_created', targetEntity: AcDepartement::class)]
    private $acDepartements;

    #[ORM\OneToMany(mappedBy: 'user_created', targetEntity: AcEpreuve::class)]
    private $acEpreuves;

    public function __construct()
    {
        $this->acEtablissements = new ArrayCollection();
        $this->acFormations = new ArrayCollection();
        $this->acPromotions = new ArrayCollection();
        $this->acSemestres = new ArrayCollection();
        $this->acModules = new ArrayCollection();
        $this->acElements = new ArrayCollection();
        $this->acDepartements = new ArrayCollection();
        $this->acEpreuves = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->username;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    /**
     * @return Collection|AcEtablissement[]
     */
    public function getAcEtablissements(): Collection
    {
        return $this->acEtablissements;
    }

    public function addAcEtablissement(AcEtablissement $acEtablissement): self
    {
        if (!$this->acEtablissements->contains($acEtablissement)) {
            $this->acEtablissements[] = $acEtablissement;
            $acEtablissement->setUserCreated($this);
        }

        return $this;
    }

    public function removeAcEtablissement(AcEtablissement $acEtablissement): self
    {
        if ($this->acEtablissements->removeElement($acEtablissement)) {
            // set the owning side to null (unless already changed)
            if ($acEtablissement->getUserCreated() === $this) {
                $acEtablissement->setUserCreated(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|AcFormation[]
     */
    public function getAcFormations(): Collection
    {
        return $this->acFormations;
    }

    public function addAcFormation(AcFormation $acFormation): self
    {
        if (!$this->acFormations->contains($acFormation)) {
            $this->acFormations[] = $acFormation;
            $acFormation->setUserCreated($this);
        }

        return $this;
    }

    public function removeAcFormation(AcFormation $acFormation): self
    {
        if ($this->acFormations->removeElement($acFormation)) {
            // set the owning side to null (unless already changed)
            if ($acFormation->getUserCreated() === $this) {
                $acFormation->setUserCreated(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|AcPromotion[]
     */
    public function getAcPromotions(): Collection
    {
        return $this->acPromotions;
    }

    public function addAcPromotion(AcPromotion $acPromotion): self
    {
        if (!$this->acPromotions->contains($acPromotion)) {
            $this->acPromotions[] = $acPromotion;
            $acPromotion->setUserCreated($this);
        }

        return $this;
    }

    public function removeAcPromotion(AcPromotion $acPromotion): self
    {
        if ($this->acPromotions->removeElement($acPromotion)) {
            // set the owning side to null (unless already changed)
            if ($acPromotion->getUserCreated() === $this) {
                $acPromotion->setUserCreated(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|AcSemestre[]
     */
    public function getAcSemestres(): Collection
    {
        return $this->acSemestres;
    }

    public function addAcSemestre(AcSemestre $acSemestre): self
    {
        if (!$this->acSemestres->contains($acSemestre)) {
            $this->acSemestres[] = $acSemestre;
            $acSemestre->setUserCreated($this);
        }

        return $this;
    }

    public function removeAcSemestre(AcSemestre $acSemestre): self
    {
        if ($this->acSemestres->removeElement($acSemestre)) {
            // set the owning side to null (unless already changed)
            if ($acSemestre->getUserCreated() === $this) {
                $acSemestre->setUserCreated(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|AcModule[]
     */
    public function getAcModules(): Collection
    {
        return $this->acModules;
    }

    public function addAcModule(AcModule $acModule): self
    {
        if (!$this->acModules->contains($acModule)) {
            $this->acModules[] = $acModule;
            $acModule->setUserCreated($this);
        }

        return $this;
    }

    public function removeAcModule(AcModule $acModule): self
    {
        if ($this->acModules->removeElement($acModule)) {
            // set the owning side to null (unless already changed)
            if ($acModule->getUserCreated() === $this) {
                $acModule->setUserCreated(null);
            }
        }

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
            $acElement->setUserCreated($this);
        }

        return $this;
    }

    public function removeAcElement(AcElement $acElement): self
    {
        if ($this->acElements->removeElement($acElement)) {
            // set the owning side to null (unless already changed)
            if ($acElement->getUserCreated() === $this) {
                $acElement->setUserCreated(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|AcDepartement[]
     */
    public function getAcDepartements(): Collection
    {
        return $this->acDepartements;
    }

    public function addAcDepartement(AcDepartement $acDepartement): self
    {
        if (!$this->acDepartements->contains($acDepartement)) {
            $this->acDepartements[] = $acDepartement;
            $acDepartement->setUserCreated($this);
        }

        return $this;
    }

    public function removeAcDepartement(AcDepartement $acDepartement): self
    {
        if ($this->acDepartements->removeElement($acDepartement)) {
            // set the owning side to null (unless already changed)
            if ($acDepartement->getUserCreated() === $this) {
                $acDepartement->setUserCreated(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|AcEpreuve[]
     */
    public function getAcEpreuves(): Collection
    {
        return $this->acEpreuves;
    }

    public function addAcEpreufe(AcEpreuve $acEpreufe): self
    {
        if (!$this->acEpreuves->contains($acEpreufe)) {
            $this->acEpreuves[] = $acEpreufe;
            $acEpreufe->setUserCreated($this);
        }

        return $this;
    }

    public function removeAcEpreufe(AcEpreuve $acEpreufe): self
    {
        if ($this->acEpreuves->removeElement($acEpreufe)) {
            // set the owning side to null (unless already changed)
            if ($acEpreufe->getUserCreated() === $this) {
                $acEpreufe->setUserCreated(null);
            }
        }

        return $this;
    }
}
