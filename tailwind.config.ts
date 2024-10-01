import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],
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
        dojo: {
          100: '#d0dfec',
          200: '#b9cfe2',
          300: '#8bafce',
          400: '#5d90ba',
          500: '#2b71a5',
          600: '#496487',
          700: '#315076',
          800: '#1a3c66',
          900: '#002855',
          light: '#00629b',
          dark: '#002149',
        },
        card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
      },
      fontFamily: {
        sans: ['var(--font-roboto)'],
      },
    
      backgroundImage: { 
        "dojo-day": 'url("/dojo-day.jpg")',
        "dojo-night": 'url("/dojo-night.jpg")',
		"dojo-triangle": 'url("/large-triangles.svg")',
		"dojo-arrowhead": 'url("/arrowhead-alternating.svg")',
		"dojo-pattern": 'url("/pattern-randomized.svg")',
		"dojo-zig-zag": 'url("/zig-zag.svg")',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;