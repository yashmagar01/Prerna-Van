# SECURITY PLAN — V1 static + future boundaries (Phase 01)

## V1 posture: static public site, no trust surface beyond the browser
- Public content requires no authentication; nothing to authorize against (no DB, no API, no cookies, no storage).
- Only network dependencies: self-hosted fonts (via `next/font`) and the Instagram outbound link. No analytics, no fetch, no third-party scripts.
- Threats to verify in QA: secret leakage in bundle/commits, dead/nonfunctional controls implying unavailable functionality, personal-data collection (must be zero in V1), `Media/` footage entering bundle/history.

## Runtime + environment conventions
- Node 20+ LTS (Vercel default at install time); npm + committed `package-lock.json`.
- Scripts: `dev`, `build`, `start`, `lint`, `typecheck` (tsc `--noEmit`).
- Naming: `NEXT_PUBLIC_` prefix **only** for non-sensitive browser config — V1 needs none. All future keys/tokens stay server-only (`SUPABASE_SERVICE_ROLE_KEY` etc. never prefixed, never imported into client components).
- `.env.example`: placeholder names only, no values; V1 may legitimately contain zero entries — that is correct, not an omission. Real values live in Vercel secret storage / local `.env.local` (gitignored, never committed).
- Local vs production: same static build; no credential-dependent code paths. If optional services are added later, public pages must fail safe without them.

## Client/server separation (Next.js)
- Default to Server Components; exactly one client component for the mobile nav (`MobileNav`, event handlers only). No `use client` anywhere else.
- Future server-only modules (`lib/supabase/server/*`, validation, rate limiting) must never be imported by client components — enforce by code review; add `server-only` import guard when the first server module appears.
- Future forms/APIs: validate + size-limit all input server-side; consistent status codes (400/401/403/404/429/5xx); no stack traces, credentials, or provider errors to users; rate-limit public endpoints; never log PII; never expose submissions publicly.

## Future Supabase requirements (triggered only by an approved data workflow)
- Enable RLS on every exposed table before any client read; explicit per-operation policies; least-privilege roles; service-role key server-only.
- RLS/authorization tests (unauthorized + cross-user cases) must pass before the feature ships — see `TEST_STRATEGY.md`.
- Media: publish only consented, approved assets; private uploads stay private; no PII in public storage.

## Explicitly deferred (no implementation until approved need)
Authentication, admin access, event registration, contact/join persistence, file uploads, email/OTP integrations. Collecting personal data without a documented purpose and responder is prohibited.
