import React from "react";

import { graphql } from "gatsby";

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

  console.log(pastasList);
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
      <h2>Pâtes Fraîches / Fresh Pasta</h2>
      {pastasList}
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
