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

  const toggleTheme = () => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
    return;
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Game toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
