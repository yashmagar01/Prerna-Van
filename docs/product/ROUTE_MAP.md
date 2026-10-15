# ROUTE MAP — V1 (Phase 01)

## Primary route
| Route | Source | Renders |
|---|---|---|
| `/` | `app/page.tsx` | full single page: hero → story → philosophy → mantra → experiences → place → connect + header/footer from `app/layout.tsx` |

No other routes in V1. No `/about /activities /events /gallery /contact` — those names appear only as unapproved possibilities in ARCHITECTURE.md §3/§8, and the verified prototype has no such pages.

## Section anchors (preserve exact ids from `Prerna-Van/index.html`)
| Anchor | Section | Nav label |
|---|---|---|
| `#top` | hero | brand home |
| `#story` | Our story | Our Story |
| `#philosophy` | Inspire → Connect → Transform | Philosophy |
| `#experiences` | What happens here | Experiences |
| `#place` | Tirth vs Hills | The Place |
| `#connect` | Instagram CTA | Connect (button) |
| `#main` | main landmark | skip link target only |

Header and footer nav both link to the same anchors (footer order: story, philosophy, experiences, place, Instagram). Anchor behavior: smooth scroll; `prefers-reduced-motion` falls back to instant; sticky header offsets handled with `scroll-margin-top` in `globals.css`. Mobile menu closes on link activation or Escape and returns focus to the menu button (parity with `script.js`).

## Outbound
- `https://www.instagram.com/preranatirth` (`_blank` + `noopener`) — header-adjacent CTA + footer. Only verified public channel; authority still to confirm.

## Future-route criteria (any addition needs its own decision record)
1. Stakeholder-approved content that breaks single-page flow (e.g. confirmed event calendar needing shareable per-event URLs).
2. Dynamic workflow approved (form confirmation pages, member areas).
3. Content volume that harms `/` load/scroll (gallery archive with consent-cleared assets).
Until then: one route. No placeholder routes, no empty pages to "fill later".
