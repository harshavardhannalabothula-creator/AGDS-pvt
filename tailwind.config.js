/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium White & Light Blue Brand Palette
        brandblue: {
          deep: '#0B2545',     // Primary Executive Blue (Headings, Navbar, Dark Sections, Footer)
          main: '#0284C7',     // Main Brand Blue / Sky Blue (CTAs, Links, Active States)
          accent: '#0EA5E9',   // Vibrant Sky Blue Accent
          soft: '#EFF6FF',     // Soft Light Blue (Card Backgrounds, Highlights)
          pale: '#F0F7FF',     // Pale Blue (Section Backgrounds)
          dark: '#0F172A',     // Dark Navy Slate Text
          textsub: '#475569',  // Secondary Slate Text
          border: '#D0E2F7',   // Light Blue Border
          light: '#93C5FD',    // Light Accent Text
        },
        brandgreen: {
          deep: '#0B2545',
          main: '#0284C7',
          emerald: '#0EA5E9',
          mint: '#EFF6FF',
          pale: '#F0F7FF',
          dark: '#0F172A',
          textsub: '#475569',
          border: '#D0E2F7',
          accent: '#93C5FD',
        },
        ivory: {
          50: '#FAFCFF',
          100: '#F4F8FC',
          200: '#E2E8F0',
        },
        navy: {
          800: '#0B2545',
          900: '#06182E',
          950: '#041020',
        },
        midnight: {
          800: '#0B2545',
          900: '#06182E',
          950: '#041020',
        },
        slate: {
          500: '#475569',
          600: '#475569',
          700: '#0F172A',
          800: '#0F172A',
        },
        gold: {
          300: '#93C5FD',
          400: '#0284C7',
          500: '#0284C7',
          600: '#0B2545',
          700: '#06182E',
        },
        softtech: {
          50: '#F0F7FF',
          100: '#EFF6FF',
          200: '#D0E2F7',
          300: '#93C5FD',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
        serif: ['Plus Jakarta Sans', 'sans-serif'],
        editorial: ['Plus Jakarta Sans', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      backgroundImage: {
        'radial-gradient-green': 'radial-gradient(circle, rgba(2,132,199,0.12) 0%, rgba(240,247,255,0) 70%)',
        'radial-gradient-blue': 'radial-gradient(circle, rgba(2,132,199,0.12) 0%, rgba(240,247,255,0) 70%)',
        'green-grid': 'linear-gradient(to right, rgba(11,37,69,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,37,69,0.04) 1px, transparent 1px)',
        'blue-grid': 'linear-gradient(to right, rgba(11,37,69,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,37,69,0.04) 1px, transparent 1px)',
        'dark-green-grid': 'linear-gradient(to right, rgba(2,132,199,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,132,199,0.08) 1px, transparent 1px)',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(11, 37, 69, 0.06)',
        'luxury-hover': '0 30px 60px -20px rgba(11, 37, 69, 0.12)',
        'green-glow': '0 0 25px rgba(2, 132, 199, 0.25)',
        'blue-glow': '0 0 25px rgba(2, 132, 199, 0.25)',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'marquee-left': 'marquee-left 25s linear infinite',
        'marquee-right': 'marquee-right 25s linear infinite',
      },
    },
  },
  plugins: [],
};
