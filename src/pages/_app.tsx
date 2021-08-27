import {AppProps} from "next/app";
import {CustomThemeProvider} from "theme/theming";

const CustomApp = ({Component, pageProps}: AppProps) => {
  return (
    <CustomThemeProvider>
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
};

export default CustomApp;
