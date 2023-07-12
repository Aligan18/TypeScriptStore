import React, { FC } from "react";
import { IAddress } from "../../types/address/address";
import classes from "./AddressForm.module.scss";

interface IAddressForm {
  items: IAddress;
  closeModal: (flag: null) => void;
}
const AdderessForm: FC<IAddressForm> = ({ items, closeModal }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.cross}>
        <i
          onClick={() => closeModal(null)}
          className="fa-regular fa-circle-xmark"
        ></i>
      </div>
      <div className={classes.info}>ADDRESS INFO</div>
      <hr />
      <div className={classes.title}>
        <div>Name</div>
        <div>{items.name}</div>
      </div>
      <div className={classes.title}>
        <div>Country</div>
        <div>{items.country}</div>
      </div>
      <div className={classes.title}>
        <div>City</div>
        <div>{items.city}</div>
      </div>
      <div className={classes.title}>
        <div>Street</div>
        <div>{items.street}</div>
      </div>
      <div className={classes.title}>
        <div>Phone</div>
        <div>{items.phone}</div>
      </div>
    </div>
  );
};

export default AdderessForm;
