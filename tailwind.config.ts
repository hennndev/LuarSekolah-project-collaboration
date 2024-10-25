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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "secondary-gray": "var(--secondary-gray)"
      },
      backgroundImage: {
        "visimisi-image": "url('/images/visimisi-image.png')"
      },
      boxShadow: {
        "dropdown": "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        "card": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }       
    },
  },
  plugins: [
    require("tailwindcss-textshadow")
  ],
};
export default config;
