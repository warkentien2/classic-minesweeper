import { useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import { GlobalStyles } from "./styles/GlobalStyles";
import { lightTheme, darkTheme } from "./styles/themes";
import { Game } from "./components/";

const inferThemeFromCSS = (): DefaultTheme => {
  const isDarkModeEnabled =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return isDarkModeEnabled ? darkTheme : lightTheme;
};

function App() {
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
      <Game />
    </ThemeProvider>
  );
}

export default App;
