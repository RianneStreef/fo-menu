import React from "react";

import { graphql } from "gatsby";

const SoupsPage = (props) => {
  let dishes = props.data.allContentfulDish.nodes;
  let slug = props.location.pathname;

  console.log(props.location.pathname);
  console.log(dishes);
  console.log(slug);

  const soupsList = dishes
    .filter((dish) => `/${dish.category}` === slug)
    .map((soup) => {
      return (
        <div key={soup.id}>
          <p>{soup.french}</p>
          <p>{soup.english}</p>
          <p>{soup.price}</p>
        </div>
      );
    });

  return (
    <div>
      <h2>Soupes / Soups </h2>
      {soupsList}
    </div>
  );
};

export const soupsQuery = graphql`
  query soups {
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
