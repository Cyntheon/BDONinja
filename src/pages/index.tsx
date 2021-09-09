import React from "react";
import NavCard from "modules/home/navCard/NavCard";
import {getPageMeta} from "modules/app/appPaths";

const Index = () => (
  <NavCard title="Cooking Time Calculator" path="/cooking/time" />
);

export const getStaticProps = getPageMeta("/");

export default Index;
