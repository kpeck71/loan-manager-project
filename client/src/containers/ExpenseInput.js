import React, { Component } from 'react';

class ExpenseInput extends Component {
  render() {
    return(
      <div className="col-md-3 border rounded p-2 m-2 mx-5 border-warning">
        <form onSubmit={this.props.handleExpenseSubmit} data-testid="expense-form">
          <input type="text" name="name" value={this.props.name} placeholder="Name" onChange={this.props.handleChange} />
          <input type="number" name="amount" value={this.props.amount} placeholder="Amount" onChange={this.props.handleChange} />
          <p></p>
          <label>Category:</label>
          <select name="category" value={this.props.value} onChange={this.props.handleChange}>
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

export default ExpenseInput
