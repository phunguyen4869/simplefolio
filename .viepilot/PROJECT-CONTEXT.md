<!-- crystallize_version: 3.12.2 -->
# simplefolio — Project Context

## ViePilot active profile (FEAT-009)
None. No `.viepilot/META.md`, no global profile.

<domain_knowledge>
## What This System Does

Personal one-page portfolio for Phú Nguyễn. Fork of the cobiwave/simplefolio template. Shows bio, projects, contact, and a resume PDF. Built as static HTML/SCSS/JS and bundled by Parcel.

## Key Concepts

| Term | Definition |
|------|------------|
| Template | Upstream simplefolio layout. Personalization is content in `src/index.html` + `src/assets/`, not a new design system. |
| Local npm | `npm start` — Parcel on port 1234. |
| Docker dev | `docker compose up --build` — same app on port 4869 inside node:22-alpine. |
| Pages deploy | GitHub Actions publishes `dist/` from branch `main`. |

## Business Rules

- Site is a public portfolio. No accounts, no private data entry.
- Resume and profile image live in `src/assets/`.
- Upstream MIT copyright (Jacobo Martínez, 2019) stays in LICENSE.md.

## Data Relationships

None. No database.
</domain_knowledge>

<product_vision>
## Product vision & phased scope

### Project scope

Keep a working personal portfolio and make local run + deploy understandable. First planned change after crystallize: Docker usage docs (user request, not yet a backlog file).

### Phase overview
| Phase | Goals | Key features |
|-------|-------|--------------|
| Phase 1 | Document how to run with Docker | Usage doc covering compose, port 4869, volume/polling caveats |
| Phase 2 | Align deploy branch story | GH Pages workflow matches the branch actually pushed |

### Anti-goals & explicit non-scope

- No backend, auth, CMS, or database.
- No visual redesign.
- No production Docker image / registry publish unless a later request asks.
- Do not delete upstream template docs wholesale.
</product_vision>

<conventions>
## Naming Conventions

### Code
- JS: camelCase functions, existing file names stay (`scrollReveal.js`, `tiltAnimation.js`).
- SCSS partials: `_name.scss` under `src/sass/{abstracts,base,components,layout,sections,vendors}`.

### Project Specific
- Commits on this fork are short imperative phrases (`update: resume`, `fix: social link`). New ViePilot commits may use Conventional Commits.

## Code Patterns

### Preferred Patterns
- Content edits in `src/index.html` and `src/assets/`.
- Style edits in SCSS partials, not inline HTML styles.

### Anti-patterns to Avoid
- Adding a framework (React, etc.) for a content change.
- Copying `node_modules` into the image and also bind-mounting the host tree without the anonymous volume.
</conventions>

<constraints>
## Must Have

- `npm start` and `docker compose up --build` both serve the same page.
- Tilt failure must not hide page content (existing lazy-import pattern).

## Must NOT

- Must not commit `node_modules/`, `dist/`, or `.parcel-cache/`.
- Must not read or create a secrets `.env` for this static site.

## Performance Requirements

Static page. No SLA. Parcel production build (`npm run build`) must still emit `dist/`.

## Security Requirements

No auth surface. Do not add third-party scripts beyond what the template already loads.
</constraints>

<external_dependencies>
- npm registry: parcel, bootstrap, @popperjs/core, vanilla-tilt, prettier
- Docker Hub: `node:22-alpine`
- GitHub Pages via `crazy-max/ghaction-github-pages`
</external_dependencies>
