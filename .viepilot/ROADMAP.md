# simplefolio — Roadmap

## Milestone: Portfolio ops clarity

### Overview
- **Version**: 1.0.1
- **Goal**: Make local Docker run and GitHub Pages deploy obvious without changing the site.
- **Phases**: 3
- **Status**: Phase 1 and 3 complete local (unpushed); Phase 2 not started

---

### Phase 1: Docker usage docs
**Goal**: A reader can start the site with Docker and know the port and caveats.
**Estimated Tasks**: 1
**Dependencies**: None

| Task | Description | Acceptance Criteria | Complexity |
|------|-------------|---------------------|------------|
| 1.1 | Write Docker usage documentation | Doc covers `docker compose up --build`, URL `http://localhost:4869/`, bind mount + `CHOKIDAR_USEPOLLING`, and how it differs from `npm start` (port 1234) | S |

**Verification**:
- [x] Doc exists and matches `Dockerfile` + `docker-compose.yml`
- [x] No application source change required

---

### Phase 2: Deploy branch alignment
**Goal**: CI workflow branch matches the branch that is actually pushed.
**Estimated Tasks**: 1
**Dependencies**: Phase 1 optional (independent)

| Task | Description | Acceptance Criteria | Complexity |
|------|-------------|---------------------|------------|
| 2.1 | Reconcile `gh-pages.yml` (`main`) with local default `master` | Workflow triggers on the branch used for deploy, or docs state the required branch rename | S |

**Verification**:
- [ ] Push to the documented branch runs the Pages workflow, or the mismatch is explicitly documented as accepted

---

### Phase 3: Vietnamese README
**Goal**: Vietnamese readers get the full README without losing the English file.
**Estimated Tasks**: 1
**Dependencies**: Phase 1 (Docker facts). Independent of Phase 2.
**Request**: ENH-001

| Task | Description | Acceptance Criteria | Complexity |
|------|-------------|---------------------|------------|
| 3.1 | Add `README.vi.md` and one link from `README.md` | Vietnamese prose covers the same sections; commands/ports/paths verbatim; English body otherwise unchanged | S |

**Verification**:
- [x] `README.vi.md` exists and includes Docker port 4869 + `CHOKIDAR_USEPOLLING`
- [x] `README.md` English sections unchanged except a language link
- [x] No change to `Dockerfile`, `docker-compose.yml`, or `src/`
