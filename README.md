# Full Stack React + Node.js CRUD App

Simple CRUD application using:

- React
- Bootstrap 5
- Node.js
- Express

---

# Project Structure

```text
fullstack-app/
├── backend/
├── frontend/
├── .gitignore
└── README.md
````

---

# Prerequisites

Install:

* Node.js
* npm
* Git

Verify:

```bash
node -v
npm -v
git --version
```

---

# Clone Repository

```bash
git clone <YOUR_GIT_REPO_URL>

cd fullstack-app
```

---

# Run Backend

Open terminal 1:

```bash
cd backend

npm install

node server.js
```

Backend runs on:

```text
http://localhost:5000
```

---

# Run Frontend

Open terminal 2:

```bash
cd frontend

npm install

npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# Application Flow

```text
React Frontend
      ↓
Node.js Backend
      ↓
CRUD API
```

---

# CRUD APIs

| Method | API        |
| ------ | ---------- |
| GET    | /tasks     |
| POST   | /tasks     |
| PUT    | /tasks/:id |
| DELETE | /tasks/:id |

---

# Build React App

```bash
cd frontend

npm run build
```

Build artifact:

```text
frontend/build/
```



```
```
