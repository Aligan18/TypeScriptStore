import React, { Component, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { classnames } from "../../lib/classnames/classnames";
import { RoutersPathEnum } from "../../router/router";
import classes from "./SideBarIcon.module.scss";

export const SideBarIcon = ({ path, icon, styles }: ISideBarProps) => {
  const [selected, setSeleted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === path) {
      setSeleted(true);
    } else {
      setSeleted(false);
    }
  }, [location.pathname]);

  return (
    <div
      className={classnames(classes.selected_icon, [], {
        [classes.selected]: selected === true,
      })}
    >
      <Link className={classes.link} to={path}>
        <i className={classnames(classes.icon, [icon])} aria-hidden="true"></i>
      </Link>
    </div>
  );
};

interface ISideBarProps {
  path: string;
  icon: string;
  styles: string;
}
