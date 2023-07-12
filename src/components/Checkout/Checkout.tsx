import React from "react";
import { Link } from "react-router-dom";
import { RoutersPathEnum } from "../../router/router";
import classes from "./Checkout.module.scss";

const Checkout = () => {
  return (
    <Link to={RoutersPathEnum.CHECKOUT}>
      <button className={classes.button}>
        <i
          className={classes.icon + " fa fa-shopping-bag"}
          aria-hidden="true"
        ></i>
        Checkout
      </button>
    </Link>
  );
};

export default Checkout;
