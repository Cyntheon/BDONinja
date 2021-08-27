import {AppProps} from "next/app";
import {Global, css} from "@emotion/react";
import reset from "styles/reset";

const CustomApp = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <Global styles={css(reset)} />
      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;
