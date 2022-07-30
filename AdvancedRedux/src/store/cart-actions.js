import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-ea9c9-default-rtdb.europe-west1.firebasedatabase.app/cart.json" // Default is GET
      );

      if (!response.ok) {
        throw new Error("Couldn't fetch data from database!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData?.items || [], // in case last time we removed firebase deleted items array (set it to null) from cart
          totalQuantity: cartData?.totalQuantity || 0,
        })
      ); // Replace cart data with data from database
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          message: "Fetching data error!",
          title: "Error!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        message: "Loading...",
        title: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
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
    };
    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          message: "Successfully sent cart data!",
          title: "Success cart data!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          message: "Something went wrong!",
          title: "Error!",
        })
      );
    }
  };
};
