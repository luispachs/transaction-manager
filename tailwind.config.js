/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./app/**/*.tsx",
      "./components/**/*.tsx",

  ],
  theme: {
    container:{
      center:true,
      padding:{
        DEFAULT:"4rem",
        sm: '1rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '6rem',
      }
    },
    extend: {},
  },
  plugins: [],
}

