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
          <div className="menu-line-1">
            <p>{soup.french}</p>
          </div>
          <p>{soup.price}</p>
          <p>{soup.english}</p>
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
