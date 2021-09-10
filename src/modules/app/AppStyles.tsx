import theme from "styles/theme";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {Global, SerializedStyles} from "@emotion/react";
import React, {useEffect, useMemo} from "react";

interface Props {
  globals?: SerializedStyles[];
  children: React.ReactNode;
}

const AppStyles = ({globals, children}: Props) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  const globalStyles = useMemo(() => {
    return (globals || []).map((style) => (
      <Global styles={style} key={style.name} />
    ));
  }, [globals]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      {children}
    </MuiThemeProvider>
  );
};

export default AppStyles;
