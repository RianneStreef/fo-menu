import React from "react";

import { graphql } from "gatsby";

import Nav from "../components/Nav";

import { Helmet } from "react-helmet";

const SnackingPage = (props) => {
  let snacks = props.data.allContentfulSnack.nodes;

  const snackList = snacks.map((snack) => {
    return (
      <div key={snack.id}>
        <div className="menu-line-1">
          <p>
            {snack.french} {snack.vega && <span className="vega">V</span>}
          </p>
          <p className="price">{snack.price}</p>
        </div>
        <p className="english">{snack.english}</p>
      </div>
    );
  });

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
    <>
      <Helmet>
        <title>Snacking Menu La Face Ouest</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Menu Restaurant La Face Ouest Val Thorens"
        />
        <meta
          name="keywords"
          content="menu, restaurant, La Face Ouest, Val Thorens, pizza, snack, take away"
        />
        <link rel="canonical" href="https://menu-lafaceouest.com/" />
      </Helmet>
      <div className="padding">
        <Nav />
        <h1>Snacking</h1>
        {snackList}
        <h2>Pizzas</h2>
        {pizzasList}
        {focacciasList}
      </div>
    </>
  );
};

export const snackQuery = graphql`
  query snacks {
    allContentfulSnack(sort: { fields: index }) {
      nodes {
        english
        french
        id
        index
        price
        vega
      }
    }
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

export default SnackingPage;
