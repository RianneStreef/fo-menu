import React from "react";

import { graphql } from "gatsby";

import back from "../images/back.svg";
import homepage from "../images/homepage.svg";

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
    <div className="padding">
      <div className="nav">
        <a href="javascript:history.back()" className="back-icon">
          <img src={back} />
        </a>
        <a href="https://lafaceouest.com/ " className="homepage-icon">
          <img src={homepage} />
        </a>
      </div>
      <h1>Snacking</h1>
      {snackList}
    </div>
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
      }
    }
  }
`;

export default SnackingPage;
