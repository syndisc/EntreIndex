import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primaryLight: "#F5F5F5",
        primaryDark: "#274472",
        secondaryLight: "#FFFFFF",
        secondaryDark: "#5885AF",
        accentLight: "#B9B7BD",
        accentDark: "#5885AF",
        textLight: "#000000",
        textDark: "#C3E0E5",
      },
      height:{
        '80vh' : "80vh",
        '85vh' : "85vh",
        '93.2vh' : "93.2vh"
      },
      width:{
        '47.5/100' : "47.5%"
      },
      gridTemplateColumns: {
        'data': 'repeat(33, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
export default config;
