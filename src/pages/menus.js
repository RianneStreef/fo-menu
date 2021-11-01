import React from "react";
import { Link } from "gatsby";

import "../styles/menu.css";
import "../styles/global.css";

import logo from "../images/icon.png";

const MenuPage = (props) => {
  return (
    <div className="padding">
      <a href="https://lafaceouest.com/ ">
        <img src={logo} alt="logo" className="logo" />
      </a>
      <Link to="/restaurant" className="category-item">
        <div className="restaurant category">
          <h2 className="category-title">Restaurant</h2>
        </div>
      </Link>
      <Link to="/snacking" className="category-item">
        <div className="snacking category">
          <h2 className="category-title">Snacking</h2>
        </div>{" "}
      </Link>
      <Link to="/take-away" className="category-item">
        <div className="take-away category">
          <h2 className="category-title">A Emporter / Take Away</h2>
        </div>{" "}
      </Link>
    </div>
  );
};

export default MenuPage;
