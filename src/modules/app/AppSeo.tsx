import React, {ReactNode} from "react";
import theme from "styles/theme";
import {DefaultSeo, NextSeo} from "next-seo";

interface Props {
  path: string;
  title?: string;
  description?: string;
  children: ReactNode;
}

const AppSeo = ({path, title, description, children}: Props) => {
  return (
    <>
      <DefaultSeo
        title={undefined}
        titleTemplate="%s | BDO Ninja"
        defaultTitle="BDO Ninja"
        description="Calculators and helpers for Black Desert Online (BDO)"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://www.bdo.ninja/",
          site_name: "BDO Ninja",
          description: "Calculators and helpers for Black Desert Online (BDO)"
        }}
        additionalMetaTags={[
          {
            httpEquiv: "x-ua-compatible",
            content: "IE=edge"
          },
          {
            name: "viewport",
            content: "width=device-width,initial-scale=1"
          },
          {
            name: "theme-color",
            content: theme.palette.primary.main
          },
          {
            name: "screen-orientation",
            content: "portrait"
          }
        ]}
      />
      <NextSeo
        title={title}
        description={description}
        canonical={`https://www.bdo.ninja${path}`}
        openGraph={{
          title,
          description,
          url: `https://www.bdo.ninja${path}`
        }}
      />
      {children}
    </>
  );
};

export default AppSeo;
