/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  // corePlugins: {
  //   preflight: false,
  // },
  content: [],
  theme: {
    colors: {
      grey: {
        dark: "#24232C",
        normal: "#817D92",
        light: "#E6E5EA",
      },
      black: "#18171F",
      coral: "#A4FFAF",
      "too-weak": "#F64A4A",
      weak: "#FB7C58",
      moderate: "#F8CD65",
      strong: "theme(colors.coral)",
    },
    fontSize: {
      0: "0px",
      lg: "32px",
      md: "24px",
      sm: "18px",
    },
    fontFamily: {
      mono: ["JetBrains Mono", "monospace"],
    },
    extend: {
      width: {
        checkbox: "20px",
        tick: "calc(theme(width.checkbox) - 3px)",
        "button-x": "476px",
        md: "540px",
      },
      height: {
        "button-y": "65px",
        "checkbox": "20px",
        sm: "72px",
        "sm-lg": "80px",
        md: "143px",
      },
      padding: {
        "box-y": "28px",
        "box-x": "32px",
      },
      lineHeight: {
        testing: "100px",
      },
      backgroundImage: {
        tick: "url(/Tick.svg)",
      },
      maxWidth: {
        48: "192px",
      },
    },
  },
  plugins: [],
};
