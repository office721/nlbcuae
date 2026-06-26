# NLBC Website — Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement task-by-task. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Build the new Netherlands Business Council UAE marketing site (9 pages) in Astro, on the new brand, with a GlueUp-ready data layer, deployable to GitHub Pages.

**Architecture:** Astro static site. Plain CSS with brand design tokens + Astro scoped component styles. A typed TypeScript data layer (`src/lib/`) reads local fixtures now and swaps to the GlueUp API later behind unchanged function signatures. Pages compose focused components. Data-layer logic is unit-tested with Vitest; pages are verified by build + visual check.

**Tech Stack:** Astro, TypeScript, Vitest, Geist + Instrument Serif fonts, GitHub Pages + Actions.

**Reference:** Spec at `docs/superpowers/specs/2026-06-26-nlbc-website-phase1-design.md`. Approved visual mockups (real CSS to reuse) in `.superpowers/brainstorm/1698-1782442615/content/`: `hero-B-v3.html` (hero + nav), `home-stack.html` (section order), brand book `nbc_brand_book_MV2.html` (tokens, logo SVG, type).

---

## File Structure

```
astro.config.mjs            # site + base for GitHub Pages
package.json, tsconfig.json
vitest.config.ts
.github/workflows/deploy.yml
src/
  styles/tokens.css         # brand CSS custom properties
  styles/global.css         # resets, base type, helpers
  components/
    Logo.astro              # NBC bars + wordmark (variants: stacked|horizontal, light|dark)
    Button.astro            # primary|secondary|ghost
    Container.astro
    SectionHeading.astro
    SiteNav.astro           # full-width; transparent-over-hero → solid-on-scroll
    SiteFooter.astro
    Hero.astro
    PillarCard.astro
    EventCard.astro
    ArticleCard.astro
    MemberLogoWall.astro
    NewsletterSignup.astro
    MembershipCTA.astro
    BoardMemberCard.astro
  layouts/BaseLayout.astro
  lib/
    types.ts                # NbcEvent, Article, Member, Pillar, BoardMember
    events.ts  articles.ts  members.ts  pillars.ts  board.ts
    content/                # fixtures: events, articles, members, pillars, board (TS data)
    glueup/client.ts        # Phase-2 stub (typed, not wired)
    __tests__/              # vitest specs for the data layer
  pages/
    index.astro  about.astro  board.astro  contact.astro  membership.astro
    events/index.astro  events/[slug].astro
    news/index.astro    news/[slug].astro
public/                     # favicon, og image, photos, CNAME (later)
```

---

## Task 0: Scaffold project + tooling

**Files:** Create `package.json`, `astro.config.mjs`, `tsconfig.json`, `vitest.config.ts`, `src/pages/index.astro` (temp).

- [ ] **Step 1:** Initialize Astro non-interactively and add Vitest.

```bash
cd /Users/neilangelomartinez/Documents/nlbcwebsite
npm create astro@latest -- --template minimal --no-install --no-git --yes .
npm install
npm install -D vitest
```

- [ ] **Step 2:** Configure `astro.config.mjs` for GitHub Pages project path.

```js
import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://office721.github.io',
  base: '/nlbcuae',
});
```

- [ ] **Step 3:** Add `vitest.config.ts`.

```ts
import { defineConfig } from 'vitest/config';
export default defineConfig({ test: { environment: 'node', include: ['src/**/*.test.ts'] } });
```

- [ ] **Step 4:** Add scripts to `package.json`: `"dev"`, `"build"`, `"preview"`, `"test": "vitest run"`.

- [ ] **Step 5:** Verify dev server boots.

Run: `npm run dev` → open the printed URL. Expected: minimal page renders. Stop server.

- [ ] **Step 6:** Commit. `git add -A && git commit -m "chore: scaffold Astro project with Vitest"`

---

## Task 1: Brand tokens + global CSS + fonts

**Files:** Create `src/styles/tokens.css`, `src/styles/global.css`.

- [ ] **Step 1:** `tokens.css` — copy the `:root` custom properties from `nbc_brand_book_MV2.html` (orange `#FF9B00`, blue `#22478B`, red `#AD1E26`, ink `#141414`, paper `#FAF8F5`, white, grey-400 `#8B8B8B`, grey-200 `#D8D8D8`, grey-100 `#EDEDED`, hairline `rgba(20,20,20,.08)`). Add spacing/radius/shadow scale.

