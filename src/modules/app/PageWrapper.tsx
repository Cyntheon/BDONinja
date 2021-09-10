import PageSeo from "modules/app/PageSeo";
import React, {ReactNode} from "react";
import PageHeading from "components/heading/PageHeading";
import {pageMetas} from "modules/app/appPaths";

interface Props {
  path: string;
  children: ReactNode;
}

const PageWrapper = ({path, children}: Props) => {
  const {title, description} = pageMetas[path];

  return (
    <>
      <PageSeo path="/" title={title} description={description} />
      <PageHeading>{title}</PageHeading>
      {children}
    </>
  );
};

export default PageWrapper;
