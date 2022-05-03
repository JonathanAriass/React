import React, { useState } from 'react';

import ExpenseDate from "./ExpenseDate";
import Cards from "../UI/Cards";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // This is called baked data
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car insurance";
  // const expenseAmount = 294.67;
  
  // It returns an arrya of size 2 with the value of element and function to update value
  const [title, setTitle] = useState(props.title);

  //let title = props.title;

  const clickHandler = () => {
    //title = "Updated!"; // This will not update the title prop, because react need to reevalute the state of the component
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Cards className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2> {/* No more need to get the value from props, because we got it from useState */}
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/*It has to recive a function or an arrow function*/}
      <button onClick={clickHandler}>Change title!</button>
    </Cards>
  );
};

export default ExpenseItem;
