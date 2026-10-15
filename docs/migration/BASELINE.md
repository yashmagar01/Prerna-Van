# BASELINE — Prerna Tirth website (Phase 00 audit, 2026-10-15)

Repo root: `Prerna-tirth/` (git, branch `main`, tree clean — no uncommitted changes).
Live prototype: `Prerna-Van/index.html` + `styles.css` + `script.js` (static, no build step; open `index.html` directly).

## Structure
- `Prerna-Van/` — `index.html` (178 lines), `styles.css` (133 lines, tokens mirror `DESIGN.md`), `script.js` (20 lines, mobile menu only), `assets/` (3 JPGs: `dome-lake.jpg` 95KB, `banyan-gathering.jpg` 254KB, `swing.jpg` 236KB), `ARCHITECTURE.md`, `DESIGN.md`, `VALUES.md`.
- Root docs: `Prerna Tirth Hub.md`, `Prerna Tirth Philosophy.md`, `Maitri Hills Operations.md`, `Prerna Tirth Digital Footprint.md`, `reel_study.md`.
- `Questionarries/` — `Prototype_V1_Questionnaire.md` (32 Qs, respondent Athrva Adagale, **unanswered**), `questions.txt`.
- `Media/` — 18 local `.mp4` reels (~290MB, gitignored); not referenced by the site.
- No `package.json`, lockfile, `tsconfig`, `next.config`, tests, `.env`, CI, or deployment config anywhere in repo (searched recursively). Node v22 available locally but unused.

## Runtime
No server, no DB, no auth, no forms, no analytics. Only external deps: Google Fonts (graceful offline fallback) + Instagram outbound link. `node --check script.js` passes.

## Asset/path verification
All `src=`/`href=` refs resolve: `styles.css`, `script.js`, 3 local images, anchor ids `#top #main #story #philosophy #experiences #place #connect` all exist. No broken paths. Images have descriptive alt text; hero uses `fetchpriority="high"`, others `loading="lazy"`.

## Known defects / gaps
- Headline/hero copy explicitly marked placeholder; mission wording unconfirmed.
- Page states stills are "illustrative only, pending approved photography and consent review" — consent status unresolved.
- No contact details, forms, events, gallery, or registration (by design).
- `Media/*.mp4` duplicates local footage; only 3 stills extracted for the site.
- No contrast/reduced-motion/keyboard testing evidence beyond code inspection.
- Doc-vs-code conflict: none functional. Note: `ARCHITECTURE.md` proposes multi-route Next.js IA (about/activities/events/gallery/contact) but prototype is a single page — expected at V0.1, route decision deferred to Phase 01.

## Stakeholder decisions required (see RISKS.md)
Questionnaire unanswered; mission wording, activity availability/pricing, Prerna Tirth↔Maitri Hills relationship, media consent, Instagram authority, language default, join/contact workflow, auth needs.
