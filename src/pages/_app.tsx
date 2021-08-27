import {AppProps} from "next/app";
import {CustomThemeProvider} from "theme/theming";
import {CssBaseline} from "@material-ui/core";

const CustomApp = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <CssBaseline />
      <CustomThemeProvider>
        <Component {...pageProps} />
      </CustomThemeProvider>
    </>
  );
};

export default CustomApp;
