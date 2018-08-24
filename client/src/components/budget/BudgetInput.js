import React, { Component } from 'react';

class BudgetInput extends Component {

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="BudgetInput">
        <p>Goals to go here</p>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" placeholder="Monthly Income"/>
          <input type="text" placeholder="Housing Costs"/>
          <input type="text" placeholder="Food"/>
          <input type="text" placeholder="Credit Cards"/>
          <input type="text" placeholder="Car Loans"/>
          <input type="text" placeholder="Personal Loans"/>
          <input type="text" placeholder="Savings"/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BudgetInput;
