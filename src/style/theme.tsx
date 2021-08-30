import {createTheme} from "@material-ui/core";
import {pink} from "@material-ui/core/colors";

const theme = createTheme({
  typography: {
    fontFamily: "BlackSpirit, serif"
  },
  palette: {
    type: "dark",
    primary: {
      main: pink["A100"]
    },
    secondary: {
      main: pink["800"]
    }
  }
});

export default theme;
