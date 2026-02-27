/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F6F1E8',
          light: '#FAF7F1',
          deep: '#EDE4D6',
        },
        sage: {
          light: '#9CAF88',
          DEFAULT: '#7E8F6A',
        },
        copper: {
          DEFAULT: '#C68A4F',
          light: '#D4A06A',
        },
        charcoal: {
          DEFAULT: '#3A3A3A',
          light: '#6A6A6A',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(58,58,58,0.06)',
        hover: '0 8px 40px rgba(58,58,58,0.12)',
        card: '0 2px 12px rgba(58,58,58,0.06)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
}
