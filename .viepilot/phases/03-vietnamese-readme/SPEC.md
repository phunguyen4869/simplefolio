# Phase 3: Vietnamese README - Specification

## Overview
- **Goal**: Full README in Vietnamese. English README stays.
- **Dependencies**: Phase 1 Docker facts (already in README.md). Not Phase 2.
- **Estimated Tasks**: 1
- **Request**: ENH-001

## Objective

Translate the current `README.md` into `README.vi.md`. Link it once from the top of `README.md`.

## Scope

### In Scope
- `README.vi.md` covering every section in the current English README
- One language link in `README.md` (near the title)
- Commands, URLs, ports, file paths copied verbatim

### Out of Scope
- Replacing or rewriting the English body
- Translating `src/index.html` or the live site
- Phase 2 deploy-branch work
- Changing Docker or app source

## Requirements

### Functional
- Sections match: features, why, getting started, prerequisites, npm/yarn, Docker, deployment notes, and any later sections present in `README.md` at execution time
- Docker facts: `docker compose up --build`, `http://localhost:4869/`, `docker compose down`, bind mount, `/app/node_modules` volume, `CHOKIDAR_USEPOLLING=true`, npm port 1234

### Non-Functional
- Prose Vietnamese. Identifiers English.
- No new dependency. No version bump (docs-only, SYSTEM-RULES).

## Acceptance Criteria

- [ ] `README.vi.md` is a section-parallel translation of `README.md`
- [ ] English `README.md` diff is only the language link (plus whitespace if required for that link)
- [ ] `Dockerfile`, `docker-compose.yml`, `src/` untouched

## Technical Notes

Re-read `README.md` at execution time. FEAT-001 Docker section is already in that file (local commit `8d8e8d0`). Do not invent a second command set.

Upstream badge URLs (cobiwave) stay as URLs. Do not retarget them.

## References

- Architecture: `.viepilot/ARCHITECTURE.md`
- Context: `.viepilot/PROJECT-CONTEXT.md`
- Rules: `.viepilot/SYSTEM-RULES.md`
- Request: `.viepilot/requests/ENH-001.md`
