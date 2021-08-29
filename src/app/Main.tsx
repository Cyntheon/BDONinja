import {Container} from "@material-ui/core";
import Topbar from "app/topbar/Topbar";
import {useCallback, useState} from "react";
import Drawer from "app/drawer/Drawer";
import {css} from "@emotion/react";

const Main = ({children}: {children: any}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen((open) => !open);
  }, [setDrawerOpen]);

  return (
    <>
      <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <Topbar toggleDrawerOpen={toggleDrawerOpen} />
      <Container
        component="main"
        disableGutters
        maxWidth={false}
        css={css`
          &.MuiContainer-root {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            
            padding: 16px 0;
            
            @media (min-width: 600px) {
              padding: 24px 0;
            }
          }
        `}
      >
        {children}
      </Container>
    </>
  );
};

export default Main;
