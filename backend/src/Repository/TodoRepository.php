<?php

namespace App\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Todo;

/**
 * @method Todo|null find($id, $lockMode = null, $lockVersion = null)
 * @method Todo|null findOneBy(array $criteria, array $orderBy = null)
 * @method Todo[]    findAll()
 * @method Todo[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TodoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, EntityManagerInterface $manager)
    {
        parent::__construct($registry, Todo::class);
        $this->manager = $manager;
    }

    /**
     * @return Todo
     */
    public function save(Todo $todo): void 
    {
        $this->manager->persist($todo);
        $this->manager->flush();
    }

    /**
     * @return void
     */
    public function delete(Todo $todo): void
    {
        $this->manager->remove($todo);
        $this->manager->flush();
    }
}
