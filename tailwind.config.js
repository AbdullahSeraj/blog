// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // تأكد من أن ملف التكوين يراقب جميع الملفات في مجلد `src`
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Space Grotesk"', // الخط المخصص
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        primary: {
          50: "oklch(0.971 0.014 343.198)",
          100: "oklch(0.948 0.028 342.258)",
          200: "oklch(0.899 0.061 343.231)",
          300: "oklch(0.823 0.12 346.018)",
          400: "oklch(0.718 0.202 349.761)",
          500: "oklch(0.656 0.241 354.308)",
          600: "oklch(0.592 0.249 0.584)",
          700: "oklch(0.525 0.223 3.958)",
          800: "oklch(0.459 0.187 3.815)",
          900: "oklch(0.408 0.153 2.432)",
          950: "oklch(0.284 0.109 3.907)",
        },
        gray: {
          50: "oklch(0.985 0.002 247.839)",
          100: "oklch(0.967 0.003 264.542)",
          200: "oklch(0.928 0.006 264.531)",
          300: "oklch(0.872 0.01 258.338)",
          400: "oklch(0.707 0.022 261.325)",
          500: "oklch(0.551 0.027 264.364)",
          600: "oklch(0.446 0.03 256.802)",
          700: "oklch(0.373 0.034 259.733)",
          800: "oklch(0.278 0.033 256.848)",
          900: "oklch(0.21 0.034 264.665)",
          950: "oklch(0.13 0.028 261.692)",
        },
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
      },
    },
  },
  plugins: [],
};
