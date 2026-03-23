import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mikedelacruz.com";

  return [
    { url: baseUrl, lastModified: new Date("2026-03-21"), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date("2026-03-20"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/results`, lastModified: new Date("2026-03-20"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/frameworks`, lastModified: new Date("2026-03-21"), changeFrequency: "monthly", priority: 0.8 },
{ url: `${baseUrl}/saas-to-ai-transition`, lastModified: new Date("2026-03-21"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/ai-to-ebitda-playbook`, lastModified: new Date("2026-03-21"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/outcome-based-pricing-ai`, lastModified: new Date("2026-03-21"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/ai-commercial-model`, lastModified: new Date("2026-03-21"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/ai-operating-cadence`, lastModified: new Date("2026-03-21"), changeFrequency: "monthly", priority: 0.9 },
  ];
}
