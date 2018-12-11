import React from "react";

import Aux from "../../hoc/ReactAux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.css";

const layout = propos => (
  <Aux>
    <Toolbar />
    <main className={classes.Content}>{propos.children}</main>
  </Aux>
);

export default layout;
