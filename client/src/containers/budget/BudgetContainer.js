import React, { Component } from 'react';
import { connect } from 'react-redux'
import BudgetInput from '../../components/budget/BudgetInput'
import BudgetView from '../../components/budget/BudgetView'

class BudgetContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      income: '',
      expense_name: '',
      expense_amount: '',
      expense_category: ''
    }
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event =>  {
    event.preventDefault();
    console.log('submit budget')
    this.props.addBudget({income: this.state.income});
    this.setState({
      income: ''
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

  // renderBudget = props => {
  //   this.props.budget.map((budget) => {
  //   const SPENDING = budget.housing_cost + budget.food + budget.credit_cards + budget.car_loan + budget.personal_loan + budget.savings + budget.miscellaneous
  //    return (budget.income - SPENDING )
  //   })
  // }

 //  showBudget = props => {
 //   if (this.props.budget > 0) {
 //     return <BudgetView renderBudget={this.renderBudget} budget={this.props.budget} />;
 //   }
 //   return <BudgetInput handleChange={this.handleChange} handleSubmit={this.handleSubmit} addBudget={this.props.addBudget} />;
 // }

  render() {

    return (
      <div>
        <BudgetInput handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleExpenseSubmit={this.handleExpenseSubmit} />
        <p>You have this much to work with: {this.props.income}</p>
      </div>
    );
  }
}

const mapStateToProps = state => { console.log('state.budget is', state.budget); return { budget: state.budget } }

const mapDispatchToProps = dispatch => ({
  addBudget: newBudget => dispatch({ type: 'ADD_BUDGET', newBudget }),
  addExpense: newExpense => dispatch({ type: 'ADD_EXPENSE', newExpense })
 })

export default connect(mapStateToProps, mapDispatchToProps)(BudgetContainer);
