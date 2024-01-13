import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ Component, pageProps }) => {
  return (
    <>
      <Nav />
        <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MainLayout;
