import React from 'react';

class ExpenseInput extends React.Component {

  state = {
    name: '',
    amount: '',
    category: ''
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  handleExpenseSubmit = e => {
    e.preventDefault();
    this.props.addExpense({name: this.state.name, amount: this.state.amount, category: this.state.category})
    this.setState({
      name: '',
      amount: '',
      category: ''
    })
  }

render() {
  return (
    <div className="col-md-3 border border-primary rounded m-2 p-1 mx-auto">
      <label>Add a New Expense:</label>
      <form onSubmit={this.props.handleExpenseSubmit}>
        <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.handleChange} />
        <input type="number" name="amount" value={this.state.amount} placeholder="Total" onChange={this.handleChange} />
        <input type="text" name="category" value={this.state.category} placeholder="Category" onChange={this.handleChange} />
        <input type="submit" />
      </form>
    </div>
    )
  }
}
export default ExpenseInput;
