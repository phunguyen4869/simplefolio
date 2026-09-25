# Phase 1: Docker usage docs - Specification

## Overview
- **Goal**: A reader can start the portfolio with Docker and know the port and caveats.
- **Dependencies**: None
- **Estimated Tasks**: 1
- **Request**: FEAT-001

## Objective

Document the existing Docker dev flow. Do not change how the container runs.

## Scope

### In Scope
- One English usage section a new clone can follow
- Commands and ports taken from `Dockerfile` and `docker-compose.yml`
- Difference vs `npm start`

### Out of Scope
- Production image, registry, Kubernetes
- Editing `Dockerfile`, `docker-compose.yml`, or `src/`
- Phase 2 deploy-branch work (`main` vs `master`)
- Rewriting the upstream template README

## Requirements

### Functional
- Reader runs `docker compose up --build` and opens `http://localhost:4869/`
- Reader sees why that port is not 1234
- Reader sees bind mount, `/app/node_modules` volume, and `CHOKIDAR_USEPOLLING`

### Non-Functional
- English (`DOCUMENT_LANG=en`)
- Short. No new dependency. No screenshot required.

## Acceptance Criteria

- [ ] Doc matches `Dockerfile` and `docker-compose.yml` on the day it is written
- [ ] `npm start` port 1234 and Docker port 4869 are both stated
- [ ] No application source change in the phase commit

## Technical Notes

README already has a three-line Docker note (around the Prerequisites section). Extend that note or replace it — do not leave two conflicting Docker sections.

Image: `node:22-alpine`. CMD: `npx parcel src/index.html --host 0.0.0.0 --port 4869`. Compose publishes `4869:4869`.

## References

- Architecture: `.viepilot/ARCHITECTURE.md`
- Context: `.viepilot/PROJECT-CONTEXT.md`
- Rules: `.viepilot/SYSTEM-RULES.md`
- Request: `.viepilot/requests/FEAT-001.md`
