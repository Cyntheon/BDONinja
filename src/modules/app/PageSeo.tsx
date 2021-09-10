import {NextSeo} from "next-seo";

interface Props {
  path: string;
  title: string;
  description?: string;
}

const PageSeo = ({path, title, description}: Props) => {
  const url = `https://www.bdo.ninja${path}`;

  return (
    <NextSeo
      title={title}
      description={description || undefined}
      canonical={url}
      openGraph={{
        title,
        description: description || undefined,
        url
      }}
    />
  );
};

export default PageSeo;
