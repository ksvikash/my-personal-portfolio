/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#ccfbf1',
        darkHover: '#292524',
        darkTheme: '#171717',
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"]
      },
      boxShadow: {
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #FFF'
      },
      gridTemplateColumns: {
         'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
};
