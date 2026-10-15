# STAKEHOLDER REVIEW — Prerna Tirth website (Phase 08, 2026-10-15)

Respondent of record: Athrva Adagale (questionnaire issued, **unanswered**). Nothing below invents his or anyone's answers. Every unknown is marked **Pending stakeholder confirmation**.

## 1. Purpose + current scope
Prerna Tirth (प्रेरणा तीर्थ) — "Inspire. Connect. Transform." — is presented in working docs as an open, community-driven initiative around nature, human connection, learning, reflection, and joy, physically associated with Maitri Hills (Kadus–Rajgurunagar, Pune district). The live deliverable is a **static single page** (`/`, 10 blocks: header → hero → story → philosophy → mantra → experiences → place → connect → footer) with no forms, accounts, booking, or data collection. Mantra: "छान छान मी क्षणोक्षणी प्रत्येक क्षणी 🌿".

## 2. Established (technical) vs awaiting approval (content)
**Established by evidence/audit:** single-page anchor IA; static-first architecture; Next.js 15 + strict TS + Tailwind v4; no DB/auth/API; all 8 tokens, fonts, 860px breakpoint, image crops; Instagram as the only outbound channel; provisional labels on unconfirmed copy.
**Awaiting approval — everything in §3.** Technical readiness does not approve a single word of copy or any image for publication.

## 3. Stakeholder questions (priority order)
Each: why it matters → what it unblocks. Options are suggestions only.

1. **Homepage headline + mission wording?** Current H1 is an explicitly labeled placeholder. Matters: it is the first thing visitors read; nothing may ship as "official" until worded by you. Options: approve as-is / supply final wording / supply Marathi-first variant. Unblocks: launch.
2. **May the 3 current stills publish? Do they show identifiable people with consent?** They are reel-footage crops, captioned "illustrative only". Matters: publishing faces (esp. youth) without consent is the project's top legal/reputational risk. Options: approve / replace with named approved photos / keep with consent log. Unblocks: launch.
3. **Is `@preranatirth` the official channel? Any contact details to publish?** Matters: the site's only CTA points there; no phone/email/form exists by design. Options: confirm handle / add WhatsApp / add email / keep Instagram-only. Unblocks: launch.
4. **Which activities/facilities are currently offered, and are any paid?** Page lists agri-walks, meals, pool, boating, sports, tractor rides, sessions with a "not confirmed" hedge. Matters: visitors will arrive expecting them; "Free for All" must be defined before it becomes a promise. Unblocks: launch (or narrowed copy).
5. **What is the Prerna Tirth ↔ Maitri Hills relationship, in one approved sentence?** Matters: the site's core distinction (why vs where) must not misstate legal/operational reality. Unblocks: launch.
6. **Verify or strike: `सोच` camp (May 2025, 120 attendees), MANS association, Arvind Jagtap inauguration, Dr. Ramlal Katariya + Sachin Chavan roles, distances (51–53 km Pune / 140 km Mumbai)?** Matters: named people, partners, and figures need confirmation before being stated as fact. Unblocks: launch (as-is, corrected, or removed).
7. **Mantra spelling, translation, and script default?** Matters: mantra is the identity centerpiece; translation is currently an interpretation. Related: default language Marathi vs English (Q28 suggestion: Marathi). Unblocks: launch copy.
8. **Eyebrow text contrast (earth #b97855 on ivory = 3.25:1, below AA)?** Technical carry-over, not a regression. Matters: small caps headings fail accessibility AA. Options: darken text-only usage / accept with note. Unblocks: polish, not launch.
9. **Should visitors be able to contact/join/participate via the site?** Matters: a "yes" triggers the entire Phase 05 track (fields, owner, retention, RLS, abuse prevention); default remains Instagram DM until approved. Unblocks: future features only.
10. **If a form is approved: exact fields, who responds, retention/deletion, minimum age/consent?** Matters: personal-data collection needs purpose, owner, and retention before a single row is stored (Supabase gates §1). Unblocks: future features only.
11. **Events/registration/gallery/member areas needed, or is static information enough?** Matters: each implies schema, auth, or CMS work; none is assumed. Unblocks: future features only.
12. **Who owns and updates site content after launch?** Matters: publishing workflow, review cadence, who approves photos. Unblocks: operations handover.

## 4. Launch vs future split
- **Launch-blocking (§3 Q1–Q7):** headline, image consent, channel/contact, activity/pricing truth, Tirth↔Hills sentence, name/figure verification, mantra text.
- **Future-only (§3 Q9–Q12 + Q8 polish):** join/contact workflows, personal data handling, events/registration, gallery/CMS, auth, contrast token tweak.

## 5. Smallest safe launch set
Approve Q1–Q7 (or explicitly narrow the copy: e.g. drop unverified figures, keep hedges). Everything else ships as-is with its provisional labels. No code changes are needed to launch once copy + consent are confirmed — only the approved text swaps in.

## 6. Deferred until a feature passes all eight gates
**Supabase, authentication, APIs, and database-backed workflows remain deferred** until a specific stakeholder-approved feature satisfies every `SUPABASE_SETUP.md` §1 gate (approved need, fields+purpose, owner, retention, access model, established auth need, designed+tested RLS, acceptance criteria + test plan). No project, schema, or credential work begins before then.

## 7. Decision log
| # | Decision | Owner | Date | Rationale | Status |
|---|---|---|---|---|---|
| D-01 | Static-first single page; no DB/auth/API/forms | Tech (audit evidence) | 2026-10-15 | Zero data behavior in verified prototype | Established |
| D-02 | Tokens, palette, breakpoint, fonts carry over verbatim | Tech (DESIGN.md provisional) | 2026-10-15 | Only stakeholders may rebrand | Established (tokens provisional) |
| D-03 | Instagram as sole CTA channel | Pending stakeholder confirmation | — | Only verified public channel found | Proposed |
| D-04 | Q1–Q7 answers (mission, consent, activities, relationship, names, mantra, channel) | Athrva Adagale / org | — | Required for truthful launch | Pending |
| D-05 | Any join/contact/event/auth feature | Athrva Adagale / org | — | Triggers Phase 05 + 8 Supabase gates | Pending (deferred) |
