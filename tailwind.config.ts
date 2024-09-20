import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dojo': {
          100: '#ffd8b3',
          200: '#ffc58d',
          300: '#ffb268',
          400: '#ff9f40',
          500: '#ff8c00',
          600: '#d0730d',
          700: '#a45c12',
          800: '#794513',
          900: '#512f11',
          light: '#ffecd8',
          dark: '#2c1b0c',
        },
      },
      fontFamily: {
        sans: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
};
export default config;
