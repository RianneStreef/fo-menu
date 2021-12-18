import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import "../styles/menu.css";
import "../styles/global.css";

import logo from "../images/icon.png";

const MenuPage = () => {
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
      <div className="padding">
        <a href="https://lafaceouest.com/ ">
          <img src={logo} alt="logo" className="logo" />
        </a>
        {/* <Link to="/restaurant" className="category-item">
          <div className="restaurant category">
            <h2 className="category-title">Restaurant</h2>
          </div>
        </Link> */}
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
    </>
  );
};

export default MenuPage;
