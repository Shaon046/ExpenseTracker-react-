import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [UserInput, SetUserInput] = useState({
    EnteredTitle: "",
    EnteredAmount: '',
    EnteredDate: "",
  });

  const titleChangeHandler = (eve) => {
    SetUserInput({
      ...UserInput,
      EnteredTitle:eve.target.value,
    });
  
  };


  const amountChangeHandler = (eve) => {
    SetUserInput({
      ...UserInput,
      EnteredAmount:eve.target.value
     
    });
  };


  const dateChangeHandler = (eve) => {
    SetUserInput({
      ...UserInput,
      EnteredDate:eve.target.value,
    });
  };



  const onsubmitHandler = (event) => {
    event.preventDefault();
    const expensedata = {
      title: UserInput.EnteredTitle,
      amount: UserInput.EnteredAmount,
      date:new Date(UserInput.EnteredDate),
    }
     props.onSaveExpenseData(expensedata);
    SetUserInput({
      EnteredTitle: "",
      EnteredAmount: "",
      EnteredDate: "",
    });
  };
  
  return (
    <form onSubmit={onsubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label className="new-expense__control label">Title</label>
          <input
            className="new-expense__control input"
            type="text"
            id="Title"
            value={UserInput.EnteredTitle}
            onChange={titleChangeHandler}
            
          />
        </div>
        <div className="new-expense__controls">
        <label className="new-expense__control label">Amount</label>
          <input
            className="new-expense__control input"
            type="number"
            min="0.01"
            step="0.01"
            value={UserInput.EnteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label className="new-expense__control label">Date</label>
          <input
            className="new-expense__control input"
            type="date"
            min="2019-01-01"
            max="2023-01-01"
            id="Date"
            value={UserInput.EnteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type='button' onClick={props.oncancelHandler} >cancel</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
