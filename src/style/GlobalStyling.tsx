import theme from "style/theme";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {Global} from "@emotion/react";
import reset from "style/reset";
import React, {useEffect} from "react";
import font from "style/font";

const GlobalStyling = (
  {children}: {children: React.ReactChild | React.ReactChildren}
) => {
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
      <Global styles={font} />
      {children}
    </MuiThemeProvider>
  );
};

export default GlobalStyling;
