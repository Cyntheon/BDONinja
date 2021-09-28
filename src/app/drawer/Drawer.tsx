import {SwipeableDrawer} from "@mui/material";
import {Dispatch, SetStateAction} from "react";
import DrawerList from "app/drawer/DrawerList";
import {css} from "@emotion/react";

interface Props {
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const Drawer = ({drawerOpen, setDrawerOpen}: Props) => {
  return (
    <SwipeableDrawer
      onClose={() => {
        setDrawerOpen(false);
      }}
      onOpen={() => {
        setDrawerOpen(true);
      }}
      open={drawerOpen}
      css={css`
        &.MuiDrawer-paper {
          width: 240px;
        }
      `}
    >
      <DrawerList />
    </SwipeableDrawer>
  );
};

export default Drawer;
