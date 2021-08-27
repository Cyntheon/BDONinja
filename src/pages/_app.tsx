import {AppProps} from "next/app";
import Head from "next/head";
import {useEffect} from "react";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {Global} from "@emotion/react";
import theme from "style/theme";
import reset from "style/reset";
import Main from "main/Main";

const CustomApp = ({Component, pageProps}: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>BDO Ninja</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Global styles={reset} />
        <Main>
          <Component {...pageProps} />
        </Main>
      </MuiThemeProvider>
    </>
  );
};

export default CustomApp;
