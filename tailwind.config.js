/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#171717", // Neutral-900 like color for primary actions/highlights
        "background-light": "#f8fafc", // Very light cool gray
        "background-dark": "#0f172a", // Slate-900
        "card-light": "#ffffff",
        "card-dark": "#1e293b",
        "card-border-dark": "#27272a",
        "card-hover-dark": "#1e1e20",
        "text-subtle": "#a1a1aa",
        "text-gray-light": "#4b5563",
        "text-gray-dark": "#9ca3af",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
        body: ['Sora', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        'xl': "1rem",
        '2xl': "1.5rem",
        '3xl': "2rem",
      },
    },
  },
  plugins: [],
}