import React from "react";

import { graphql } from "gatsby";

import back from "../images/back.svg";
import homepage from "../images/homepage.svg";

const TakeAwayPage = (props) => {
  let dishes = props.data.allContentfulTakeAway.nodes;
  let pizzas = props.data.allContentfulPizza.nodes;
  let focaccias = props.data.allContentfulFocaccia.nodes;

  console.log(pizzas);

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
    <div className="padding">
      <div className="nav">
        <a href="javascript:history.back()" className="back-icon">
          <img src={back} />
        </a>
        <a href="https://lafaceouest.com/ " className="homepage-icon">
          <img src={homepage} />
        </a>
      </div>
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
