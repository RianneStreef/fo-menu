import React from "react";

import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Nav from "../components/Nav";

const TakeAwayPage = (props) => {
  let dishes = props.data.allContentfulTakeAway.nodes;
  let pizzas = props.data.allContentfulPizza.nodes;
  let focaccias = props.data.allContentfulFocaccia.nodes;

  const takeAwayStartersList = dishes
    .filter((takeAway) => takeAway.category === "starter")
    .map((takeAwayStarter) => {
      return (
        <div key={takeAwayStarter.id}>
          <div className="menu-line-1">
            <p>
              {takeAwayStarter.french}{" "}
              {takeAwayStarter.vega && <span className="vega">V</span>}
            </p>
            <p className="price">{takeAwayStarter.price}</p>
          </div>
          <p className="english">{takeAwayStarter.english}</p>
        </div>
      );
    });

  const takeAwayMainsList = dishes
    .filter((takeAway) => takeAway.category === "main")
    .map((takeAwayMain) => {
      return (
        <div key={takeAwayMain.id}>
          <div className="menu-line-1">
            <p>
              {takeAwayMain.french}{" "}
              {takeAwayMain.vega && <span className="vega">V</span>}
            </p>
            <p className="price">{takeAwayMain.price}</p>
          </div>
          <p>{takeAwayMain.english}</p>
        </div>
      );
    });

  const takeAwayDessertsList = dishes
    .filter((takeAway) => takeAway.category === "dessert")
    .map((takeAwayDesserts) => {
      return (
        <div key={takeAwayDesserts.id}>
          <div className="menu-line-1">
            <p>
              {takeAwayDesserts.french}{" "}
              {takeAwayDesserts.vega && <span className="vega">V</span>}
            </p>
            <p className="price">{takeAwayDesserts.price}</p>
          </div>
          <p>{takeAwayDesserts.english}</p>
        </div>
      );
    });

  const takeAwayPizzasList = pizzas
    .filter((takeAway) => takeAway.takeAway === true)
    .map((takeAwayPizza) => {
      return (
        <div key={takeAwayPizza.id}>
          <div className="menu-line-1">
            <p>
              {takeAwayPizza.french}{" "}
              {takeAwayPizza.vega && <span className="vega">V</span>}
            </p>
            <p className="price">{takeAwayPizza.takeAwayPrice}</p>
          </div>
          <p>{takeAwayPizza.english}</p>
        </div>
      );
    });

  const takeAwayFocacciasList = focaccias
    .filter((takeAway) => takeAway.takeAway === true)
    .map((takeAwayFocaccia) => {
      return (
        <div key={takeAwayFocaccia.id}>
          <div className="menu-line-1">
            <p>
              {takeAwayFocaccia.french}{" "}
              {takeAwayFocaccia.vega && <span className="vega">V</span>}
            </p>
            <p className="price">{takeAwayFocaccia.takeAwayPrice}</p>
          </div>
          <p>{takeAwayFocaccia.english}</p>
        </div>
      );
    });

  return (
    <>
      <Helmet>
        <title>Take Away Menu La Face Ouest</title>
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
        <h1>Emporter / Take Away</h1>
        <h2>Entrées / Starters</h2>
        {takeAwayStartersList}
        <h2>Plats/ Main Courses</h2>
        {takeAwayMainsList}
        <h2>Desserts / Desserts</h2>
        {takeAwayDessertsList}
        <h2>Pizzas</h2>
        {takeAwayPizzasList}
        {takeAwayFocacciasList}
      </div>
    </>
  );
};

export const takeAwayQuery = graphql`
  query takeAway {
    allContentfulTakeAway(sort: { fields: index }) {
      nodes {
        category
        english
        french
        id
        index
        price
        vega
      }
    }
    allContentfulPizza(sort: { fields: index }) {
      nodes {
        french
        id
        index
        takeAwayPrice
        takeAway
      }
    }
    allContentfulFocaccia(sort: { fields: index }) {
      nodes {
        french
        id
        index
        takeAwayPrice
        takeAway
      }
    }
  }
`;

export default TakeAwayPage;
