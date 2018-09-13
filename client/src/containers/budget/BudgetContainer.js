import React, { Component } from 'react';
import { connect } from 'react-redux'
import BudgetInput from '../../components/budget/BudgetInput'
import ExpenseInput from '../../components/budget/ExpenseInput'
import ExpensesView from '../../components/budget/ExpensesView'
import { createExpense, createBudget, fetchBudget, fetchExpenses, addExpense } from '../../actions/goals'

class BudgetContainer extends Component {
  componentDidMount() {
    this.props.fetchBudget(),
    this.props.fetchExpenses()
  };

  calculateExpenses() {
    let expenseTotal = 0
    this.props.expenses.map((expense) => expenseTotal += expense.amount)
    return expenseTotal
  }

  calculateBudget() {
    let budget = this.props.income
    return budget - this.calculateExpenses()
  }

  render() {

    // const showBudget = props => {
    //     if (this.props.budget.length > 0) {
    //      return <h2>You have this much to work with: {this.calculateBudget()} </h2>
    //    } else {
    //     return <BudgetInput addBudget={props.addBudget} />; }
    //  }

    return (
      <div>
        <BudgetInput createBudget={this.props.createBudget} />
        <h2>You have this much to work with: ${this.calculateBudget()}</h2>
        <ExpensesView expenses={this.props.expenses} expenseTotal={this.calculateExpenses()} addExpense={this.props.addExpense} />
      </div>
    );
  }
}

const mapStateToProps = state => { console.log('state is', state); return { income: state.budget.income, expenses: state.budget.expenses } }

const mapDispatchToProps = dispatch => ({
  addBudget: newBudget => dispatch({ type: 'ADD_BUDGET', newBudget }),
  addExpense: newExpense => dispatch({ type: 'ADD_EXPENSE', newExpense }),
  createBudget: newBudget => dispatch(createBudget(newBudget)),
  createExpense: newExpense => dispatch(createExpense(newExpense)),
  fetchBudget: () => dispatch(fetchBudget()),
  fetchExpenses: () => dispatch(fetchExpenses())
 })

export default connect(mapStateToProps, mapDispatchToProps)(BudgetContainer);
