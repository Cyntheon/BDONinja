import React from "react";
import theme from "styles/theme";
import {DefaultSeo} from "next-seo";

interface Props {
  path: string;
  title: string;
  description?: string;
}

const AppSeo = () => {
  return (
    <DefaultSeo
      title={undefined}
      titleTemplate="%s | BDO Ninja"
      defaultTitle="BDO Ninja"
      description="Calculators and helpers for Black Desert Online (BDO)"
      canonical="https://www.bdo.ninja/"
      openGraph={{
        title: "BDO Ninja",
        description: "Calculators and helpers for Black Desert Online (BDO)",
        type: "website",
        locale: "en_US",
        url: "https://www.bdo.ninja/",
        site_name: "BDO Ninja"
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
  );
};

export default AppSeo;
