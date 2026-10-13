# Prerna Tirth --- Design Rules & Guidelines

**Document:** `DESIGN.md`\
**Purpose:** Define the visual and interaction principles for the Prerna
Tirth website prototype.\
**Status:** Prototype V0.1 --- exploratory guidance, pending stakeholder
validation.\
**Audience:** Design, frontend, content and technical teams.

------------------------------------------------------------------------

## 1. Purpose

This document establishes a consistent visual language for the Prerna
Tirth website. It is intended to help the team make coherent decisions
about layout, typography, color, imagery, components, motion and
accessibility.

The first prototype is an exploration, not a final brand specification.
The requirement-gathering questionnaire has not yet been answered.
Therefore, the recommendations below are provisional and must be
reviewed with the relevant Prerna Tirth stakeholders before being
treated as approved brand rules.

## 2. Design intent

The website should communicate three connected themes:

1.  **Nature** --- Maitri Hills, the Sahyadri foothills and rural
    ecological experiences.
2.  **Human connection** --- community, shared activities, learning and
    collective experiences.
3.  **Presence and personal growth** --- the philosophy expressed
    through "Inspire. Connect. Transform." and the mantra "छान छान मी
    क्षणोक्षणी प्रत्येक क्षणी".

The intended experience is welcoming, grounded, thoughtful and human. It
should not feel like a generic resort booking page, a corporate SaaS
dashboard or an overly ornamental spiritual template.

### Design principles

-   **People before polish:** Prefer authentic community imagery over
    generic stock imagery.
-   **Meaning before decoration:** Every visual effect should support
    content, orientation or emotion.
-   **Calm, not lifeless:** Use generous spacing and restrained motion
    without making the site feel empty or impersonal.
-   **Editorial, not monotonous:** Vary text, imagery and section
    composition. Do not turn every section into a grid of identical
    cards.
-   **Contemporary, with cultural awareness:** Present Marathi language
    and Devanagari typography with the same care as English.
-   **Accessible by default:** Readability, keyboard access and mobile
    usability are baseline requirements.
-   **Honest representation:** Do not imply activities, facilities,
    outcomes, endorsements or organizational claims that have not been
    confirmed.

## 3. Visual direction

### Recommended direction for V0.1

Explore a blend of: - Editorial minimalism - Human-centered community
storytelling - Contemporary Indian cultural design - Nature-inspired
hospitality photography

Use a **light-first** interface with warm neutral backgrounds, deep
green text/accent colors, restrained earthy highlights and photography
that conveys real people and place.

Dark sections may be used selectively for contrast or a closing
statement. A full dark theme is not required for the first prototype.

## 4. Provisional color tokens

These colors are a starting point for prototype exploration, not
official Prerna Tirth brand colors.

  -----------------------------------------------------------------------
  Token                   Suggested value         Intended use
  ----------------------- ----------------------- -----------------------
  `color-forest`          `#294A38`               Primary brand accent,
                                                  headings, key actions

  `color-sage`            `#A8B7A0`               Secondary accents,
                                                  subtle surfaces

  `color-ivory`           `#F7F4EC`               Main warm background

  `color-earth`           `#B97855`               Limited highlights,
                                                  small accents

  `color-ink`             `#292C27`               Main text

  `color-muted`           `#596658`               Secondary text,
                                                  supporting labels

  `color-border`          `#D9DFD3`               Dividers and subtle
                                                  outlines

  `color-white`           `#FFFFFF`               Cards and contrast
                                                  surfaces where needed
  -----------------------------------------------------------------------

### Color rules

-   Use ivory or another approved light neutral as the primary page
    background.
-   Use forest green consistently for important actions and brand
    accents.
-   Reserve earthy accents for small highlights rather than large
    competing areas.
-   Ensure text and controls have sufficient contrast against their
    backgrounds.
-   Do not communicate status through color alone.
-   Validate the palette against actual photography and accessibility
    contrast checks before implementation.

## 5. Typography

### Suggested font roles

-   **Display / editorial headings:** Lora or DM Serif Display.
-   **Interface / body text:** Inter or Manrope.
-   **Marathi / Devanagari:** Noto Sans Devanagari or Noto Serif
    Devanagari, selected after visual and readability testing.

These are candidate typefaces, not mandatory final choices. Confirm font
licensing, loading performance, glyph coverage and rendering on target
devices.

### Typography rules

-   Use a clear hierarchy: display heading, section heading, body, label
    and caption.
-   Keep body text comfortable to read on mobile; avoid long lines and
    very small type.
-   Use display serif typography selectively for emotional or editorial
    moments, not every heading.
-   Preserve the exact spelling and punctuation of approved Marathi
    copy.
-   Test Devanagari conjuncts, matras, line height and wrapping at
    narrow widths.
-   Do not use all caps for long passages.
-   Avoid excessive font weights and unnecessary font families.

## 6. Layout and spacing

-   Use a consistent spacing scale rather than arbitrary margins.
-   Give major sections enough vertical space to feel deliberate.
-   Use a readable maximum width for long-form text.
-   Allow photography to break the grid where it improves storytelling.
-   Keep navigation, calls to action and key information easy to find.
-   Use asymmetry selectively; visual experimentation must not harm
    clarity.
-   On mobile, prioritize content order and readability over preserving
    desktop compositions.

### Suggested spacing scale

Use a base unit of 4px. Common steps may include 4, 8, 12, 16, 24, 32,
48, 64 and 96px. Choose final values through implementation testing.

