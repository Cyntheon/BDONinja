import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

interface Props {
  toggleDrawerOpen: () => void;
}

const Topbar = ({toggleDrawerOpen}: Props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={toggleDrawerOpen}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
