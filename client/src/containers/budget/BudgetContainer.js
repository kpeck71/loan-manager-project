import React, { Component } from 'react';
import { connect } from 'react-redux'
import BudgetInput from '../../components/budget/BudgetInput'
import ExpenseInput from '../../components/budget/ExpenseInput'
import ExpensesView from '../../components/budget/ExpensesView'
import { createExpense, updateBudget, fetchBudget, fetchExpenses, deleteExpense, addExpense } from '../../actions/goals'

class BudgetContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true,
      name: '',
      amount: '',
      category: ''
    }
  }

  componentDidMount() {
    this.props.fetchBudget(),
    this.props.fetchExpenses(),
    this.calculateBudget(),
    this.trackCategories() //expenses isn't loaded yet when this runs - why?
  };

  calculateBudget() {
    let budget = this.props.income
    return budget - this.props.expenseTotal
  }

  trackCategories() {
    let funCategory = this.props.expenses.filter(expense => expense.category === "fun" )
    let essentialsCategory = this.props.expenses.filter(expense => expense.category === "essentials" )
    let creditCategory = this.props.expenses.filter(expense => expense.category === "credit" )
    let miscCategory = this.props.expenses.filter(expense => expense.category === "miscellaneous" )
    console.log('funCat is:', funCategory)
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

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  render() {

    return (
      <div>
        <BudgetInput updateBudget={this.props.updateBudget} income={this.props.income} />
        <h2>You have this much to work with: ${this.calculateBudget()}</h2>
        <ExpensesView expenses={this.props.expenses} expenseTotal={this.props.expenseTotal} createExpense={this.props.createExpense} deleteExpense={this.props.deleteExpense} handleChange={this.handleChange} handleExpenseSubmit={this.handleExpenseSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = state => { return { income: state.budget.income, expenses: state.budget.expenses, expenseTotal: state.budget.expenseTotal } }

const mapDispatchToProps = dispatch => ({
  updateBudget: newBudget => dispatch(updateBudget(newBudget)),
  createExpense: newExpense => dispatch(createExpense(newExpense)),
  deleteExpense: id => dispatch(deleteExpense(id)),
  fetchBudget: () => dispatch(fetchBudget()),
  fetchExpenses: () => dispatch(fetchExpenses())
 })

export default connect(mapStateToProps, mapDispatchToProps)(BudgetContainer);
