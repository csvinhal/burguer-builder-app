import React, { Component } from "react";

import Burguer from "../../components/Burguer/Burguer";
import Aux from "../../hoc/ReactAux";
import BuildControls from "./../../components/Burguer/BuildControls/BuildControls";

class BurguerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  render() {
    return (
      <Aux>
        <Burguer ingredients={this.state.ingredients} />
        <BuildControls />
      </Aux>
    );
  }
}

export default BurguerBuilder;
