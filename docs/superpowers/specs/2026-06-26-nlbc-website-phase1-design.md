# NLBC Website — Phase 1 Design Spec

**Date:** 2026-06-26
**Status:** Approved for planning
**Owner:** Neil Angelo Martinez (neilangelomartinez@gmail.com)
**Repo (target):** https://github.com/office721/nlbcuae (push later; build locally first)

---

## 1. Goal

Rebuild the Netherlands Business Council UAE (NBC) website front-end. The current site
(https://www.nlbcuae.com) is powered by GlueUp and looks dated. We keep GlueUp as the
backend/CRM and build a new, modern, on-brand front-end against it. This spec covers
**Phase 1: the core marketing site** with the full visual rebrand and the key user journeys.
Live GlueUp data wiring (Phase 2) and secondary pages (Phase 3) are out of scope here but
designed-for.

### Success criteria
- A modern, fast, responsive, accessible site that reflects the new NBC brand.
- Same information architecture as the current site, reorganised and enhanced.
- A clean data layer so live GlueUp integration later is a small, contained change.
- Runs locally; deployable to free static hosting.

---

## 2. Brand foundation

Source of truth: `nbc_brand_book_MV2.html` (in repo root). Key tokens:

| Token | Value | Use |
|---|---|---|
| `--orange` | `#FF9B00` | Primary accent, CTAs, logo bars, serif accents |
| `--blue` | `#22478B` | Primary brand colour, deep bands, footer |
| `--red` | `#AD1E26` | Rare alerts / "don't" only |
| `--ink` | `#141414` | Body text |
| `--paper` | `#FAF8F5` | Page background |
| `--white` | `#FFFFFF` | Cards |
| `--grey-400` | `#8B8B8B` | Muted text / labels |
| `--grey-200 / --grey-100` | `#D8D8D8 / #EDEDED` | Borders / fills |
| `--hairline` | `rgba(20,20,20,0.08)` | Dividers |

**Type:**
- **Geist** (300–700) — all UI and body. Headlines 500 weight, tight letter-spacing.
- **Instrument Serif** italic — accent words, numbers, pull quotes (always orange or ink).

**Logo:** Three forward-leaning orange bars (staggered ascent, echoing the UAE Nation Brand)
+ blue "NETHERLANDS BUSINESS COUNCIL UAE" wordmark. SVG, available in primary (stacked) and
horizontal lockups; white version for dark backgrounds. Reuse the SVG paths from the brand book.

**Voice:** Dutch directness + Emirati hospitality. Specific, warm, no corporate jargon, no empty
superlatives. Copy uses real numbers and names.

### Corrected facts (current brand book / site copy is wrong — fix everywhere)
- **Founded 1997** (NOT 2000). ~28 years / "nearly three decades."
- **170+ members** (some sources ~200; use "170+").
- **30+ events per year.**
- Non-profit, member-driven; licensed under Dubai Chamber; recognised representative body of
  Dutch business in Dubai & the Northern Emirates; direct access to the Dutch Consul General.
- Contact: P.O. Box 75343, Dubai · office@nlbcuae.com · +971 58 500 9209.
- Social: LinkedIn (`/company/nbcuae`), Facebook, Instagram.

---

## 3. Tech stack & architecture

- **Framework:** Astro (static-first, islands for any interactivity). SEO-friendly, fast,
  free hosting.
- **Styling:** Plain CSS with brand design tokens in a global stylesheet (`src/styles/tokens.css`,
  `global.css`) + Astro component-scoped styles. No utility-class framework — preserves the
  hand-crafted brand-book aesthetic.
- **Fonts:** Geist + Instrument Serif via Google Fonts (`<link>` preconnect), with a local
  fallback stack.
- **Language:** TypeScript for the data layer and component props.
- **Hosting:** **GitHub Pages** for now (migrate later). Requires `site` + `base` config in
  `astro.config.mjs` for project-pages path (`office721.github.io/nlbcuae`), or a custom domain
  via `CNAME`. A GitHub Actions workflow builds and deploys on push to `main`.

### Project structure
```
src/
  components/      # Nav, Footer, EventCard, ArticleCard, PillarCard, CTASection, LogoWall, etc.
  layouts/         # BaseLayout.astro (head, fonts, nav, footer slot)
  pages/           # index, about, events/index, events/[slug], membership, news/index,
                   #   news/[slug], contact
  lib/             # data layer (see §6)
    content/       # local fixtures: events.ts, articles.ts, members.ts, pillars.ts
    glueup/        # GlueUp client stub + types (Phase 2)
  styles/          # tokens.css, global.css
  assets/          # logo SVGs, photos
public/            # favicon, static images, robots.txt
```

### Navigation behaviour
- On the **homepage hero**: full-width nav, transparent over the full-bleed photo, white links.
- **On scroll / on inner pages**: nav condenses to a solid paper/white bar with blue links and a
  subtle hairline + shadow (sticky). Small island of JS for the scroll state.
- Mobile: hamburger → full-screen overlay menu.

---

## 4. Sitemap — Phase 1

Core pages (all in Phase 1):
- **Home** (`/`)
- **About** (`/about`) — who we are, history (1997), mission/vision, pillars, partners
- **Board** (`/board`) — the real current NBC board members (pulled from the existing site)
- **Events** (`/events`) — upcoming + past listing  *(◆ GlueUp later)*
- **Event detail** (`/events/[slug]`)  *(◆ GlueUp later)*
- **Become a Member** (`/membership`) — full membership details: why join, benefits, tiers, how to join
- **News** (`/news`) — article listing
- **Article detail** (`/news/[slug]`)
- **Contact** (`/contact`) — details, map, form

Deferred: **Phase 2** = live GlueUp (events feed, registration handoff, member directory,
newsletter signup, membership application). **Phase 3** = Consul General / NLinBusiness /
Dubai Chambers, Working Groups, Business Awards, Publications & Market Insights, testimonials,
trade shows.

---

## 5. Page specs

### 5.1 Home — section stack (approved)
1. **Hero** — full-bleed photo; full-width transparent nav; eyebrow "Since 1997 · Dubai";
   headline "Doing business between two worlds, *made simpler.*" (serif-italic orange accent on
   "made simpler"); primary CTA "Become a member", secondary "See upcoming events". Top + bottom
   gradient scrims only (centre of photo clear).
2. **What NBC is** — one-line intro + four **pillar cards**: Connection, Knowledge, Advocacy,
   Excellence.
3. **Upcoming events** ◆ — next 3 events (date, title, location, Register → GlueUp handoff).
4. **Membership** — deep-blue band; plain-language benefits; one strong "Become a member" CTA.
5. **Member directory** ◆ — "170+ members" teaser + link to explore.
6. **Latest news** — 3 recent article cards (calm editorial style).
7. **Corporate members** — partner logo wall (Shell, KLM, ING, Philips, Boskalis,
   FrieslandCampina, Unilever, Van Oord, …).
8. **Newsletter** ◆ — single-field email signup band.
9. **Footer** — deep-blue; nav, contact, social, Dubai address.

### 5.2 About
Editorial "calm" style. History anchored on 1997; mission & vision (from brand book, corrected);
four pillars expanded; partners (Consul General, Dubai Chambers). Pull quote: "We connect people
and knowledge between two business cultures." Links to the Board page.

### 5.2a Board
Dedicated page for the NBC board members. Uses the **real current board members** pulled from the
existing site (https://www.nlbcuae.com/board-and-team) — names, roles, companies, and photos where
available. Card/grid layout in the calm editorial style; short bios. (If specific data can't be
scraped cleanly, those fields are clearly flagged as placeholders for Neil to supply.)

### 5.3 Events (list) + Event detail
- **List:** upcoming (default) + past toggle; event cards (date chip, title, location, type tag,
  thumbnail). Renders from the data layer; GlueUp later.
- **Detail:** hero with title/date/location; description; speakers; venue; "Register" CTA that
  hands off to GlueUp's registration URL.

### 5.4 Become a Member (`/membership`)
The dedicated membership-details page (the current site's "Become a Member"). Full content:
why join (benefits in plain language, mapped to the four pillars); who it's for (corporates, SMEs,
startups, individuals with NL ties); membership **tiers/levels** with what each includes
(placeholder tiers, clearly flagged, until Neil confirms); how to join (steps); and a strong
conversion CTA. Application submission hands off to GlueUp in Phase 2.

### 5.5 News (list) + Article detail
- **List:** editorial card grid, date, category, excerpt.
- **Detail:** clean long-form article layout (Instrument Serif accents), share links, related
  articles.

### 5.6 Contact
Address (P.O. Box 75343, Dubai), email, phone, social; embedded map; contact form. Because
GitHub Pages is static (no backend), the form **POSTs to a configurable form endpoint**
(`PUBLIC_CONTACT_FORM_ENDPOINT`, e.g. a free Formspree form), with a graceful **`mailto:`
fallback** to office@nlbcuae.com if no endpoint is configured. Swappable to GlueUp later.

---

## 6. Data layer & GlueUp integration plan

**Principle:** pages never call GlueUp directly. They import typed async functions from `src/lib/`
that today read local fixtures and later call the GlueUp client. Same function signatures →
swapping the source is a contained change.

```ts
// src/lib/events.ts
export interface NbcEvent { slug; title; startsAt; endsAt; location; type; summary;
  body; registerUrl; image; }
export async function getUpcomingEvents(limit?: number): Promise<NbcEvent[]>
export async function getPastEvents(limit?: number): Promise<NbcEvent[]>
export async function getEvent(slug: string): Promise<NbcEvent | null>
```
Analogous modules: `articles.ts`, `members.ts`, `pillars.ts`. Phase 1 implementations read from
`src/lib/content/*` fixtures (realistic placeholder data drawn from the real current site).

**GlueUp (Phase 2) — what to request from GlueUp (action item for Neil):**
- API **account/key + secret** for HMAC-signed requests (their docs:
  https://glueupapi.docs.apiary.io).
- Base URL / region endpoint for the NBC org.
- Confirmation of available endpoints for: **events** (list + detail + registration URL),
  **membership** (tiers, application/join flow), **member directory/companies**,
  **newsletter/contact subscribe**.
- Rate limits, sandbox/test credentials, and example signed request.

A `src/lib/glueup/` stub (client + types + auth signing placeholder) is scaffolded in Phase 1 but
not wired.

---

## 7. Components (initial set)
`BaseLayout`, `SiteNav` (transparent/solid states), `SiteFooter`, `Hero`, `PillarCard`,
`SectionHeading`, `EventCard`, `EventList`, `ArticleCard`, `MembershipCTA`, `LogoWall`,
`NewsletterSignup`, `Button` (primary/secondary/ghost), `Tag/Chip`, `Container`.

Each component: one clear purpose, typed props, scoped styles, independently testable.

---

## 8. Accessibility & performance
- WCAG AA contrast (verified for white-on-photo via scrims).
- Semantic landmarks, keyboard-navigable nav + overlay, visible focus states, alt text.
- Responsive from 360px → desktop. Brand book breakpoint at 900px as a reference.
- Optimised images (Astro `<Image>`), preconnected fonts, minimal JS (islands only).
- Lighthouse target: 90+ across the board.

---

## 9. Out of scope (Phase 1)
Live GlueUp calls, member login/portal, payments, multi-language, CMS authoring UI, and all
Phase 3 secondary pages. Designed-for but not built.

---

## 10. Decisions (resolved with Neil)
1. **Hero photography** — use stock (Dubai skyline / networking) as placeholders until NBC supplies
   brand photos. ✓
2. **Membership tiers/pricing** — placeholder tiers, clearly flagged, on the Become a Member page
   until Neil confirms real levels. ✓
3. **Board members** — use the **real current board** pulled from the existing site; flag any field
   that can't be cleanly sourced. ✓
4. **Hosting** — **GitHub Pages** for now (Actions deploy on push to `main`); migrate later. ✓
5. **Contact form** — POST to a configurable form endpoint (Formspree-compatible) with a `mailto:`
   fallback to office@nlbcuae.com; swap to GlueUp later. ✓ (my call)
