# DOCUMENTATION INVENTORY — Phase A audit (2026-10-15, pre-move)

No files moved yet. All paths verified against the working tree.

## 1. Every Markdown file (23)
**Tracked, root working sources (5):** `Prerna Tirth Hub.md`, `Prerna Tirth Philosophy.md`, `Maitri Hills Operations.md`, `Prerna Tirth Digital Footprint.md`, `reel_study.md`.
**Tracked, prototype spec (3):** `Prerna-Van/ARCHITECTURE.md` (status: Proposed), `Prerna-Van/DESIGN.md`, `Prerna-Van/VALUES.md`.
**Tracked, requirements (1):** `Questionarries/Prototype_V1_Questionnaire.md` (unanswered; dir name misspelled) + `Questionarries/questions.txt` (non-md, same purpose).
**Untracked, migration record (14 in `docs/migration/`):** `BASELINE.md`, `FEATURE_INVENTORY.md`, `RISKS.md`, `ARCHITECTURE_DECISIONS.md`, `ROUTE_MAP.md`, `DATA_MODEL_PROPOSAL.md`, `SECURITY_PLAN.md`, `TEST_STRATEGY.md`, `SUPABASE_SETUP.md`, `STAKEHOLDER_REVIEW.md`, `PHASE_02_REPORT.md`, `PHASE_03_REPORT.md`, `PHASE_04_REPORT.md`, `PHASE_08_REPORT.md`.
**Missing:** `README.md`; root `ARCHITECTURE.md` / `DESIGN.md` / `VALUES.md`.

## 2. Internal links: nearly none — refs are bare filenames
Only external links are Instagram URLs (Hub, reel_study). Cross-doc refs use bare names (`ROUTE_MAP.md`, `TEST_STRATEGY.md`, `SUPABASE_SETUP.md`) or `docs/migration/`-relative paths in phase reports. Moving files breaks no Markdown hyperlinks; textual path refs are catalogued in §5.

## 3. Duplicates + overlaps
- **D1 (resolve by promotion):** `Prerna-Van/{ARCHITECTURE,DESIGN,VALUES}.md` are the project's canonical content but undiscoverable inside the prototype dir. Root copies become canonical; originals freeze as prototype reference.
- **D2 (resolve by ownership):** secret/RLS/form rules appear in both `SECURITY_PLAN.md` and `SUPABASE_SETUP.md`. Fix: `SECURITY_PLAN` owns current static-site posture and links out; `SUPABASE_SETUP` owns future data-feature rules.
- **D3 (resolve by ownership):** architecture decisions live in both `Prerna-Van/ARCHITECTURE.md` (proposal) and `ARCHITECTURE_DECISIONS.md` (V1 rulings). Fix: root `ARCHITECTURE.md` = as-built canonical; decisions file moves to `docs/decisions/` unchanged in rulings.
- **D4 (keep):** `questions.txt` vs `Prototype_V1_Questionnaire.md` overlap by design (short vs full questionnaire). Keep both, note relationship.

## 4. Contradictions / staleness (historical reports stay verbatim; noted here)
- **C1:** `BASELINE.md` "No package.json anywhere" — true 2026-10-15 AM, false after Phase 02. Time-bound audit claim, not an error.
- **C2:** `Prerna-Van/ARCHITECTURE.md` multi-route IA diagram vs as-built single route — proposal vs ruling; root `ARCHITECTURE.md` records the ruling with pointer to proposal.
- **C3:** `Questionarries/` misspelled. Fix with history-preserving rename.
- **C4:** No doc currently states file-ownership or the docs taxonomy. This reorg creates it.
- No doc promises unapproved features; no secrets found in any doc.

## 5. Textual path refs that moves will affect
- `ARCHITECTURE_DECISIONS.md` → cites `docs/migration/BASELINE.md` (stays), bare `ROUTE_MAP.md`/`DATA_MODEL_PROPOSAL.md`/`TEST_STRATEGY.md` (moving — refs updated at move time to `../product/`, `../engineering/`).
- `SECURITY_PLAN.md` → bare `TEST_STRATEGY.md` (same-dir move — stays valid).
- `PHASE_04_REPORT.md`, `PHASE_08_REPORT.md`, `STAKEHOLDER_REVIEW.md` → `SUPABASE_SETUP.md` (stays in migration — unaffected).
- `VALUES.md` §13 source list uses root filenames (unaffected; questionnaire cited by file name only).

## 6. Movement map (proposed → Phase B approval: execute as-is)
| Source | Destination | Kind |
|---|---|---|
| *(new)* | `README.md` | create: entry point |
| `Prerna-Van/ARCHITECTURE.md` | `ARCHITECTURE.md` | **rewrite** as as-built canonical (proposal stays frozen in place) |
| `Prerna-Van/DESIGN.md` | `DESIGN.md` | promote verbatim + provenance header + as-built token pointer |
| `Prerna-Van/VALUES.md` | `VALUES.md` | promote verbatim + provenance header |
| `docs/migration/ARCHITECTURE_DECISIONS.md` | `docs/decisions/ARCHITECTURE_DECISIONS.md` | move + update 3 path refs |
| `docs/migration/SECURITY_PLAN.md` | `docs/engineering/SECURITY_PLAN.md` | move (TEST_STRATEGY ref stays same-dir) |
| `docs/migration/TEST_STRATEGY.md` | `docs/engineering/TEST_STRATEGY.md` | move verbatim |
| `docs/migration/ROUTE_MAP.md` | `docs/product/ROUTE_MAP.md` | move verbatim |
| `docs/migration/DATA_MODEL_PROPOSAL.md` | `docs/product/DATA_MODEL_PROPOSAL.md` | move verbatim |
| `Questionarries/` | `Questionnaires/` | history-preserving rename (fixes C3) |
| `docs/operations/` | — | **reserved, not created** (Phase 07 owns it; no empty dirs) |
| everything else in `docs/migration/` | — | stays (historical evidence) |
| root working sources, `Prerna-Van/`, app code | — | untouched |

Conventions recorded: UPPER_SNAKE doc names; `ponytail:` code comments; conventional-commit prefixes (`feat:`, `docs:`, `assets:`); provisional-copy labels stay until stakeholder approval.
