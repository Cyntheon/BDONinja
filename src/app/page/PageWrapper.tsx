import {ReactNode} from "react";
import PageSeo from "app/page/PageSeo";
import {pageMetas, PagePath} from "app/page/pageMetas";

interface Props {
  path: PagePath;
  children: ReactNode;
}

const PageWrapper = ({path, children}: Props) => {
  const {title, description} = pageMetas[path];

  return (
    <>
      <PageSeo path={path} title={title} description={description} />
      {children}
    </>
  );
};

export default PageWrapper;
