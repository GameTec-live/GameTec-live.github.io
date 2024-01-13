/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      backgroundColor: {
        'black-translucent': 'rgba(0, 0, 0, 0.5)',
      }
    },
  },
  variants: {
    extend: {
      backdropFilter: ['responsive'],
    }
  },
  plugins: [],
}

