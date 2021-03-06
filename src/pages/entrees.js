import React from "react";

import { graphql } from "gatsby";

import Nav from "../components/Nav";

import { Helmet } from "react-helmet";

const StarterPage = (props) => {
  let starters = props.data.allContentfulStarter.nodes;

  const startersList = starters.map((starter) => {
    return (
      <div key={starter.id}>
        <div className="menu-line-1">
          <p>
            {starter.french} {starter.vega && <span className="vega">V</span>}
          </p>{" "}
          <p className="price">{starter.price}</p>
        </div>
        <p className="english">{starter.english}</p>
      </div>
    );
  });

  return (
    <>
      <Helmet>
        <title>Entrées</title>
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
          <h2>Entrées / Starters</h2>
          {startersList}
        </div>
      </div>
    </>
  );
};

export const starterQuery = graphql`
  query starters {
    allContentfulStarter(sort: { fields: index }) {
      nodes {
        english
        french
        id
        price
        index
        vega
      }
    }
  }
`;

export default StarterPage;
