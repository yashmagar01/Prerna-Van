# RISKS — migration + content (Phase 00)

## Blocking stakeholder decisions (questionnaire unanswered — do not invent answers)
1. Official mission/hero wording (current H1 is placeholder).
2. Which activities/facilities are currently offered, availability, pricing — site must not imply all are free/available.
3. Prerna Tirth ↔ Maitri Hills operational/legal relationship; named individuals (Dr. Ramlal Katariya, Sachin Chavan), partners (MANS, Arvind Jagtap), and `सोच` camp figures need confirmation before being stated as fact.
4. Media consent: current stills cropped from reel footage; youth/camp imagery especially sensitive. Confirm `@preranatirth` is the official channel.
5. Language default (Marathi vs English) and join/contact workflow; auth explicitly deferred per Q23 suggestion — needs confirmation.
6. Content ownership / who approves and maintains the site.

## Technical / migration risks
- **Scope creep (main risk):** ARCHITECTURE.md lists candidate tables/routes (events, stories, contact_submissions, auth, admin) — all conditional/deferred. Mitigation: single-page static migration first; no Supabase tables until a workflow is approved.
- **Design-token drift:** tokens live in `styles.css :root`; Tailwind migration must map 1:1 (values already documented in-file). Low risk.
- **Devanagari rendering:** Noto Sans Devanagari via Google Fonts with system fallback; verify conjuncts/line-height at 360px width during Phase 03.
- **Media weight:** `Media/` ~290MB gitignored but present locally; ensure it never enters the Next.js bundle or git history. Only `Prerna-Van/assets/` (~585KB total) migrates to `public/`.
- **No test/build baseline:** nothing to regress against except manual inspection; add `tsc` + build as the first gate in Phase 02.
- **Secrets:** no secrets exist today; risk is future — enforce `.env.example` placeholders-only rule from Phase 02 onward.

## Content-integrity boundaries (from VALUES.md/DESIGN.md, carry forward)
No claims about legal status, therapeutic outcomes, leadership, membership numbers, partnerships, or availability without confirmation. Provisional copy stays labeled provisional.
