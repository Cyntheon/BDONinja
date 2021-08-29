import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText, Typography
} from "@material-ui/core";
import Link from "next/link";
import HomeIcon from "@material-ui/icons/Home";
import TimerIcon from "@material-ui/icons/Timer";
import {useRouter} from "next/router";
import {createElement} from "react";

const pathList = [
  [
    {
      path: "/",
      name: "Home",
      icon: HomeIcon
    }
  ],
  [
    {
      path: "/cooking/time",
      name: "Cooking Time Calculator",
      icon: TimerIcon
    }
  ]
];

const DrawerList = () => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  const getColor = (path: string) => {
    return isActive(path) ? "secondary" : "inherit";
  };

  return (
    <List component="nav">
      {pathList.map((pathSection) => (
        <>
          {pathSection.map(({path, icon, name}) => (
            <Link
              href={path}
              passHref
              key="path"
            >
              <ListItem button>
                <ListItemIcon>
                  {createElement(icon, {color: getColor(path)})}
                </ListItemIcon>
                <ListItemText>
                  <Typography color={getColor(path)}>
                    {name}
                  </Typography>
                </ListItemText>
              </ListItem>
            </Link>
          ))}
          <Divider />
        </>
      ))}
    </List>
  );
};

export default DrawerList;
