import {css} from "@emotion/react";
import theme from "app/theme";

const rowStyles = (important: boolean, veryImportant: boolean) => css`
  &.MuiTableRow-root > * {
    ${important
      ? `color: ${
          veryImportant
            ? theme.palette.success.dark
            : theme.palette.success.main
        }`
      : ""}
  }
`;

export default rowStyles;
