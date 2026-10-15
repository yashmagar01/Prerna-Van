# Prerna Tirth — Inspire. Connect. Transform.

Static-first Next.js website for the Prerna Tirth community initiative
(प्रेरणा तीर्थ), associated with Maitri Hills, Maharashtra. One public route
(`/`); no accounts, forms, booking, or data collection. All copy and imagery
are provisional pending stakeholder review.

## Run it
Prerequisites: Node 20+ LTS, npm.

- `npm install` — install dependencies
- `npm run dev` — local development
- `npm run lint` · `npm run typecheck` — quality gates
- `npm run build` · `npm run start` — production build + serve

No environment variables required (`.env.example` holds placeholders only;
`.env.local` is gitignored). The build needs no credentials.

## Where things live
| Path | What |
|---|---|
| `app/`, `components/`, `content/`, `public/images/` | application (Next.js App Router) |
| `Prerna-Van/` | frozen V0.1 prototype reference — do not modify |
| `ARCHITECTURE.md` / `DESIGN.md` / `VALUES.md` | canonical system, design, philosophy |
| `docs/product/` | scope, routes, conditional data proposals |
| `docs/engineering/` | security plan, test strategy, future Supabase guide ref |
| `docs/decisions/` | architecture decision records (D1–D8) |
| `docs/operations/` | *(reserved — Phase 07 deployment/maintenance)* |
| `docs/migration/` | audits, stakeholder review, historical phase reports |
| `Questionnaires/` | stakeholder questionnaire (unanswered) |

## Rules for contributors
- Content integrity: provisional labels stay; no invented events, prices, partnerships, testimonials, or claims (`VALUES.md` §10–§11).
- Static-first: no Supabase, API, auth, or forms until a feature passes all eight `docs/migration/SUPABASE_SETUP.md` §1 gates.
- Small diffs, `ponytail:` comments for deliberate simplifications, conventional-commit prefixes.
- Docs: one authoritative home per topic (table in `docs/migration/DOCUMENTATION_RECONCILIATION_REPORT.md`); link, don't duplicate.
