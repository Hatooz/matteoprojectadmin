import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        tailwindDarkBlue: "#111827",
        tailwindLightBlue: "#374151",
        tailwindDefaultBlue: "#1C64F2",
        riksbyggenGray: "#818181",
        riksbyggenDarkGray: "#212121",
      },
    },
  },
  plugins: [],
};
export default config;
