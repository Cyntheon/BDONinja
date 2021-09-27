import {createTheme} from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif"
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#ff80ab"
    },
    secondary: {
      main: "#ff80ea"
    }
  }
});

export default theme;
