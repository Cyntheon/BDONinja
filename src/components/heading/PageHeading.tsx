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

const PageHeading = ({text, children}: Props) => {
  return (
    <Typography
      variant="h3"
      component="h1"
      css={css`
        &.MuiTypography-root {
          text-align: center;
          margin-bottom: 32px;
        }
      `}
    >
      {text || children}
    </Typography>
  );
};

export default PageHeading;
