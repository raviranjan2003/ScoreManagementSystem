# [Setup Instructions](https://github.com/raviranjan2003/ScoreManagementSystem)

Follow these instructions to set up the Modular Player Score Management System on your local in Node.js and Docker.

## Prerequisites

- Node.js and npm installed on your system.
- Docker installed on your system.

## Setup to docker

### 1. Clone the Repository

```bash
    git clone https://github.com/raviranjan2003/ScoreManagementSystem.git
```


```bash
    cd ScoreManagementSystem
```


### 2. Run Docker Image
```bash
    docker-compose up
```


### 3. Stop the container
```bash
    docker-compose down
```
- Note: If step 2 won't work, run the following command
```bash
    docker build -t modulePlayer .
```
```bash
    docker run -p 3000:3000 modulePlayer
```
### 5. Send request 
```bash
    curl http://localhost:3000/players
```

### 6. You can make requests to below api endpoints.
##### You can make request using postman as well as curl

| Method | API Endpoints                           | Request Body                                      | CURL Command                                           |
|--------|-----------------------------------------|---------------------------------------------------|--------------------------------------------------------|
| POST   | http://localhost:3000/players           | {"name": "Ravi","country": "IN","score": 200} | ```curl -X POST -H "Content-Type: application/json" -d '{"name": "Ravi","country": "IN","score": 200}' http://localhost:3000/players``` |
| PUT    | http://localhost:3000/players/:id (id : 654d3cb2309e38e6adb981b9)     | {"name": "Ravi Ranjan","score": 100}               | ```curl -X PUT -H "Content-Type: application/json" -d '{"name": "Ravi Ranjan","score": 100}' http://localhost:3000/players/:id``` |
| DELETE | http://localhost:3000/players/:id       |                                                   | ```curl -X DELETE http://localhost:3000/players/:id``` |
| GET    | http://localhost:3000/players           |                                                   | ```curl http://localhost:3000/players```                |
| GET    | http://localhost:3000/players/rank/:val |                                                   | ```curl http://localhost:3000/players/rank/:val```      |
| GET    | http://localhost:3000/players/random    |                                                   | ```curl http://localhost:3000/players/random```         |
