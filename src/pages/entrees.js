import React from "react";

import { graphql } from "gatsby";

import back from "../images/back.svg";
import homepage from "../images/homepage.svg";

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

  console.log(startersList);
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
      <div>
        <h2>Entrées / Starters</h2>
        {startersList}
      </div>
    </div>
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
