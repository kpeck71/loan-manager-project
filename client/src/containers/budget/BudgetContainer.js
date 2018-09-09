import React, { Component } from 'react';
import { connect } from 'react-redux'
import BudgetInput from '../../components/budget/BudgetInput'
import ExpenseInput from '../../components/budget/ExpenseInput'
import ExpensesView from '../../components/budget/ExpensesView'
import { createExpense, createBudget, fetchBudget, fetchExpenses } from '../../actions/goals'

class BudgetContainer extends Component {
  componentDidMount() {
    this.props.fetchBudget(),
    this.props.fetchExpenses()
  };

  expenseAmounts() {
    let totals = 0
    let budget = this.props.income
    this.props.expenses.map((expense) => totals += expense.amount)
    return budget - totals
  }

  render() {
    const renderExpenses = this.props.expenses.map((expense) => { return expense.name })


    // const showBudget = props => {
    //     if (this.props.income > 0) {
    //      return <h2>You have this much to work with: {renderBudget}</h2>
    //    } else {
    //     return <BudgetInput addBudget={props.addBudget} />; }
    //  }

    return (
      <div>
        <BudgetInput createBudget={this.props.createBudget} />
        <h2>You have this much to work with: {this.expenseAmounts()}</h2>
        <ExpenseInput handleExpenseSubmit={this.handleExpenseSubmit} createExpense={this.props.createExpense}/>
        <ExpensesView expenses={this.props.expenses} />
        {renderExpenses}
      </div>
    );
  }
}

const mapStateToProps = state => { console.log('state is', state); return { income: state.budget.income, expenses: state.budget.expenses } }

const mapDispatchToProps = dispatch => ({
  addBudget: newBudget => dispatch({ type: 'ADD_BUDGET', newBudget }),
  createBudget: newBudget => dispatch(createBudget(newBudget)),
  createExpense: newExpense => dispatch(createExpense(newExpense)),
  fetchBudget: () => dispatch(fetchBudget()),
  fetchExpenses: () => dispatch(fetchExpenses())
 })

export default connect(mapStateToProps, mapDispatchToProps)(BudgetContainer);