- [ ] **Step 2:** `global.css` — box-sizing reset, body uses Geist + paper bg + ink text, `.serif` = Instrument Serif italic, base heading/`p` styles matching the brand book scale, link styles, `prefers-reduced-motion` guard.

- [ ] **Step 3:** Import both in `BaseLayout` (created Task 4) and add Google Fonts preconnect + the Geist/Instrument Serif `<link>`.

- [ ] **Step 4:** Commit. `git commit -am "feat: brand design tokens and global styles"`

---

## Task 2: Primitive components (Logo, Button, Container, SectionHeading)

**Files:** Create `src/components/Logo.astro`, `Button.astro`, `Container.astro`, `SectionHeading.astro`.

- [ ] **Step 1:** `Logo.astro` — props `{ variant?: 'stacked'|'horizontal', tone?: 'dark'|'light' }`. Reuse the three-bar SVG paths from the brand book (orange bars `#FF9B00`; wordmark `#22478B`, or white when `tone='light'`).

- [ ] **Step 2:** `Button.astro` — props `{ href, variant?: 'primary'|'secondary'|'ghost', label }`. Primary = orange bg/ink text; secondary = blue; ghost = bordered. Reuse `.b1/.b2` styling from `hero-B-v3.html`.

- [ ] **Step 3:** `Container.astro` — max-width 1400px, centered, responsive padding. `SectionHeading.astro` — eyebrow + title + optional serif accent.

- [ ] **Step 4:** Verify build. Run: `npm run build`. Expected: success.

- [ ] **Step 5:** Commit. `git commit -am "feat: primitive components (Logo, Button, Container, SectionHeading)"`

---

## Task 3: Data layer — types, fixtures, and tests (TDD)

**Files:** Create `src/lib/types.ts`, `src/lib/content/*.ts`, `src/lib/{events,articles,members,pillars,board}.ts`, `src/lib/__tests__/*.test.ts`, `src/lib/glueup/client.ts`.

- [ ] **Step 1: Write failing tests** — `src/lib/events.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { getUpcomingEvents, getPastEvents, getEvent } from './events';

describe('events data layer', () => {
  it('returns upcoming events sorted by start date ascending', async () => {
    const e = await getUpcomingEvents();
    expect(e.length).toBeGreaterThan(0);
    for (let i = 1; i < e.length; i++)
      expect(+new Date(e[i].startsAt)).toBeGreaterThanOrEqual(+new Date(e[i-1].startsAt));
  });
  it('limits results when asked', async () => {
    expect((await getUpcomingEvents(2)).length).toBeLessThanOrEqual(2);
  });
  it('past events are all before now', async () => {
    for (const ev of await getPastEvents()) expect(+new Date(ev.startsAt)).toBeLessThan(Date.now());
  });
  it('getEvent returns a known slug and null for unknown', async () => {
    const all = await getUpcomingEvents();
    expect((await getEvent(all[0].slug))?.slug).toBe(all[0].slug);
    expect(await getEvent('nope-not-real')).toBeNull();
  });
});
```

- [ ] **Step 2:** Run `npm test` → FAIL (modules not found).

- [ ] **Step 3:** Define `types.ts`:

```ts
export interface NbcEvent { slug: string; title: string; startsAt: string; endsAt?: string;
  location: string; type: string; summary: string; body: string; registerUrl?: string; image?: string; }
export interface Article { slug: string; title: string; publishedAt: string; category: string;
  excerpt: string; body: string; image?: string; }
export interface Member { name: string; logo: string; tier?: string; url?: string; }
export interface Pillar { num: string; name: string; description: string; }
export interface BoardMember { name: string; role: string; company?: string; photo?: string; bio?: string; }
```

- [ ] **Step 4:** Create fixtures in `src/lib/content/` (realistic data from the current site: events like "Summer networking drinks", "Inter-council networking night"; articles incl. "NBC Together: An Evening of Connection and Support"; corporate members Shell/KLM/ING/Philips/Boskalis/FrieslandCampina/Unilever/Van Oord; the four pillars verbatim from the brand book).

