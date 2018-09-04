import React from 'react'

const ExpenseInput = props => {

  return (
    <div className="col-md-3 border border-primary rounded m-2 p-1 mx-auto">
      <form onSubmit={props.handleExpenseSubmit}>
        <input type="text" name="expense_name" value={props.expense_name} placeholder="Monthly Expense" onChange={props.handleChange} />
        <input type="number" name="expense_amount" value={props.expense_amount} placeholder="Total" onChange={props.handleChange} />
        <input type="text" name="expense_category" value={props.expense_category} placeholder="Category" onChange={props.handleChange} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default ExpenseInput
