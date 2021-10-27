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
        <Link to="/starter" className="restaurant-item">
          <div className="starter category">
            <h2 className="category-title">Starter</h2>
          </div>
        </Link>
        <Link to="/soup" className="restaurant-item">
          <div className="soup category">
            <h2 className="category-title">Soup</h2>
          </div>{" "}
        </Link>
        <Link to="/main" className="restaurant-item">
          <div className="main category">
            <h2 className="category-title">Main</h2>
          </div>{" "}
        </Link>
      </div>
    </>
  );
};

export default RestaurantPage;
