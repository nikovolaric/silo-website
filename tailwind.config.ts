import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raj: "var(--font-raj)",
      },
      colors: {
        primary: "#112f64",
        secondary: "#001A47",
        accent: "#0093DD",
        // accent: "#00aaff",
        // accent: "#DBC023",
        neutral: "#F6F6F6",
        neutraltwo: "#EBEBEB",
        grad: "#737373",
      },
      listStyleImage: {
        check: 'url("/icons/check.svg")',
        one: 'url("/icons/one.svg")',
        two: 'url("/icons/two.svg")',
        three: 'url("/icons/three.svg")',
      },
      animation: {
        cookieAni: "cookieAni 0.5s cubic-bezier(0.61, 0.79, 0.91, 0.98)",
      },
      keyframes: {
        cookieAni: {
          "0%, 10%": {
            transform: "translateY(120%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
