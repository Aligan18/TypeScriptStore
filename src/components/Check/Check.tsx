import React, { FC, useState, useEffect } from "react";
import { useAuth } from "../../нooks/useAuth";
import { useTypedSelector } from "../../нooks/useTypeSelector";
import { addOrderToBase } from "../../fetching/orderToBase";
import classes from "./Check.module.scss";
import { getAddressToBase } from "../../fetching/addressToBase";
import { IAddress } from "../../types/address/address";
import { useNavigate } from "react-router-dom";
import { RoutersPathEnum } from "../../router/router";
import useActions from "../../нooks/useActions";

interface ICheck {
  address: IAddress;
}
const Check: FC<ICheck> = ({ address }) => {
  const { deleteAllBagItem } = useActions();
  const order = useTypedSelector((state) => state.bagItems);
  const navigate = useNavigate();
  const { email, Auth } = useAuth();
  const { totalAmount, quantity } = useTypedSelector((state) => state.bagItems);
  const [shippingAmount, setShippingAmount] = useState(1000);

  const addOrder = async (
    email: string | null,
    order: any,
    address: IAddress
  ) => {
    if (address.phone) {
      console.log(address);
      await addOrderToBase(email, order, address);
      deleteAllBagItem();
      navigate(RoutersPathEnum.MY_ORDERS_PAGE);
    }
  };

  return (
    <div className={classes.check_space}>
      <div className={classes.wrapper}>
        <div className={classes.title}>Order Summary</div>
        <div className={classes.total}>
          <div>Items:</div> <div>{totalAmount}</div>
        </div>
        <div className={classes.total}>
          <div>Shipping: </div> <div>{shippingAmount} тг</div>
        </div>
        <div className={classes.total}>
          <div>Gift Card: </div> <div>0 тг</div>
        </div>
        <hr></hr>
        <div className={classes.order}>
          <div>Order Total:</div> <div>{totalAmount + shippingAmount} тг</div>
        </div>
        <hr></hr>
        {totalAmount !== 0 && (
          <div
            onClick={() => addOrder(email, order, address)}
            className={classes.button}
          >
            Place your order
          </div>
        )}
      </div>
    </div>
  );
};

export default Check;
