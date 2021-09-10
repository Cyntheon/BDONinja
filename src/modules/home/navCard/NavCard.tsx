import {CardActionArea, CardActions, Paper} from "@material-ui/core";
import React from "react";
import ShareButton from "modules/home/share/ShareButton";
import NavCardContent from "modules/home/navCard/NavCardContent";
import Link from "components/Link";

interface Props {
  path: string;
}

const NavCard = ({path}: Props) => {
  return (
    <Paper elevation={3}>
      <Link href={path}>
        <CardActionArea>
          <NavCardContent path={path} />
        </CardActionArea>
      </Link>
      <CardActions>
        <ShareButton />
      </CardActions>
    </Paper>
  );
};

export default NavCard;
