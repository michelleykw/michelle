import { createMuiTheme } from '@material-ui/core/styles'

const settings = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    },
  },
  shadows: ["none"],
  palette: {
    common: {
      black: "#000",
      white: "#fff",
      mingBlue: {
        dark: "#2A4A64",
        main: "#355C7D",
        light: "#5D7D97",
        100: "#D7DEE5",
        50: "#EBEFF2"
      },
      teakMustard: {
        dark: "#927E4E",
        main: "#B69D61",
        light: "#C5B181",
        100: "#F0EBDF",
        50: "#F8F5EF"
      }
    },
    background: {
      paper: "#FAFAFA",
      default: "#F4F4F4"
    },
    divider: "#E8E7E8",
    primary: { // smokeyViolet
      dark: "#564962", // 600
      main: "#6C5B7B", // 500
      light: "#897C95", // 400
      800: "#2B2431",
      100: "#E2DEE5",
      50: "#F0EFF2",
      contrastText: "#FAFAFA"
    },
    secondary: { // turkishRose
      dark: "#9A566A",
      main: "#C06C84",
      light: "#CD899D",
      100: "#F2E2E6",
      50: "#F9F0F3",
      contrastText: "#FAFAFA"
    },
    "text": {
      disabled: "#C7C6C8",
      hint: "#A2A0A3",
      primary: "#161219",
      secondary: "#5C595E"
    },
    success: {
      dark: "#1A661D",
      main: "#208024",
      light: "#E9F4EA",
      contrastText: "#FAFAFA"
    },
    warning: {
      dark: "#BA6106",
      main: "#E97908",
      light: "#FDF2E6",
      contrastText: "#FAFAFA"
    },
    error: {
      dark: "#A11819",
      main: "#C91E1F",
      light: "#F8E4E4",
      50: '#FEF8F8',
      contrastText: "#FAFAFA"
    }
  },
  typography: {
    h1: { // h0
      fontFamily: "\"Montserrat\", sans-serif",
      fontSize: "9rem",
      fontWeight: 600,
      lineHeight: 0.96
    },
    h2: { // h1
      fontFamily: "\"Montserrat\", sans-serif",
      fontSize: "5.5rem",
      fontWeight: 600,
      letterSpacing: "-4%"
    },
    h3: { // subtitle3
      fontSize: "3rem",
      fontWeight: 400,
      letterSpacing: "2%",
      lineHeight: 1.6
    },
    h4: { // h4
      fontFamily: "\"Montserrat\", sans-serif",
      fontSize: "2.25rem",
      fontWeight: 600,
      lineHeight: 1.33,
      letterSpacing: "0.25px"
    },
    h5: { // h6
      fontFamily: "\"Montserrat\", sans-serif",
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.6
    },
    h6: { // h7
      fontFamily: "\"Montserrat\", sans-serif",
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.6
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: "2%"
    },
    body2: {
      fontSize: "0.9375rem",
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: "2%"
    },
    body3: {
      fontFamily: "\"Merriweather\", serif",
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.68,
      letterSpacing: "2%"
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: "2%"
    },
    subtitle2: {
      fontSize: "1.125rem",
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: "2%"
    },
    button: { // button
      fontFamily: "\"Montserrat\", sans-serif",
      fontSize: "0.9375rem",
      fontWeight: 600,
      lineHeight: 1.6,
      letterSpacing: "-1%",
      textTransform: "uppercase"
    },
    fontSize: 16,
    fontFamily: "\"Merriweather\", serif",
    fontWeightBold: 600,
  }
};

if (window.innerWidth < 600) { // mobile
  settings.typography.h1.fontSize = "4rem";
  settings.typography.h2.fontSize = "3rem";
  settings.typography.h3.fontSize = "1.5rem";
  settings.typography.h4.fontSize = "1.75rem";
  settings.typography.h5.fontSize = "1.5rem";
  settings.typography.h6.fontSize = "1.25rem";
  settings.typography.body1.fontSize = "1rem";
  settings.typography.body2.fontSize = "0.9375rem";
  settings.typography.body3.fontSize = "0.875rem";
  settings.typography.subtitle1.fontSize = "1.125rem";
  settings.typography.subtitle2.fontSize = "0.9375rem";
  settings.typography.button.fontSize = "0.875remrem";
} else if (window.innerWidth < 1024) { // tablets
  settings.typography.h1.fontSize = "7rem";
  settings.typography.h2.fontSize = "5rem";
  settings.typography.h3.fontSize = "2.5rem";
}

export const theme = createMuiTheme(settings);