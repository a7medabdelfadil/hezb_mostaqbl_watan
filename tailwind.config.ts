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
        primary: "#071051",
        primary2: "#030423",
        primary3: "#1A237E",
        secondary: "#207CEB",
        purple: "#6236F5",
        bgPrimary: "#FFFFFF",
        textPrimary: "#000000",
        bg1: "#1D1D1D"
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
} satisfies Config;
