import {css} from "@emotion/react";
import {Typography} from "@material-ui/core";
import React from "react";

type Props =
  | {
      text: string;
      children?: never;
    }
  | {
      text?: never;
      children: React.ReactNode;
    };

const PageSubHeading = ({text, children}: Props) => {
  return (
    <Typography
      variant="h4"
      component="h2"
      css={css`
        &.MuiTypography-root {
          text-align: center;
          margin-bottom: 8px;
        }
      `}
    >
      {text || children}
    </Typography>
  );
};

export default PageSubHeading;
