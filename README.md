# beacon-responder

A lightweight Express.js HTTP service written in TypeScript.

## Endpoints

All routes are prefixed with `/api/v1`.

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/v1/health` | Health check — returns `Up and running` |
| `POST` | `/api/v1/loopback` | Echoes back the JSON request body |
| `PUT` | `/api/v1/loopback` | Echoes back the JSON request body |
| `GET` | `/api/v1/commands` | Returns a static JSON array of commands |

## Development

### Prerequisites

- Node.js 20+
- npm

### Install dependencies

```bash
npm install
```

### Run in development mode

```bash
npm run dev
```

The server starts on port `3000` by default. Override with the `PORT` environment variable.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run the compiled app from `dist/` |
| `npm run dev` | Run directly with `ts-node` (no compile step) |
| `npm run lint` | Lint source files with ESLint |
| `npm test` | Run tests with Jest |

## Docker

### Build and run with Docker Compose

```bash
docker compose up --build
```

The service is available at `http://localhost:3199`.

### Build image manually

```bash
docker build -t beacon-responder .
docker run -p 3199:3000 beacon-responder
```

## Project Structure

```
beacon-responder/
├── src/
│   ├── routes/
│   │   ├── health.ts
│   │   ├── loopback.ts
│   │   └── commands.ts
│   ├── app.ts          # Express app (no listen)
│   └── server.ts       # Entry point
├── tests/
│   ├── health.test.ts
│   ├── loopback.test.ts
│   └── commands.test.ts
├── Dockerfile
├── docker-compose.yml
├── tsconfig.json
├── jest.config.ts
└── .eslintrc.json
```
