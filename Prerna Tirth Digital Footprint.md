---
type: diagnostics
domain: isolated_organization
tags: 
  - prerna-tirth/digital-presence
  - metrics
  - scraping
---

# 📱 Prerna Tirth Digital Footprint

> [!warning] Security Context
> This file contains diagnostic intelligence scraped via headless browsers and SSR token extraction. The data serves as a mirror for the organization's outward facing digital projection.

## 📊 Account Metrics (Base Extraction)
- **Instagram Handle:** `@preranatirth`
- **Internal Meta ID:** `17841470953986163`
- **Full Associated Name:** Maitri Hills Resort Pune Rajgurunagar
- **Followers:** ~1,946 (Extracted from edge cache, actively growing)
- **Total Posts:** ~34

## 🧠 Digital Strategy Analysis
1. **The "0 Following" Rule:**
   The account follows **0** other handles. Psychologically, this is an institutional strategy. It prevents the timeline from diluting its focus, stops algorithm leakage, and frames `@preranatirth` strictly as an authoritative community hub/broadcast center rather than a peer-to-peer personal networking account.
2. **Visual Consistency:**
   Heavy reliance on reels featuring natural backgrounds and group presence (implied by the "Join the Journey" call to action).

## 🛠️ Scraper Diagnostic (Internal)
An attempt was made on `2026-10-05` to dump the deep reel metrics (Likes, Comments, Exact Views) using the `link.finder.acc` session credentials via `yt-dlp` and raw `curl` GraphQL execution. 

**Result:** `429 Too Many Requests | 401 Unauthorized (Gatekeeper)`
- **Failure Mode:** Instagram's `web_profile_info` GraphQL endpoint hard-blocked the request.
- **Root Cause:** The scraper account (`42922184065` / `link.finder.acc`) has been heavily rate-limited or soft-banned by Instagram's anti-bot system.
- **Resolution Path:** 
  1. Halt automated curl queries using this specific `cookies.txt` file.
  2. Log in manually on a mobile device on LTE (new IP).
  3. Export a brand-new `sessionid` and use proper `x-ig-app-id` paired headers for future extractions.
