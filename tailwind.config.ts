import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: { outfit: ['Outfit', 'sans-serif'], inter: ['Inter', 'sans-serif'] },
      colors: {
        primary: '#1C1917', 'primary-light': '#F5F0EB',
        secondary: '#44403C',
        accent: '#A16207', 'accent-light': '#FFF7ED',
        'text-primary': '#0C0A09', 'text-muted': '#64748B',
        'bg-main': '#FAFAF9', 'border-light': '#D6D3D1',
      },
      maxWidth: { site: '1280px' },
      borderRadius: { card: '12px' },
      boxShadow: {
        card: '0 4px 24px rgba(28,25,23,0.06), 0 1px 4px rgba(12,10,9,0.04)',
        'card-hover': '0 8px 40px rgba(28,25,23,0.10), 0 2px 8px rgba(12,10,9,0.06)',
      },
    },
  },
  plugins: [],
};
export default config;
