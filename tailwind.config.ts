import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        accent: '#0EA5E9',
        'accent-light': '#E0F2FE',
        'text-primary': '#0F172A',
        'text-muted': '#64748B',
        'bg-main': '#F8FAFC',
        'border-light': '#E2E8F0',
      },
      maxWidth: {
        site: '1280px',
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(14, 165, 233, 0.10), 0 1px 4px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 8px 40px rgba(14, 165, 233, 0.18), 0 2px 8px rgba(15, 23, 42, 0.10)',
      },
    },
  },
  plugins: [],
};
export default config;
