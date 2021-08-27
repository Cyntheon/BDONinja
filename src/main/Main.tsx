import {Container} from "@material-ui/core";
import Topbar from "main/topbar/Topbar";
import {useCallback, useState} from "react";
import Drawer from "main/drawer/Drawer";

const Main = ({children}: {children: any}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen((open) => !open);
  }, [setDrawerOpen]);

  return (
    <Container
      disableGutters
      maxWidth={false}
    >
      <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <Topbar toggleDrawerOpen={toggleDrawerOpen} />
      {children}
    </Container>
  );
};

export default Main;
