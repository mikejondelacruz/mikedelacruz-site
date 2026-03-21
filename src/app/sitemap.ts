import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mikedelacruz.com";

  return [
    { url: baseUrl, lastModified: new Date("2026-03-20"), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date("2026-03-20"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/proof`, lastModified: new Date("2026-03-20"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/writing`, lastModified: new Date("2026-03-20"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date("2026-03-20"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/ai-to-ebitda-playbook`, lastModified: new Date("2026-03-19"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/saas-to-ai-transition`, lastModified: new Date("2026-03-19"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/outcome-based-pricing-ai`, lastModified: new Date("2026-03-19"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/usage-based-pricing-ai-agents`, lastModified: new Date("2026-03-19"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/ai-saas-retention`, lastModified: new Date("2026-03-19"), changeFrequency: "monthly", priority: 0.9 },
  ];
}
