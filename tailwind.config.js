/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        in: 'in .6s both',
      },
      keyframes: {
        in: {
          '0%': { transform: 'translateY(18px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
}
