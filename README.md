# mikedelacruz.com

**B2B Vertical SaaS CEO who converts AI into EBITDA.**

Minimal Next.js + Tailwind static site. Positioned for PE investors, boards, and B2B SaaS CEOs evaluating AI-led operational restructures.

---

## Quick start

```bash
npm install
npm run dev       # local dev
npm run build     # production build
```

## Deploy

```bash
npx vercel --prod --force --yes
```

Vercel auto-detects Next.js. Domain is `www.mikedelacruz.com`, aliased in Vercel.

---

## Site structure

```
/                        Homepage
/about                   Operator page (headshot, narrative, operating results)
/results                 Two operational restructures: iAdvize + Directly
/frameworks              Index of 5 operating frameworks

/saas-to-ai-transition   Framework: SaaS to AI Re-founding
/ai-to-ebitda-playbook   Framework: The AI to EBITDA Playbook
/outcome-based-pricing-ai  Framework: How to Price AI Agents
/ai-commercial-model     Framework: The AI Commercial Model
/ai-operating-cadence    Framework: The AI Operating Cadence
```

### Redirects (301, in next.config.js)

```
/ai-agent-pricing-models       → /outcome-based-pricing-ai
/usage-based-pricing-ai-agents → /outcome-based-pricing-ai
/ai-saas-retention             → /ai-operating-cadence
/proof                         → /results
/contact                       → /
/writing                       → /frameworks
```

---

## Navigation

- **Nav**: Results / Operator / Frameworks
- **Footer**: © year + Frameworks link
- **Primary CTA**: `Portfolio Results` → `/results`
- **Contact CTA**: `mike@mikedelacruz.com` (mailto, in a light-bordered container — no button label)

---

## Homepage flow

1. **Hero** — headline, subhead, `Portfolio Results` CTA, stats strip (2 restructures / 18→2 / $0→$10M AI ARR / ~50% EBITDA at exit)
2. **When This Matters** — 3 qualification triggers with left border accent + email CTA
3. **How I Convert AI to EBITDA** — 5 numbered steps, each linked to its framework article
4. **Closing** — "If your portfolio company has AI that isn't driving EBITDA, I've solved that problem twice." + email CTA

---

## Key files

| File | Purpose |
|------|---------|
| `src/components/Nav.tsx` | Site navigation |
| `src/components/Footer.tsx` | Site footer |
| `src/app/layout.tsx` | Site-wide metadata + Person schema |
| `src/app/globals.css` | Tailwind config + custom colors |
| `src/app/sitemap.ts` | XML sitemap (9 routes) |
| `src/app/robots.ts` | robots.txt |
| `next.config.js` | 301 redirects + optimizeCss |
| `public/mike-de-la-cruz.jpg` | B&W headshot |

---

## Design system

- **Fonts**: IBM Plex Sans + IBM Plex Mono (self-hosted via next/font)
- **Background**: warm off-white (#fafaf8)
- **Body**: #333
- **Muted**: gray for labels and secondary text
- **No animations, gradients, shadows, or icons**
- **Borders**: 2px on cards/buttons; 1px on CTA containers
- **Hover**: white bg on framework list rows (200ms)

### Spacing

- Section gap: `mt-14` (56px)
- Label to content: `mb-4`
- Page padding: `pt-16 pb-12`

### Responsive

- Nav links: 11px mobile, 14px desktop
- Stats grid: 2-col mobile, 4-col desktop
- Max width: `max-w-3xl` (homepage), `max-w-2xl` (other pages)

---

## Contact

All mailto links → `mike@mikedelacruz.com`
