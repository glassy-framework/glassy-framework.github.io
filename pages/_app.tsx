import React from "react";
import "../assets/css/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// eslint-disable-next-line
function MyApp({ Component, pageProps }: any): JSX.Element {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
