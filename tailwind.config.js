/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "system-ui", "-apple-system"],
      },

      colors: {
        brand: {
          // Zelená
          green: "#219653", // primary
          "green-dark": "#00642B", // hover / dark variant
          "green-light": "#2DCB48", // accent / highlight

          // Neutrální
          white: "#FFFFFF",
          gray: "#F2F2F2", // pozadí / surface
          "gray-mid": "#E0E0E0", // border
          "gray-dark": "#4F4F4F", // sekundární text
          dark: "#333333", // hlavní text
        },
      },

      // ── TYPOGRAFIE ───────────────────────────
      fontSize: {
        // [velikost, { lineHeight }]
        display: [
          "56px",
          { lineHeight: "65px", fontWeight: "700", letterSpacing: "-1px" },
        ],
        h1: ["40px", { lineHeight: "48px", fontWeight: "700" }],
        h2: ["32px", { lineHeight: "38px", fontWeight: "700" }],
        h3: ["24px", { lineHeight: "32px", fontWeight: "700" }],
        h4: ["18px", { lineHeight: "28px", fontWeight: "600" }],
        h5: ["16px", { lineHeight: "24px", fontWeight: "600" }],
        h6: ["14px", { lineHeight: "20px", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "28px" }],
        body: ["16px", { lineHeight: "24px" }],
        "body-sm": ["14px", { lineHeight: "20px" }],
        caption: ["12px", { lineHeight: "20px" }],
      },
    },
  },
};
