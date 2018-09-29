import React from 'react';
import ExpenseInput from '../../components/budget/ExpenseInput'

class ExpensesView extends React.Component {

  state = {
    isHidden: true
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {

  const renderExpenses = this.props.expenses.map((expense) => {
    return(
      <div className="col-md-3 border border-warning rounded m-2 p-1 mx-5">
        <h2><span class="badge badge-secondary">{expense.name}</span></h2>
        <p> Amount: {expense.amount} | Category: {expense.category} </p>
        <p><a href="#" id="delete" onClick={() => this.props.deleteExpense(expense)}>Delete</a></p>
      </div>)
    })

return (
  <div>
    <h3>Expenses: ${this.props.expenseTotal}</h3>
    <div className="row">{renderExpenses}
      {!this.state.isHidden && <ExpenseInput createExpense={this.props.createExpense} handleChange={this.props.handleChange} handleExpenseSubmit={this.props.handleExpenseSubmit}/>}
      <button class="btn btn-outline-success col-md-1 border border-success rounded m-2 p-1 mx-auto" onClick={this.toggleHidden.bind(this)} type="submit">+</button>
    </div>
  </div>
  )
}
}
export default ExpensesView;
