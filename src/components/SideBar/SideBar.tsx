import React, { FC, useState, useEffect } from "react";
import classes from "./SideBar.module.scss";
import { getDatabase, ref, onValue, child, get } from "firebase/database";
import { initializeApp } from "firebase/app";
import { ItemsType } from "../../types/product/ItemsType";
import useActions from "../../нooks/useActions";
import {
  EProducts,
  ESelectedProductType,
} from "../../types/selectedProducts/selectedProducts";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../firebase/firebase";
import { useAuth } from "../../нooks/useAuth";
import { RoutersPathEnum } from "../../router/router";

const SideBar: FC = () => {
  const { Auth, admin } = useAuth();
  const { DeleteProductsHomePage, DeleteUser } = useActions();

  const [clicked, setClicked] = useState<any>({
    [EProducts.NOTEBOOKS]: false,
    [EProducts.SMARTPHONES]: false,
    [EProducts.SMART_TV]: false,
    [EProducts.SMART_WATCHES]: false,
  });

  const [showProducts, setShowProducts] = useState(false);
  // const [items , setItems] =useState<ItemsType[] >([])
  const fetchItems = (key: string) => {
    const dbRef = ref(getDatabase(app));
    get(child(dbRef, key))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          const data = snapshot.val();
          AddProductsHomePage(data.items, key);
          setClicked({ ...clicked, [key]: true });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteItem = (key: string) => {
    DeleteProductsHomePage(key);
    setClicked({ ...clicked, [key]: false });
  };

  useEffect(() => {
    fetchItems(EProducts.SMART_WATCHES);
  }, []);

  const Logout = () => {
    DeleteUser();
  };

  const { AddProductsHomePage } = useActions();

  const ClickCheck = (key: string, addItem: any, deleteItem: any) => {
    clicked[key] ? deleteItem(key) : addItem(key);
  };

  console.log(clicked);

  return (
    <div className={classes.bottom}>
      <div className={classes.wrapper}>
        <div className={classes.wrapper_icon}>
          {Auth ? (
            <i
              onClick={Logout}
              className={classes.icon + " fa-solid fa-door-open"}
            ></i>
          ) : (
            <Link className={classes.link} to={RoutersPathEnum.LOGIN}>
              <i className={classes.icon + " fa-solid fa-user"}></i>
            </Link>
          )}
          <Link className={classes.link} to={RoutersPathEnum.HOME}>
            <i
              className={classes.icon + " fa-solid fa-house-chimney"}
              aria-hidden="true"
            ></i>
          </Link>
          <Link className={classes.link} to={RoutersPathEnum.BAG}>
            <i
              className={classes.icon + " fa-solid fa-cart-shopping"}
              aria-hidden="true"
            ></i>
          </Link>
          <Link className={classes.link} to={RoutersPathEnum.MY_ORDERS_PAGE}>
            <i
              className={classes.icon + " fa fa-shopping-bag"}
              aria-hidden="true"
            ></i>
          </Link>
          <i
            onClick={() => setShowProducts(!showProducts)}
            className={classes.icon + " fa fa-bars"}
            aria-hidden="true"
          ></i>

          {showProducts && (
            <div className={classes.products}>
              <div
                onClick={() =>
                  ClickCheck(EProducts.SMART_TV, fetchItems, deleteItem)
                }
                className={classes.item}
              >
                <i className={classes.icon_box + " fa-solid fa-tv"}></i>
              </div>
              <div
                onClick={() =>
                  ClickCheck(EProducts.SMART_WATCHES, fetchItems, deleteItem)
                }
                className={classes.item}
              >
                <i className={classes.icon_box + " fa-regular fa-clock"}></i>
              </div>
              <div
                onClick={() =>
                  ClickCheck(EProducts.SMARTPHONES, fetchItems, deleteItem)
                }
                className={classes.item}
              >
                <i
                  className={
                    classes.icon_box + " fa-solid fa-mobile-screen-button"
                  }
                ></i>
              </div>
              <div
                onClick={() =>
                  ClickCheck(EProducts.NOTEBOOKS, fetchItems, deleteItem)
                }
                className={classes.item}
              >
                <i className={classes.icon_box + " fa-solid fa-laptop"}></i>
              </div>
            </div>
          )}
        </div>
        {admin && (
          <Link className={classes.link} to={RoutersPathEnum.ADMIN}>
            <div>
              <i
                className={classes.icon_admin + ` fa-solid fa-address-card`}
              ></i>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SideBar;
