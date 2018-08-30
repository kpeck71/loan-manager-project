import React, { Component } from 'react';

class BudgetInput extends Component {

  render() {
    return (
      <div className="BudgetInput">
        <form onSubmit={this.props.handleSubmit}>
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
    );
  }
}

export default BudgetInput;
