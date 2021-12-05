import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "../components/Seo/seo";
import GlobalStyles from "../styles/GlobalStyles";
import TypographyStyles from "../styles/TypographyStyles";
import Logo from "../images/AnaLogoWhite.svg";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=block"
          rel="stylesheet"
        ></link>
      </Helmet>
      <SEO />
      <GlobalStyles />
      <TypographyStyles />
      <Navbar Logo={Logo} />
      <div className="layout">{children}</div>
      <Footer Logo={Logo} />
    </>
  );
};

export default Layout;
