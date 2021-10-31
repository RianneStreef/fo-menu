import React from "react";

import { graphql } from "gatsby";

import back from "../images/back.svg";
import homepage from "../images/homepage.svg";

const PizzasPage = (props) => {
  let pizzas = props.data.allContentfulPizza.nodes;
  let focaccias = props.data.allContentfulFocaccia.nodes;

  const pizzasList = pizzas.map((pizza) => {
    return (
      <div key={pizza.id}>
        <div className="menu-line-1">
          <p>
            {pizza.french} {pizza.vega && <span className="vega">V</span>}
          </p>
          <p className="price">{pizza.price}</p>
        </div>
        <p className="english">{pizza.english}</p>
      </div>
    );
  });

  const focacciasList = focaccias.map((focaccia) => {
    return (
      <div key={focaccia.id}>
        <div className="menu-line-1">
          <p>
            {focaccia.french} {focaccia.vega && <span className="vega">V</span>}
          </p>
          <p className="price">{focaccia.price}</p>
        </div>
        <p className="english">{focaccia.english}</p>
      </div>
    );
  });

  return (
    <div className="padding">
      <div className="nav">
        <a href="javascript:history.back()" className="back-icon">
          <img src={back} />
        </a>
        <a href="https://lafaceouest.com/ " className="homepage-icon">
          <img src={homepage} />
        </a>
      </div>
      <h2>Pizzas</h2>
      {pizzasList}
      {focacciasList}
    </div>
  );
};

export const pizzasQuery = graphql`
  query pizzas {
    allContentfulPizza(sort: { fields: index }) {
      nodes {
        french
        id
        index
        price
      }
    }
    allContentfulFocaccia(sort: { fields: index }) {
      nodes {
        french
        id
        index
        price
        takeAway
      }
    }
  }
`;

export default PizzasPage;
