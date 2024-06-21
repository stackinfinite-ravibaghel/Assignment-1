import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '320px', 'max': '375px'},
      // => @media (min-width: 320px and max-width: 425px) { ... }

      'md': {'min': '375px', 'max': '767px'},
      // => @media (min-width: 426px and max-width: 768px) { ... }

      'lg': {'min': '768px', 'max': '1024px'},
      // => @media (min-width: 769px and max-width: 1024px) { ... }

      'xl': {'min': '1024px', 'max': '2560px'},
      // => @media (min-width: 1025px and max-width: 1440px) { ... }

      '2xl': {'min': '2560px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