- [ ] **Step 5:** Implement `events.ts` (sort/filter/limit + `getEvent`), and analogous `articles.ts` (`getRecentArticles`, `getArticle`), `members.ts` (`getCorporateMembers`), `pillars.ts` (`getPillars`), `board.ts` (`getBoardMembers`). Add matching tests for articles (recent sorted desc, getArticle/null) and pillars (returns 4).

- [ ] **Step 6:** Run `npm test` → PASS.

- [ ] **Step 7:** Add `src/lib/glueup/client.ts` — typed stub documenting the Phase-2 HMAC client (throws "not configured"); not imported by pages.

- [ ] **Step 8:** Commit. `git commit -am "feat: typed data layer with fixtures and unit tests"`

---

## Task 4: BaseLayout, SiteNav, SiteFooter

**Files:** Create `src/layouts/BaseLayout.astro`, `src/components/SiteNav.astro`, `SiteFooter.astro`.

- [ ] **Step 1:** `BaseLayout.astro` — `<head>` (title/description/og props, fonts, global styles), renders `SiteNav`, `<slot/>`, `SiteFooter`. Prop `navMode?: 'overlay'|'solid'` (home hero uses `overlay`).

- [ ] **Step 2:** `SiteNav.astro` — full-width; links About / Board / Events / Membership / News / Contact + orange "Become a member". `overlay` = transparent white-link nav (reuse `.nav` CSS from `hero-B-v3.html`); a small inline script toggles a `.solid` class (paper bg, blue links, hairline+shadow) after scroll. Mobile hamburger → full-screen overlay. Use `import.meta.env.BASE_URL` for hrefs.

- [ ] **Step 3:** `SiteFooter.astro` — deep-blue band: logo, nav columns, contact (P.O. Box 75343 Dubai · office@nlbcuae.com · +971 58 500 9209), social (LinkedIn `/company/nbcuae`, Facebook, Instagram), "Founded 1997". Reuse footer styling from the brand book.

- [ ] **Step 4:** Verify build + visually check nav scroll state with the webapp-testing skill (dev server screenshot top + scrolled).

- [ ] **Step 5:** Commit. `git commit -am "feat: BaseLayout, SiteNav (overlay/solid), SiteFooter"`

---

## Task 5: Home page

**Files:** Create `src/components/{Hero,PillarCard,EventCard,ArticleCard,MembershipCTA,MemberLogoWall,NewsletterSignup}.astro`, `src/pages/index.astro`.

- [ ] **Step 1:** `Hero.astro` — full-bleed photo, top/bottom gradient scrims, eyebrow "Since 1997 · Dubai", headline "Doing business between two worlds, <span class=serif>made simpler.</span>", primary + secondary buttons. Reuse `.hero` CSS from `hero-B-v3.html`. Photo from `public/`.

- [ ] **Step 2:** Build the section components per spec §5.1, lifting structure from `home-stack.html`: PillarCard (×4 from `getPillars`), EventCard list (`getUpcomingEvents(3)`), MembershipCTA (deep-blue band), member-directory teaser, ArticleCard list (`getRecentArticles(3)`), MemberLogoWall (`getCorporateMembers`), NewsletterSignup.

- [ ] **Step 3:** Compose `index.astro` with `BaseLayout navMode="overlay"` and the 9 sections in order.

- [ ] **Step 4:** Verify: `npm run build`; then dev-server screenshot full page via webapp-testing. Check hero readability, section order, responsive at 375px.

- [ ] **Step 5:** Commit. `git commit -am "feat: homepage with all sections"`

---

## Task 6: About page

**Files:** Create `src/pages/about.astro`.

- [ ] **Step 1:** Build per spec §5.2 — calm editorial: history (1997), mission & vision (corrected copy from brand book), four pillars expanded, partners, pull quote "We connect people and knowledge between two business cultures.", link to Board. Reuse type/pullquote styling from the brand book.

- [ ] **Step 2:** Verify build + screenshot. Commit. `git commit -am "feat: About page"`

---

## Task 7: Board page (real members)

**Files:** Create `src/pages/board.astro`, `src/components/BoardMemberCard.astro`, update `src/lib/content/board.ts`.

