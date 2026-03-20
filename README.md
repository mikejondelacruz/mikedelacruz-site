# mikedelacruz.com

**AI → EBITDA → Exit Value**

A minimal Next.js + Tailwind site with 5 AEO (Answer Engine Optimization) pages, built for authority positioning in the AI SaaS mid-market lane.

## Quick start

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click Deploy
5. Point your domain `mikedelacruz.com` to Vercel in DNS settings

## Site structure

```
/                                → Homepage (hero + proof cards + Best for + How I Rebuild + Selected Writing + close CTA)
/about                           → Headshot, narrative, operating situation, selected operating results
/proof                           → Directly + iAdvize results (nav: "Results")
/writing                         → Index of all AEO pages
/contact                         → Let's Talk page (nav: "Let's Talk")

/ai-to-ebitda-playbook           → AEO: The AI to EBITDA Playbook
/saas-to-ai-transition           → AEO: SaaS Re-founding
/outcome-based-pricing-ai        → AEO: Outcome-Based Pricing
/usage-based-pricing-ai-agents   → AEO: Pricing AI Agents
/ai-saas-retention               → AEO: AI Agent Retention
```

### Redirects

```
/ai-agent-pricing-models → /usage-based-pricing-ai-agents (301 permanent)
```

## Navigation

- **Nav**: Results / About / Writing / Let's Talk
- **Footer**: AI → EBITDA / SaaS → AI / Outcome-Based Pricing
- **Hero CTAs**: "See Results" (primary, links to /proof) / "Let's Talk" (secondary, mailto)
- **Bottom CTA**: "Let's Talk" (mailto)

## Schema markup

Every AEO page includes:
- **Article schema** (author, headline, datePublished, dateModified)
- **FAQ schema** (question + answer for AI extraction)
- **Author schema** (site-wide in layout)

## Design decisions

- IBM Plex Sans + Mono for typography (self-hosted via next/font)
- Warm off-white background (#fafaf8)
- No animations, no clutter
- Internal linking between all AEO pages + Results page
- Mobile responsive (nav/footer links 11px on mobile, 14px on desktop)
- Clean URLs (no trailing slashes, no .html)
- Modern browser targets (no legacy polyfills)
- Headshot on About page (public/mike-de-la-cruz.jpg, 160px circular)

## Key files

- `src/components/Nav.tsx` — site navigation
- `src/components/Footer.tsx` — site footer
- `src/app/layout.tsx` — site-wide metadata + author schema
- `src/app/sitemap.ts` — XML sitemap (10 routes)
- `src/app/robots.ts` — robots.txt
- `next.config.js` — redirects
- `public/mike-de-la-cruz.jpg` — headshot

## Adding new AEO pages

1. Create a new folder in `src/app/your-page-slug/`
2. Create `page.tsx` with Article + FAQ schema, metadata, and content
3. Add the page to the Writing index (`src/app/writing/page.tsx`)
4. Add the page to the homepage Selected Writing grid (`src/app/page.tsx`)
5. Add internal links from related AEO pages
6. Add the route to `src/app/sitemap.ts`
7. Push and Vercel auto-deploys
