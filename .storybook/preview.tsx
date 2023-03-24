import React, { useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import { GlobalStyles } from "../src/styles/GlobalStyles";
import { lightTheme, darkTheme } from "../src/styles/themes";
import { isDarkModeEnabled } from "../src/utils";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const inferThemeFromCSS = (): DefaultTheme =>
  isDarkModeEnabled() ? darkTheme : lightTheme;

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
