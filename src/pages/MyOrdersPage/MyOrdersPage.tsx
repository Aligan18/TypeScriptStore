import React, { useEffect, useState } from "react";
import AdderessForm from "../../components/AddressForm/AdderessForm";
import Modal from "../../components/Modal/Modal";
import classes from "./MyOrdersPage.module.scss";
import { getOrderFromBase } from "../../fetching/getOrderFromBase";
import { useTypedSelector } from "../../нooks/useTypeSelector";
import { IOrderInfo } from "../../types/orderInfo/orderInfo";
import ProductForm from "../../components/ProductForm/ProductForm";

enum EShowModal {
  address = "address",
  product = "product",
}

const MyOrdersPage = () => {
  const [showModal, setShowModal] = useState<string | null>();
  const { email } = useTypedSelector((state) => state.userAuth);
  const [infoOrder, setInfoOrder] = useState<IOrderInfo[]>([]);

  useEffect(() => {
    const getOrderInfo = async () => {
      const data = await getOrderFromBase(email);
      setInfoOrder(Object.values(data));
      console.log("data", data);
    };
    getOrderInfo();
  }, []);

  const handleClick = (type: string) => {
    console.log("info ", infoOrder);
    setShowModal(type);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.list}>
        {infoOrder.map((order, index) => (
          <div key={order.data}>
            {showModal === `${EShowModal.address}${index}` && (
              <Modal
                renderItem={() => (
                  <>
                    {order?.address && (
                      <AdderessForm
                        closeModal={setShowModal}
                        items={order?.address}
                      />
                    )}
                  </>
                )}
              />
            )}
            {showModal === `${EShowModal.product}${index}` && (
              <Modal
                renderItem={() => (
                  <>
                    {order?.order && (
                      <ProductForm
                        closeModal={setShowModal}
                        product={order?.order}
                      />
                    )}
                  </>
                )}
              />
            )}
            <div className={classes.window}>
              <div className={classes.title}>
                {" "}
                <div>ORDER ID</div>
                <div></div>{" "}
              </div>
              <hr />
              <div className={classes.text}>
                <div>Data</div>
                <div>{order.data}</div>
              </div>
              <div className={classes.text}>
                <div>Address</div>
                <div>
                  <button
                    className={classes.button}
                    onClick={() => handleClick(`${EShowModal.address}${index}`)}
                  >
                    More info
                  </button>
                </div>
              </div>
              <div className={classes.text}>
                <div>Products</div>
                <div>
                  <button
                    className={classes.button}
                    onClick={() => handleClick(`${EShowModal.product}${index}`)}
                  >
                    More info
                  </button>
                </div>
              </div>
              <div className={classes.text}>
                <div>Total Amount</div>
                <div>{order.order.totalAmount}</div>
              </div>

              <div className={classes.total}>
                Status<div>{order.status}</div>
              </div>
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrdersPage;
