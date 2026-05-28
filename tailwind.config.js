/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'neon-green': '0 0 30px 5px rgba(23, 204, 10, 0.5)',
        'neon-4': '0 0 20px 5px rgba(23, 204, 10, 0.5)',
      },
      keyframes: {
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'rgb-rotate': 'spin-slow 3s linear infinite',
      },
    },
  },
  plugins: [],
};