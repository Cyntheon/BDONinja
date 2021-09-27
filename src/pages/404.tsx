import PageHeading from "app/page/PageHeading";
import PageWrapper from "app/page/PageWrapper";
import React from "react";

const ErrorPage = () => {
  return (
    <PageWrapper path="/404">
      <PageHeading>Sorry! There seems to be an error.</PageHeading>
    </PageWrapper>
  );
};

export default ErrorPage;
