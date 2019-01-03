import React from "react";
import { withRouter } from 'react-router-dom';
import classes from "./Burguer.css";
import BurguerIngredient from "./BurguerIngredient/BurguerIngredient";


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

export default withRouter(burguer);
