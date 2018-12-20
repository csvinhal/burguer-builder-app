import React, {Component} from "react";
import Button from "../../UI/Button/Button";

import Aux from "../../../hoc/ReactAux/ReactAux";

class OrderSummary extends Component {
  render () {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(key => (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
        {this.props.ingredients[key]}
      </li>
    ));
  
    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burguer with the following ingredients: </p>
        <ul>{ingredientsSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.puchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.puchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
