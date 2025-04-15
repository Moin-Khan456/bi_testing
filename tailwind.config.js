module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
        "spin-slow": "spin 10s linear infinite",
      },
      screens: {
        "3xl": "1920px",
      },
      backgroundImage: {
        hero: "url('https://d1u4arv5y5eda6.cloudfront.net/images/hero.png')",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
