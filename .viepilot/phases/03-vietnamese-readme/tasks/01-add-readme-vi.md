# Task 3.1: Add README.vi.md and one English link

## Meta
- **Phase**: 3-vietnamese-readme
- **Status**: not_started
- **Complexity**: S
- **Dependencies**: Phase 1 Docker section already in README.md
- **Git Tag**: simplefolio-vp-p3-t1
- **Request**: ENH-001

## Objective

Vietnamese twin of the full README. English file stays. One link from English to Vietnamese.

## Pre-execution documentation gate (doc-first; BUG-001)

**Complete before any implementation commits.**

- [x] Task contract fields below are filled with real paths (no `{{PLACEHOLDER}}`).
- [x] `## Paths` lists every file to create or modify.
- [x] `## File-Level Plan` explains what and why.
- [ ] `.viepilot/phases/03-vietnamese-readme/PHASE-STATE.md` marks this task `in_progress` before the first implementation commit.

If any box is unchecked when coding starts → blocked; finish the plan first.

## Paths
```yaml
files_to_create:
  - README.vi.md
files_to_modify:
  - README.md
```

## File-Level Plan
- `README.vi.md`: translate every section of current `README.md`. Keep fenced commands, URLs, ports, and paths identical. Translate headings and prose only.
- `README.md`: add one line under the title linking to `README.vi.md` (for example `Tiếng Việt`). Do not edit the Docker section or any other English paragraph.

## UI Prototype Reference
- Prototype: none
- Key sections: none
- Component target: none

## Context Required
```yaml
files_to_read:
  - README.md
  - Dockerfile
  - docker-compose.yml
  - .viepilot/requests/ENH-001.md
  - .viepilot/SYSTEM-RULES.md
```

## Acceptance Criteria
- [ ] `README.vi.md` covers the same sections as `README.md` at execution time
- [ ] Docker facts present: `docker compose up --build`, `http://localhost:4869/`, port 1234 is npm-only, bind mount, `node_modules` volume, `CHOKIDAR_USEPOLLING`
- [ ] `README.md` diff is only the language link
- [ ] `Dockerfile`, `docker-compose.yml`, and `src/` unchanged

## Best Practices to Apply
- [ ] Re-read README.md immediately before translating so FEAT-001 text is the source
- [ ] Do not translate shell commands or config keys
- [ ] Verification is heading/grep compare, not a new test framework

## Do / Don't
### Do
- Keep image URLs and badge markdown intact
- Mention both ports in Vietnamese prose

### Don't
- Don't replace `README.md`
- Don't add `docs/docker.md` or a third copy of the commands
- Don't touch Phase 2 files (`.github/workflows/gh-pages.yml`)

## Implementation Notes
```
(AI ghi lại notes trong quá trình implement)
- Decisions made: README.vi.md + one link (evolve, 2026-09-25)
- Issues encountered:
- Deviations from plan:
```

## Verification
```yaml
automated:
  - command: "grep -n '4869' README.vi.md"
    expected: "at least one match"
  - command: "grep -n 'CHOKIDAR_USEPOLLING' README.vi.md"
    expected: "one match"
  - command: "grep -n 'README.vi.md' README.md"
    expected: "one link"
  - command: "git diff --name-only -- README.md"
    expected: "README.md only if the language link is the change; no Dockerfile or src/"

manual:
  - description: "Skim README.vi.md headings against README.md; commands in fences match"
    required: true
```

## State Update Checklist
- [ ] Update `.viepilot/phases/03-vietnamese-readme/PHASE-STATE.md` after PASS
- [ ] Update `.viepilot/TRACKER.md`
- [ ] Update `.viepilot/HANDOFF.json`
- [ ] Update `.viepilot/ROADMAP.md` if phase status changed
- [ ] Mark ENH-001 done when the file lands

## Files Changed
```
(Auto-populated after completion)
```

## Rollback
```bash
git revert --no-commit $(git rev-list simplefolio-vp-p3-t1..simplefolio-vp-p3-t1-done)
```
