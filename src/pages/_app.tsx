import {AppProps} from "next/app";
import {Global} from "@emotion/react";
import reset from "styles/reset";

const CustomApp = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <Global styles={reset} />
      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;