## 7. Photography and media

### Preferred imagery

-   Real Prerna Tirth community gatherings, where publication permission
    exists.
-   People participating in learning, conversation and shared
    activities.
-   Maitri Hills, the local landscape, nursery and agricultural
    environment.
-   Candid moments that communicate connection and joy.
-   Event photographs with enough context to explain what happened.

### Image rules

-   Use organization-approved or properly licensed assets.
-   Confirm consent for identifiable people, especially in youth or camp
    photographs.
-   Do not use generated or stock images in a way that misrepresents
    them as actual Prerna Tirth events or members.
-   Use consistent cropping and intentional aspect ratios.
-   Add descriptive alternative text to meaningful images; use empty alt
    text for purely decorative images.
-   Optimize image size and format. Avoid autoplaying large video
    backgrounds.
-   Keep credits and source information when required.

## 8. Page composition

### Homepage

A provisional narrative sequence:

1.  Hero --- identity, a concise message and a clear next step.
2.  Who we are --- a short, approved explanation of Prerna Tirth.
3.  Philosophy --- "Inspire. Connect. Transform." and the mantra.
4.  What we do --- activities and learning experiences.
5.  People and community --- authentic moments and stories.
6.  Maitri Hills --- explain the physical setting and its relationship
    to the initiative.
7.  Events or featured gatherings --- only when current, approved
    information is available.
8.  Join or connect --- a clear and truthful call to action.
9.  Footer --- contact and verified social links.

This sequence is a hypothesis to test, not a fixed requirement. The
questionnaire responses may change the order or scope.

### Content layouts

-   Use editorial sections for philosophy and long-form stories.
-   Use cards when items are genuinely comparable, such as event
    summaries.
-   Use image galleries for visual archives, with meaningful captions or
    categories where useful.
-   Avoid carousels for essential information when a simple layout would
    be clearer.
-   Do not create empty sections just to fill a page.

## 9. Components and interaction

Build reusable components for: - Header and mobile navigation - Footer -
Primary and secondary buttons - Text links - Section headings - Activity
and event summaries - Quote/mantra presentation - Image galleries -
Contact or joining forms, if approved - Accessible dialog or menu
patterns, only when needed

### Interaction rules

-   Buttons must clearly communicate their action.
-   Provide visible hover, focus, active, disabled and error states as
    appropriate.
-   Use subtle transitions; avoid animation that delays access to
    content.
-   Respect `prefers-reduced-motion`.
-   Ensure menus and dialogs work with keyboard and touch.
-   Avoid fake loading states, decorative controls that do nothing, and
    interactions that imply unavailable functionality.

## 10. Accessibility and responsive behavior

-   Use semantic HTML and a logical heading hierarchy.
-   Ensure keyboard navigation and visible focus indicators.
-   Check color contrast for text, controls and interactive states.
-   Give form fields persistent labels and clear validation messages.
-   Provide descriptive link text; avoid relying only on "click here".
-   Support zoom and narrow screens without horizontal overflow.
-   Make touch targets comfortable to use.
-   Test with reduced motion enabled.
-   Ensure Marathi and English content remain readable at common mobile
    sizes.

## 11. Content integrity and trust

The website must distinguish confirmed information from assumptions.

-   Do not publish unverified claims about organizational status,
    history, leadership, membership numbers, impact or psychological
    outcomes.
-   Confirm names, roles, event details, facilities, prices and
    availability before publishing.
-   Do not describe Prerna Tirth as a registered charity, nonprofit or
    formal institution unless that status is confirmed.
-   Explain the relationship between Prerna Tirth and Maitri Hills
    accurately.
-   Do not imply that all activities are free if specific services or
    events may carry separate charges.
-   Collect only information needed for a stated purpose, and explain
    how submitted information will be used.

## 12. Implementation conventions

-   Keep design tokens centralized in CSS variables or the project's
    chosen token mechanism.
-   Reuse components instead of duplicating styles.
-   Avoid one-off color values and arbitrary spacing in page components.
-   Prefer content-driven layouts over fixed heights.
-   Keep motion lightweight and progressive enhancement friendly.
-   Optimize image delivery and avoid unnecessary client-side
    JavaScript.

## 13. Prototype review checklist

Before presenting a build for feedback, check:

-   [ ] Does the first screen explain the initiative clearly enough to
    invite further exploration?
-   [ ] Do real people and community experiences receive appropriate
    emphasis?
-   [ ] Is the visual system calm, contemporary and culturally aware?
-   [ ] Is the Marathi mantra rendered correctly?
-   [ ] Does the site work on mobile and desktop?
-   [ ] Are links and buttons functional?
-   [ ] Are images authorized and accurately represented?
-   [ ] Is text readable and accessible?
-   [ ] Are assumptions clearly identified for stakeholder review?
-   [ ] Does the prototype avoid features that have not been requested
    or validated?

## 14. Decisions still requiring stakeholder validation

-   Official logo and brand colors
-   Preferred typefaces and language defaults
-   Final homepage message and calls to action
-   Which pages are required for V1
-   Approved photography, video and quotations
-   How Maitri Hills should be represented
-   Whether the site needs event registration, joining forms or an admin
    workflow
-   Accessibility, content ownership and publishing responsibilities

**Status:** Use this document to guide the first visual prototype.
Update it when stakeholder answers and approved brand assets become
available.
