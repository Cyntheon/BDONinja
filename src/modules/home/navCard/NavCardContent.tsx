import {CardContent, Icon as MuiIcon, Typography} from "@material-ui/core";
import {css} from "@emotion/react";
import React from "react";
import {pageMetas} from "modules/app/appPaths";

interface Props {
  path: string;
}

const NavCardContent = ({path}: Props) => {
  const {title, description, Icon} = pageMetas[path];

  return (
    <CardContent>
      <Typography variant="h4" component="h2">
        {Icon ? (
          <MuiIcon
            css={css`
              margin-right: 8px;
            `}
          >
            <Icon color="primary" />
          </MuiIcon>
        ) : null}
        {title}
      </Typography>
      <Typography>{description}</Typography>
    </CardContent>
  );
};

export default NavCardContent;
