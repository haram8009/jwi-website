/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": { DEFAULT: "#0D4C92" },
        "brand-red": { DEFAULT: "#9E1B30" },
        "blue-tint": { DEFAULT: "#E6EFF9" },
        "red-tint": { DEFAULT: "#FDECEE" },
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-shadow"),
  ],
};

console.log("Tailwind CSS configuration loaded successfully.");
console.log("primary color:", module.exports.theme.colors["brand-blue"]);
