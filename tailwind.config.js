/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-hero': "url('/src/assets/2.png')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
