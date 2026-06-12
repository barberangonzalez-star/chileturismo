/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#E6F6F6',
          100: '#C2EAEA',
          400: '#3CB6B8',
          500: '#1F9A9C',
          600: '#16807F',
          700: '#0F6566',
          900: '#0A3D3E',
        },
        coral: {
          50: '#FDEDE7',
          100: '#FBD3C4',
          400: '#F47C5C',
          500: '#EE5F3B',
          600: '#D9492A',
          700: '#B53A20',
          900: '#5E2010',
        },
        ink: {
          50: '#F6F7F7',
          100: '#EDEFEF',
          400: '#7C8B8C',
          600: '#4B5C5E',
          800: '#28373A',
          900: '#15222A',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
