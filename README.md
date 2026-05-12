# Full Stack React + Node.js CRUD Application

Modern Full Stack CRUD Application using:

- React
- Bootstrap 5
- Node.js
- Express

---

# Project Architecture

Frontend:
- React
- Bootstrap 5
- Axios

Backend:
- Node.js
- Express

---

# Project Structure

```
fullstack-app/
│
├── backend/
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── package.json
│   └── src/
│
├── .gitignore
└── README.md
```

---

# Prerequisites

Install:

- Node.js
- npm
- Git

Verify:

```
node -v
npm -v
git --version
```

---

# Clone Repository

```
git clone <YOUR_GIT_REPO_URL>

cd fullstack-app
```

---

# Backend Setup

Go to backend folder:

```
cd backend
```

Install dependencies:

```
npm install
```

Start backend server:

```
node server.js
```

Expected output:

```
Backend running on port 5000
```

Backend API:

```
http://localhost:5000/tasks
```

---

# Frontend Setup

Open NEW terminal.

Go to frontend folder:

```
cd frontend
```
Install dependencies:

```
npm install
```

Start React frontend:

```
npm start
```

Frontend URL:

```
http://localhost:3000
```

---

# How Application Works

```
React Frontend
      ↓ API Calls
Node.js Backend
      ↓
In-Memory Data Storage
```

---

# CRUD Operations

| Operation | API |
|---|---|
| Create | POST /tasks |
| Read | GET /tasks |
| Update | PUT /tasks/:id |
| Delete | DELETE /tasks/:id |

---

# Running Both Together

Terminal 1:

```
cd backend
node server.js
```

Terminal 2:

```
cd frontend
npm start
```

---

# Common Commands

## Install Dependencies

```
npm install
```

## Start Backend

```
node server.js
```

## Start Frontend

```
npm start
```

## React Production Build

```
npm run build
```

---

# Production Build

React production artifact:

```
frontend/build/
```

Node.js backend is usually packaged using:

- Docker
- Kubernetes

---

# Recommended Next Steps

Enhancements:

- MongoDB
- JWT Authentication
- Docker
- Kubernetes
- NGINX
- CI/CD Pipelines
- Helm
- ArgoCD
- Monitoring

---

# Example DevOps Flow

```
Developer Push
      ↓
CI/CD Pipeline
      ↓
Docker Build
      ↓
Container Registry
      ↓
Kubernetes Deployment
```



---

# Verify README

```
cat README.md
```

---

# Push to Git

```
git add .

git commit -m "Added README"

git push
```

---

# Final Run Commands

## Backend

```
cd backend

npm install

node server.js
```

---

## Frontend

```
cd frontend

npm install

npm start
```

---

# URLs

| Service     | URL                           |
| ----------- | ----------------------------- |
| Frontend    | `http://localhost:3000`       |
| Backend API | `http://localhost:5000/tasks` |
