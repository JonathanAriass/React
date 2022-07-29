import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter-slice";

const Counter = () => {
  const dispatch = useDispatch();
  // Retrieve the current count from the store and automatically susbcripte to the store
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  // The store normally will need a payload to be more flexible
  const increaseHandler = (event) => {
    dispatch(counterActions.increase(5)); // The extra data we dispatch is named payload
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//Class-based component to connect to the store

// Needed imports to connect to the store in a class-based component

// import { Component } from "react";
// import { connect } from "react-redux";

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// Needed functions to connect to the store where we take the state of the store and pass it as props to the component

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// Same as above but with dispatch

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "INCREMENT" }),
//     decrement: () => dispatch({ type: "DECREMENT" }),
//     toggleCounter: () => dispatch({ type: "TOGGLE_COUNTER" }),
//   };
// };

// The new for of connecting to the store is via the connect function from react-redux

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
