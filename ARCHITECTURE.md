# Prerna Tirth — System Architecture (canonical, as-built V1)

> This is the authoritative architecture. The original proposal lives frozen
> at `Prerna-Van/ARCHITECTURE.md` (status: Proposed, pre-build). Rulings that
> refined it are recorded in `docs/decisions/ARCHITECTURE_DECISIONS.md` (D1–D8).
> Philosophy: `VALUES.md`. Visual system: `DESIGN.md`.

## 1. What the system is
A static-first single-page website. One public route `/` (sections
`#top #story #philosophy #experiences #place #connect`, map:
`docs/product/ROUTE_MAP.md`). No server behavior, no database, no
authentication, no forms, no analytics. It builds and renders with zero
credentials and zero network requests for application data.

## 2. Stack
Next.js 15 App Router · React 19 · strict TypeScript · Tailwind CSS v4 ·
Node 20+ · npm + lockfile. Server Components by default; exactly one client
component (`components/MobileNav.tsx`). Fonts self-hosted via `next/font`
(Lora, Inter, Noto Sans Devanagari). No Supabase SDK, no Express/Fastify, no
state-management library — each rejected in D1–D3 with rationale; a separate
backend requires a documented use case plus approval of its operational cost.

## 3. Boundaries
- **Public content** (`app/`, `components/`, `content/site.ts`, `public/images/`)
  renders without any service. Optional future data services must fail safe.
- **Server-side** exists only as Next.js primitives (Route Handlers / Server
  Actions) when an approved workflow needs them — none exists yet.
- **Data layer:** none. Tables, Auth, and Storage arrive only through the
  eight gates in `docs/migration/SUPABASE_SETUP.md` §1. Conditional candidates
  (never schema): `docs/product/DATA_MODEL_PROPOSAL.md`.
- **Secrets:** server-only, deployment-platform managed, never `NEXT_PUBLIC_`,
  never committed. Full rules: `docs/engineering/SECURITY_PLAN.md`.

## 4. Constraints carried forward
Static-first is a technical ruling, not content approval — all copy and
imagery stay provisional per `docs/migration/STAKEHOLDER_REVIEW.md`. No
booking, registration, contact persistence, member, CMS, payment, or AI
features without stakeholder approval. Provisional labels must not be
silently removed. `Media/` footage stays out of the bundle and git history;
`Prerna-Van/` stays frozen as reference until parity retirement is approved.

## 5. Status
| Area | Position |
|---|---|
| Framework + migration | Built, verified (Phase 02/03 reports) |
| Data/auth/API | Deferred, gated |
| Deployment target | Vercel or compatible host (proposed, Phase 07 owns setup) |
| Content approval | Pending (stakeholder review) |
