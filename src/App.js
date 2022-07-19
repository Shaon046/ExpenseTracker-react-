import { useState } from "react";
import ExpenseNewData from "./Components/ExpenseData/Expenses";
import NewExpense from "./Components/userInput/NewExpense";




const DummyExpenses=[
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];



function App() {

  const[expo,setExpo]=useState(DummyExpenses)

const addExpenseHandler = (expense) => {
     console.log("In App");
     setExpo((previousExpo)=>{
      return[expense,...previousExpo]
     })
    
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseNewData expenses={expo} />
    </div>
  );
}

export default App;
