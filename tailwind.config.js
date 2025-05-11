/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'cursive'],
        'bangers': ['Bangers', 'cursive'],
        'vt323': ['"VT323"', 'monospace'],
      },
      colors: {
        'neon-red': '#FF0040',
        'radioactive-yellow': '#FAFF00',
        'deep-black': '#121212',
        'electric-blue': '#00FFFF',
        'toxic-green': '#39FF14',
      },
      animation: {
        'shake': 'shake 0.5s ease-in-out',
        'flicker': 'flicker 3s linear infinite',
        'marquee': 'marquee 15s linear infinite',
        'pulse': 'pulse 2s infinite',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '20%': { transform: 'translate(-5px, 0) rotate(-5deg)' },
          '40%': { transform: 'translate(5px, 0) rotate(5deg)' },
          '60%': { transform: 'translate(-3px, 0) rotate(-3deg)' },
          '80%': { transform: 'translate(3px, 0) rotate(3deg)' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' },
        },
        marquee: {
          '0%': { transform: 'translate(100%, 0)' },
          '100%': { transform: 'translate(-100%, 0)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};