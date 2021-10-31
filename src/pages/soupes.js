import React from "react";

import { graphql } from "gatsby";

import back from "../images/back.svg";
import homepage from "../images/homepage.svg";

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
    <div className="padding">
      <div className="nav">
        <a href="javascript:history.back()" className="back-icon">
          <img src={back} />
        </a>
        <a href="https://lafaceouest.com/ " className="homepage-icon">
          <img src={homepage} />
        </a>
      </div>
      <h2>Soupes / Soups </h2>
      {soupsList}
    </div>
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
