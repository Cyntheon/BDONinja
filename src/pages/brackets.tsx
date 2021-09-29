import PageWrapper from "app/page/PageWrapper";
import ApBracketsTable from "modules/brackets/ap/ApBracketsTable";
import DpBrackets from "modules/brackets/dp/DpBrackets";
import {Grid} from "@mui/material";
import {css} from "@emotion/react";
import ApBracketsGraph from "modules/brackets/ap/ApBracketsGraph";

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
        <Grid item xs={12} lg={6}>
          <ApBracketsTable />
        </Grid>
        <Grid item xs={12} lg={6}>
          <ApBracketsGraph />
        </Grid>
        <Grid item xs={12} lg={6}>
          <DpBrackets />
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default Brackets;
