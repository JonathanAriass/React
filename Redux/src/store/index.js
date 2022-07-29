import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

// The reducer prop could handle an object with multiple reducers
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
