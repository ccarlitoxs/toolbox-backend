# toolbox-backend
Technical challenge proyect for Toolbox.

# NPM Install
For Frontend
`cd client && npm install`

For Backend
`npm install`

# API Endpoints
curl --location --request GET 'http://localhost:4000/v1/files/data' --header 'accept: application/json'

curl --location --request GET 'http://localhost:4000/v1/files/data?fileName=test2' --header 'accept: application/json'

curl --location --request GET 'http://localhost:4000/v1/files/list' --header 'accept: application/json'

# Docker
Includes a Dockerfile and docker-compose for development testing

Use `docker compose up --build` to deploy because this is only a test environment and is not ready for production.
