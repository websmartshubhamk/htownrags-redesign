import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary-red': '#E31C45',
        'primary-dark': '#1A1A1A',
        'primary-cream': '#FAF7F0',
        // Secondary Colors
        'accent-gold': '#D4A574',
        'accent-teal': '#2C7A7B',
        'neutral-warm': '#8B7355',
        'neutral-cool': '#64748B',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'accent': ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;