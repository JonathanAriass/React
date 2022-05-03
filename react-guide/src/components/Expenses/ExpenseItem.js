import ExpenseDate from "./ExpenseDate";
import Cards from "../UI/Cards";
import "./ExpenseItem.css";


const ExpenseItem = (props) => {
  // This is called baked data
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car insurance";
  // const expenseAmount = 294.67;

  return (
    <Cards className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Cards>
  );
}

export default ExpenseItem;
