import React from "react";

import { graphql } from "gatsby";

const PastasPage = (props) => {
  let dishes = props.data.allContentfulDish.nodes;
  let slug = props.location.pathname;

  const pastasList = dishes
    .filter((dish) => `/${dish.category}` === slug)
    .map((pasta) => {
      return (
        <div key={pasta.id}>
          <p>{pasta.french}</p>
          <p>{pasta.english}</p>
          <p>{pasta.price}</p>
        </div>
      );
    });

  console.log(pastasList);
  return (
    <div>
      <h2>Pâtes Fraîches / Fresh Pasta</h2>
      {pastasList}
    </div>
  );
};

export const pastasQuery = graphql`
  query pastas {
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

export default PastasPage;
