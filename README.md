# Netherlands Business Council UAE — Website

The new front-end for the Netherlands Business Council UAE (NBC), built on the 2026 rebrand.
Static site built with [Astro](https://astro.build), designed to connect to GlueUp (the CRM) for
live data in a later phase.

## Quick start

```bash
npm install
npm run dev      # local dev at http://localhost:4321/nlbcuae
npm run build    # production build to dist/
npm run preview  # preview the production build
npm test         # run the data-layer unit tests
```

> The site uses a base path of `/nlbcuae` for GitHub Pages, so the local URL includes it.

## Project structure

```
src/
  components/   Reusable UI (Nav, Footer, Hero, cards, …)
  layouts/      BaseLayout (head, nav, footer)
  pages/        Home, About, Board, Events, Membership, News, Contact
  lib/          Typed data layer + fixtures (swaps to GlueUp later)
  styles/       Brand tokens + global styles
public/         Images, favicon, static files
```

## Brand

Design tokens live in `src/styles/tokens.css`, taken from the brand book
(`nbc_brand_book_MV2.html`). Colours: orange `#FF9B00`, blue `#22478B`. Fonts: Geist +
Instrument Serif. Founded **1997**, 170+ members, 30+ events a year.

## Data layer & GlueUp (Phase 2)

Pages never call GlueUp directly. They use typed functions in `src/lib/` (`events.ts`,
`articles.ts`, `members.ts`, `board.ts`, `pillars.ts`) that currently read local fixtures in
`src/lib/content/`. When GlueUp credentials arrive, back these same functions with the GlueUp
client (`src/lib/glueup/client.ts`) and the pages do not change.

**To unlock Phase 2, request the following from GlueUp:**

- API account **key + secret** for HMAC-signed requests ([docs](https://glueupapi.docs.apiary.io)).
- The **base URL / region endpoint** for the NBC organisation.
- Confirmation of endpoints for: events (list, detail, registration URL), membership (tiers,
  join flow), member directory/companies, and newsletter/contact subscribe.
- Rate limits, sandbox/test credentials, and one example signed request.

Set secrets in `.env` (see `.env.example`). Never commit real credentials.

## Forms

The contact form posts to `PUBLIC_CONTACT_FORM_ENDPOINT` (e.g. a free Formspree form) if set,
otherwise it falls back to a `mailto:` link. The newsletter signup uses
`PUBLIC_NEWSLETTER_ENDPOINT`.

## Deployment

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to **GitHub Pages**
on every push to `main`. Enable Pages in the repo settings (Source: GitHub Actions). For a custom
domain (e.g. nlbcuae.com), add a `CNAME` and update `site`/`base` in `astro.config.mjs`.

## Status

Phase 1 (this build): full marketing site with the rebrand, placeholder data.
Phase 2: live GlueUp integration. Phase 3: secondary pages (Working Groups, Awards, Publications).
See `docs/superpowers/specs/` and `docs/superpowers/plans/` for the full spec and plan.
