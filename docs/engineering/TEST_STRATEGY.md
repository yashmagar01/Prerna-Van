# TEST STRATEGY — V1 migration + future gates (Phase 01)

Scale to risk: the V1 site is static content + one menu interaction, so checks are lightweight and mostly manual; automated tests grow only when server/data logic appears. Never mark a check passed without evidence.

## Phase 02 gates (framework setup)
- `npm run dev` serves `/` with no Supabase credentials set.
- `npm run build` (production) succeeds; `npm run typecheck` (strict) clean; `npm run lint` clean.
- No secrets in repo: grep for key patterns + confirm `.env.example` has placeholders only; `.env.local` gitignored.

## Phase 03 gates (design parity — old vs new side by side)
- Functional: all 10 anchors resolve; header/footer nav + 3 CTAs work by mouse, touch, keyboard; mobile menu opens/closes on link + Escape with focus return and correct `aria-expanded`/label; zero nonfunctional controls; no console errors; all 3 images load with alt text.
- Visual/responsive: 360px mobile, 768px tablet, 1280px desktop — no horizontal overflow; single-column collapse at 860px; image crops (4/4.6) and typography match prototype; Devanagari mantra renders correctly (conjuncts, line-height, no clipping) with and without webfonts.
- Accessibility: skip link; heading order h1→h2→h3; landmarks (header/main/footer/nav); `:focus-visible` earth outline on all interactives; 44px+ touch targets; `prefers-reduced-motion` disables smooth scroll/transitions; contrast spot-check text (ink/muted on ivory, ivory on forest-deep).

## Phase 04+ gates (only when a data workflow is approved)
- Migration applies cleanly to a fresh project (`supabase db reset` equivalent); build still passes without production credentials.
- RLS tests: anonymous cannot read private rows or enumerate submissions; unauthorized writes rejected; cross-user access denied. Each policy gets positive + negative cases.
- Form tests: valid submission persists end-to-end; invalid input → 400 with field messages; no false success on failure; PII absent from logs; rate limit returns 429 under abuse test.

## Regression + release
- Every phase: `git diff` review, parity re-check of untouched sections, QA + SECURITY_REVIEW records (passed/failed/blocked/n/a with evidence). Rollback = `Prerna-Van/` reference intact; V1 has no DB to roll back.
