import React from "react";

import "../styles/global.css";

import back from "../images/back.svg";
import homepage from "../images/homepage.svg";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="nav">
        <a href="javascript:history.back()" className="back-icon">
          <img src={back} />
        </a>
        <a href="https://lafaceouest.com/ " className="homepage-icon">
          <img src={homepage} />
        </a>
      </div>
      <section>{children}</section>
    </div>
  );
};

export default Layout;
