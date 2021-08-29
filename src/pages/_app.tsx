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
              name: "viewport",
              content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            },
            {
              name: "theme-color",
              content: theme.palette.primary.main
            }
          ]}
          additionalLinkTags={[
            {
              href: "https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Serif&display=swap",
              rel: "stylesheet"
            }
          ]}
        />
        <Component {...pageProps} />
      </Main>
    </GlobalStyling>
  );
};

export default CustomApp;
