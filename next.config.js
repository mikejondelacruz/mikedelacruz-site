/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      {
        source: "/ai-agent-pricing-models",
        destination: "/outcome-based-pricing-ai",
        permanent: true,
      },
      {
        source: "/usage-based-pricing-ai-agents",
        destination: "/outcome-based-pricing-ai",
        permanent: true,
      },
      {
        source: "/ai-saas-retention",
        destination: "/ai-operating-cadence",
        permanent: true,
      },
      {
        source: "/proof",
        destination: "/results",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/",
        permanent: true,
      },
      {
        source: "/writing",
        destination: "/frameworks",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
