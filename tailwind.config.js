module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    fontSize: {
      xs: ["12px", {
        lineHeight: "14px"
      }],
      sm: ["14px", {
        lineHeight: "20px"
      }],
      base: ["16px", {
        lineHeight: "24px"
      }],
      "4.5": ["18px", {
        lineHeight: "26px"
      }],
      "5.5": ["22px", {
        lineHeight: "32px"
      }],
      "xl": ["20px", {
        lineHeight: "29px"
      }],
      "2xl": ["24px", {
        lineHeight: "35px"
      }],

      "2.5xl": ["28px", {
        lineHeight: "40px"
      }],
      "3.5xl": ["32px", {
        lineHeight: "37px"
      }],
      "10": ["40px", {
        lineHeight: "50px"
      }],
      "12.5": ["50px", {
        lineHeight: "1"
      }],
      "5xl": ["48px", {
        lineHeight: "56px"
      }],
      "8.5xl": ["104px", {
        lineHeight: "1"
      }],

    },
    extend: {
      colors: {
        "fog": {
          "light": "#C1C1C1",
          DEFAULT: "#2D2D2D",
          "dark": "#202020"
        },
        "neo": {
          "green": "#62DB54",
          "blue": "#09ACF5"
        },
        "deep": {
          100: "#7C7E77",
          200: "#909090",
          300: "#0000002E",
          400: "#1C1C1C",
          600: "#494755",
          700: "#1A1A1A",
        }
      },
      container: {
        center: true,
        padding: "12px"
      },
      fontFamily: {
        'az-mono': 'Azeret Mono'
      },
      spacing: {
        "1.3": "3px",
        "1.4": "5px",
        "7.5": "30px",
        "11.5": "45px",
        "12.5": "50px",
        "16":"64px",
        "16.5": "66px",
        "21": "84px",
        "22":"88px",
        "22.5": "90px",
        "25": "100px",
     
        "54":"216px",

      },
      width: {
        "12.5": "50px",
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}