
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

function NewExpense(props) {

  const[isEditing,setIsEditing]=useState(false);



  const onSaveExpenseDataHandler=(EnterdExpenseData)=>{
    const expensedata={...EnterdExpenseData,
                        id:Math.random().toString()};
                   console.log('from NewExpense Comp',expensedata);
                  props.onAddExpense(expensedata);
                  cancelHandler(false);
                  }

 const EditingHandler=()=>{
  setIsEditing(true)
 }
 const cancelHandler=()=>{
  setIsEditing(false)
 };


 return <div className="new-expense">
   {!isEditing &&<button onClick= {EditingHandler}>Add New Expense</button>}
   {isEditing && <ExpenseForm  onSaveExpenseData={onSaveExpenseDataHandler}  oncancelHandler={cancelHandler}/>}
  
  </div>;
}

export default NewExpense;
