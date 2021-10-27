import React from "react";

import { Link } from "gatsby";

import { graphql } from "gatsby";

const StarterPage = (props) => {
  let dishes = props.data.allContentfulDish.nodes;
  let slug = props.location.pathname;

  console.log(props.location.pathname);
  console.log(dishes);
  console.log(slug);

  const startersList = dishes
    .filter((dish) => `/${dish.category}` === slug)
    .map((starter) => {
      return (
        <Link key={starter.id} to={`/${starter.slug}`}>
          <p>{starter.french}</p>
          <p>{starter.english}</p>
          <p>{starter.price}</p>
        </Link>
      );
    });

  console.log(startersList);
  return <div>{startersList}</div>;
};

export const restaurantQuery = graphql`
  query dishes {
    allContentfulDish {
      nodes {
        english
        french
        price
        vega
        category
        takeAway
        menu
      }
    }
  }
`;

export default StarterPage;
