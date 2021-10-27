import React from "react";

const DishPage = (props) => {
  console.log(props);

  let dishes = props.data.allContentfulDish.nodes;
  let slug = props.params.slug;

  return (
    <>
      <p>{dishes}</p>
    </>
  );
};

export default DishPage;
