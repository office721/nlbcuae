# CLAUDE.md — NLBC Website

Context for AI agents working on this repo. Read this first; it saves re-deriving the project.

## What this is
The rebuilt front-end for the **Netherlands Business Council UAE (NBC)** — a non-profit, member-led
council connecting Dutch business with the UAE (founded **1997**, **170+ members**, **30+ events/yr**).
Static site, GlueUp is the CRM backend (live data is Phase 2; today the site runs on local fixtures).

- **Live:** https://office721.github.io/nlbcuae/ (GitHub Pages, base path `/nlbcuae`)
- **Repo:** `office721/nlbcuae`

## Commands
```bash
npm run dev      # http://localhost:4321/nlbcuae  (base path matters — plain / 404s)
npm run build    # static build to dist/
npm test         # Vitest (data-layer unit tests)
```

## Stack & structure
Astro + TypeScript, plain CSS with brand tokens (no Tailwind). Vitest for the data layer.
```
src/
  components/   UI (Hero, PageHero, SiteNav, cards, PastEventsGallery, etc.)
  layouts/      BaseLayout (head, nav, footer, the scroll-reveal script)
  pages/        index, about, board, events/[index,[slug]], membership, news/[index,[slug]], contact
  lib/          data layer: events/articles/members/board/pillars/testimonials/membership/gallery
    content/    fixtures (the actual data lives here)
    glueup/     Phase-2 client stub (NOT wired)
  styles/       tokens.css, global.css
public/images/  events/ members/ news/ gallery/<event>/ board/ heroes/ videos/
```

## Brand (see src/styles/tokens.css)
Orange `#FF9B00`, Blue `#22478B`, Ink `#141414`, Paper `#FAF8F5`. Font: **Geist** only.
Accent words use `class="serif"` → renders Geist in orange (the old italic serif was dropped; keep it).
Voice: plain, professional, **no em dashes, no emoji**.

## Conventions & gotchas (important)
- **Base path:** every internal link/asset must go through `href()` from `src/lib/url.ts`
  (e.g. `href('/images/...')`). Raw `/...` breaks on GitHub Pages.
- **Astro scoped styles don't reach child components.** When a parent styles a child's element
  (e.g. nav logo, carousel cards), use `:global(...)`. This has bitten us 3x.
- **Nav:** `BaseLayout navMode="overlay"` = transparent over a hero (homepage + photo-hero pages);
  default is solid. SiteNav renders both a light and dark logo and swaps them by state.
- **Photo heroes:** `PageHero` (full-bleed image + scrim + overlay nav) for Events & Membership.
  Board uses PageHero too BUT only because its photo has headroom; a photo with faces across the
  middle will be covered by the headline — use a text header + banner instead.
- **Scroll reveal:** `.reveal` + `.is-visible` (global.css), driven by a scroll listener in BaseLayout
  (NOT IntersectionObserver — the preview tool doesn't fire IO). Respects `prefers-reduced-motion`.
- **Mobile carousels:** Upcoming events, Latest news, and the logo wall become horizontal
  scroll-snap carousels under 768/600px.
- **Images:** crop/compress with `ffmpeg`, output to `public/images/...`. Large originals
  (`*.mov`, `NBC Pics/`, loose `*.jpeg` source photos) are **gitignored** — only web versions commit.
  White/knockout member logos were recoloured/inverted to show on the white wall.

## Data layer
Pages call typed async fns in `src/lib/*` (never the fixtures directly). Today they read
`src/lib/content/*`; in Phase 2 back them with `src/lib/glueup/client.ts` — signatures stay the
same so pages don't change. The README has the "what to request from GlueUp" checklist.

## Deploy
Push to `main` → GitHub Actions (`withastro/action`) builds and deploys to Pages.
**Pushing:** the user's account `neilangelomartinez` is a collaborator; a classic `repo`-scoped
token lives in `.gittoken` (gitignored). Push with:
```bash
TOKEN=$(grep -vE '^\s*#' .gittoken | grep -oE '(ghp_|github_pat_)[A-Za-z0-9_]+' | head -1)
git -c credential.helper= push "https://neilangelomartinez:${TOKEN}@github.com/office721/nlbcuae.git" main:main
```
(The local `gh` CLI defaults to a different account without push rights, so don't rely on it.)

## Outstanding (non-blocking)
- Confirm a few gallery dates (Cybersecurity / Business Elevator Pitch).
- About / News / Contact still use text `PageHeader` (no photo hero) — add if desired.
- Phase 2: wire GlueUp when API credentials arrive.

## Working style
Keep it lean on tokens: verify with `build` + DOM/`eval` checks, screenshot only when the user
must see something. Commit + push after each task.
