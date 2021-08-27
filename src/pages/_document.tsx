import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from "next/document";
import {ServerStyleSheets} from "@material-ui/core";
import React from "react";
import {theme} from "theme/theming";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => {
      return originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
      });
    };

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement()
      ]
    };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta
            name="theme-color"
            content={theme.palette.primary.main}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Serif&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
