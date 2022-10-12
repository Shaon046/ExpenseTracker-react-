import { useState } from "react";
import ExpenseNewData from "./Components/ExpenseData/Expenses";
import NewExpense from "./Components/userInput/NewExpense";




const DummyExpenses=[
  
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
