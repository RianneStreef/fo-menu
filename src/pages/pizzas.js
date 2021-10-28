import React from "react";

import { graphql } from "gatsby";

const PizzasPage = (props) => {
  let dishes = props.data.allContentfulDish.nodes;
  let slug = props.location.pathname;

  const pizzasList = dishes
    .filter((dish) => `/${dish.category}` === slug)
    .map((pizza) => {
      return (
        <div key={pizza.id}>
          <p>{pizza.french}</p>
          <p>{pizza.english}</p>
          <p>{pizza.price}</p>
        </div>
      );
    });

  return (
    <div>
      <h2>Pizzas</h2>
      {pizzasList}
    </div>
  );
};

export const pizzasQuery = graphql`
  query pizzas {
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

export default PizzasPage;
