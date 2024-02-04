import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        default: "#0000",
        dark: {
          DEFAULT: "#1F2023", // dark mode background
          primary: "#f7f8f8",
          secondary: "#d7d8db",
          tertiary: "#8a8f98",
          accent: "#27282B", // for background
          accent2: "#303236", // for borders, ring and outlined
          accent3: "#3c3f44",
          highlight: "#303236",
          subtle: "#27282b",
          muted: "#242426",
        },
        light: {
          primary: "#282A30",
          secondary: "#3c4149",
          tertiary: "#6b6f76",
          accent: "#F3F5F7", // for background
          accent2: "#eff1f4", // for borders, ring and outlined
          accent3: "#dfe1e4",
          highlight: "#FFFFFF",
          subtle: "#f4f5f8",
          muted: "#fafbff",
        },
        primary: {
          DEFAULT: "#4594DC",
          300: "#a2caee",
          400: "#74afe5",
          500: '#4594DC',
          600: '#3373BA',
          700: '#295D97',
        },
        secondary: {
          DEFAULT: "#030712",
          300: "#818389",
          400: "#42454d",
          500: '#030712',
          600: '#1F2937',
          700: '#374151',
        },
        accent: "#1fb2a6",
        neutral: "#2a323c",
        "base-100": "#1d232a",
        info: {
          DEFAULT: "#60a5fa",
          50: '#e7f2fe',
          100: '#cce2fd',
          200: '#b1d3fd',
          300: '#96c4fc',
          400: '#7bb4fb',
          500: '#60a5fa',
          600: '#5089d0',
          700: '#3f6da5',
          800: '#2f517b',
          900: '#1f3550',
          950: '#0e1926',
        }, //blue-400
        success: {
          DEFAULT: "#84CC16",
          50: '#edf7dc',
          100: '#d8efb4',
          200: '#c3e68d',
          300: '#aedd65',
          400: '#99d53e',
          500: '#84cc16',
          600: '#6ea912',
          700: '#57870f',
          800: '#41640b',
          900: '#2a4107',
          950: '#141f03',
        }, //lime-500
        warning: {
          DEFAULT: "#f59e0b",
          50: '#fef5e7',
          100: '#fce4bb',
          200: '#fad28f',
          300: '#f9c163',
          400: '#f7af37',
          500: '#f59e0b',
          600: '#c98209',
          700: '#9d6507',
          800: '#714905',
          900: '#452c03',
          950: '#181001',
        }, //amber-500
        error: {
          DEFAULT: "#ef4444",
          50: '#fdecec',
          100: '#fbcbcb',
          200: '#f8a9a9',
          300: '#f58787',
          400: '#f26666',
          500: '#ef4444',
          600: '#c43838',
          700: '#992c2c',
          800: '#6e1f1f',
          900: '#431313',
          950: '#180707',
        }, //red-500
        divider: "#f1f5f9", //slate-100
      },
    },
  },
  plugins: [],
};

export default config;
