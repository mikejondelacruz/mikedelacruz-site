# mikedelacruz.com

**AI → EBITDA → Exit Value**

A minimal Next.js + Tailwind site with 5 AEO (Answer Engine Optimization) articles, built for authority positioning in the AI SaaS mid-market lane.

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
/                                → Homepage (hero + stats + The Problem I Solve + How I Build Enterprise Value + Most Impactful When + Let's Talk)
/about                           → Headshot, narrative, operating situation, selected operating results
/results                         → Directly + iAdvize results (nav: "Results")
/writing                         → Index of all AEO articles
/contact                         → Let's Talk page (nav: "Let's Talk")

/saas-to-ai-transition           → AEO: SaaS to AI Re-founding
/ai-to-ebitda-playbook           → AEO: The AI to EBITDA Playbook
/outcome-based-pricing-ai        → AEO: How to Price AI Agents
/ai-commercial-model             → AEO: The AI Commercial Model
/ai-operating-cadence            → AEO: The AI Operating Cadence
```

### Redirects

```
/ai-agent-pricing-models         → /outcome-based-pricing-ai (301)
/usage-based-pricing-ai-agents   → /outcome-based-pricing-ai (301)
/ai-saas-retention               → /ai-operating-cadence (301)
/proof                           → /results (301)
```

## Homepage flow

1. **Hero** — headline, sub-text, two CTAs (See Results + Let's Talk), stats strip
2. **The Problem I Solve** — PE/venture-backed B2B SaaS, $10M–$75M ARR
3. **How I Build Enterprise Value** — 5 steps, each linked to its AEO article, hover-to-white interaction
4. **Most Impactful When** — 3 qualification triggers with left border accent + Let's Talk CTA
5. **Footer**

## Article page flow (all 5 articles)

1. Article content (H1, intro, sections, numbered steps)
2. **Key Takeaway** — bordered section
3. **CTA** — "If you are evaluating an AI-led SaaS reset, reach out." + Let's Talk button
4. **Related** — cross-links to sibling articles + "See Results →"
5. **FAQs** — accordion-style, schema-marked
6. **Footer**

## Navigation

- **Nav**: Results / About / Writing / Let's Talk
- **Footer**: SaaS → AI / AI → EBITDA / Pricing AI Agents / Commercial Model / Operating Cadence
- **Hero CTAs**: "See Results" (primary, links to /results) / "Let's Talk" (secondary, mailto)
- **Article CTAs**: "Let's Talk" button (mailto:mikejdelacruz@gmail.com)

## Schema markup

Every AEO article includes:
- **Article schema** (author, headline, datePublished, dateModified)
- **FAQ schema** (question + answer for AI extraction, rendered as accordion)
- **Author schema** (site-wide in layout)

## Design system

- IBM Plex Sans + IBM Plex Mono (self-hosted via next/font)
- Warm off-white background (#fafaf8)
- Body text: #333 for high contrast
- Section labels: small caps, monospace, tracking-widest
- Borders: 2px on cards/buttons for presence
- Left border accent on qualification triggers
- Hover-to-white on value step links (200ms ease)
- No animations, no gradients, no shadows, no icons

### Spacing system

- Section-to-section: mt-14 (56px)
- Label-to-content: mb-4 (16px)
- Within-section items: py-3 / space-y-3
- Page padding: pt-16 pb-12

### Responsive

- Nav/footer links: 11px mobile, 14px desktop
- Stats grid: 2-col mobile, 4-col desktop
- Max content width: max-w-3xl (homepage), max-w-2xl (articles)

## Key files

- `src/components/Nav.tsx` — site navigation
- `src/components/Footer.tsx` — site footer
- `src/app/layout.tsx` — site-wide metadata + author schema
- `src/app/globals.css` — Tailwind config + custom colors
- `src/app/sitemap.ts` — XML sitemap (10 routes)
- `src/app/robots.ts` — robots.txt
- `next.config.js` — redirects
- `public/mike-de-la-cruz.jpg` — headshot

## Adding new AEO articles

1. Create a new folder in `src/app/your-page-slug/`
2. Create `page.tsx` with Article + FAQ schema, metadata, and content
3. Add the article to the Writing index (`src/app/writing/page.tsx`)
4. Add internal links from related AEO articles
5. Add the route to `src/app/sitemap.ts`
6. Push and Vercel auto-deploys
