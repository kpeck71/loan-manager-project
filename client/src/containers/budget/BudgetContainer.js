import React, { Component } from 'react';
import { connect } from 'react-redux'
import BudgetInput from '../../components/budget/BudgetInput'


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

    handleSubmit(event) {
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

    handleChange = event => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      console.log(target)
      this.setState({
        [name]: value
      })
    }

  render() {
    return (

      <div>

        Here is how much money you have:

        <div className="BudgetInput">
          <p>Budget to go here</p>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <input type="text" name="income" value={this.props.income } placeholder="Monthly Income" onChange={this.props.handleChange} />
            <input type="text" name="housing_cost" value={this.props.housing_cost } placeholder="Housing Costs" onChange={this.props.handleChange} />
            <input type="text" name="food" value={this.props.food } placeholder="Food" onChange={this.props.handleChange} />
            <input type="text" name="credit_cards" value={this.props.credit_cards } placeholder="Credit Cards" onChange={this.props.handleChange} />
            <input type="text" name="car_loan" value={this.props.car_loan } placeholder="Car Loans" onChange={this.props.handleChange} />
            <input type="text" name="personal_loan" value={this.props.personal_loan } placeholder="Personal Loans" onChange={this.props.handleChange} />
            <input type="text" name="savings" value={this.props.savings } placeholder="Savings" onChange={this.props.handleChange} />
            <input type="text" name="miscellaneous" value={this.props.miscellaneous } placeholder="Miscellaneous" onChange={this.props.handleChange} />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBudget: budget => dispatch({ type: 'ADD_BUDGET', budget })
})


export default connect(null, mapDispatchToProps)(BudgetContainer);
