# SUPABASE SETUP — future integration guide (Phase 04, 2026-10-15)

**Status: no Supabase project exists, no SDK installed, no tables, no credentials. This guide is actionable preparation only — do not execute it until a data-backed workflow meets every gate in §1.**

## 1. Gates: all must be met before introducing Supabase
1. A stakeholder-approved feature requires persistent data (approval recorded, not assumed).
2. Its data fields and collection purpose are defined and minimal.
3. A content/workflow owner is identified (who responds, who maintains).
4. Retention + deletion expectations are documented where personal data is involved.
5. The access model is defined (who reads/writes what).
6. The need for authentication is established, not assumed (default: none).
7. RLS policies are designed and there is a test plan for allowed + denied access.
8. The feature has acceptance criteria.

Starting point: `DATA_MODEL_PROPOSAL.md` lists conditional candidates (`contact_submissions`, `join_requests`, `events`, `stories`/`media_assets`, `profiles`). **None is approved.** Promoting one requires passing the gates above first.

## 2. Project selection / creation (when gated)
- Create one Supabase project per environment (dev, then production) from the Supabase dashboard; note the project ref.
- Record the project URL + ref in the phase report — never credentials.
- Enable only the services the approved feature needs (Postgres always; Auth/Storage only if gated).

## 3. Credential handling
| Value | Kind | Where it lives | Browser? |
|---|---|---|---|
| Project URL (`https://<ref>.supabase.co`) | public config | `.env.local` locally; deployment secret settings in prod | May appear client-side **only** with the publishable key |
| Anon/publishable key | limited by RLS | same as above | Yes, only alongside tested RLS |
| Service-role key | **privileged secret** | server only (Route Handlers / server modules); deployment secret settings; never committed | **Never** — bundling it is a breach; rotate immediately if exposed |
| Database password | **privileged secret** | migrations/CLI use locally; deployment settings | Never |

- Local: values go in `.env.local` (gitignored, confirmed ignored in Phase 04 audit). Nothing else reads them.
- Production: values set in the deployment platform's secret settings (Vercel Environment Variables), never in code or `.env.example`.
- `.env.example`: placeholder **names** only, added alongside the first real variable (currently correctly empty of vars).
- `.env.local` stays gitignored because it holds real secrets on a developer's disk; history must never contain them (no `git add -f`, no echoing into tracked files).

## 4. Verifying secrets stay out of bundles + history
- `git status` shows no `.env.local`; `git log -p` / `git grep` finds no key patterns (audit method used in Phase 04: search tracked sources for `service.?role`, `sk-`, `NEXT_PUBLIC_` + review `.env.example` by eye).
- No `NEXT_PUBLIC_` secret: that prefix inlines the value into client JS. Only non-sensitive config may use it (V1 needs none).
- When server modules arrive, import them only from server components/route handlers; add the `server-only` package guard so a client import fails the build instead of leaking.
- If a credential leaks: rotate it in Supabase immediately, purge the commit only if unpushed (`git rm` + new commit won't erase pushed history — rotate first, history rewrite never suffices alone).

## 5. Schema workflow (when a feature passes §1)
1. Define + review the data model (minimal fields, UUID keys, timestamps, constraints per query pattern).
2. Write version-controlled SQL in `supabase/migrations/` (`<timestamp>_<name>.sql`) — never manual dashboard edits; no empty/placeholder migrations.
3. Define RLS policies **in the same migration** as the tables (deny-by-default; explicit per-operation grants).
4. Apply to dev (`supabase db push` against the dev project or local stack).
5. Test allowed access **and** explicitly denied access (anonymous read of private rows, cross-user writes) — must fail closed.
6. Verify reproducibility: migration applies cleanly to a fresh database.
7. Production: apply through a controlled release (same migration files, reviewed), never ad-hoc SQL.
8. Rollback = forward-fix migration (down-migrations optional but documented); data-loss steps need explicit approval.

## 6. Runtime rules (when implemented)
- Privileged operations server-side only; pick the Supabase client matching runtime + auth model (`@supabase/ssr` for cookie-based server rendering, plain client only where RLS already constrains).
- RLS on every table exposed via the Data API before any client read.
- Validate + size-limit all untrusted input server-side; consistent 400/401/403/404/429/5xx; no stack traces or provider errors to users; no PII in logs.
- Never expose submissions publicly; never collect fields beyond the stated purpose.
- Public pages render fully with data services unavailable (fail safe, no false success).
- No SDK installs until this guide's §1 gates pass — packages (`@supabase/supabase-js`, `@supabase/ssr`, `server-only`) arrive with the first approved feature, not before.
