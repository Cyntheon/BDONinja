import {NextSeo} from "next-seo";
import {appMeta} from "app/meta";

interface Props {
  path: string;
  title: string;
  description?: string;
}

const PageSeo = ({path, title, description}: Props) => {
  const url = appMeta.baseUrl ? `${appMeta.baseUrl}${path}` : undefined;

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
