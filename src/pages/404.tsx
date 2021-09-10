import {getPageMeta} from "modules/app/appPaths";

const ErrorPage = () => {
  return (
    <div>
      <p>Error!</p>
    </div>
  );
};

export const getStaticProps = getPageMeta("/404");

export default ErrorPage;
