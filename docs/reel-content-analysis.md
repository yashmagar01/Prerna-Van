# Reel Content Analysis — Prerna Tirth (2026-10-15)

Reviewable catalogue behind `content/reel-stories.ts`. Public copy lives only
in the content module; uncertainty notes below are internal and must not be
rendered on the website.

## 1. Inventory (actual, not assumed)

`Media/` holds **18 files = 12 unique reels** (7 byte-identical duplicates).
The account does not yield 20–25 distinct local reels; report the 12.

| Reel ID | File | Dur | A/V | Speech signal |
|---|---|---|---|---|
| DbnT1ZlzJuh | `DbnT1ZlzJuh.mp4` (+run2 dup) | 40s | 720p VP9 + AAC | song, no usable speech |
| DKRMLNKTLj8 | `DKRMLNKTLj8.mp4` (+post dup) | 76s | 716p H264 + AAC | ambience, no usable speech |
| DWcGvM1jTL8 | `DWcGvM1jTL8.mp4` (+post dup) | 18s | 720p H264 + AAC | music only |
| DWeoslvDWD7 | `DWeoslvDWD7.mp4` (+post/test dups) | 21s | 720p VP9 + AAC | music only |
| Dd45EYLTj0V | `Dd45EYLTj0V.mp4` (+run2 dup) | 14s | 720p H264 + AAC | silent scenic |
| DbODveDNq1i | `preranatirth_run2_DbODveDNq1i.mp4` | 26s | 1080p60 VP9 + AAC | speech present, unintelligible to models |
| DcantXrtLl9 | `preranatirth_run2_DcantXrtLl9.mp4` | 58s | 608p VP9 + AAC | music only |
| DdltaJchBwK | `preranatirth_run2_DdltaJchBwK.mp4` | 36s | 720p VP9 + AAC | boy singing (music) |
| DXEvTkGDRbE | `preranatirth_run2_DXEvTkGDRbE.mp4` | 36s | 1080p60 VP9 + AAC | same event as DdltaJchBwK |
| DZFUo2xCoVM | `preranatirth_run2_DZFUo2xCoVM.mp4` | 5s | 1080p60 VP9 + AAC | silent |
| DZnBj4lSmP7 | `preranatirth_run2_DZnBj4lSmP7.mp4` | 105s | 1080p60 VP9 + AAC | Marathi speech, gist-level only |
| DZxIOG5TR-9 | `preranatirth_run2_DZxIOG5TR-9.mp4` | 17s | 1440p60 VP9 + AAC | English background song, not speech |

Verified captions/URLs exist only for the first five (`reel_study.md`).
The seven `run2` reels have no repo captions; their Instagram URLs follow the
archival filename convention (`preranatirth/reel/<id>/`) and are flagged
`needsReview` until opened against the live posts.

## 2. Method (what was genuinely inspected)

- `ffprobe`: duration, dimensions, codecs, audio presence (table above).
- `ffmpeg`: 5 frames per reel (8/28/50/72/90%) viewed as contact strips —
  never a single thumbnail. No full video was "watched" end-to-end.
- `faster-whisper` tiny on all 12; `base` (~150MB download) on the two
  speech-heavy reels. Tiny ghost-detects languages on music; base confirmed
  Marathi (0.86) on DZnBj4lSmP7 but word accuracy is too poor to quote —
  gist only, no verbatim quotations anywhere.
- On-screen text is directly observed and quotable as on-screen text
  (not as speech).

## 3. Per-reel findings (observation → interpretation separated)

1. **DbnT1ZlzJuh** — Low-angle shot, two men walking under trees; persistent
   on-screen word "Care". Observed: elder with walking stick, companion
   alongside. Supports the verified caption about small acts of care.
   Primary: kindness. Confidence: high (caption + visuals agree).
2. **DKRMLNKTLj8** — SOCH signage ("Scientific… विचार विवेक"), ~120 youth
   seated outdoors, indoor hall session, closing cheer with raised arms.
   Confirms Soch camp documentation. Primary: youth awareness. Event
   details (date/partners/figures) still per working docs — needsReview kept.
3. **DWcGvM1jTL8** — "Before visiting Prernatirth / After visiting
   Prernatirth" meme at the lotus dome; same young man, swagger after.
   A joke about transformation — do not present as a real testimony.
   Primary: play. Confidence: high (on-screen text explicit).
4. **DWeoslvDWD7** — Banyan shade, "प्रेरणातीर्थ" overlay, young men
   idling, one on a rope swing. Unhurried Sunday leisure. Primary: rest.
5. **DZnBj4lSmP7** — Indoor hall, children + adults in a group session;
   Marathi talk whose recoverable gist concerns love and finding joy in
   small things. No sentence is reliable enough to quote. Primary:
   learning. needsReview (no verbatim claims).
6. **DbODveDNq1i** — "Thought of the Day" overlay; selfie-style monsoon
   road walk, two companions, wide monsoon river viewpoint. Spoken content
   unrecoverable — make no claims about it. Primary: mindfulness/nature.
7. **DcantXrtLl9** — Children in red shirts + adults in coordinated outdoor
   movement/circle activity, courtyard, hills. Event context unknown.
   Primary: community play. needsReview.
8. **DdltaJchBwK** — Boy singing into a mic in the hall; overlays "What a
   voice!", "Singer ❌ GOAT ✅". Community celebrating young talent. The
   on-screen "10 Million views" is an unverified creator claim — never
   repeated on the site. Primary: talent/celebration. needsReview.
9. **DZxIOG5TR-9** — "Lets go for a walk!" tour: gate path, dining hall,
   nursery beds, dome + lake. A place showcase. Primary: place.
10. **DZFUo2xCoVM** — Two girls paddling a yellow-blue boat, dome behind.
    5 seconds, no speech, pure shared joy. Primary: water play.
11. **DXEvTkGDRbE** — Same boy, hall, overlays as #8 (alternate angle).
    Excluded as near-duplicate; file retained in `Media/`.
12. **Dd45EYLTj0V** — Static lotus-dome reflection, "Preranatirth" text.
    Genuine but fully overlapped by #9's richer place tour; excluded for
    distinctiveness. File retained; previously staged mp4 removed from
    `public/reels/` to avoid dead weight.

## 4. Selection → 10, in journey order

kindness → youth inquiry → young talent → community play → lake joy →
Sunday rest → transformation joke → reflective walk → teaching → place
as the closing invitation. Alternation follows `reelNumber` parity
automatically (odd: story left; even: video right).

## 5. Public copy

In `content/reel-stories.ts` (10 entries, `reelNumber` 1–10). Each message
is grounded above; captions only where verified; `needsReview` on all
except #1–#4 (verified caption or explicit on-screen text).

## 6. Unresolved

- Live-URL + caption confirmation for the 7 run2 reels.
- Soch camp facts (date/partners/figures) per stakeholder review.
- Word-level Marathi transcript for DZnBj4lSmP7 (needs a native speaker,
  not a bigger model).
- Spoken content of DbODveDNq1i unrecoverable from audio.
- `public/reels/` is now ~194MB across 10 files — move to Git LFS and
  ship compressed web renditions; note VP9-in-MP4 on older Safari as a
  compat follow-up.
- Publication consent for identifiable people (children especially) still
  pending per README — provisional labels stay.
