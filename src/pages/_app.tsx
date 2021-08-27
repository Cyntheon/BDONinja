import {AppProps} from "next/app";
import Head from "next/head";
import {useEffect} from "react";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {Global} from "@emotion/react";
import theme from "style/theme";
import reset from "style/reset";

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
        <Component {...pageProps} />
      </MuiThemeProvider>
    </>
  );
};

export default CustomApp;
