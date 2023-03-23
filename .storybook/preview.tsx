import React, { useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { GlobalStyles } from "../src/styles/GlobalStyles";
import { lightTheme, darkTheme } from "../src/styles/themes";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const inferThemeFromCSS = (): DefaultTheme => {
  const isDarkModeEnabled =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return isDarkModeEnabled ? darkTheme : lightTheme;
};

export const decorators = [
  (Story) => {
    const [theme, setTheme] = useState(inferThemeFromCSS());

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <label>
          Dark Mode
          <input
            type="checkbox"
            onChange={() =>
              setTheme(theme === lightTheme ? darkTheme : lightTheme)
            }
            checked={theme === darkTheme}
          />
        </label>
        <Story />
      </ThemeProvider>
    );
  },
];
