# ✨ FEATURE: Docker usage documentation

## Meta
- **ID**: FEAT-001
- **Type**: Feature
- **Status**: done
- **Priority**: should-have
- **Created**: 2026-09-25
- **Reporter**: User
- **Assignee**: AI

## Summary
Write documentation so a reader can run this portfolio with Docker.

## Problem Statement
`Dockerfile` and `docker-compose.yml` exist. README has a three-line Docker note (`docker compose up --build`, port 4869) and nothing else. Prerequisites, volume behavior, polling, and the port difference vs `npm start` are easy to miss.

## Proposed Solution
Add a Docker usage section (README or a short dedicated doc) that matches the files on disk:
- Prerequisite: Docker with Compose
- `docker compose up --build`
- Open `http://localhost:4869/` (not 1234)
- Bind mount `.:/app` plus anonymous volume `/app/node_modules`
- `CHOKIDAR_USEPOLLING=true` so file changes reload
- Stop: `docker compose down`
- Local `npm start` remains port 1234 — Docker does not replace it

## Target Users
Maintainer (PhuNT) and anyone cloning the fork who wants to run without a host Node install.

## Requirements
- Commands must match `Dockerfile` and `docker-compose.yml`
- Do not change app source, ports, or the image unless a bug is found while writing the doc
- Keep upstream MIT notice intact
- Vietnamese or English: document language is English (`DOCUMENT_LANG=en`) unless the user overrides when planning

## Acceptance Criteria
- [x] Doc states `docker compose up --build` and URL `http://localhost:4869/`
- [x] Doc states how Docker differs from `npm start` (port 1234)
- [x] Doc mentions bind mount, `node_modules` volume, and `CHOKIDAR_USEPOLLING`
- [x] No application source change required for this request

## Brainstorm Notes
Skipped. User confirmed 2026-09-25.

## Implementation Plan
Phase 1 task 1.1. Spec: `.viepilot/phases/01-docker-usage-docs/SPEC.md`. Task: `.viepilot/phases/01-docker-usage-docs/tasks/01-write-docker-usage.md`. Edit README only. No version bump.
