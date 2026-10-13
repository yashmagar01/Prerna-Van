# Prerna Tirth --- System Architecture & Technical Decisions

**Document:** `ARCHITECTURE.md`\
**Purpose:** Record the proposed system structure, technology choices,
security boundaries and implementation sequence for the Prerna Tirth
website.\
**Status:** Proposed architecture for Prototype V0.1; pending
stakeholder requirements.\
**Decision principle:** Prefer the simplest architecture that meets
validated needs.

------------------------------------------------------------------------

## 1. Context and goals

Prerna Tirth's website is being developed using the Prototyping Model of
the Software Development Life Cycle. The stakeholder requirements
questionnaire has been prepared but has not yet been answered.

The initial goal is to explore and validate the public-facing
experience: explain Prerna Tirth, present its philosophy, show approved
activities and media, and help visitors find a suitable way to connect.

The prototype should not assume the need for user accounts, complex
booking, payments, a large community platform or a custom administration
dashboard.

### Architectural goals

-   Fast iteration while requirements are still being discovered.
-   Responsive, accessible public pages.
-   Search-engine-friendly content pages.
-   Minimal operational complexity and cost.
-   Safe handling of any contact or joining submissions.
-   A clear path to add data-backed features later without overbuilding
    now.
-   A clean separation between public content and private data.

## 2. Proposed technology stack

  -----------------------------------------------------------------------
  Layer                   Proposed technology     Rationale
  ----------------------- ----------------------- -----------------------
  Web framework           Next.js (React)         Routing, reusable UI
                                                  and server/static
                                                  rendering options in
                                                  one application

  Language                TypeScript              Better type safety and
                                                  maintainability

  Styling                 Tailwind CSS            Consistent, responsive
                                                  styling and centralized
                                                  design tokens

  Database                Supabase PostgreSQL     Managed relational
                                                  database when dynamic
                                                  content is required

  Authentication          Supabase Auth, only if  Managed authentication
                          needed                  for authorized users

  File storage            Supabase Storage, if    Storage for approved
                          needed                  media and uploaded
                                                  assets

  Server-side operations  Next.js Route Handlers  Avoid a separate API
                          / Server Actions where  service until
                          appropriate             requirements justify it

  Deployment              Vercel or another       Straightforward
                          compatible host         deployment for a
                                                  Next.js application

  Source control          Git                     Version history,
                                                  reviews and
                                                  collaboration
  -----------------------------------------------------------------------

### Decision: Next.js rather than React SPA plus separate Node server

Next.js is a React framework and includes server-side capabilities. For
a content-oriented website, it can serve public pages and handle modest
server-side operations in the same codebase.

A separate Node.js API should be introduced only when there is a
demonstrated need for an independently deployed backend, substantial
business logic, external integrations, background jobs or a separate
client consuming the API.

**Do not add architectural layers simply because they are available.**

## 3. High-level architecture

``` text
                       Visitors
                          |
                    Browser / Mobile
                          |
                   Next.js Web App
                    /            \
          Public content       Server-side
          and page rendering   operations
                                    |
                           Supabase services
                         /        |         \
                    PostgreSQL  Storage   Auth (optional)
```

### Main boundaries

**Public website** - Home, About/Philosophy, Activities, Events,
Gallery, Contact and Join pages only as confirmed. - Public content
should be readable without an account unless requirements establish
otherwise. - Prefer static or server-rendered content for pages that do
not need frequent interactive updates.

**Server-side operations** - Validate and process forms. - Enforce
authorization for privileged operations. - Keep secret keys on the
server. - Apply appropriate abuse protection to public endpoints.

**Supabase** - PostgreSQL: structured data, if the site needs it. -
Storage: approved photographs and other media, if needed. - Auth: only
for authenticated workflows that have a clear user need. - Row Level
Security: enforce access rules for exposed tables.

## 4. Prototype-first implementation strategy

### Phase 0 --- Static visual prototype

Build the UI using typed local sample data.

-   Homepage and shared layout
-   Responsive navigation and footer
-   Philosophy and activities sections
-   Representative event/gallery examples
-   Placeholder or approved media
-   Responsive and accessibility checks

No database or login is necessary for this phase.

### Phase 1 --- Requirements validation

After stakeholders respond to the questionnaire:

-   Confirm site purpose and audiences.
-   Confirm pages and content.
-   Confirm the joining/contact flow.
-   Confirm language support.
-   Confirm whether events need registration or only information.
-   Confirm who will update the site.
-   Record new decisions and explicitly remove rejected assumptions.

### Phase 2 --- Data-backed V1

Introduce only the required services, potentially including:

-   Supabase database for editable events or content metadata.
-   Secure contact/join submissions.
-   Storage for approved media.
-   An authorized content-management workflow if the team needs one.
-   Analytics or search integration only where justified and disclosed
    appropriately.

### Phase 3 --- Optional future capabilities

Possible future additions, subject to requirements: - Event registration
or RSVP - Authorized content-management interface - Member
authentication or profiles - Collaboration or volunteer workflows -
Additional language management - Integrations with email or messaging
services

These are not committed features.

## 5. Initial data model --- only if dynamic data is approved

Do not create all these tables in advance. They are candidate entities
for discussion, not a finalized schema.

### Possible entities

