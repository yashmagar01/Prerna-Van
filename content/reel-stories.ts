// Curated reel stories. Evidence record: docs/reel-content-analysis.md.
// Entries 1–4 rest on verified captions or explicit on-screen text; the
// rest carry needsReview (live-URL/caption confirmation pending).
// Video staged in public/reels/ (byte-identical from the Media/ archive);
// posters are authentic frames in public/images/reels/.

export type ReelMediaType = "instagram-embed" | "local-video";

export interface ReelStory {
  id: string;
  reelNumber: number;
  instagramUrl: string;
  title: string;
  category?: string;
  message: string;
  caption?: string;
  mediaType: ReelMediaType;
  /** Browser-servable path. Absent = poster-only reel (Instagram link only). */
  videoSrc?: string;
  poster: string;
  alt: string;
  needsReview?: boolean;
}

export const REEL_STORIES: ReelStory[] = [
  {
    id: "DbnT1ZlzJuh",
    reelNumber: 1,
    videoSrc: "/reels/DbnT1ZlzJuh.mp4",
    instagramUrl: "https://www.instagram.com/preranatirth/reel/DbnT1ZlzJuh/",
    title: "Care is never wasted",
    category: "Kindness · Human connection",
    message:
      "Shot from the ground looking up: an elder with a walking stick and a companion walking slowly under the trees, the word “Care” on screen throughout. No speech to transcribe — the message is the walk itself.",
    caption:
      "“Care is never wasted. The smallest act of kindness can become someone's biggest reason to keep going.”",
    mediaType: "local-video",
    poster: "/images/reels/DbnT1ZlzJuh.jpg",
    alt: "Two men walking beneath trees, seen from below against the sky",
  },
  {
    id: "DKRMLNKTLj8",
    reelNumber: 2,
    videoSrc: "/reels/DKRMLNKTLj8.mp4",
    instagramUrl: "https://www.instagram.com/preranatirth/reel/DKRMLNKTLj8/",
    title: "Soch: young minds thinking aloud",
    category: "Youth awareness · Learning",
    message:
      "The 'सोच' youth camp on camera: a SOCH banner about scientific thinking, rows of young people seated under the trees, a packed indoor session, and a closing cheer with arms in the air. Event details per working docs — names, partners and figures pending confirmation.",
    caption: "Caption in Marathi — see the original post for the full camp report.",
    mediaType: "local-video",
    poster: "/images/reels/DKRMLNKTLj8.jpg",
    alt: "Young camp participants seated outdoors beneath green trees",
    needsReview: true,
  },
  {
    id: "DdltaJchBwK",
    reelNumber: 3,
    videoSrc: "/reels/DdltaJchBwK.mp4",
    instagramUrl: "https://www.instagram.com/preranatirth/reel/DdltaJchBwK/",
    title: "What a voice!",
    category: "Young talent · Celebration",
    message:
      "A boy in a green sweatshirt sings into a microphone in the hall while the community watches — the on-screen verdict reads “Singer ❌ GOAT ✅”. A small-town talent show, kept joyful rather than competitive.",
    mediaType: "local-video",
    poster: "/images/reels/DdltaJchBwK.jpg",
    alt: "A young boy singing into a microphone in a community hall",
    needsReview: true,
  },
  {
    id: "DcantXrtLl9",
    reelNumber: 4,
    videoSrc: "/reels/DcantXrtLl9.mp4",
    instagramUrl: "https://www.instagram.com/preranatirth/reel/DcantXrtLl9/",
    title: "Everyone in step",
    category: "Community · Play",
    message:
      "Children in red shirts and adults moving together in a courtyard circle — part dance, part game, with the hills behind. The occasion isn't documented, so the reel is presented as what it visibly is: collective play.",
    mediaType: "local-video",
    poster: "/images/reels/DcantXrtLl9.jpg",
    alt: "Children and adults in a coordinated outdoor movement circle",
    needsReview: true,
  },
  {
    id: "DZFUo2xCoVM",
    reelNumber: 5,
    videoSrc: "/reels/DZFUo2xCoVM.mp4",
    instagramUrl: "https://www.instagram.com/preranatirth/reel/DZFUo2xCoVM/",
    title: "Paddling the lake",
    category: "Water · Shared joy",
    message:
      "Five seconds, no words needed: two girls paddling a yellow-and-blue boat across the lake with the lotus dome behind them. The shortest reel here, kept because joy this plain needs no explanation.",
    mediaType: "local-video",
    poster: "/images/reels/DZFUo2xCoVM.jpg",
    alt: "Two girls paddling a small boat on the lake by the lotus dome",
    needsReview: true,
  },
  {
    id: "DWeoslvDWD7",
    reelNumber: 6,
    videoSrc: "/reels/DWeoslvDWD7.mp4",
    instagramUrl: "https://www.instagram.com/reel/DWeoslvDWD7/",
    title: "A Sunday reset",
    category: "Rest · Togetherness",
    message:
      "Under the great banyan — “प्रेरणातीर्थ” on screen — young men idle in dappled shade and one takes the rope swing. Tagged #sundayvibes: the weekly reset, away from the workweek.",
    caption: "#preranatirth #sundayvibes",
    mediaType: "local-video",
    poster: "/images/reels/DWeoslvDWD7.jpg",
    alt: "A young visitor on a rope swing beneath dense banyan canopy",
  },
  {
    id: "DWcGvM1jTL8",
    reelNumber: 7,
    videoSrc: "/reels/DWcGvM1jTL8.mp4",
    instagramUrl: "https://www.instagram.com/reel/DWcGvM1jTL8/",
    title: "Before visiting / after visiting",
    category: "Play · Transformation, jokingly",
    message:
      "A before-and-after meme at the lotus dome: the same young man arrives plain and leaves with swagger — “Before visiting Prernatirth” versus “After visiting”. Take transformation with the wink it was posted with.",
    caption: "#pune #preranatirth #vacation #holiday #enjoylife",
    mediaType: "local-video",
    poster: "/images/reels/DWcGvM1jTL8.jpg",
    alt: "A young man walking with playful confidence by the lotus dome",
  },
  {
    id: "DbODveDNq1i",
    reelNumber: 8,
    videoSrc: "/reels/DbODveDNq1i.mp4",
    instagramUrl: "https://www.instagram.com/preranatirth/reel/DbODveDNq1i/",
    title: "Thought of the day, on foot",
    category: "Mindfulness · Nature",
    message:
      "Filmed selfie-style on a wet monsoon road: two companions walking and talking beneath “Thought of the Day”, ending at a wide monsoon river viewpoint. The spoken words couldn't be recovered reliably, so none are claimed here.",
    mediaType: "local-video",
    poster: "/images/reels/DbODveDNq1i.jpg",
    alt: "Two walkers on a green monsoon road, filmed selfie-style",
    needsReview: true,
  },
  {
    id: "DZnBj4lSmP7",
    reelNumber: 9,
    videoSrc: "/reels/DZnBj4lSmP7.mp4",
    instagramUrl: "https://www.instagram.com/preranatirth/reel/DZnBj4lSmP7/",
    title: "A Marathi talk on love and small joys",
    category: "Teaching · Reflection",
    message:
      "The longest reel here: children and adults gathered in the hall for a Marathi talk whose recoverable thread is love and finding joy in small, everyday things. Transcription is too uncertain to quote anyone — the gist above is interpretation, flagged for a native speaker to confirm.",
    mediaType: "local-video",
    poster: "/images/reels/DZnBj4lSmP7.jpg",
    alt: "Children and adults gathered for a session in a community hall",
    needsReview: true,
  },
  {
    id: "DZxIOG5TR-9",
    reelNumber: 10,
    videoSrc: "/reels/DZxIOG5TR-9.mp4",
    instagramUrl: "https://www.instagram.com/preranatirth/reel/DZxIOG5TR-9/",
    title: "Let's go for a walk",
    category: "The place · Maitri Hills",
    message:
      "A walking tour that closes the journey: the gate path, the dining hall, nursery beds, and finally the dome over still water — “Lets go for a walk!” exactly as posted. The invitation the whole section has been building toward.",
    mediaType: "local-video",
    poster: "/images/reels/DZxIOG5TR-9.jpg",
    alt: "The lotus dome reflected in the lake under a bright sky",
    needsReview: true,
  },
];
