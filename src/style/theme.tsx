import {createTheme} from "@material-ui/core";
import {pink} from "@material-ui/core/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans"
  },
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

export default theme;
