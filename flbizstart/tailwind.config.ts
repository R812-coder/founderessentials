import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#faf6ee',
        paper: '#f5efe2',
        ink: {
          DEFAULT: '#1a1612',
          soft: '#3a3530',
        },
        warmgray: {
          DEFAULT: '#8a857c',
          soft: '#d4cfc4',
          line: '#e8e2d4',
        },
        terracotta: {
          DEFAULT: '#b54520',
          soft: '#d96a3e',
          ink: '#7a2e15',
        },
        forest: {
          DEFAULT: '#1f3a36',
          soft: '#2a4d48',
        },
        gold: {
          DEFAULT: '#b8893a',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '680px',
        wide: '1240px',
      },
    },
  },
  plugins: [],
};

export default config;
