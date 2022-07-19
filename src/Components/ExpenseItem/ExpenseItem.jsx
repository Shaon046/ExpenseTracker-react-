import "./ExpenseItem.css";
import { ExpenseDate } from "../ExpenseDate/ExpenseDate";
//import { useState } from "react";

function ExpenseItem(props) {
  // const [title,setTitle]=useState(props.title)

  // const clickHandler=()=>{
  //   setTitle('updated')
  // console.log("clicked")
  //}

  return (
    <>
      <div className="expense-item">
        <ExpenseDate date={props.date} />

        <div className="expense-item__description">
          <h2>{props.title}</h2>

          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </div>
    </>
  );
}

export default ExpenseItem;
