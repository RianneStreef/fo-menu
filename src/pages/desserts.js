import React from "react";

import { graphql } from "gatsby";

import Nav from "../components/Nav";

import { Helmet } from "react-helmet";

const DessertsPage = (props) => {
  let desserts = props.data.allContentfulDessert.nodes;

  const dessertsList = desserts.map((dessert) => {
    return (
      <div key={dessert.id}>
        <div className="menu-line-1">
          <p>
            {dessert.french} {dessert.vega && <span className="vega">V</span>}
          </p>
          <p className="price">{dessert.price}</p>
        </div>
        <p className="english">{dessert.english}</p>
      </div>
    );
  });

  return (
    <>
      <Helmet>
        <title>Desserts</title>
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
        <div>
          <h2>Desserts</h2>
          {dessertsList}
        </div>
      </div>
    </>
  );
};

export const dessertsQuery = graphql`
  query desserts {
    allContentfulDessert(sort: { fields: index }) {
      nodes {
        english
        id
        french
        index
        price
      }
    }
  }
`;

export default DessertsPage;
