/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F8E8C2',
          DEFAULT: '#D4AF37',
          dark: '#9A7B1C',
          shimmer: '#FFF2B2'
        },
        emerald: {
          royal: '#0A3022',
          deep: '#062016',
          leaf: '#1A4D3A',
          sage: '#4A6B5D',
        },
        kumkum: {
          light: '#9E1C27',
          DEFAULT: '#7D111A',
          dark: '#520B11'
        },
        ivory: {
          light: '#FFFFFF',
          DEFAULT: '#FDFBF7',
          dark: '#F5EFE6'
        }
      },
      fontFamily: {
        tiro: ['"Tiro Devanagari Hindi"', 'serif'],
        mukta: ['"Mukta"', 'sans-serif'],
        hind: ['"Hind"', 'sans-serif'],
        rozha: ['"Tiro Devanagari Hindi"', 'serif'], // Fallback mapped to crystal-clear Tiro
        amita: ['"Mukta"', 'sans-serif'],            // Fallback mapped to ultra-readable Mukta
        hindi: ['"Mukta"', 'sans-serif'],            // Fallback mapped to ultra-readable Mukta
        cinzel: ['"Cinzel"', 'serif'],
        script: ['"Dancing Script"', 'cursive'],
        body: ['"Plus Jakarta Sans"', '"Mukta"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.45)',
        'royal': '0 12px 36px -4px rgba(10, 48, 34, 0.35)',
      }
    },
  },
  plugins: [],
}