-   `events`: title, slug, summary, description, start/end time,
    location, publication status and approved media references.
-   `stories`: title, slug, body, author/credit, publication date and
    publication status.
-   `media_assets`: storage path, alt text, caption, credit,
    consent/permission status and related content.
-   `contact_submissions`: only the fields needed to respond to an
    enquiry, status and timestamps.
-   `join_requests`: only if a joining workflow is approved, with a
    documented purpose and minimal fields.
-   `profiles` or member records: only if a real authenticated-member
    requirement is confirmed.

Use UUID primary keys where appropriate, timestamps, database
constraints and indexes based on actual query patterns. Define ownership
and retention rules before collecting personal data.

## 6. Security and privacy

Security is part of the architecture, not a later polish task.

### Secrets and credentials

-   Never expose the Supabase service-role key or other privileged
    credentials in browser code.
-   Store secrets in environment variables managed by the deployment
    platform.
-   Commit an `.env.example` containing placeholder names only, never
    real secrets.
-   Rotate credentials if they are accidentally exposed.

### Authorization and database access

-   Enable Row Level Security on tables exposed through Supabase's
    client APIs.
-   Write and test explicit policies for read, insert, update and delete
    operations.
-   Use least privilege for service roles and administrative actions.
-   Do not assume hiding a UI button provides authorization.
-   Test unauthorized and cross-user access cases.

### Public forms

-   Validate all inputs on the server.
-   Apply rate limits or other suitable abuse prevention.
-   Use safe output handling and avoid exposing submissions publicly.
-   Collect only data needed to fulfill the stated purpose.
-   Tell users why their data is collected and who can access it.
-   Define retention and deletion practices with the organization.
-   Add consent language where appropriate and legally required.

### Media and content

-   Publish only authorized assets.
-   Keep private uploads private unless explicitly approved for public
    access.
-   Do not place personal or confidential information in public storage.
-   Confirm consent before publishing identifiable individuals in
    photographs or videos.

## 7. Performance, SEO and accessibility

-   Use static generation or server rendering for stable public content
    where appropriate.
-   Optimize images and serve appropriately sized variants.
-   Avoid heavy autoplay video backgrounds and unnecessary animation
    libraries.
-   Use semantic headings, descriptive metadata and meaningful URLs.
-   Provide social sharing metadata for public pages where useful.
-   Test keyboard navigation, focus visibility, contrast, form labels
    and reduced motion.
-   Check layouts at narrow mobile widths as well as desktop.
-   Use analytics only if selected, with appropriate transparency and
    privacy practices.

## 8. Repository organization

A practical initial structure could be:

``` text
prerna-tirth/
├── app/
│   ├── page.tsx
│   ├── about/
│   ├── activities/
│   ├── events/
│   ├── gallery/
│   ├── contact/
│   └── api/                 # Only required server endpoints
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── content/                 # Approved static content/sample data
├── lib/
│   ├── supabase/            # Add when integration is needed
│   └── validation/
├── public/
│   └── images/
├── styles/
├── DESIGN.md
├── ARCHITECTURE.md
├── VALUES.md
├── .env.example
└── README.md
```

This is illustrative. Follow the framework version and repository
conventions actually chosen by the team. Do not create empty folders or
endpoints merely to match the diagram.

## 9. Quality and delivery

For each meaningful change:

-   Run linting and type checks.
-   Test key page routes and mobile layouts.
-   Test forms and validation if implemented.
-   Verify keyboard navigation and focus states.
-   Check image loading and console errors.
-   Review the diff before merging.
-   Keep secrets and personal data out of logs and commits.

Add automated tests in proportion to the feature's risk. Prioritize
tests for authorization, data submission, validation and any workflow
handling personal information.

## 10. Architecture decisions and status

  -----------------------------------------------------------------------
  Decision                Current position        Status
  ----------------------- ----------------------- -----------------------
  Frontend framework      Next.js with React      Proposed

  Language                TypeScript              Proposed

  Styling                 Tailwind CSS            Proposed

  Database                Supabase PostgreSQL if  Conditional
                          dynamic data is needed  

  Authentication          Only if a confirmed     Deferred
                          workflow needs it       

  Storage                 Supabase Storage if     Conditional
                          managed media is needed 

  Separate Node API       Not initially           Deferred

  Admin dashboard         Only if publishing      Deferred
                          needs justify it        

  Booking/payment         Not in the initial      Out of current scope
                          prototype unless        
                          requested               

  Deployment              Vercel or compatible    Proposed
                          hosting                 

  Initial content         Approved static         Recommended
                          content/sample data     
  -----------------------------------------------------------------------

## 11. Risks and open questions

-   The stakeholder questionnaire is not yet complete.
-   The final content owner and publishing workflow are unknown.
-   The organization's language requirements are unconfirmed.
-   Contact/joining form fields and data retention are not finalized.
-   The need for event registration, member accounts or an admin panel
    is unknown.
-   Official brand assets and media permissions need confirmation.
-   Hosting budget, domain ownership and production operational
    responsibility need confirmation.

## 12. Decision rule

When requirements change, update this document before introducing
significant architectural complexity. Prefer reversible choices during
the prototype stage. Build only what the stakeholder has validated, and
keep the system as simple as the real needs allow.
