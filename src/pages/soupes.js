import React from "react";

import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Nav from "../components/Nav";

const SoupsPage = (props) => {
  let soups = props.data.allContentfulSoup.nodes;

  const soupsList = soups.map((soup) => {
    return (
      <div key={soup.id}>
        <div className="menu-line-1">
          <p>
            {soup.french} {soup.vega && <span className="vega">V</span>}
          </p>
          <p className="price">{soup.price}</p>
        </div>
        <p className="english">{soup.english}</p>
      </div>
    );
  });

  return (
    <>
      <Helmet>
        <title>Soupes</title>
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
        <h2>Soupes / Soups </h2>
        {soupsList}
      </div>
    </>
  );
};

export const soupsQuery = graphql`
  query soups {
    allContentfulSoup(sort: { fields: index }) {
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

export default SoupsPage;
