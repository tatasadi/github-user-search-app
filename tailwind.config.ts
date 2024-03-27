import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bright-blue": "#0079FF",
        "slate-gray": "#697C9A",
        "cool-blue": "#4B6A9B",
        charcoal: "#2B3442",
        "lightest-blue": "#F6F8FF",
        "off-white": "#FEFEFE",
        "dark-blue": "#141D2F",
        "deep-blue": "#1E2A47",
      },
    },
  },
  plugins: [],
}
export default config
