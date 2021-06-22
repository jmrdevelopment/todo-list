# To-do list

This project is a To-do list management test

Make sure that docker and docker-compose is installed.

Run this command for first time to build and up the containers:

### `docker-compose up -d`

Check if all the containers (nginx, php, mysql and react) are running:

### `docker ps`

Stop all running containers:

### `docker kill $(docker ps -q)`

Once all is up, run the following command to run the migrations:

### `docker exec -it teamcmp_php bin/console doctrine:migrations:migrate`

The API is available at:

### `http://localhost:8080/todo` (A Postman collection is attached)

The client is available at:

### `http://localhost:3000`
