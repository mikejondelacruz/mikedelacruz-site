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
/                                → Homepage (positioning + proof cards + framework links)
/about                           → Thesis, typical situation, playbook, operating history
/proof                           → Directly + iAdvize results (nav: "Results")
/writing                         → Index of all AEO pages
/contact                         → Work With Mike — CEOs, investors, operating roles (nav: "Work with me")

/ai-to-ebitda-playbook           → AEO: The AI to EBITDA Playbook
/saas-to-ai-transition           → AEO: SaaS to AI Transition
/outcome-based-pricing-ai        → AEO: Outcome-Based Pricing for AI
/usage-based-pricing-ai-agents   → AEO: Usage-Based Pricing for AI Agents
/ai-saas-retention               → AEO: AI Agent Retention
```

### Redirects

```
/ai-agent-pricing-models → /usage-based-pricing-ai-agents (301 permanent)
```

## Navigation

- **Nav**: Results / About / Writing / Work with me
- **Footer**: AI → EBITDA / SaaS → AI / Outcome-Based Pricing
- **CTAs**: "Email Mike" (mailto) / "See Results" (links to /proof)

## Schema markup

Every AEO page includes:
- **Article schema** (author, headline)
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

## Key files

- `src/components/Nav.tsx` — site navigation
- `src/components/Footer.tsx` — site footer
- `src/app/layout.tsx` — site-wide metadata + author schema
- `src/app/sitemap.ts` — XML sitemap
- `src/app/robots.ts` — robots.txt
- `next.config.js` — redirects

## Adding new AEO pages

1. Create a new folder in `src/app/your-page-slug/`
2. Create `page.tsx` with Article + FAQ schema, metadata, and content
3. Add the page to the Writing index (`src/app/writing/page.tsx`)
4. Add internal links from related AEO pages
5. Push and Vercel auto-deploys
