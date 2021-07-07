import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export const theme = {
  borderRadiusSmall: "0.3em",

  colors: {
    green: "#66D36E",
    spaceGray: "#030303",
    darkGray: "#b3b3b3",
    background: "#121212",
    itemsBackground: "#181818",
    grizzly: "rgba(118, 118, 118, 0.5)",
    white: "#FFFFFF",
  },
};
