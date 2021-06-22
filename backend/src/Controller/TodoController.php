<?php

namespace App\Controller;

use App\Repository\TodoRepository;
use App\Entity\Todo;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Serializer;


class TodoController extends AbstractController
{
    private $todoRepository;

    public function __construct(TodoRepository $todoRepository)
    {
        $this->todoRepository = $todoRepository;
    }

    /**
     * @Route("/todo", name="get_todos", methods={"GET"})
     */
    public function index(): JsonResponse
    {
        return $this->json(
            $this->todoRepository->findAll(), 
            Response::HTTP_OK
        );
    }

    /**
     * @Route("/todo", name="create_todo", methods={"POST"})
     */
    public function create(Request $request): JsonResponse
    {
        /*TODO: Validate body fields */
        $body = json_decode($request->getContent(), true);

        $todo = new Todo( 
            $body['title'], 
            $body['description']
        );
        
        $this->todoRepository->save($todo);
        
        return $this->json($todo, Response::HTTP_CREATED);
    }

    /**
     * @Route("/todo/{id}", name="delete_todo", methods={"DELETE"})
     */
    public function delete(int $id): JsonResponse
    {
        $todo = $this->todoRepository->findOneBy(['id' => $id]);

        $this->todoRepository->delete($todo);

        return $this->json([], Response::HTTP_OK);
    }

    /**
     * @Route("/todo/{id}/complete", name="complete_todo", methods={"PATCH"})
     */
    public function complete(Request $request, $id): JsonResponse
    {
        /*TODO: Validate body fields */
        $body = json_decode($request->getContent(), true);
        $todo = $this->todoRepository->findOneBy(['id' => $id]);

        $todo->markAsCompleted($body['completed']);

        $this->todoRepository->save($todo);

        return $this->json($todo, Response::HTTP_OK);
    }
}
