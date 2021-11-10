import React from "react";

import "../styles/global.css";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <section>{children}</section>
    </div>
  );
};

export default Layout;
