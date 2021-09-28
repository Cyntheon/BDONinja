import {List} from "@mui/material";
import {useRouter} from "next/router";
import DrawerListItem from "app/drawer/DrawerListItem";

const paths = ["/", "/brackets", "/cooking/time"];

const DrawerList = () => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <List component="nav">
      {paths.map((path) => (
        <DrawerListItem key={path} path={path} active={isActive(path)} />
      ))}
    </List>
  );
};

export default DrawerList;
