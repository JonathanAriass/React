import { createSlice } from "@reduxjs/toolkit";

import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    replaceCart: (state, action) => {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }
    },
  },
});

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

export const cartActions = cartSlice.actions;

export default cartSlice;
