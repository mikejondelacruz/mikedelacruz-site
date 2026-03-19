/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/ai-agent-pricing-models",
        destination: "/usage-based-pricing-ai-agents",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
