import React from "react";

import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Nav from "../components/Nav";

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
    <>
      <Helmet>
        <title>Plats</title>
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
    </>
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
