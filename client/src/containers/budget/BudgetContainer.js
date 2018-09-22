import React, { Component } from 'react';
import { connect } from 'react-redux'
import BudgetInput from '../../components/budget/BudgetInput'
import ExpenseInput from '../../components/budget/ExpenseInput'
import ExpensesView from '../../components/budget/ExpensesView'
import { createExpense, updateBudget, fetchBudget, fetchExpenses, addExpense } from '../../actions/goals'

class BudgetContainer extends Component {
  componentDidMount() {
    this.props.fetchBudget(),
    this.props.fetchExpenses()
  };

  calculateBudget() {
    let budget = this.props.income
    return budget - this.props.expenseTotal
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
        <BudgetInput updateBudget={this.props.updateBudget} income={this.props.income} />
        <h2>You have this much to work with: ${this.calculateBudget()}</h2>
        <ExpensesView expenses={this.props.expenses} expenseTotal={this.props.expenseTotal} addExpense={this.props.addExpense} />
      </div>
    );
  }
}

const mapStateToProps = state => { return { income: state.budget.income, expenses: state.budget.expenses, expenseTotal: state.budget.expenseTotal } }

const mapDispatchToProps = dispatch => ({
  addExpense: newExpense => dispatch({ type: 'ADD_EXPENSE', newExpense }),
  updateBudget: newBudget => dispatch(updateBudget(newBudget)),
  createExpense: newExpense => dispatch(createExpense(newExpense)),
  fetchBudget: () => dispatch(fetchBudget()),
  fetchExpenses: () => dispatch(fetchExpenses())
 })

export default connect(mapStateToProps, mapDispatchToProps)(BudgetContainer);
