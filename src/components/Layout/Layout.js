import React from "react";

import Aux from "../../hoc/ReactAux";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.css";

const layout = propos => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{propos.children}</main>
  </Aux>
);

export default layout;
