import {Container} from "@mui/material";
import Topbar from "app/topbar/Topbar";
import {ReactNode} from "react";
import Drawer from "app/drawer/Drawer";
import {css} from "@emotion/react";
import reset from "styles/reset";
import AppStyles from "app/AppStyles";
import AppSeo from "app/AppSeo";
import useToggle from "utils/useToggle";

interface Props {
  children: ReactNode;
}

const AppMain = ({children}: Props) => {
  const [drawerOpen, toggleDrawerOpen, setDrawerOpen] = useToggle();

  return (
    <AppStyles globals={[reset]}>
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
            overflow-x: hidden;

            @media (min-width: 600px) {
              padding: 24px 0;
            }
          }
        `}
      >
        <AppSeo />
        {children}
      </Container>
    </AppStyles>
  );
};

export default AppMain;
