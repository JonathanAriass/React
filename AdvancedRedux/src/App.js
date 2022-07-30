import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui-slice";

let isInitialRender = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCardData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          message: "Loading...",
          title: "Sending cart data!",
        })
      );
      const response = await fetch(
        "https://react-http-ea9c9-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT", // PUT request override exisiting data
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          message: "Successfully sent cart data!",
          title: "Success cart data!",
        })
      );
    };

    if (isInitialRender) {
      isInitialRender = false;
      return;
    }

    sendCardData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          message: "Something went wrong!",
          title: "Error!",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
