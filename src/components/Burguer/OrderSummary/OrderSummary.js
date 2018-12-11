import React from "react";
import Button from "../../UI/Button/Button";

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
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.puchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.puchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
