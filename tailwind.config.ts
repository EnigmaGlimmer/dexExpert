import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          900: '#172B46',
          700: '#437998',
          600: '#1d3557',
        },
        limeGreen:'#a8dadc',
        buttonSend:'#457b9d',
      },
    },
  },
  plugins: [],
} satisfies Config;
