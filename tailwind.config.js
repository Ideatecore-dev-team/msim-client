export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg":
          "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)) ,url('/images/herobg.png')",
      },
    },
  },
  plugins: [],
};
