import {AppProps} from "next/app";
import AppMain from "app/AppMain";

const CustomApp = ({Component, pageProps}: AppProps) => {
  return (
    <AppMain>
      <Component {...pageProps} />
    </AppMain>
  );
};

export default CustomApp;
