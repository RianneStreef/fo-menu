import React from "react";

import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Nav from "../components/Nav";

const PastasPage = (props) => {
  let pastas = props.data.allContentfulPasta.nodes;

  const pastasList = pastas.map((pasta) => {
    return (
      <div key={pasta.id}>
        <div className="menu-line-1">
          <p>
            {pasta.french} {pasta.vega && <span className="vega">V</span>}
          </p>
          <p className="price">{pasta.price}</p>
        </div>
        <p className="english">{pasta.english}</p>
      </div>
    );
  });

  return (
    <>
      <Helmet>
        <title>Pâtes</title>
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
        <h2>Pâtes Fraîches / Fresh Pasta</h2>
        {pastasList}
      </div>
    </>
  );
};

export const pastasQuery = graphql`
  query pastas {
    allContentfulPasta(sort: { fields: index }) {
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

export default PastasPage;
