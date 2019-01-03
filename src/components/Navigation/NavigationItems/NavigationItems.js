import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.css";


const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">Burguer Builder</NavigationItem>
    <NavigationItem link="/orders">Checkout</NavigationItem>
  </ul>
);

export default navigationItems;
