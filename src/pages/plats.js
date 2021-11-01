import React from "react";

import { graphql } from "gatsby";

import back from "../images/back.svg";
import homepage from "../images/homepage.svg";

const MainsPage = (props) => {
  let mains = props.data.allContentfulMain.nodes;

  const mainsList = mains.map((main) => {
    return (
      <div key={main.id}>
        <div className="menu-line-1">
          <p>
            {main.french}{" "}
            {main.eveningOnly && (
              <span className="evening">soir uniquement</span>
            )}
            {main.vega && <span className="vega">V</span>}
          </p>

          <p className="price">{main.price}</p>
        </div>
        <p className="english">
          {main.english}{" "}
          {main.eveningOnly && <span className="evening">evening only</span>}
        </p>
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
      <h2>Plats / Mains courses</h2>
      {mainsList}
      <p className="sauces">
        <b>
          <u>Sauces au choix:</u>
          {"  "}
        </b>
        Béarnaise maison <b>4</b> / Gorgonzola <b>3</b> / Poivre noir
        <span className="vega">V</span>
        <b>3</b>
      </p>
    </div>
  );
};

export const mainsQuery = graphql`
  query mains {
    allContentfulMain(sort: { fields: index }) {
      nodes {
        english
        french
        id
        index
        price
        vega
        eveningOnly
      }
    }
  }
`;

export default MainsPage;
