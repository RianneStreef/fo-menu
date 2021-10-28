import React from "react";

import { graphql } from "gatsby";

const SnackingPage = (props) => {
  let dishes = props.data.allContentfulDish.nodes;

  console.log(props);
  console.log(dishes);

  const snackList = dishes
    .filter((dish) => dish.snackMenu === true)
    .map((snack) => {
      return (
        <div key={snack.id}>
          <div className="menu-line-1">
            <p>{snack.french}</p>
            <p>{snack.price}</p>
          </div>
          <p>{snack.english}</p>
        </div>
      );
    });

  return (
    <div>
      <h1>Snacking</h1>
      {snackList}
    </div>
  );
};

export const snackQuery = graphql`
  query snacks {
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

export default SnackingPage;
