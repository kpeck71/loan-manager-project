import React, { Component } from 'react';
import { connect } from 'react-redux'
import BudgetInput from '../../components/budget/BudgetInput'
import BudgetView from '../../components/budget/BudgetView'
import ExpenseInput from '../../components/budget/ExpenseInput'
import ExpensesView from '../../components/budget/ExpensesView'

class BudgetContainer extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     income: '',
  //     expense_name: '',
  //     expense_amount: '',
  //     expense_category: ''
  //   }
  // }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(name)
    this.setState({
      [name]: value
    })
  }


  handleExpenseSubmit = e => {
    e.preventDefault();
    this.props.addExpense({expense_name: this.state.expense_name, expense_amount: this.state.expense_amount, expense_category: this.state.expense_category})
    this.setState({
      expense_name: '',
      expense_amount: '',
      expense_category: ''
    })
  }


 //  showBudget = props => {
 //   if (this.props.budget > 0) {
 //     return <BudgetView renderBudget={this.renderBudget} budget={this.props.budget} />;
 //   }
 //   return <BudgetInput handleChange={this.handleChange} handleSubmit={this.handleSubmit} addBudget={this.props.addBudget} />;
 // }

  render() {
    let totals = 0;
    const SPENDING = this.props.expenses.map((expense) => totals += expense.expense_amount)
    const renderBudget = (this.props.income - SPENDING)

    return (
      <div>
        <BudgetInput handleChange={this.handleChange} addBudget={this.props.addBudget} />
        <p>You have this much to work with: {renderBudget}</p>
        <ExpenseInput onChange={this.handleChange} handleExpenseSubmit={this.handleExpenseSubmit}/>
        <ExpensesView expenses={this.props.expenses} />
      </div>
    );
  }
}

const mapStateToProps = state => { console.log('state is', state); return { income: state.budget.income, expenses: state.budget.expenses } }

const mapDispatchToProps = dispatch => ({
  addBudget: newBudget => dispatch({ type: 'ADD_BUDGET', newBudget }),
  addExpense: newExpense => dispatch({ type: 'ADD_EXPENSE', newExpense })
 })

export default connect(mapStateToProps, mapDispatchToProps)(BudgetContainer);
