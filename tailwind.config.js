export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg":
          "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)) ,url('/images/bg.jpeg')",
        "hero":
          "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)) ,url('/images/Upme.jpg')",
        "card-bg-1":
          "linear-gradient(rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.10)) ,url('/images/cardbg1.jpeg')",
        "card-bg-2":
          "linear-gradient(rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.10)) ,url('/images/cardbg2.jpeg')",
        "card-bg-3":
          "linear-gradient(rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.10)) ,url('/images/cardbg3.jpeg')",
      },
      colors: {
        "primary-1": "#FEA02F",
        "primary-2": "#FEB359",
        "primary-3": "#FEC682",
        "primary-4": "#FFD9AC",
        "secondary-1": "#34BCEE",
        "secondary-2": "#FEB359",
        "secondary-3": "#FEC682",
        "secondary-4": "#FFD9AC",
        "neutral-1": "#001125",
        "neutral-2": "#334151",
        "neutral-3": "#66707C",
        "neutral-4": "#99A0A8",
        "neutral-5": "#CCCFD3",
        "neutral-white": "#FFFFFF",
        "benefitMentor": "#85D7F5",
        "background" : "#EFEFEF",
      },
    },
  },
  plugins: [],
};
