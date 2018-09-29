import React from 'react';

const ExpenseInput = props => {

  return (
    <div className="col-md-3 border border-warning rounded m-2 p-1 mx-5">
      <label>Add a New Expense:</label>
      <form onSubmit={props.handleExpenseSubmit}>
        <input type="text" name="name" value={props.name} placeholder="Name" onChange={props.handleChange} />
        <input type="number" name="amount" value={props.amount} placeholder="Amount" onChange={props.handleChange} />
        <p></p>
        <label>Category:</label>
        <select name="category" value={props.value} onChange={props.handleChange}>
          <option value="fun">Fun</option>
          <option value="essentials">Essentials</option>
          <option value="credit">Credit</option>
          <option value="miscellaneous">Miscellaneous</option>
        </select>

        <input type="submit" />
      </form>
    </div>
    )
  }

export default ExpenseInput;
