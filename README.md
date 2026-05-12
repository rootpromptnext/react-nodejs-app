# Modern Full Stack React + Node.js CRUD App

Modern CRUD application using:

- React
- Modern UI
- Node.js
- Express

---

# Project Structure

```
modern-fullstack-app/
├── backend/
├── frontend/
├── .gitignore
└── README.md
```

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

# Clone Repository

```
git clone <YOUR_GIT_REPO_URL>

cd modern-fullstack-app
```

# Run Backend

Open terminal 1:

```
cd backend

npm install

node server.js
```

Backend runs on:

```
http://<SERVER-IP>:5000
```

Example:

```
http://192.168.1.21:5000/tasks
```

# Run Frontend

Open terminal 2:

```
cd frontend

npm install

npm start
```

Frontend runs on:

```
http://<SERVER-IP>:3000
```

Example:
```
http://192.168.1.21:3000
```

# CRUD APIs

| Method | API |
|---|---|
| GET | /tasks |
| POST | /tasks |
| PUT | /tasks/:id |
| DELETE | /tasks/:id |


# Build React Application

```
cd frontend

npm run build
```

Build artifact:

```
frontend/build/
```


