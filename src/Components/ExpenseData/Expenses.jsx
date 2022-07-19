import "./Expenses.css";
//import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

function ExpenseNewData(props) {
  const [FilteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  console.log(FilteredYear);

  const filteredExpenses = props.expenses.filter((expenses) => {
    return expenses.date.getFullYear().toString() === FilteredYear;
  });

  // ...............way 1

  return (
    <>
      <div className="expenses">
        <div>
          <ExpensesFilter
            selected={FilteredYear}
            onChangeFilter={filterChangeHandler}
          />
        </div>

        <ExpenseList items={filteredExpenses} />
        {/* ...............way 2 */}
        {/* {filteredExpenses.length===0 ? <h2>No item found</h2>:filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))} */}
      </div>
    </>
  );
}
export default ExpenseNewData;
