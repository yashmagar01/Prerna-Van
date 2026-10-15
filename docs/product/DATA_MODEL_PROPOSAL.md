# DATA MODEL PROPOSAL — V1: no schema (Phase 01)

**Decision: create zero tables in V1.** The verified prototype performs no reads or writes — every section is static copy plus three local images. A database would be speculative infrastructure with no approved workflow behind it. The app must build and render with no Supabase credentials and no database availability.

## Conditional candidates (from ARCHITECTURE.md §5 — proposals only, not approved)
| Entity | Justifying requirement (must be stakeholder-approved first) |
|---|---|
| `contact_submissions` | approved contact/join form with defined fields, retention, and responder |
| `join_requests` | approved joining workflow (fields + approval vs automatic + what "Free for All" means) |
| `events` | confirmed recurring public events needing dates/registration rather than static mention |
| `stories` / `media_assets` | approved publishing workflow with content owner + consent tracking for identifiable people |
| `profiles` / member records | confirmed authenticated-member requirement (auth itself deferred) |

Rules when (and only when) a candidate is approved: minimal fields for the stated purpose; UUID keys, timestamps, constraints per query pattern; RLS policies written and tested before exposure; retention/deletion expectations documented; migrations version-controlled under `supabase/migrations/` — never manual DB edits.

## Static content stays in code
Philosophy, mantra, experiences preview, place distinction, Instagram link: typed constants in `content/site.ts`. No CMS, no admin table, no "editable copy" schema until a content owner and publishing workflow are confirmed.
