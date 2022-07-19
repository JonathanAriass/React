import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlicer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    increase: (state, action) => {
      state.counter += action.payload;
    },
    toggleCounter: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

// The reducer prop could handle an object with multiple reducers
const store = configureStore({
  reducer: counterSlicer.reducer,
});

export const counterActions = counterSlicer.actions;

export default store;

////////////////////////////////////////////////////////////////////////////////
// OLD WAY OF DOING THE REDUCERS FOT THE STORE ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
import { createStore } from "redux";

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.payload,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "TOGGLE_COUNTER") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);**/
