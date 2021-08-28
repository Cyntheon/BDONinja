import {Button, Typography} from "@material-ui/core";
import {css} from "@emotion/react";

const Index = () => {
  return (
    <div>
      <Typography variant="h1">
        Welcome to BDO Ninja
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        size="large"
        css={css`
          margin: 0 auto;
        `}
      >
        Get Started
      </Button>
    </div>
  );
};

export default Index;
