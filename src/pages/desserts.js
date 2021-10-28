import React from "react";

import { graphql } from "gatsby";

const DessertsPage = (props) => {
  let dishes = props.data.allContentfulDish.nodes;
  let slug = props.location.pathname;

  const dessertsList = dishes
    .filter((dish) => `/${dish.category}` === slug)
    .map((dessert) => {
      return (
        <div key={dessert.id}>
          <div className="menu-line-1">
            <p>{dessert.french}</p>
            <p>{dessert.price}</p>
          </div>
          <p>{dessert.english}</p>
        </div>
      );
    });

  return (
    <div>
      <h2>Desserts</h2>
      {dessertsList}
    </div>
  );
};

export const dessertsQuery = graphql`
  query desserts {
    allContentfulDish {
      nodes {
        english
        french
        price
        vega
        category
        takeAway
        snackMenu
        restMenu
      }
    }
  }
`;

export default DessertsPage;
