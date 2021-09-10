import {AppProps} from "next/app";
import AppMain from "modules/app/AppMain";

const CustomApp = ({Component, pageProps}: AppProps) => {
  return (
    <AppMain>
      <Component {...pageProps} />
    </AppMain>
  );
};

export default CustomApp;
