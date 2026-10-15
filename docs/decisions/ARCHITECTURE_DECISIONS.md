# ARCHITECTURE DECISIONS — Prerna Tirth V1 (Phase 01, 2026-10-15)

Baseline: `../migration/BASELINE.md`. Prototype is static HTML+CSS+20 lines of JS; no server, DB, auth, forms, or build. Questionnaire unanswered. Everything below follows from that evidence.

## D1. Next.js App Router + React + strict TypeScript + Tailwind, single app
**Decision:** one Next.js application serves public pages and any future server-side operations. No separate Express/Fastify service.
**Rationale:** current site has zero server behavior; Next.js Route Handlers cover any approved form/API need. A second server adds deploy, auth, and CORS surface for no verified use case.
**Alternatives rejected:** React SPA + standalone API (loses SSR/SEO for a content site, doubles hosting); separate backend folder now (speculative scaffolding).
**Consequence:** if a genuinely independent consumer or background-job load appears, revisit with a documented use case.

## D2. Single-page IA preserved: `/` + existing anchors
**Decision:** V1 route is `/` only; nav links to `#story #philosophy #experiences #place #connect` (see `../product/ROUTE_MAP.md`).
**Rationale:** matches verified prototype; `Prerna-Van/ARCHITECTURE.md` multi-route IA (about/activities/events/gallery/contact) was illustrative, never approved.
**New routes only when:** stakeholder-approved content exists that (a) exceeds one page's narrative flow, or (b) needs its own shareable URL (e.g. confirmed recurring events). Each addition needs its own decision record.

## D3. Static-first, no database, no API, no auth in V1
**Decision:** all existing sections ship as static content (classification in §D6). No Supabase tables, no endpoints, no Auth, no Storage in V1. App builds and renders fully without credentials.
**Rationale:** nothing on the page reads/writes data. Creating schema for `events/contact_submissions/join_requests` without an approved workflow is the exact speculative build `Prerna-Van/ARCHITECTURE.md` warns against.
**Deferred:** contact/join persistence, event registration, member accounts, admin/CMS, uploads, payments — each gated on the stakeholder decision listed in `../product/DATA_MODEL_PROPOSAL.md`.

## D4. Design tokens migrate 1:1 to Tailwind theme
**Decision:** map all 8 colors, 3 font roles, spacing scale, radius, max-width, and the 860px breakpoint verbatim (mapping table in §D5). No new brand colors, no asset replacement.
**Rationale:** `styles.css :root` already mirrors `../../DESIGN.md`; visual identity is provisional and only stakeholders can change it.

## D5. Token mapping (`styles.css` → Tailwind v4 `@theme`)
| CSS variable | Value | Tailwind token | Use |
|---|---|---|---|
| `--forest` | `#294a38` | `--color-forest` | primary actions, accents |
| `--forest-deep` | `#1e382b` | `--color-forest-deep` | headings, dark bands, footer |
| `--sage` | `#a8b7a0` | `--color-sage` | secondary accents, note borders, mantra sub |
| `--ivory` | `#f7f4ec` | `--color-ivory` | page background |
| `--earth` | `#b97855` | `--color-earth` | eyebrows, focus ring, path arrows |
| `--ink` | `#292c27` | `--color-ink` | body text |
| `--muted` | `#596658` | `--color-muted` | secondary text, captions |
| `--border` | `#d9dfd3` | `--color-border` | dividers, card outlines |
| `--font-display` | Lora, Noto Serif Devanagari, Georgia, serif | `--font-display` | h1–h3, brand text |
| `--font-body` | Inter, Noto Sans Devanagari, system-ui | `--font-sans` (default) | body, UI |
| `--font-mr` | Noto Sans Devanagari first | `--font-mr` | `[lang=mr]`, numerals १२३, brand mark |
| `--sp-1…12` | 4–96px | default spacing scale covers 4/8/12/16/24/32/48/64/96 | section rhythm |
| `--radius` | `10px` | `--radius-card: 10px` | images, duo cards |
| `--max` | `1120px` | `--container-site: 1120px` | `.wrap` |
| breakpoint `860px` | — | `md:` at 860px (not default 768px) | hero/split/duo/path/nav collapse |
| focus | `3px solid earth + 2px offset` | base style `:focus-visible` | keyboard visibility |
| reduced motion | `scroll auto`, no transitions | `motion-safe:` / media query in `globals.css` | accessibility |
| image crops | `aspect 4/4.6` hero/split | utility class | preserve current crops |
| buttons | pill 999px, min-h 48/44px | `PrimaryButton`/`SecondaryButton` variants | forest fill + ghost |

Fonts load via `next/font/google` (Lora, Inter, Noto Sans Devanagari) — same families, self-hosted instead of `<link>`; page stays readable if fonts fail.

## D6. Section classification (static-first)
| Section | Class |
|---|---|
| Header/nav, hero, story, philosophy, mantra, experiences, place, connect, footer — all copy + images | Static content |
| Mobile menu open/close, Escape-to-close, smooth scroll | Client-side interaction (one small client component; everything else server-rendered) |
| Server-side functionality required | None |
| Database-backed functionality required | None |
| Deferred pending approval | Contact/join forms + persistence, events/registration, gallery/CMS, auth, uploads, i18n routing |

## D7. App location + structure
Next.js app lives at **repo root** (prototype is the whole site; no monorepo need). `Prerna-Van/` stays untouched as reference until parity, then retired per rollback plan. Structure:
```
app/layout.tsx app/page.tsx app/globals.css
components/{SiteHeader,MobileNav,SiteFooter,SectionHeading,PrimaryButton,PhilosophyPath,ExperienceSection,MantraSection,ImageFigure}
content/site.ts  public/images/  lib/ (utils only; supabase/ only when Phase 04 justifies it)
supabase/migrations/ (only when a table is approved)
tests or co-located checks (see `../engineering/TEST_STRATEGY.md`)
docs/migration/  .env.example (placeholders only; likely empty until Phase 04)
```
Ownership: `layout.tsx` = metadata/fonts/shell; `page.tsx` = section composition from `content/site.ts`; `globals.css` = tokens + base; components own one section/behavior each; no per-element micro-components.

## D8. Runtime/env (detail in `../engineering/SECURITY_PLAN.md`)
Node 20+ LTS (match Vercel default at install time); npm + `package-lock.json`; scripts `dev/build/start/lint/typecheck`; `NEXT_PUBLIC_` only for non-sensitive config (none needed in V1); secrets server-only, never committed.

## Deferred register (needs stakeholder/requirement trigger)
Auth, admin/CMS, event registration, contact persistence, Storage uploads, i18n, analytics, secondary backend, multi-route IA. Static-first approval is technical only — copy/imagery stay provisional.
