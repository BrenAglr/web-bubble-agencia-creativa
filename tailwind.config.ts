import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brasley: ['Brasley', 'sans-serif'],
        gatwick: ['GatwickBold', 'sans-serif'],
        gatwickLight: ['GatwickUltraLight', 'sans-serif'],
        seymour: ['SeymourOne', 'sans-serif'],
      },
      colors: {
        softblack: "#291C40", //"#111827", otro negro
        graywhite: "#EDE2FF",
        indigo: "#A570FF", //violeta
        redish: "#B8003D", //rosa
        orangesh: "#FF5400", //naranja
        murray: "#7A0045", //morado
        pictonblue: "#36A1D3" //celeste
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.3s ease-out',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require("tailwindcss-animate")
  ],
};

export default config;

