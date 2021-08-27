import {AppProps} from "next/app";
import {CustomThemeProvider} from "theme/theming";
import Head from "next/head";
import {useEffect} from "react";

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
      <CustomThemeProvider>
        <Component {...pageProps} />
      </CustomThemeProvider>
    </>
  );
};

export default CustomApp;
