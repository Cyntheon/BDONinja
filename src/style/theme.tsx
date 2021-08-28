import {createTheme} from "@material-ui/core";
import {pink} from "@material-ui/core/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans, sans-serif",
    h1: {
      fontFamily: "Noto Serif, serif"
    },
    h2: {
      fontFamily: "Noto Serif, serif"
    },
    h3: {
      fontFamily: "Noto Serif, serif"
    },
    h4: {
      fontFamily: "Noto Serif, serif"
    },
    h5: {
      fontFamily: "Noto Serif, serif"
    },
    h6: {
      fontFamily: "Noto Serif, serif"
    },
    subtitle1: {
      fontFamily: "Noto Serif, serif"
    },
    subtitle2: {
      fontFamily: "Noto Serif, serif"
    }
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
