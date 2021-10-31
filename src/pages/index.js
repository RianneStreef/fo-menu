import React, { useEffect } from "react";

import "../styles/index.css";

const IndexPage = () => {
  useEffect(() => {
    setTimeout(function () {
      window.location.href = "./menus";
    }, 1000);
  });

  return (
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
  );
};

export default IndexPage;
