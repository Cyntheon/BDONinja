import {ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {createElement} from "react";
import Link from "next/link";
import {pageMetas, PagePath} from "app/page/pageMetas";

interface Props {
  path: PagePath;
  active: boolean;
}

const DrawerListItem = ({path, active}: Props) => {
  const {title, Icon} = pageMetas[path];

  const color = active ? "primary" : "inherit";

  return (
    <Link href={path} passHref>
      <ListItem button>
        {Icon && <ListItemIcon>{createElement(Icon, {color})}</ListItemIcon>}
        <ListItemText>
          <Typography color={color}>{title}</Typography>
        </ListItemText>
      </ListItem>
    </Link>
  );
};

export default DrawerListItem;
