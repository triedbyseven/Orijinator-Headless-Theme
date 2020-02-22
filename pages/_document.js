import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no"
          ></meta>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/uikit@3.3.2/dist/css/uikit.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/uikit@3.3.2/dist/js/uikit.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/uikit@3.3.2/dist/js/uikit-icons.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
