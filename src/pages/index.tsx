import React from "react";
import NavCard from "modules/home/navCard/NavCard";
import PageWrapper from "app/page/PageWrapper";
import {PagePath} from "app/page/pageMetas";
import {Grid} from "@mui/material";
import {css} from "@emotion/react";

const paths: PagePath[] = ["/brackets", "/cooking/time"];

const Index = () => (
  <PageWrapper path="/">
    <Grid
      container
      spacing={2}
      css={css`
        &.MuiGrid-root {
          padding: 0 4em;
        }
      `}
    >
      {paths.map((path) => (
        <Grid item sm={12} md={6} lg={4} key={path}>
          <NavCard path={path} />
        </Grid>
      ))}
    </Grid>
  </PageWrapper>
);

export default Index;
