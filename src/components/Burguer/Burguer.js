import React from "react";
import BurguerIngredient from "./BurguerIngredient/BurguerIngredient";

import classes from "./Burguer.css";

const burguer = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(key => {
      return [...Array(props.ingredients[key])].map((_, index) => {
        return <BurguerIngredient key={key + index} type={key} />;
      });
    })
    .reduce((previous, curr) => {
      return previous.concat(curr);
    }, []);

  console.log(transformedIngredients);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burguer}>
      <BurguerIngredient type="bread-top" />
      {transformedIngredients}
      <BurguerIngredient type="bread-bottom" />
    </div>
  );
};

export default burguer;
