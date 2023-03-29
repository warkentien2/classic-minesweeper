import type { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  colors: {
    background: {
      page: "#FFF",
      primary: "#BDBDBD",
      secondary: "#EEE",
      tertiary: "#06f",
      highlight: "#FFF",
      shadow: "#7b7b7b",
    },
    text: {
      dark: "#000",
      light: "#FFF",
      link: "#0000ee",
    },
  },
  typography: {
    fontSize: "12px",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: {
      page: "#000",
      primary: "#7E7E7E",
      secondary: "#BBBBBB",
      tertiary: "#184292",
      highlight: "#AAAAAA",
      shadow: "#525252",
    },
    text: {
      dark: "#444444",
      light: "#DDD",
      link: "#0070f3",
    },
  },
  typography: {
    fontSize: "12px",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
};
