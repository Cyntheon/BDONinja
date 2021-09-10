import React from "react";
import NavCard from "modules/home/navCard/NavCard";
import PageWrapper from "modules/app/PageWrapper";

const Index = () => (
  <PageWrapper path="/">
    <NavCard path="/cooking/time" />
  </PageWrapper>
);

export default Index;
