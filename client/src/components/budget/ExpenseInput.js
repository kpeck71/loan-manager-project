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
    this.props.createExpense({name: this.state.name, amount: this.state.amount, category: this.state.category})
    this.setState({
      name: '',
      amount: '',
      category: ''
    })
  }

render() {
  return (
    <div className="col-md-3 border border-success rounded m-2 p-1 mx-5">
      <label>Add a New Expense:</label>
      <form onSubmit={this.handleExpenseSubmit}>
        <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.handleChange} />
        <input type="number" name="amount" value={this.state.amount} placeholder="Total" onChange={this.handleChange} />
        <br></br>
        <select name="category" value={this.state.value} onChange={this.handleChange} placeholder="Category">
          <option value="fun">Fun</option>
          <option value="essentials">Essentials</option>
          <option value="credit">Credit</option>
          <option value="miscellaneous">Miscellaneous</option>
        </select>

        <input type="submit" />
      </form>
    </div>
    )
  }
}
export default ExpenseInput;