- [ ] **Step 1:** Fetch real board members from https://www.nlbcuae.com/board-and-team (WebFetch). Populate `board.ts` fixture with names/roles/companies; flag any missing field with a clear `TODO:` placeholder value for Neil.

- [ ] **Step 2:** `BoardMemberCard.astro` (photo/initials, name, role, company, optional bio) + `board.astro` grid from `getBoardMembers()`.

- [ ] **Step 3:** Verify build + screenshot. Commit. `git commit -am "feat: Board page with current members"`

---

## Task 8: Events list + detail

**Files:** Create `src/pages/events/index.astro`, `src/pages/events/[slug].astro`.

- [ ] **Step 1:** List page — upcoming (default) + past sections using `getUpcomingEvents()`/`getPastEvents()` and `EventCard`.

- [ ] **Step 2:** Detail page — `getStaticPaths` over all events; render title/date/location/body/speakers + "Register" `Button` linking `registerUrl` (GlueUp later). Return 404-safe for unknown slug.

- [ ] **Step 3:** Verify build (routes generated) + screenshot one detail page. Commit. `git commit -am "feat: Events list and detail pages"`

---

## Task 9: Become a Member page

**Files:** Create `src/pages/membership.astro`.

- [ ] **Step 1:** Build per spec §5.4 — why join (benefits mapped to pillars), who it's for, membership tiers (placeholder, clearly flagged), how to join steps, strong CTA. Reuse pillar/list/card styles.

- [ ] **Step 2:** Verify build + screenshot. Commit. `git commit -am "feat: Become a Member page"`

---

## Task 10: News list + detail

**Files:** Create `src/pages/news/index.astro`, `src/pages/news/[slug].astro`.

- [ ] **Step 1:** List — `ArticleCard` grid from `getRecentArticles()` (date, category, excerpt).

- [ ] **Step 2:** Detail — `getStaticPaths` over articles; long-form layout with Instrument Serif accents, related articles.

- [ ] **Step 3:** Verify build + screenshot. Commit. `git commit -am "feat: News list and article detail pages"`

---

## Task 11: Contact page + form

**Files:** Create `src/pages/contact.astro`.

- [ ] **Step 1:** Contact details (address/email/phone/social), embedded map (OpenStreetMap iframe), and a form (name/email/message). Form `action` = `import.meta.env.PUBLIC_CONTACT_FORM_ENDPOINT` if set, else a `mailto:office@nlbcuae.com` fallback. Add `.env.example` documenting the var.

- [ ] **Step 2:** Verify build + screenshot. Commit. `git commit -am "feat: Contact page with form"`

---

## Task 12: GitHub Pages deploy

**Files:** Create `.github/workflows/deploy.yml`.

- [ ] **Step 1:** Add the official Astro GitHub Pages Actions workflow (`withastro/action`) triggered on push to `main`, deploying to Pages.

- [ ] **Step 2:** Verify `npm run build` produces `dist/` with correct `base`-prefixed asset URLs.

- [ ] **Step 3:** Commit. `git commit -am "ci: GitHub Pages deploy workflow"` (Push + enabling Pages happens when Neil is ready.)

---

## Task 13: Final polish & verification

- [ ] **Step 1:** Run the web-design-guidelines skill review across the built pages; fix AA contrast, focus states, alt text, landmarks, heading order.
- [ ] **Step 2:** Responsive pass at 375 / 768 / 1280 via webapp-testing screenshots; fix breakpoints.
- [ ] **Step 3:** `npm run build` clean; `npm test` green.
- [ ] **Step 4:** Commit. `git commit -am "polish: accessibility, responsive, final verification"`

---

## Self-Review notes
- **Spec coverage:** Home §5.1 → T5; About §5.2 → T6; Board §5.2a → T7; Events §5.3 → T8; Membership §5.4 → T9; News §5.5 → T10; Contact §5.6 → T11; data layer §6 → T3; components §7 → T2,T4,T5; a11y/perf §8 → T13; hosting §3/§10.4 → T12; brand §2 → T1,T2. All covered.
- **GlueUp Phase 2:** stub only (T3 Step 7), pages use fixtures behind stable signatures — swap is contained. ✓
- **Corrected facts (1997 / 170+ / 30+):** baked into hero (T5), footer (T4), About (T6). ✓
