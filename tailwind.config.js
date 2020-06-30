module.exports = {
  theme: {
    inset: {
      auto: "auto",
      "0": "0rem",
      "2.5": "0.625rem",
      "5": "1.25rem",
      "10": "2.5rem",
      "16": "4rem",
      "20": "5rem",
      "-0": "-0rem",
      "-2.5": "-0.625rem",
      "-5": "-1.25rem",
      "-10": "-2.5rem",
      "-16": "-4rem",
      "-20": "-5rem",
      "1/2": "50%",
      "1/3": "33%",
      "2/3": "66%",
      "1/4": "25%",
    },
    boxShadow: {
      default: "0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)",
      md:
        " 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)",
      lg:
        " 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)",
      xl:
        " 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)",
      ["2xl"]: "0 25px 50px -12px rgba(0, 0, 0, .25)",
      ["3xl:"]: "0 35px 60px -15px rgba(0, 0, 0, .3)",
      inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
      outline: "0 0 0 3px rgba(86, 60, 154,0.5)",
      focus: "0 0 0 3px rgba(86, 60, 154,0.5)",
    },
    extend: {
      fontFamily: {
        display: ["Rubik"],
        body: ["Open Sans"],
      },
      colors: {
        "corpus-blue": {
          100: "#E6ECF0",
          200: "#BFD0D9",
          300: "#99B4C2",
          400: "#4D7C94",
          500: "#004466",
          600: "#003D5C",
          700: "#00293D",
          800: "#001F2E",
          900: "#00141F",
        },

        "corpus-orange": {
          100: "#FCF5E9",
          200: "#F9E7C8",
          300: "#F5D8A7",
          400: "#EDBA65",
          500: "#E59D23",
          600: "#CE8D20",
          700: "#895E15",
          800: "#674710",
          900: "#452F0B",
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
