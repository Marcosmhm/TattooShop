import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        heading: '#FFF',
        text: '#CCCCCC',
        yellow: '#FFD911',
        'text-muted': '#636363',
        'footer-bg': '#161616',
        'main-bg': '#191919',
      },
      fontFamily: {
        signature: ['var(--font-signature)'],
        londrina: ['var(--font-londrina)'],
        inter: ['var(--font-inter)'],
      },
      fontWeight: {
        heading: '900',
      },
      maxWidth: {
        maxWidth: '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
