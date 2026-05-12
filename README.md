# `.gitignore`

Create at project root:

```bash id="jlwm0q"
cat > .gitignore << 'EOF'

# =========================
# Dependencies
# =========================

node_modules/
**/node_modules/

# =========================
# Build Artifacts
# =========================

build/
dist/

# =========================
# Environment Files
# =========================

.env
.env.*

# =========================
# Logs
# =========================

*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# =========================
# Coverage
# =========================

coverage/

# =========================
# IDE Files
# =========================

.vscode/
.idea/

# =========================
# OS Files
# =========================

.DS_Store
Thumbs.db

EOF
```

---

# `README.md`

Create at project root:

```bash id="7mx3zs"
cat > README.md << 'EOF'
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

---

# Future Enhancements

- MongoDB
- Docker
- Kubernetes
- CI/CD
- JWT Authentication
- Helm
- ArgoCD

EOF
```

---

# Push to Git

```bash id="jlwm8n"
git add .

git commit -m "Added README and gitignore"

git push
```
