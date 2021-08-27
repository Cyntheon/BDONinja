import {Button} from "@material-ui/core";
import {css} from "@emotion/react";

const Index = () => {
  return (
    <div>
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
