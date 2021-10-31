import React from "react";

import { Link } from "gatsby";

import "../styles/restaurant.css";

import back from "../images/back.svg";
import homepage from "../images/homepage.svg";

const RestaurantPage = () => {
  return (
    <div className="padding">
      <div className="nav">
        <a href="javascript:history.back()" className="back-icon">
          <img src={back} />
        </a>
        <a href="https://lafaceouest.com/ " className="homepage-icon">
          <img src={homepage} />
        </a>
      </div>
      <div>
        <h1>Restaurant Menu</h1>
        <Link to="/entrees" className="restaurant-item">
          <div className="starter category">
            <h2 className="category-title">Entrées / Starter</h2>
          </div>
        </Link>
        <Link to="/soupes" className="restaurant-item">
          <div className="soup category">
            <h2 className="category-title">Soupes/ Soups</h2>
          </div>{" "}
        </Link>
        <Link to="/plats" className="restaurant-item">
          <div className="main category">
            <h2 className="category-title">Plats / Main courses</h2>
          </div>{" "}
        </Link>
        <Link to="/pates" className="restaurant-item">
          <div className="pates category">
            <h2 className="category-title">Pâtes Fraîches / Fresh Pasta </h2>
          </div>{" "}
        </Link>
        <Link to="/pizzas" className="restaurant-item">
          <div className="pizza category">
            <h2 className="category-title">Pizza </h2>
          </div>{" "}
        </Link>
        <Link to="/desserts" className="restaurant-item">
          <div className="dessert category">
            <h2 className="category-title">Desserts</h2>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default RestaurantPage;
