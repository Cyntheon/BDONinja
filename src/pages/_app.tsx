import {AppProps} from "next/app";
import AppMain from "modules/app/AppMain";

const CustomApp = ({Component, pageProps}: AppProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {__META} = pageProps;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  delete pageProps.__META;

  return (
    <AppMain {...__META}>
      <Component {...pageProps} />
    </AppMain>
  );
};

export default CustomApp;
