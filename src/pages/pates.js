import React from "react";

import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import back from "../images/back.svg";
import homepage from "../images/homepage.svg";

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
        <div className="nav">
          <a href="javascript:history.back()" className="back-icon">
            <img src={back} />
          </a>
          <a href="https://lafaceouest.com/ " className="homepage-icon">
            <img src={homepage} />
          </a>
        </div>
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
