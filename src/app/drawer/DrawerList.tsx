import {List} from "@mui/material";
import {useRouter} from "next/router";
import DrawerListItem from "app/drawer/DrawerListItem";
import {PagePath} from "app/page/pageMetas";

const paths: PagePath[] = ["/", "/brackets", "/cooking/time"];

const DrawerList = () => {
  const router = useRouter();

  const isActive = (path: PagePath) => {
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
