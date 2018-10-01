import React, { Component } from 'react';

class BudgetInput extends Component {

  state = {
    income: '',
    isHidden: true
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  } //combine in parent and pass down to here

  handleChange = event => {
    this.setState({
      income: event.target.value
    })
  }

  handleSubmit = event =>  {
    event.preventDefault();
    this.props.updateBudget({income: this.state.income})
    this.setState({
      isHidden: true
    });
  }

  budgetForm() {
    return (
      <div className="budget-view col-md-5 border border-primary rounded m-2 p-1 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <input type="number" name="income" placeholder="Monthly Income"  value={this.state.income} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    )
  }

  budgetView() {
    if (this.props.income <= 0) {
      return (
        <div>First things first - how much do you have to spend each month?
          {this.budgetForm()}
        </div>
      )
    } else {
      return (
        <div>
          Income: {this.props.income} <a href="#" onClick={this.toggleHidden.bind(this)}>Edit?</a>
          { !this.state.isHidden && this.budgetForm() }
        </div>
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.budgetView()}
      </React.Fragment>
    );
  }
}
export default BudgetInput;
