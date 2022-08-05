import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#594D11",
    secondary: "#38558F",
    primaryText: "#0D0D0D",
    secondaryText: "#8C8C8C",
    background: "#D9D9D9",
    contentBackground: '#F2F2F2'
  },

  fontFamily: "Roboto, sans-serif",

  fontSize: {
    small: "0.75rem",
    regular: "1rem",
    large: "1.25rem",
    title3: "1.5rem",
    title2: "1.75rem",
    title1: "3.75rem"
  },

  fontWeight: {
    thin: 100,
    light: 300,
    regular: 400,
    bold: 700,
  },

  borderRadius: {
    small: "0.25rem",
    regular: "0.5rem",
    large: "1rem",
    round: "50%",
  },
};