import {AppProps} from "next/app";
import Main from "app/Main";
import GlobalStyling from "style/GlobalStyling";
import {DefaultSeo} from "next-seo";
import theme from "style/theme";

/* eslint-disable max-len */
const CustomApp = ({Component, pageProps}: AppProps) => {
  return (
    <GlobalStyling>
      <Main>
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
              content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
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
        <Component {...pageProps} />
      </Main>
    </GlobalStyling>
  );
};

export default CustomApp;
