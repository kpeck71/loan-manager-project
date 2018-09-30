import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardCreator from '../components/CardCreator';
import { fetchBudget, fetchExpenses, deleteExpense, createExpense } from '../actions/goals'


class BudgetContainer extends Component {

  state = {
    isHidden: true,
    name: '',
    amount: '',
    category: '',
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  componentDidMount(){
    this.props.fetchBudget(),
    this.props.fetchExpenses()
  }

  renderExpenses() {
    return this.props.budget.expenses.map((expense) => {
      return <CardCreator expense={expense} cardDetails="expenseCard" />
    });
  }
  calculateBudget() {
    let budget = this.props.budget.income
    return budget - this.props.budget.expenseTotal
  }

  handleChange = event => {
    //arrow functions bind the this value to the function
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  handleExpenseSubmit = event => {
    event.preventDefault();
    this.props.createExpense({name: this.state.name, amount: this.state.amount, category: this.state.category})
    this.setState({
      name: '',
      amount: '',
      category: '',
      isHidden: true
    })
  }

render() {
    return (
      <React.Fragment>
        <div className="budgetGroup">
          <p>Income: ${this.props.budget.income}| Expenses: ${this.props.budget.expenseTotal} </p>
          <h2>You have ${this.calculateBudget()} to spend.</h2>
        </div>
        <div className="expenseGroup">
          <h3>Current Expenses:</h3>
          <div className="container-fluid">
            <button class="btn btn-outline-info" onClick={this.toggleHidden.bind(this)} type="submit">New Expense</button>
            <div className="row">
              {this.renderExpenses()}
              {!this.state.isHidden && <CardCreator cardDetails="newExpense" handleChange={this.handleChange.bind(this)} handleExpenseSubmit={this.handleExpenseSubmit} deleteExpense={this.deleteExpense}/>}
            </div>
          </div>
        </div>
      </React.Fragment>
     )
  }
}



export default connect(null, { fetchBudget, fetchExpenses, deleteExpense, createExpense })(BudgetContainer)
