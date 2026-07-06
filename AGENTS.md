# AGENTS

## Commands
- Install deps with `bun install` to match `bun.lock`. Existing scripts are standard Expo scripts, so `npm run <script>` also works after install.
- Start dev server with `npm run start`. Platform shortcuts: `npm run android`, `npm run ios`, `npm run web`.
- Lint with `npm run lint` (`expo lint`).
- There is no `typecheck` script; use `npx tsc --noEmit`.
- `npm test` runs `jest --watchAll`, which is interactive. For one-off verification, prefer `npx jest --runInBand` or `npx jest path/to/file.test.ts --runInBand`.

## Required Env
- TMDB access is required through `EXPO_PUBLIC_MOVIE_DB_URL` and `EXPO_PUBLIC_MOVIE_DB_KEY` (`.env.template`). These are read client-side in `core/api/movie-api.ts`, so only `EXPO_PUBLIC_*` names will work.

## App Wiring
- This is an Expo Router app: `package.json` sets `main` to `expo-router/entry`.
- `app.json` enables Expo Router `typedRoutes`; keep route changes consistent with typed href usage.
- Route entrypoints are in `app/`: `/` redirects to `/home`, with screens at `app/home/index.tsx`, `app/search/index.tsx`, and `app/movie/[id].tsx`.
- `app/_layout.tsx` is the shared root: it imports `app/global.css`, wraps the app in `GestureHandlerRootView`, and provides the single React Query `QueryClientProvider`. Keep new global providers there.

## Code Structure
- `presentation/` contains UI and hooks.
- `core/actions/` contains API-facing use cases.
- `core/api/movie-api.ts` is the shared Axios client.
- `infrastructure/` holds external API interfaces and mappers.
- `config/helpers/` contains small shared helpers.

## Styling
- NativeWind is enabled in both `babel.config.js` and `metro.config.js`; Metro points NativeWind at `app/global.css`.
- Tailwind content scanning only includes `app/**/*` and `presentation/**/*`. If you add styled components outside those trees, update `tailwind.config.js` or classes will not compile.

## Build / Release
- EAS profiles are defined in `eas.json`: `development` uses a development client, `preview` builds an internal APK, and `production` is the release channel with auto-increment enabled.

## Current Testing Reality
- No committed test files were found in the repo. If you add tests, avoid relying on `npm test` for CI-style verification because it starts watch mode.
