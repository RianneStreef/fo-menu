import React from "react";

import { Link } from "gatsby";

import "../styles/restaurant.css";

import restaurantImg from "../images/restaurant.jpg";

const RestaurantPage = (props) => {
  console.log(props);

  return (
    <>
      <div>
        <img scr={restaurantImg} alt="restaurant view" />
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
          <div className="main category">
            <h2 className="category-title">Pâtes Fraîches / Fresh Pasta </h2>
          </div>{" "}
        </Link>
        <Link to="/pizzas" className="restaurant-item">
          <div className="main category">
            <h2 className="category-title">Pizza </h2>
          </div>{" "}
        </Link>
        <Link to="/desserts" className="restaurant-item">
          <div className="main category">
            <h2 className="category-title">Desserts</h2>
          </div>{" "}
        </Link>
      </div>
    </>
  );
};

export default RestaurantPage;
