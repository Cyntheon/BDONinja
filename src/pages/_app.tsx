import {AppProps} from "next/app";
import Head from "next/head";
import Main from "app/Main";
import GlobalStyling from "style/GlobalStyling";

const CustomApp = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <Head>
        <title>BDO Ninja</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <GlobalStyling>
        <Main>
          <Component {...pageProps} />
        </Main>
      </GlobalStyling>
    </>
  );
};

export default CustomApp;
