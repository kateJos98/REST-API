# REST API – Node.js

This microservice exposes a REST API with Express.js.

## Endpoints

- `GET /` → Welcome message
- `GET /hello` → Returns a JSON message

## ▶️ Run locally

```bash
npm install
node server.js
 
 

## 🐳 Run with Docker

docker build -t katyjoseth719/rest-api .
docker run -p 3000:3000 --name rest-api katyjoseth719/rest-api

🌐 Access
http://localhost:3000/hello → Returns a JSON message