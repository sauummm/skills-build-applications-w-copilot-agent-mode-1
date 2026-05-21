# OctoFit Tracker - Modern Multi-Tier Application

A full-stack fitness tracking application built with React 19, Node.js/Express, TypeScript, and MongoDB.

## Project Structure

```
octofit-tracker/
├── frontend/           # React 19 + Vite frontend (Port: 5173)
├── backend/            # Node.js + Express + TypeScript backend (Port: 8000)
└── docker-compose.yml  # MongoDB configuration (Port: 27017)
```

## Prerequisites

- Node.js 18+ with npm
- Docker & Docker Compose (for MongoDB)
- Git

## Setup Instructions

### 1. Install Dependencies

**Frontend:**
```bash
cd octofit-tracker/frontend
npm install
```

**Backend:**
```bash
cd octofit-tracker/backend
npm install
```

### 2. Start MongoDB

From the octofit-tracker directory:
```bash
docker-compose up -d
```

This will start MongoDB on `localhost:27017` with the octofit database.

### 3. Start Development Servers

**Backend (in one terminal):**
```bash
cd octofit-tracker/backend
npm run dev
```

The backend will run on `http://localhost:8000`

**Frontend (in another terminal):**
```bash
cd octofit-tracker/frontend
npm run dev
```

The frontend will run on `http://localhost:5173`

## Available Scripts

### Frontend
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm run dev` - Start TypeScript development server with ts-node
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start compiled JavaScript server

## Architecture

### Frontend
- **Framework:** React 19
- **Bundler:** Vite
- **Port:** 5173
- **Features:** Fast refresh, optimized builds, dev proxy to backend

### Backend
- **Runtime:** Node.js
- **Framework:** Express
- **Language:** TypeScript
- **Database:** MongoDB
- **Port:** 8000
- **Features:** CORS enabled, environment configuration via .env

### Database
- **System:** MongoDB
- **Port:** 27017
- **Container:** Docker
- **Database Name:** octofit

## API Endpoints

- `GET /` - API status
- `GET /health` - Health check endpoint

## Environment Variables

### Backend (.env)
```
PORT=8000
MONGODB_URI=mongodb://localhost:27017/octofit
```

## Development Workflow

1. Changes to frontend JSX files trigger instant Vite hot module reload
2. Changes to backend TypeScript files are watched by ts-node for automatic restart
3. Backend proxy to `/api/*` endpoints automatically routes to `http://localhost:8000`

## Stopping Services

**Stop MongoDB:**
```bash
docker-compose down
```

**Stop Development Servers:**
- Press `Ctrl+C` in the respective terminal windows

## MongoDB Connection

The backend connects to MongoDB using the MONGODB_URI from .env:
- Development: `mongodb://localhost:27017/octofit`
- Connection status is logged on backend startup

## Troubleshooting

**Port Already in Use:**
- Frontend (5173): Change port in `frontend/vite.config.js`
- Backend (8000): Change PORT in `backend/.env`
- MongoDB (27017): Change in `docker-compose.yml`

**MongoDB Connection Fails:**
- Ensure Docker daemon is running
- Check MongoDB container: `docker ps`
- View logs: `docker-compose logs mongodb`

**TypeScript Compilation Errors:**
- Run `npm run build` in backend to verify configuration
- Check `tsconfig.json` settings

## Next Steps

1. Add authentication (JWT)
2. Create database models and schemas
3. Implement API routes
4. Add frontend components and routing
5. Add testing frameworks (Jest, Vitest)
6. Configure CI/CD pipeline
