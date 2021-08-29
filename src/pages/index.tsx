import {Typography} from "@material-ui/core";
import {NextSeo} from "next-seo";
import {css} from "@emotion/react";
import React from "react";
import NavCard from "navCard/NavCard";
import BdoNightSky from "../../public/bdo_night_sky.jpg";

const Index = () => {
  return (
    <>
      <NextSeo
        title="Home"
        openGraph={{
          title: "Home"
        }}
      />
      <Typography
        variant="h3"
        component="h1"
        css={css`
          &.MuiTypography-root {
            text-align: center;
            margin-bottom: 32px;
          }
        `}
      >
        Welcome to BDO Ninja!
      </Typography>
      <NavCard
        title="Cooking Time Calculator"
        image={BdoNightSky}
        path="/cooking/timeCalculator"
      />
    </>
  );
};

export default Index;
