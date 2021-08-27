import {AppBar, Container, Toolbar} from "@material-ui/core";

const Main = ({children}: {children: any}) => {
  return (
    <Container
      disableGutters
      maxWidth={false}
    >
      <AppBar position="static">
        <Toolbar>
          <h1>Hello</h1>
        </Toolbar>
      </AppBar>
      {children}
    </Container>
  );
};

export default Main;
