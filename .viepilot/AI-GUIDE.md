# simplefolio — AI Guide

## Quick context
- Static one-page portfolio. Parcel 2 bundles `src/index.html`.
- ViePilot profile: none.
- Brownfield import 2026-09-25. No architect workspace. UI direction skipped — assumptions in ARCHITECTURE.md.

## Where to look

| Need | File |
|------|------|
| Page content | `src/index.html` |
| Entry script | `src/index.js` |
| Styles | `src/styles.scss` → `src/sass/**` |
| Reveal / tilt | `src/scripts/`, `src/data/scrollRevealConfig.js` |
| Assets | `src/assets/` (profile, resume, project image) |
| Run locally | `npm start` → http://localhost:1234/ |
| Run Docker | `docker compose up --build` → http://localhost:4869/ |
| Deploy | `.github/workflows/gh-pages.yml` (branch `main`, output `dist/`) |
| Rules | `.viepilot/SYSTEM-RULES.md` |
| Scope | `.viepilot/PROJECT-CONTEXT.md` |

## Load order
1. PROJECT-CONTEXT.md (scope + anti-goals)
2. ARCHITECTURE.md (only if changing run/deploy)
3. The file you will edit — do not load all of `src/sass/` unless the task is visual.

## Do not
- Do not add a backend, DB, or API unless a request says so.
- Do not rewrite the template layout as part of a docs/ops task.
