import React, { Component } from 'react';
import { connect } from 'react-redux';
import Expense from '../components/Expense';
import ExpenseInput from '../containers/ExpenseInput';
import BudgetInput from './BudgetInput'
import { fetchBudget, fetchExpenses, updateBudget, deleteExpense, createExpense } from '../actions/goals'


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
    this.calculateExpenseTotals()
    return this.props.budget.expenses.map((expense) => {
      return <Expense expense={expense} cardDetails="expenseCard" />
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

  calculateExpenseTotals() {
    console.log('expenses are ', this.props.budget.expenses)
  }

render() {
    return (
      <React.Fragment>
        <div className="budgetGroup">
          <BudgetInput updateBudget={this.props.updateBudget} income={this.props.budget.income} />
          <h2>You have ${this.calculateBudget()} to spend.</h2>
        </div>
        <div className="expenseGroup">
          <h3>Current Expenses: ${this.props.budget.expenseTotal}</h3>
          <div className="container-fluid">
            <button className="btn btn-outline-info" onClick={this.toggleHidden.bind(this)} type="submit">New Expense</button>
            <div className="row">
              {this.renderExpenses()}
              {!this.state.isHidden && <ExpenseInput cardDetails="newExpense" handleChange={this.handleChange.bind(this)} handleExpenseSubmit={this.handleExpenseSubmit} deleteExpense={this.deleteExpense}/>}
            </div>
          </div>
        </div>
      </React.Fragment>
     )
  }
}

const mapStateToProps = state => { return { budget: state.budget }}

export default connect(mapStateToProps, { fetchBudget, fetchExpenses, updateBudget, deleteExpense, createExpense })(BudgetContainer)
