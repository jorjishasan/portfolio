/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        // Padding values for vertical spacing
        "section-padding-y": "2rem", // Default for mobile
        "section-padding-y-md": "3rem", // For tablets
        "section-padding-y-lg": "5rem", // For desktops

        // Margin values for vertical spacing
        "section-margin-y": "1.5rem", // Default for mobile
        "section-margin-y-md": "2.5rem", // For tablets
        "section-margin-y-lg": "3.5rem", // For desktops
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-5px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
