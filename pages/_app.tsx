import "../styles/globals.ts";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/globals";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default App;
