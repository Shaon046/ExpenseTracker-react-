import './ExpenseDate.css'

function ExpenseDate(props){  
    const date=props.date.toLocaleString('en-Us',{day:'2-digit'});
    const month =props.date.toLocaleString('en-Us',{month:'long'});
    const year =props.date.getFullYear();
    
    
    return  <div className="expense-date">
          <div className='expense-date__month'>{month}</div>
          <div className="expense-date__year">{year}</div>
          <div className="expense-date__day">{date}</div>
            </div>

}

export {ExpenseDate}