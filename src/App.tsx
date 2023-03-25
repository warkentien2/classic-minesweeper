import { useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import { GlobalStyles } from "./Styles/GlobalStyles";
import { lightTheme, darkTheme } from "./Styles/themes";
import { Game } from "./Components";
import { isDarkModeEnabled } from "./utils";

const inferThemeFromCSS = (): DefaultTheme =>
  isDarkModeEnabled() ? darkTheme : lightTheme;

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
