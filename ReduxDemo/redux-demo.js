// Import redux
const redux = require("redux");

// It should always receive the state and the action to dispatch
// The state needs a default value to start with (firts time it will be undefined)
// Our reducer function should return the new state object (pure function)
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// Creating the store
const store = redux.createStore(counterReducer);

// Subcribing to the store
const counterSuscriber = () => {
  const latestState = store.getState(); // It will give us the latest snapshot of the state after each change
  console.log(latestState);
};

store.subscribe(counterSuscriber); // It will call the counterSuscriber function every time the state changes

//Creating and dispatching an action
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
