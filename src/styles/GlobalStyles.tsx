import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --size-small: 16px;
    --size-medium: 26px;
    --tile-bg: #bdbdbd;
    --tile-bg-highlight: #fff;
    --tile-bg-shadow: #7b7b7b;
    --link-color: #0000ee;

    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
