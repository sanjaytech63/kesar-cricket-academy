import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
    './constants/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#15803D',
          dark: '#0B3D1E',
          accent: '#22C55E'
        }
      },
      boxShadow: {
        soft: '0 30px 80px rgba(15, 23, 42, 0.18)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top left, rgba(34, 197, 94, 0.22), transparent 35%), radial-gradient(circle at bottom right, rgba(16, 185, 129, 0.18), transparent 30%)'
      }
    }
  },
  plugins: []
};

export default config;
