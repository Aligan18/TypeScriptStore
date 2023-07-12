import React from "react";
import { IStarIconProps } from "./StarIcon.props";

import classes from "./StarIcon.module.scss";

const StarIcon = ({ filled, ...props }: IStarIconProps) => {
  return (
    <div {...props}>
      {filled ? (
        <i className={"fa-solid fa-star" + classes.star}></i>
      ) : (
        <i className="fa-regular fa-star"></i>
      )}
    </div>
  );
};

export default StarIcon;
