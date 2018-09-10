import React, { Component } from 'react';

class BudgetInput extends Component {

  state = {
    income: ''
  }

  handleSubmit = event =>  {
    event.preventDefault();
    console.log('submit budget')
    this.props.createBudget({income: this.state.income});
    this.setState({
      income: ''
    })
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(name)
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-md-5 border border-primary rounded m-2 p-1 mx-auto">
          <p>First things first - how much do you have to spend each month?</p>
          <form onSubmit={this.handleSubmit}>
            <input type="number" name="income"placeholder="Monthly Income"  value={this.state.income} onChange={this.handleChange}/>
            <input type="submit" />
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default BudgetInput;
