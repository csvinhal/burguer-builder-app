import React from "react";

import burguerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const logo = props => (
  <div className={classes.Logo}>
    <img src={burguerLogo} alt="BurguerLogo" />
  </div>
);

export default logo;
