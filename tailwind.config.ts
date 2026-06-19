import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#6C63FF',
        'accent-dark': '#5A52E0',
        surface: '#0A0A0F',
        'surface-light': '#12121A',
        'surface-card': '#1A1A2E',
        neon: '#00F5D4',
        'neon-pink': '#FF6B9D',
        'neon-blue': '#4CC9F0',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-jetbrains)'],
      },
    },
  },
  plugins: [],
}
export default config
