import {Container} from "@material-ui/core";
import Topbar from "modules/app/topbar/Topbar";
import {ReactNode} from "react";
import Drawer from "modules/app/drawer/Drawer";
import {css} from "@emotion/react";
import reset from "styles/reset";
import font from "styles/font";
import AppStyles from "modules/app/AppStyles";
import AppSeo from "modules/app/AppSeo";
import PageHeading from "components/heading/PageHeading";
import useToggle from "utils/useToggle";

interface Props {
  path: string;
  title: string;
  description?: string;
  heading?: string;
  children: ReactNode;
}

const AppMain = ({path, title, description, heading, children}: Props) => {
  const [drawerOpen, toggleDrawerOpen, setDrawerOpen] = useToggle();

  return (
    <AppStyles globals={[reset, font]}>
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
        <AppSeo path={path} title={title} description={description} />
        <PageHeading>{heading || title}</PageHeading>
        {children}
      </Container>
    </AppStyles>
  );
};

export default AppMain;
