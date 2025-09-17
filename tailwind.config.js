/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002B5B",
        secondary: "#FFD700",
        lightbg: "#F1F5F9",
        textDark: "#1E293B",
        friendlyPrimary: "#1E3A8A",
        friendlyAccent: "#FACC15",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}
