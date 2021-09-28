import React from "react";
import {Typography} from "@mui/material";
import {css} from "@emotion/react";

const Highlight = ({children}: {children: React.ReactNode}) => {
  return (
    <Typography
      variant="inherit"
      color="primary"
      css={css`
        &.MuiTypography-root {
          display: inline;
        }
      `}
    >
      {children}
    </Typography>
  );
};

export default Highlight;
