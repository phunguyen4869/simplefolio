# simplefolio — Roadmap

## Milestone: Portfolio ops clarity

### Overview
- **Version**: 1.0.1
- **Goal**: Make local Docker run and GitHub Pages deploy obvious without changing the site.
- **Phases**: 2
- **Status**: Not Started

---

### Phase 1: Docker usage docs
**Goal**: A reader can start the site with Docker and know the port and caveats.
**Estimated Tasks**: 1
**Dependencies**: None

| Task | Description | Acceptance Criteria | Complexity |
|------|-------------|---------------------|------------|
| 1.1 | Write Docker usage documentation | Doc covers `docker compose up --build`, URL `http://localhost:4869/`, bind mount + `CHOKIDAR_USEPOLLING`, and how it differs from `npm start` (port 1234) | S |

**Verification**:
- [ ] Doc exists and matches `Dockerfile` + `docker-compose.yml`
- [ ] No application source change required

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
