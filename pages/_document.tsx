import * as React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700%7COpen+Sans&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
          <link rel="stylesheet" href="/assets/css/themify-icons.css" />
          <link rel="stylesheet" href="/assets/css/animate.min.css" />
          <link
            rel="stylesheet"
            href="/assets/css/jquery.mb.YTPlayer.min.css"
          />
          <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
          <link rel="stylesheet" href="/assets/css/responsive.css" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="/assets/js/jquery-3.4.1.min.js"></script>
          <script src="/assets/js/popper.min.js"></script>
          <script src="/assets/js/bootstrap.min.js"></script>
          <script src="/assets/js/jquery.magnific-popup.min.js"></script>
          <script src="/assets/js/jquery.easing.min.js"></script>
          <script src="/assets/js/jquery.mb.YTPlayer.min.js"></script>
          <script src="/assets/js/wow.min.js"></script>
          <script src="/assets/js/owl.carousel.min.js"></script>
          <script src="/assets/js/jquery.countdown.min.js"></script>
          <script src="/assets/js/scripts.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
