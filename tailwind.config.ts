import { extendTailwindMerge } from "tailwind-merge";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typographyPlugin from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "390px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1360px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        zinc: {
          "50": "#fafafa",
          "100": "#f4f4f5",
          "200": "#e4e4e7",
          "300": "#d4d4d8",
          "400": "#a1a1aa",
          "500": "#71717a",
          "600": "#52525b",
          "800": "#27272a",
          "900": "#18181b",
        },
        blue: {
          primary: "#266ae9",
        },
        neutral: {
          "25": "#fcfcfc",
          "75": "#f7f7f7",
          "100": "#f5f5f5",
          "800": "#262626",
          "900": "#171717",
        },
        primary: {
          light: "#4680ec",
          DEFAULT: "#266ae9",
          dark: "#1658d5",
        },
        background: {
          light: "#ffffff",
          dark: "#030303",
        },
        accent: {
          purple: "#9747ff",
          blue: "rgba(38, 106, 233, 0)",
        },
        gray: {
          "100": "#f3f4f6",
          dark: {
            "100": "#242424",
            "300": "rgba(250, 250, 250, 0.05)",
            "400": "rgba(255, 255, 255, 0.1)",
            "500": "rgba(255, 255, 255, 0.2)",
          },
        },
      },
      fontFamily: {
        albert: ["var(--font-albert)", "sans-serif"],
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
      },
      padding: {
        "container-xl": "320px",
        "301xl": "320px",
        "3xs": "10px",
        xl: "20px",
        "29xl": "48px",
      },
      fontSize: {
        h1: [
          "80px",
          {
            lineHeight: "96px",
            fontWeight: "500",
          },
        ],
        h2: [
          "56px",
          {
            lineHeight: "68px",
            fontWeight: "500",
          },
        ],
        h3: [
          "48px",
          {
            lineHeight: "58px",
            fontWeight: "500",
          },
        ],
        h4: [
          "40px",
          {
            lineHeight: "48px",
            fontWeight: "500",
          },
        ],
        "subtitle-xl": [
          "32px",
          {
            lineHeight: "40px",
            fontWeight: "500",
          },
        ],
        "subtitle-l": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "500",
          },
        ],
        "subtitle-m": [
          "20px",
          {
            lineHeight: "24px",
            fontWeight: "500",
          },
        ],
        "subtitle-s": [
          "18px",
          {
            lineHeight: "22px",
            fontWeight: "500",
          },
        ],
        "subtitle-xs": [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: "500",
          },
        ],
        "body-xxl": [
          "28px",
          {
            lineHeight: "40px",
            fontWeight: "400",
          },
        ],
        "body-xl": [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "400",
          },
        ],
        "body-l": [
          "18px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "body-m": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "body-s": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
        "body-base": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "500",
          },
        ],
        "caption-m": [
          "12px",
          {
            lineHeight: "14px",
            fontWeight: "400",
          },
        ],
        "caption-base": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "500",
          },
        ],
        "caption-s": [
          "10px",
          {
            lineHeight: "12px",
            fontWeight: "500",
          },
        ],
        badge: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "500",
          },
        ],
        "badge-s": [
          "12px",
          {
            lineHeight: "12px",
            fontWeight: "500",
          },
        ],
        "badge-home" : [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "500",
          }
        ],
        button: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "500",
          },
        ],
      },
      backgroundImage: {
        "steps-section":
          "linear-gradient(180deg, #FFF 0%, #FAFAFA 30.51%, #FAFAFA 63.46%, #FFF 95.67%)",
        "rectangle-5":
          "linear-gradient(168deg, #5C85D5 40.23%, #C3A7F3 100.33%)",
        "horizontal-divider":
          "linear-gradient(90deg, #FAFAFA 0%, #C7CACE 50%, #FAFAFA 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        marquee: {
          to: {
            transform: "translateX(-50%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee var(--duration, 30s) linear infinite",
      },
    },
  },
  plugins: [animate, typographyPlugin],
} satisfies Config;

const typography = [
  "text-button",
  "text-badge",
  "text-badge-s",
  "text-caption-m",
  "text-caption-base",
  "text-badge-home",
  "text-caption-s",
  "text-body-s",
  "text-body-m",
  "text-body-l",
  "text-body-xl",
  "text-body-xxl",
  "text-subtitle-xs",
  "text-subtitle-s",
  "text-subtitle-m",
  "text-subtitle-l",
  "text-subtitle-xl",
  "text-h1",
  "text-h2",
  "text-h3",
  "text-h4",
];

export const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": typography,
      "font-weight": typography,
    },
  },
});
