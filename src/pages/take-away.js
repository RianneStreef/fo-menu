import React from "react";

import { graphql } from "gatsby";

const TakeAwayPage = (props) => {
  let dishes = props.data.allContentfulDish.nodes;

  console.log(props);
  console.log(dishes);

  const takeAwayStartersList = dishes
    .filter((dish) => dish.takeAway === true)
    .filter((takeAway) => takeAway.category === "entrees")
    .map((takeAwayStarter) => {
      return (
        <div key={takeAwayStarter.id}>
          <div className="menu-line-1">
            <p>{takeAwayStarter.french}</p>
            <p>{takeAwayStarter.price}</p>
          </div>
          <p>{takeAwayStarter.english}</p>
        </div>
      );
    });

  const takeAwayMainsList = dishes
    .filter((dish) => dish.takeAway === true)
    .filter((takeAway) => takeAway.category === "plats")
    .map((takeAwayMain) => {
      return (
        <div key={takeAwayMain.id}>
          <div className="menu-line-1">
            <p>{takeAwayMain.french}</p>
            <p>{takeAwayMain.price}</p>
          </div>
          <p>{takeAwayMain.english}</p>
        </div>
      );
    });

  const takeAwayDessertsList = dishes
    .filter((dish) => dish.takeAway === true)
    .filter((takeAway) => takeAway.category === "desserts")
    .map((takeAwayDesserts) => {
      return (
        <div key={takeAwayDesserts.id}>
          <div className="menu-line-1">
            <p>{takeAwayDesserts.french}</p>
            <p>{takeAwayDesserts.price}</p>
          </div>
          <p>{takeAwayDesserts.english}</p>
        </div>
      );
    });

  const takeAwayPizzasList = dishes
    .filter((dish) => dish.takeAway === true)
    .filter((takeAway) => takeAway.category === "pizzas")
    .map((takeAwayPizza) => {
      return (
        <div key={takeAwayPizza.id}>
          <div className="menu-line-1">
            <p>{takeAwayPizza.french}</p>
            <p>{takeAwayPizza.price}</p>
          </div>
          <p>{takeAwayPizza.english}</p>
        </div>
      );
    });

  const takeAwayFocacciasList = dishes
    .filter((dish) => dish.takeAway === true)
    .filter((takeAway) => takeAway.category === "focaccias")
    .map((takeAwayFocaccia) => {
      return (
        <div key={takeAwayFocaccia.id}>
          <div className="menu-line-1">
            <p>{takeAwayFocaccia.french}</p>
            <p>{takeAwayFocaccia.price}</p>
          </div>
          <p>{takeAwayFocaccia.english}</p>
        </div>
      );
    });

  return (
    <div>
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
    allContentfulDish {
      nodes {
        english
        french
        price
        vega
        category
        takeAway
        snackMenu
        restMenu
      }
    }
  }
`;

export default TakeAwayPage;
