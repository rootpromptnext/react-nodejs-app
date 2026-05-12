# Modern Full Stack React + Node.js CRUD App

Modern CRUD application using:

- React
- Modern UI
- Node.js
- Express

---

# Project Structure

\`\`\`
modern-fullstack-app/
├── backend/
├── frontend/
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

cd modern-fullstack-app
\`\`\`

---

# Run Backend

Open terminal 1:

\`\`\`bash
cd backend

npm install

node server.js
\`\`\`

Backend runs on:

\`\`\`
http://<SERVER-IP>:5000
\`\`\`

Example:

\`\`\`
http://192.168.1.21:5000/tasks
\`\`\`

---

# Run Frontend

Open terminal 2:

\`\`\`bash
cd frontend

npm install

npm start
\`\`\`

Frontend runs on:

\`\`\`
http://<SERVER-IP>:3000
\`\`\`

Example:

\`\`\`
http://192.168.1.21:3000
\`\`\`

---

# CRUD APIs

| Method | API |
|---|---|
| GET | /tasks |
| POST | /tasks |
| PUT | /tasks/:id |
| DELETE | /tasks/:id |

---

# Build React Application

\`\`\`bash
cd frontend

npm run build
\`\`\`

Build artifact:

\`\`\`
frontend/build/
\`\`\`


