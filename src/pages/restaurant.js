import React from "react";

import { Link } from "gatsby";

import { graphql } from "gatsby";

import "../styles/restaurant.css";

import restaurantImg from "../images/restaurant.jpg";

const RestaurantPage = () => {
  return (
    <>
      <div>
        <img scr={restaurantImg} alt="restaurant view" />
        <h1>Restaurant Menu</h1>
      </div>
    </>
  );
};

// export const restaurantQuery = graphql``;

export default RestaurantPage;
