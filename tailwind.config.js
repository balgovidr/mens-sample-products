/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        tertiary: '#87a9b3',
        primary: '#34495E',
        secondary: '#e0e0e0',
        // Accent colors
        olive: '#6B8E23',
        accent: '#ffa047',
        // Additional colors
        // burgundy: '#800020', // Example color, adjust as needed
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        bellota: ['var(--font-bellota)'], // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  plugins: [],
};
