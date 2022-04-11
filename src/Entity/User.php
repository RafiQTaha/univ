<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
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

    #[ORM\ManyToMany(targetEntity: UsOperation::class, inversedBy: 'users')]
    private $operations;

    #[ORM\OneToMany(mappedBy: 'UserCreated', targetEntity: TBrdpaiement::class)]
    private $bordereaux;

    #[ORM\OneToMany(mappedBy: 'UserCreated', targetEntity: PrProgrammation::class)]
    private $programmations;

    #[ORM\OneToMany(mappedBy: 'UserCreated', targetEntity: PlEmptime::class)]
    private $emptimes;

    #[ORM\Column(type: 'boolean')]
    private $enable = false;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $nom;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $prenom;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $email;

    public function __construct()
    {
        $this->operations = new ArrayCollection();
        $this->bordereaux = new ArrayCollection();
        $this->programmations = new ArrayCollection();
        $this->emptimes = new ArrayCollection();
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
     * Returning a salt is only needed, if you are not using a modern
     * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
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
     * @return Collection|UsOperation[]
     */
    public function getOperations(): Collection
    {
        return $this->operations;
    }

    public function addOperation(UsOperation $operation): self
    {
        if (!$this->operations->contains($operation)) {
            $this->operations[] = $operation;
        }

        return $this;
    }

    public function removeOperation(UsOperation $operation): self
    {
        $this->operations->removeElement($operation);

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
            $bordereaux->setUserCreated($this);
        }

        return $this;
    }

    public function removeBordereaux(TBrdpaiement $bordereaux): self
    {
        if ($this->bordereaux->removeElement($bordereaux)) {
            // set the owning side to null (unless already changed)
            if ($bordereaux->getUserCreated() === $this) {
                $bordereaux->setUserCreated(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|PrProgrammation[]
     */
    public function getProgrammations(): Collection
    {
        return $this->programmations;
    }

    public function addProgrammation(PrProgrammation $programmation): self
    {
        if (!$this->programmations->contains($programmation)) {
            $this->programmations[] = $programmation;
            $programmation->setUserCreated($this);
        }

        return $this;
    }

    public function removeProgrammation(PrProgrammation $programmation): self
    {
        if ($this->programmations->removeElement($programmation)) {
            // set the owning side to null (unless already changed)
            if ($programmation->getUserCreated() === $this) {
                $programmation->setUserCreated(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|PlEmptime[]
     */
    public function getEmptimes(): Collection
    {
        return $this->emptimes;
    }

    public function addEmptime(PlEmptime $emptime): self
    {
        if (!$this->emptimes->contains($emptime)) {
            $this->emptimes[] = $emptime;
            $emptime->setUserCreated($this);
        }

        return $this;
    }

    public function removeEmptime(PlEmptime $emptime): self
    {
        if ($this->emptimes->removeElement($emptime)) {
            // set the owning side to null (unless already changed)
            if ($emptime->getUserCreated() === $this) {
                $emptime->setUserCreated(null);
            }
        }

        return $this;
    }

    public function getEnable(): ?bool
    {
        return $this->enable;
    }

    public function setEnable(bool $enable): self
    {
        $this->enable = $enable;

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(?string $nom): self
    {
        $this->nom = $nom;

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

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

}
