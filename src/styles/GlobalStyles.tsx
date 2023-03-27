import { createGlobalStyle } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
        highlight: string;
        shadow: string;
      };
      text: {
        dark: string;
        light: string;
        link: string;
      };
    };
    typography: {
      fontSize: string;
      fontFamily: string;
    };
  }
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --size-small: 16px;
    --size-medium: 26px;
    --tile-bg: ${({ theme }) => theme.colors.background.primary};
    --tile-bg-highlight: ${({ theme }) => theme.colors.background.highlight};
    --tile-bg-shadow: ${({ theme }) => theme.colors.background.shadow};
    --tile-shadow: 0.75px 1.5px 2px var(--tile-bg-shadow);
    --link-color: ${({ theme }) => theme.colors.text.link};

    font-size: ${({ theme }) => theme.typography.fontSize};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    line-height: 1.5;
  }
`;
