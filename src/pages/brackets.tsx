import PageWrapper from "app/page/PageWrapper";
import ApBrackets from "modules/brackets/ApBrackets";
import DpBrackets from "modules/brackets/DpBrackets";
import {Grid} from "@mui/material";
import {css} from "@emotion/react";

const Brackets = () => {
  return (
    <PageWrapper path="/brackets">
      <Grid
        container
        spacing={2}
        css={css`
          &.MuiGrid-root {
            padding: 0 16px;
            justify-content: center;
          }
        `}
      >
        <Grid item>
          <ApBrackets />
        </Grid>
        <Grid item>
          <DpBrackets />
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default Brackets;
