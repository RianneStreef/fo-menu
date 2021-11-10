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
  }
`;

export default SnackingPage;
