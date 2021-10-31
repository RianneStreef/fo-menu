import React from "react";

import { graphql } from "gatsby";

import back from "../images/back.svg";
import homepage from "../images/homepage.svg";

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
        <h2>Desserts</h2>
        {dessertsList}
      </div>
    </div>
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
