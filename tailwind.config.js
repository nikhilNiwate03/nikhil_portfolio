// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
      },
      fontSize: {
        base: "18px",
      },
      letterSpacing: {
        normal: "0em",
      },
      lineHeight: {
        relaxed: "1.5", // 150%
      },
      spacing: {
        paragraph: "20px", // custom spacing
      },
      fontWeight: {
        normal: "500",
        bold: "700",
        italic: "400",
      },
    },
  },
};
