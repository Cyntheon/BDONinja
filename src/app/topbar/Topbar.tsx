import {AppBar, IconButton, Toolbar} from "@mui/material";
import {Menu} from "@mui/icons-material";
import {css} from "@emotion/react";

interface Props {
  toggleDrawerOpen: () => void;
}

const Topbar = ({toggleDrawerOpen}: Props) => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar
        css={css`
          &.MuiToolbar-gutters {
            padding: 0 8px;

            @media (min-width: 600px) {
              padding: 0 12px;
            }
          }
        `}
      >
        <IconButton onClick={toggleDrawerOpen}>
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
