export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD050", // Example: For buttons and highlights
        secondary: "#232536", // Example: For headings and text
        special: "#592EA9", // Example: For special text
        icon: "#4C4C4C", // Example: For icons
        paragraph: "#6D6E76", // Example: For paragraph text
        card1: "#F4F4F4", // Example: For light card backgrounds
        card2: "#F4F0F8", // Example: For alternate card backgrounds
        card3: "#FBF6EA", 
      },
      fontFamily: {
        heading: ["Sen", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
