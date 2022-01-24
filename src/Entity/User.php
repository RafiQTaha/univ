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

    #[ORM\OneToMany(mappedBy: 'UserCrteated', targetEntity: TOperationcab::class)]
    private $operationcabs;

    #[ORM\ManyToMany(targetEntity: UsOperation::class, inversedBy: 'users')]
    private $operations;

    public function __construct()
    {
        $this->operationcabs = new ArrayCollection();
        $this->operations = new ArrayCollection();
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
     * @return Collection|TOperationcab[]
     */
    public function getOperationcabs(): Collection
    {
        return $this->operationcabs;
    }

    public function addOperationcab(TOperationcab $operationcab): self
    {
        if (!$this->operationcabs->contains($operationcab)) {
            $this->operationcabs[] = $operationcab;
            $operationcab->setUserCrteated($this);
        }

        return $this;
    }

    public function removeOperationcab(TOperationcab $operationcab): self
    {
        if ($this->operationcabs->removeElement($operationcab)) {
            // set the owning side to null (unless already changed)
            if ($operationcab->getUserCrteated() === $this) {
                $operationcab->setUserCrteated(null);
            }
        }

        return $this;
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

}
