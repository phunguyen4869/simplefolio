# simplefolio — System Rules

## Architecture
- Static site only. Do not add a server process except Parcel (dev or build).
- Docker is a dev convenience. Production path is `npm run build` → `dist/` → GitHub Pages.

## Coding
- Match existing style: small JS modules, SCSS partials, Bootstrap classes in HTML.
- No new dependency for a task that stdlib, Parcel, or Bootstrap already covers.
- Prettier is installed (`.prettierrc` is `{}`). Format touched files; do not add ESLint unless requested.

## Comments
- Good: one line on a non-obvious constraint (`// Lazy so tilt failure cannot block ScrollReveal`).
- Bad: comments that restate the next line.

## Versioning
- SemVer. Current: 1.0.1 (package.json).
- Docs-only changes do not require a version bump unless the user asks.

## Git
- Default branch: `master`.
- Prefer Conventional Commits for ViePilot-driven work (`docs:`, `chore:`, `fix:`).
- Do not force-push. Do not commit unless the user asks.

## Changelog
- Keep a Changelog sections: Added / Changed / Fixed / Removed.
- Upstream history is not rewritten.

## Quality gates
- `npm run build` succeeds before a deploy-related change is called done.
- No test suite exists. Do not invent a framework. A docs change needs no test.

## Stack-specific
- Parcel 2: entry is `package.json` `"source": "src/index.html"`.
- Bootstrap Sass: import via `src/sass/vendors/_bootstrap.scss` only.
- Docker: container port 4869, host port 4869. Do not document port 1234 as the Docker URL.
