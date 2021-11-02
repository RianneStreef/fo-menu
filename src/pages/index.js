import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import "../styles/index.css";

const IndexPage = () => {
  useEffect(() => {
    setTimeout(function () {
      window.location.href = "./menus";
    }, 1000);
  });

  return (
    <>
      <Helmet>
        <title>Menu La Face Ouest</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Menu Restaurant La Face Ouest Val Thorens"
        />
        <meta
          name="keywords"
          content="menu, restaurant, La Face Ouest, Val Thorens, pizza, snack, take away"
        />
        <link rel="canonical" href="https://menu-lafaceouest.com/" />
      </Helmet>
      <div className="loading">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
