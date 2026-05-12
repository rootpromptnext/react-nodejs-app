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

\`\`\`
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
\`\`\`

---

# Prerequisites

Install:

- Node.js
- npm
- Git

Verify:

\`\`\`bash
node -v
npm -v
git --version
\`\`\`

---

# Clone Repository

\`\`\`bash
git clone <YOUR_GIT_REPO_URL>

cd fullstack-app
\`\`\`

---

# Backend Setup

Go to backend folder:

\`\`\`bash
cd backend
\`\`\`

Install dependencies:

\`\`\`bash
npm install
\`\`\`

Start backend server:

\`\`\`bash
node server.js
\`\`\`

Expected output:

\`\`\`
Backend running on port 5000
\`\`\`

Backend API:

\`\`\`
http://localhost:5000/tasks
\`\`\`

---

# Frontend Setup

Open NEW terminal.

Go to frontend folder:

\`\`\`bash
cd frontend
\`\`\`

Install dependencies:

\`\`\`bash
npm install
\`\`\`

Start React frontend:

\`\`\`bash
npm start
\`\`\`

Frontend URL:

\`\`\`
http://localhost:3000
\`\`\`

---

# How Application Works

\`\`\`
React Frontend
      ↓ API Calls
Node.js Backend
      ↓
In-Memory Data Storage
\`\`\`

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

\`\`\`bash
cd backend
node server.js
\`\`\`

Terminal 2:

\`\`\`bash
cd frontend
npm start
\`\`\`

---

# Common Commands

## Install Dependencies

\`\`\`bash
npm install
\`\`\`

## Start Backend

\`\`\`bash
node server.js
\`\`\`

## Start Frontend

\`\`\`bash
npm start
\`\`\`

## React Production Build

\`\`\`bash
npm run build
\`\`\`

---

# Production Build

React production artifact:

\`\`\`
frontend/build/
\`\`\`

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

\`\`\`
Developer Push
      ↓
CI/CD Pipeline
      ↓
Docker Build
      ↓
Container Registry
      ↓
Kubernetes Deployment
\`\`\`

EOF
```

---

# Verify README

```bash
cat README.md
```

---

# Push to Git

```bash
git add .

git commit -m "Added README"

git push
```

---

# Final Run Commands

## Backend

```bash
cd backend

npm install

node server.js
```

---

## Frontend

```bash
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
