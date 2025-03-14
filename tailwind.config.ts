import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          light: {
            primary: 'var(--light-primary)',
            background: 'var(--light-background)',
            text: 'var(--light-text)',
            border: 'var(--light-border)',
            signBorder: 'var(--light-sign-border)',
            switch: 'var(--light-switch)',
          },
          dark: {
            primary: 'var(--dark-primary)',
            background: 'var(--dark-background)',
            text: 'var(--dark-text)',
            border: 'var(--dark-border)',
            signBorder: 'var(--dark-sign-border)',
            switch: 'var(--dark-switch)',
          }
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
