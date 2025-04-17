/* eslint-disable @typescript-eslint/no-require-imports */
import { type Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      fontFamily: {
        cairo: ['var(--font-cairo)'],
      },
      colors: {
        primary: 'rgb(7 16 81 / <alpha-value>)',
        primary2: 'rgb(3 4 35 / <alpha-value>)',
        primary3: 'rgb(26 35 126 / <alpha-value>)',
        secondary: 'rgb(32 124 235 / <alpha-value>)',
        purple: 'rgb(98 54 245 / <alpha-value>)',
        bgPrimary: 'rgb(255 255 255 / <alpha-value>)',
        textPrimary: 'rgb(0 0 0 / <alpha-value>)',
        bg1: 'rgb(29 29 29 / <alpha-value>)',
        textGray: 'rgb(108 109 110 / <alpha-value>)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
} satisfies Config;
