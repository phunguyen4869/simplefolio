# Task 1.1: Write Docker usage section

## Meta
- **Phase**: 1-docker-usage-docs
- **Status**: not_started
- **Complexity**: S
- **Dependencies**: none
- **Git Tag**: simplefolio-vp-p1-t1
- **Request**: FEAT-001

## Objective

Replace the short Docker note in README with a section that matches the files on disk. A reader without host Node can start the site.

## Pre-execution documentation gate (doc-first; BUG-001)

**Complete before any implementation commits.** This task file is the plan. Filling checkboxes here is allowed before the README edit.

- [x] Task contract fields below are filled with real paths (no `{{PLACEHOLDER}}`).
- [x] `## Paths` lists every file to modify.
- [x] `## File-Level Plan` explains what and why.
- [ ] `.viepilot/phases/01-docker-usage-docs/PHASE-STATE.md` marks this task `in_progress` before the first implementation commit.

If any box is unchecked when coding starts → blocked; finish the plan first.

## Paths
```yaml
files_to_create: []
files_to_modify:
  - README.md
```

## File-Level Plan
- `README.md`: replace the three-line "Or run with Docker" note under Getting Started. Keep one Docker section. State prerequisite (Docker + Compose), `docker compose up --build`, URL `http://localhost:4869/`, stop via `docker compose down`, bind mount `.:/app`, anonymous volume `/app/node_modules`, `CHOKIDAR_USEPOLLING=true`, and that `npm start` still uses port 1234. Do not duplicate the section later in the file.

## UI Prototype Reference
- Prototype: none
- Key sections: none
- Component target: none

## Context Required
```yaml
files_to_read:
  - Dockerfile
  - docker-compose.yml
  - README.md
  - .viepilot/SYSTEM-RULES.md
  - .viepilot/requests/FEAT-001.md
```

## Acceptance Criteria
- [ ] README states `docker compose up --build` and `http://localhost:4869/`
- [ ] README states `npm start` uses port 1234 and Docker does not
- [ ] README mentions bind mount, `node_modules` volume, and `CHOKIDAR_USEPOLLING`
- [ ] Only one Docker usage section in README
- [ ] `Dockerfile` and `docker-compose.yml` unchanged
- [ ] `src/` unchanged

## Best Practices to Apply
- [ ] Commands copied from the compose file, not invented
- [ ] English, short, no new dependency
- [ ] Verification is a read-back against Dockerfile and compose, not a new test framework

## Do / Don't
### Do
- Re-read `Dockerfile` and `docker-compose.yml` immediately before editing README
- Keep the existing npm/Yarn getting-started steps

### Don't
- Don't change ports, CMD, or compose volumes to make the doc easier
- Don't add a second file (`docs/docker.md`) — two docs will drift
- Don't document GitHub Pages branch alignment (Phase 2)

## Implementation Notes
```
(AI ghi lại notes trong quá trình implement)
- Decisions made: extend README only (evolve, 2026-09-25)
- Issues encountered:
- Deviations from plan:
```

## Verification
```yaml
automated:
  - command: "grep -n '4869' README.md"
    expected: "at least one match for the Docker URL/port"
  - command: "grep -n 'CHOKIDAR_USEPOLLING' README.md"
    expected: "one match"
  - command: "git diff --name-only"
    expected: "README.md only (plus ViePilot state files if the executor updates them in the same commit — no Dockerfile, no src/)"

manual:
  - description: "Read README Docker section next to docker-compose.yml; ports and volume lines match"
    required: true
```

## State Update Checklist
- [ ] Update `.viepilot/phases/01-docker-usage-docs/PHASE-STATE.md` after PASS
- [ ] Update `.viepilot/TRACKER.md` with current task/progress
- [ ] Update `.viepilot/HANDOFF.json` to exact resume point
- [ ] Update `.viepilot/ROADMAP.md` if phase progress/status changed
- [ ] Mark FEAT-001 status when the doc lands

## Files Changed
```
(Auto-populated after completion)
```

## Rollback
```bash
# If need to undo this task:
git revert --no-commit $(git rev-list simplefolio-vp-p1-t1..simplefolio-vp-p1-t1-done)
```
