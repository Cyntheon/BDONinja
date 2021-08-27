import {SwipeableDrawer} from "@material-ui/core";
import {Dispatch, SetStateAction} from "react";
import DrawerList from "main/drawer/DrawerList";
import {css} from "@emotion/react";

interface Props {
  drawerOpen: boolean,
  setDrawerOpen: Dispatch<SetStateAction<boolean>>
}

const Drawer = ({drawerOpen, setDrawerOpen}: Props) => {
  return (
    <SwipeableDrawer
      onClose={() => setDrawerOpen(false)}
      onOpen={() => setDrawerOpen(true)}
      open={drawerOpen}
      css={css`
        .MuiDrawer-paper {
          width: 250px;
        }
      `}
    >
      <DrawerList />
    </SwipeableDrawer>
  );
};

export default Drawer;
