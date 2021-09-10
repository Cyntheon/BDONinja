import {css} from "@emotion/react";
import {Typography} from "@material-ui/core";
import {ReactNode} from "react";

interface Props {
  children: ReactNode;
}

const PageSubHeading = ({children}: Props) => {
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
      {children}
    </Typography>
  );
};

export default PageSubHeading;
