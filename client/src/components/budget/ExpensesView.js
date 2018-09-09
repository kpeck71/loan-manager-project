import React from 'react';
import ExpenseInput from '../../components/budget/ExpenseInput'

class ExpensesView extends React.Component {

  state = {
    isHidden: true
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {

  const renderExpenses = this.props.expenses.map((expense) => {
    return(
      <div className="col-md-3 border border-primary rounded m-2 p-1 mx-auto">
        <p>{expense.name} | Amount: {expense.amount} | Category: {expense.category} </p>
      </div>)
    })

return (
  <div>
    <h3>Expenses:</h3>
    {renderExpenses}
    {!this.state.isHidden && <ExpenseInput />}
    <button class="btn btn-primary" onClick={this.toggleHidden.bind(this)} type="submit">+</button>
  </div>
  )
}
}
export default ExpensesView;
