import React from "react";

import Aux from "../../../hoc/ReactAux";

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(key => (
    <li key={key}>
      <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
      {props.ingredients[key]}
    </li>
  ));

  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burguer with the following ingredients: </p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};

export default orderSummary;
