import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";

const layout = propos => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{propos.children}</main>
  </Aux>
);

export default layout;
