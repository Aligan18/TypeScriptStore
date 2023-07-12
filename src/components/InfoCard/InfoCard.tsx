import React, { FC } from "react";
import Stars from "../Stars/Stars";
import classes from "./InfoCard.module.scss";
import { ItemsType } from "../../types/product/ItemsType";
import useActions from "../../нooks/useActions";

export enum ESizeTypes {
  large = "large",
  medium = "medium",
  small = "small",
}

interface InfoCardProps {
  stars: number | undefined;
  size: ESizeTypes;
  bagButton?: boolean;
  info?: ItemsType | null;
}

const InfoCard: FC<InfoCardProps> = ({
  stars,
  size,
  bagButton = true,
  info,
}) => {
  const { addBagItem } = useActions();

  const addButton = () => {
    if (info) addBagItem(info);
  };

  if (size === ESizeTypes.large) {
    return (
      <>
        <div className={classes.text}>
          <div className={classes.title_large}>{info?.name}</div>

          {stars && <Stars count={stars} />}
          <div className={classes.price_large}>$ 529.99</div>
        </div>
        {bagButton && (
          <div
            onClick={() => addButton()}
            className={classes.icon_wrapper_large}
          >
            <div className={classes.icon_body_large}>
              <i className={classes.icon + " fa-solid fa-cart-plus"}></i>
              <p className={classes.button_text}>Add to Bag </p>
            </div>
          </div>
        )}
      </>
    );
  }
  if (size === ESizeTypes.small) {
    return (
      <>
        <div className={classes.text}>
          <div className={classes.title}>{info?.name}</div>

          {stars && <Stars count={stars} />}
          <div className={classes.price}>{info?.unitPrice}</div>
        </div>
        {bagButton && (
          <div onClick={() => addButton()} className={classes.icon_wrapper}>
            <div className={classes.icon_body}>
              <i className={classes.icon + " fa-solid fa-cart-plus"}></i>
            </div>
          </div>
        )}
      </>
    );
  }
  return (
    <>
      <div className={classes.text}>
        <div className={classes.title}>Apple Watch</div>

        <div className={classes.price}>$ 529.99</div>
      </div>
      <div onClick={() => addButton()} className={classes.icon_wrapper}>
        <div className={classes.icon_body}>
          <i className={classes.icon + " fa-solid fa-cart-plus"}></i>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
