import {CardActionArea, CardActions, Paper} from "@mui/material";
import ShareButton from "components/share/ShareButton";
import NavCardContent from "modules/home/navCard/NavCardContent";
import Link from "components/Link";
import {PagePath} from "app/page/pageMetas";

interface Props {
  path: PagePath;
}

const NavCard = ({path}: Props) => {
  return (
    <Paper elevation={3}>
      <Link href={path} underline="none">
        <CardActionArea>
          <NavCardContent path={path} />
        </CardActionArea>
      </Link>
      <CardActions>
        <ShareButton path={path} />
      </CardActions>
    </Paper>
  );
};

export default NavCard;
