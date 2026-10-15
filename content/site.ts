// Central typed content for repeated structures. Long prose stays inline in
// page/section components — only genuinely repeated shapes live here.

export interface NavLink {
  label: string;
  href: string;
  /** Rendered as a small button (the "Connect" CTA). */
  cta?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Our Story", href: "#story" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Experiences", href: "#experiences" },
  { label: "The Place", href: "#place" },
  { label: "Connect", href: "#connect", cta: true },
];

export const INSTAGRAM_URL = "https://www.instagram.com/preranatirth";

export interface PhilosophyStep {
  /** Devanagari numeral, decorative (aria-hidden at render). */
  numeral: string;
  title: string;
  marathi: string;
  body: string;
}

export const PHILOSOPHY_STEPS: PhilosophyStep[] = [
  {
    numeral: "१",
    title: "Inspire",
    marathi: "प्रेरणा",
    body: "Encounter nature, reflection and new perspectives — curiosity and possibility, not instant change.",
  },
  {
    numeral: "२",
    title: "Connect",
    marathi: "जोडणे",
    body: "Shared meals, open conversation, eco-tours, group activities and learning sessions — with people and with place.",
  },
  {
    numeral: "३",
    title: "Transform",
    marathi: "परिवर्तन",
    body: "Reflection, learning, a mental reset — whatever you take away is yours. Grounded, without therapeutic claims.",
  },
];

export interface Experience {
  title: string;
  body: string;
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Nature & land",
    body: "Agri-walks, eco-tours and time in the nursery — the rural landscape as teacher.",
  },
  {
    title: "Food together",
    body: "Simple vegetarian rural meals, shared — connection over a thali, not a menu.",
  },
  {
    title: "Water & play",
    body: "Swimming pool, boating, indoor and outdoor sports, tractor rides — joy counts too.",
  },
  {
    title: "Learning sessions",
    body: "Thoughtful discussion: rational thinking, nature, social issues, mindful media use — including youth gatherings.",
  },
];
