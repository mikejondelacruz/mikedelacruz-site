/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        ink: '#0a0a0a',
        paper: '#fafaf8',
        muted: '#6b6b6b',
        accent: '#1a1a1a',
        border: '#e5e5e0',
      },
    },
  },
  plugins: [],
};
