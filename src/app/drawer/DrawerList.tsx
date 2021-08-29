import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText, Typography
} from "@material-ui/core";
import Link from "next/link";
import {Home, Timer} from "@material-ui/icons";
import {useRouter} from "next/router";
import {createElement} from "react";

const pathList = [
  [
    {
      path: "/",
      name: "Home",
      icon: Home
    }
  ],
  [
    {
      path: "/cooking/timeCalculator",
      name: "Cooking Time Calculator",
      icon: Timer
    }
  ]
];

const DrawerList = () => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  const getColor = (path: string) => {
    return isActive(path) ? "primary" : "inherit";
  };

  return (
    <List component="nav">
      {pathList.map((pathSection) => (
        <>
          {pathSection.map(({path, icon, name}) => (
            <Link
              href={path}
              passHref
              key={path + name}
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
