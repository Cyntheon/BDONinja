import {css} from "@emotion/react";
import {Typography} from "@material-ui/core";
import {ReactNode} from "react";

interface Props {
  children: ReactNode;
}

const PageHeading = ({children}: Props) => {
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
      {children}
    </Typography>
  );
};

export default PageHeading;
