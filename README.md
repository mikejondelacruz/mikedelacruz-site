# mikedelacruz.com — Refounder OS Site

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
/                          → Homepage (positioning + framework links)
/about                     → Background and focus areas
/proof                     → Directly + iAdvize case studies
/writing                   → Index of all AEO pages
/contact                   → Operator + investor CTAs

/ai-saas-retention         → AEO page
/outcome-based-pricing-ai  → AEO page
/ai-to-ebitda-playbook     → AEO page
/saas-to-ai-transition     → AEO page
/ai-agent-pricing-models   → AEO page
```

## Schema markup

Every AEO page includes:
- **Article schema** (author, headline)
- **FAQ schema** (question + answer for AI extraction)
- **Author schema** (site-wide in layout)

## Design decisions

- IBM Plex Sans + Mono for typography
- Warm off-white background (#fafaf8)
- No animations, no clutter
- Internal linking between all AEO pages + Proof page
- Mobile responsive
- Clean URLs (no trailing slashes, no .html)

## Customization

- Update contact info in `src/app/contact/page.tsx`
- Update LinkedIn URL in contact page
- Add your actual email address
- Swap proof content with your specific metrics in `src/app/proof/page.tsx`

## Adding new AEO pages

1. Create a new folder in `src/app/your-page-slug/`
2. Create `page.tsx` using the `AEOPage` component (see existing pages for examples)
3. Add the page to the Writing index (`src/app/writing/page.tsx`)
4. Add internal links from related AEO pages
5. Push and Vercel auto-deploys
