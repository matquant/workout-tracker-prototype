# Workout Tracker

A simple, program-driven workout tracker for Daniel.

## Features

- **Program Driven:** Hardcoded 12-week plan in `src/programs/program-v1.ts`.
- **Rest Timer:** Full-screen timer overlay.
- **Set Logging:** Persistent local storage for session data (until synced).
- **History:** View past workouts.
- **Mobile First:** Optimized for use in gym.

## Setup

1.  **Environment Variables:**
    Copy `.env.example` to `.env` (create one if missing):
    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/workout_tracker?schema=public"
    NEXTAUTH_SECRET="your-secret-key"
    NEXTAUTH_URL="http://localhost:3000"
    APP_PASSWORD="your-strong-password"
    ```

2.  **Database:**
    This app uses Prisma with PostgreSQL.
    ```bash
    npx prisma migrate dev --name init
    ```

3.  **Run Dev Server:**
    ```bash
    npm run dev
    ```

4.  **Visit:** `http://localhost:3000`
    Login with password (default: `password123` or set in `.env`).

## Program Updates

To update the program, edit `src/programs/program-v1.ts` or add a new version file and update `src/programs/index.ts`.

## Deployment (Vercel)

1.  Push to GitHub.
2.  Import project in Vercel.
3.  Add Vercel Postgres integration.
4.  Set Environment Variables in Vercel Dashboard.
5.  Run `npx prisma migrate deploy` during build (or manually).
