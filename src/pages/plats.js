import React from "react";

import { graphql } from "gatsby";

const SoupsPage = (props) => {
  let dishes = props.data.allContentfulDish.nodes;
  let slug = props.location.pathname;

  const mainsList = dishes
    .filter((dish) => `/${dish.category}` === slug)
    .map((main) => {
      return (
        <div key={main.id}>
          <p>{main.french}</p>
          <p>{main.english}</p>
          <p>{main.price}</p>
        </div>
      );
    });

  return (
    <div>
      <h2>Plats / Mains courses</h2>
      {mainsList}
    </div>
  );
};

export const mainsQuery = graphql`
  query mains {
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

export default SoupsPage;
