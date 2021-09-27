import {CardContent, Icon as MuiIcon, Typography} from "@mui/material";
import {css} from "@emotion/react";
import React from "react";
import {pageMetas} from "app/page/pageMetas";

interface Props {
  path: string;
}

const NavCardContent = ({path}: Props) => {
  const {title, description, Icon} = pageMetas[path];

  return (
    <CardContent>
      <Typography variant="h4" component="h2">
        {Icon && (
          <MuiIcon
            css={css`
              margin-right: 8px;
            `}
          >
            <Icon color="primary" />
          </MuiIcon>
        )}
        {title}
      </Typography>
      <Typography>{description}</Typography>
    </CardContent>
  );
};

export default NavCardContent;
