import React from "react";

import { graphql } from "gatsby";

const StarterPage = (props) => {
  let dishes = props.data.allContentfulDish.nodes;
  let slug = props.location.pathname;

  console.log(props.location.pathname);
  console.log(dishes);
  console.log(slug);

  const startersList = dishes
    .filter((dish) => `/${dish.category}` === slug)
    .map((starter) => {
      return (
        <div key={starter.id}>
          <div className="menu-line-1">
            <p>{starter.french}</p> <p>{starter.price}</p>
          </div>
          <p>{starter.english}</p>
        </div>
      );
    });

  console.log(startersList);
  return (
    <div>
      <h2>Entrées / Starters</h2>
      {startersList}
    </div>
  );
};

export const starterQuery = graphql`
  query starters {
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

export default StarterPage;
