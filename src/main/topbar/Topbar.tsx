import {AppBar, Button, Toolbar} from "@material-ui/core";

interface Props {
  toggleDrawerOpen: () => void;
}

const Topbar = ({toggleDrawerOpen}: Props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button onClick={toggleDrawerOpen}>Drawer</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
