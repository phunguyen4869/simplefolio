# Stack index

Project-local lookup. Guidance below is from installed versions + existing config — not a fresh official-docs crawl (brownfield, known stacks).

| Stack | Version | Role |
|-------|---------|------|
| Node.js | >=18 (`.nvmrc` = 22) | Runtime |
| Parcel | ^2.16.4 | Bundler / dev server |
| Bootstrap | ^5.3.8 | UI |
| Sass | via `@parcel/transformer-sass` | Styles |
| Docker | node:22-alpine | Local run |
| Prettier | ^3.9.6 | Format |

## Do
- `npm ci` in image; `npm start` locally (port 1234). Docker CMD overrides to port 4869 + `--host 0.0.0.0`.
- Keep Bootstrap imported through `src/sass/vendors/_bootstrap.scss` (Sass import path already fixed).
- Bind mount source; anonymous volume on `/app/node_modules`.

## Don't
- Don't `COPY` then also expect host `node_modules` inside the container.
- Don't publish 1234 in compose — container listens on 4869.
- Don't treat GH Pages workflow (`main`) as the local branch (`master`) without checking.

## Pitfalls
- `CHOKIDAR_USEPOLLING=true` required for file watch on bind mount.
- `.dockerignore` excludes `*.md` — docs are not in the image (fine for a static site).
- CI workflow targets branch `main`; this clone's default branch is `master`.
