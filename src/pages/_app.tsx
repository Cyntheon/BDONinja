import {AppProps} from "next/app";
import AppMain from "modules/app/AppMain";

const CustomApp = ({Component, pageProps}: AppProps) => {
  console.log("App rerender");
  console.log("Component:", Component);
  console.log("Page props:", pageProps);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {__META} = pageProps;

  console.log("Meta:", __META);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  delete pageProps.__META;

  console.log("/////");

  return (
    <AppMain {...__META}>
      <Component {...pageProps} />
    </AppMain>
  );
};

export default CustomApp;
