module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Add Inter as the default sans-serif font
        mona: ["Mona Sans", "sans-serif"],
        Mont: ["Montserrat", "sans-serif"], // Mona Sans font
      },
      screens: {
        xs: "480px", // Extra small devices
        tablet: "768px", // Custom name for tablet size
        laptop: "1024px", // Custom name for laptop size
        desktop: "1280px", // Custom name for desktop size
      },
      backgroundImage: {
        "gradient-b": "linear-gradient(45deg, #14141E 0%, #585884 100%)",
        "gradient-a":
          "linear-gradient( #FFFFFF 0%, #66666633 20%, #FFFFFF 100%)",
        "gradient-c": "linear-gradient(to bottom, #000000 100%, #081228 100%)",
        "custom-gradient": "linear-gradient(100%, #EEFAFD, #DBF6FF)",

        "gradient-button": "linear-gradient(90deg, #1D4195 0%, #02246E 100%)",
        "custom-gradient-a": "linear-gradient(90deg, #FFFFFF 0%, #21C1F3 100%)",
        "custom-gradient-b": "linear-gradient(to right, #06122600, #040D1A)",
        "diagonal-gradient":
          "linear-gradient(135deg, #DBF6FF 0%, #EEFAFD 50%, #DBF6FF 100%)",
      },
      animation: {
        bounce: "bounce 1s infinite",
        bounce200: "bounce 1s infinite 200ms", // Animation delay of 200ms
        bounce400: "bounce 1s infinite 400ms", // Animation delay of 400ms
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-0.5rem)" },
        },
      },
      spacing: {
        "animation-delay-200": "200ms", // This is unnecessary for animation; removed for cleaner config
        "animation-delay-400": "400ms", // Same as above
      },
    },
  },
  plugins: [],
};
