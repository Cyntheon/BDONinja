import {createTheme, CssBaseline} from "@material-ui/core";
import {pink} from "@material-ui/core/colors";
import {ThemeProvider} from "@emotion/react";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: pink["800"]
    },
    secondary: {
      main: pink["A100"]
    }
  }
});

export const CustomThemeProvider = ({children}: {children: any}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
