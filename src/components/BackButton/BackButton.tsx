import React, { FC } from "react";
import classes from "./BackButton.module.scss";
import { useNavigate } from "react-router-dom";

interface IBackButton {
  onClick?: (event: MouseEvent) => void;
}
const BackButton: FC<IBackButton> = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.back_button} onClick={() => navigate(-1)}>
      <button className={classes.button}>Back</button>
    </div>
  );
};

export default BackButton;
