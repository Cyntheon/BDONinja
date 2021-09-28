import React from "react";
import {DefaultSeo} from "next-seo";
import {appMeta} from "app/meta";
import theme from "app/theme";

const AppSeo = () => {
  const {title, description, baseUrl, author} = appMeta;
  return (
    <DefaultSeo
      title={undefined}
      titleTemplate={`%s | ${title}`}
      defaultTitle={title}
      description={description}
      canonical={baseUrl}
      openGraph={{
        title,
        description,
        type: "website",
        locale: "en_US",
        url: baseUrl,
        site_name: title
      }}
      additionalMetaTags={[
        {
          name: "author",
          content: author
        },
        {
          httpEquiv: "x-ua-compatible",
          content: "IE=edge"
        },
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1"
        },
        {
          name: "index-color",
          content: theme.palette.primary.main
        },
        {
          name: "screen-orientation",
          content: "portrait"
        }
      ]}
    />
  );
};

export default AppSeo;
