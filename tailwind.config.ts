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
        primary: '#0891B2',
        'primary-light': '#CFFAFE',
        secondary: '#22D3EE',
        accent: '#059669',
        'accent-light': '#D1FAE5',
        'text-primary': '#164E63',
        'text-muted': '#64748B',
        'bg-main': '#ECFEFF',
        'border-light': '#A5F3FC',
      },
      maxWidth: {
        site: '1280px',
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(8, 145, 178, 0.10), 0 1px 4px rgba(22, 78, 99, 0.06)',
        'card-hover': '0 8px 40px rgba(8, 145, 178, 0.18), 0 2px 8px rgba(22, 78, 99, 0.10)',
      },
    },
  },
  plugins: [],
};
export default config;
