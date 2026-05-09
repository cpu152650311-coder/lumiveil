import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
      },
      colors: {
        accent: '#0d9488',
        'accent-light': '#f0fdfa',
      },
      maxWidth: {
        'site': '1280px',
      },
    },
  },
  plugins: [],
};
export default config;
