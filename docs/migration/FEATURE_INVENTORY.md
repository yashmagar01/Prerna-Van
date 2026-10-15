# FEATURE INVENTORY — Prototype V0.1 (verified against `Prerna-Van/index.html`)

Single-page anchor site. All items below observed in source; no hidden JS behavior.

## Sections (in order)
1. Skip link → `#main`.
2. Sticky header: brand mark `प्रे` + wordmark; nav `Our Story #story`, `Philosophy #philosophy`, `Experiences #experiences`, `The Place #place`, `Connect #connect` (button style). Mobile: hamburger `#menuBtn` toggles `#siteNav.open`; closes on link click or `Escape` (focus returned to button); `aria-expanded`/`aria-label` updated. No focus trap (acceptable for dropdown nav).
3. Hero `#top`: eyebrow, H1 placeholder headline, lede, 2 CTAs (anchors), figure `dome-lake.jpg` + consent disclaimer caption.
4. Story `#story`: pillars line Inspire/Connect/Transform; `banyan-gathering.jpg`; provisional-narrative note.
5. Philosophy `#philosophy`: ordered path Inspire प्रेरणा → Connect जोडणे → Transform परिवर्तन (१२३ numerals); "invitation, never guaranteed outcome" hedge.
6. Mantra band: `छान छान मी क्षणोक्षणी प्रत्येक क्षणी 🌿` + translation caveat.
7. Experiences `#experiences`: 4 items (Nature & land / Food together / Water & play / Learning sessions) + "not yet confirmed" disclaimer; `swing.jpg`; Reflection-and-joy note; `सोच` youth-camp May-2025 reference marked pending confirmation.
8. Place `#place`: duo cards Prerna Tirth (why) vs Maitri Hills (where); no prices/hours/booking by design.
9. Connect `#connect`: Instagram CTA `https://www.instagram.com/preranatirth` (`target=_blank rel=noopener`); "collects nothing" note.
10. Footer: prototype disclaimer + anchor nav + Instagram.

## Links / controls / external
- Internal anchors (10): all resolve. External (3: fonts ×2 preconnect + stylesheet, Instagram ×2): Instagram handle matches Hub doc; fonts optional.
- Interactive controls: menu button + nav links + 3 CTA anchors only. Zero nonfunctional buttons/links — nothing implies unavailable functionality.

## Behaviors
- `scroll-behavior: smooth` + `prefers-reduced-motion: reduce` fallback; `:focus-visible` earth outline; responsive breakpoint 860px (single column, dropdown nav); touch targets ≥44px.
- No forms, no fetch/XHR, no storage, no cookies, no build.
