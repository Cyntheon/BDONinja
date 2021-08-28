import theme from "style/theme";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {Global} from "@emotion/react";
import reset from "style/reset";
import {useEffect} from "react";

const GlobalStyling = ({children}: {children: any}) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Global styles={reset} />
      {children}
    </MuiThemeProvider>
  );
};

export default GlobalStyling;
