import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGoal, goalPaid, deleteExpense, updateGoal } from '../actions/goals'

class Expense extends Component {

render() {
  return (
    <div className="col-md-3 border rounded p-2 m-2 mx-5 border-success">
      <h2><span class="badge badge-secondary">{this.props.expense.name}</span></h2>
      <p> Amount: {this.props.expense.amount} | Category: {this.props.expense.category} </p>
      <p><a href="#" id="delete" onClick={() => this.props.deleteExpense(this.props.expense)}>Delete</a></p>
    </div>
    )
  }

}



export default connect(null, { createGoal, goalPaid, deleteExpense, updateGoal })(Expense);
