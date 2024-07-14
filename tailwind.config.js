/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/layout.jsx",
    "./src/App.jsx",
    "./src/SearchBar.jsx",
    "./src/main.jsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gym-app-background": "url('/media/background.jpg')",
      },
    },
    fontFamily: {
      roboto: "roboto",
    },
  },
  plugins: [],
};
