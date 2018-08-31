import React, { Component } from 'react';
import { connect } from 'react-redux'
import BudgetInput from '../../components/budget/BudgetInput'
import BudgetView from '../../components/budget/BudgetView'

class BudgetContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      income: '',
      housing_cost: '',
      food: '',
      credit_cards: '',
      car_loan: '',
      personal_loan: '',
      savings: '',
      miscellaneous: ''
    }
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(target)
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event =>  {
    event.preventDefault();
    console.log('submit budget')

    this.props.addBudget({income: this.state.income, housing_cost: this.state.housing_cost, food: this.state.food, credit_cards: this.state.credit_cards, car_loan: this.state.car_loan, personal_loan: this.state.personal_loan, savings: this.state.savings, miscellaneous: this.state.miscellaneous });
    this.setState({
      income: '',
      housing_cost: '',
      food: '',
      credit_cards: '',
      car_loan: '',
      personal_loan: '',
      savings: '',
      miscellaneous: ''
    })
  }

  renderBudget = props => {
    this.props.budget.map((budget) => {
    const SPENDING = budget.housing_cost + budget.food + budget.credit_cards + budget.car_loan + budget.personal_loan + budget.savings + budget.miscellaneous
     return (budget.income - SPENDING )
    })
  }

  showBudget = props => {
   if (this.props.budget > 0) {
     return <BudgetView renderBudget={this.renderBudget} budget={this.props.budget} />;
   }
   return <BudgetInput handleChange={this.handleChange} handleSubmit={this.handleSubmit} addBudget={this.props.addBudget} />;
 }

  render() {

    return (
      <div>
        {this.showBudget()}
      </div>
    );
  }
}

const mapStateToProps = state => { return { budget: state.budget }}

const mapDispatchToProps = dispatch => ({ addBudget: newBudget => dispatch({ type: 'ADD_BUDGET', newBudget }) })

export default connect(mapStateToProps, mapDispatchToProps)(BudgetContainer);
