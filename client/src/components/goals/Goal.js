import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGoal, goalPaid } from '../../actions/goals'

class Goal extends Component {
  state = {
    paidClass: '',
    added: false
  }

  paidClass() {
    if (this.props.goal.paid === false) {
      return 'col-md-3 border border-primary rounded m-2 p-1 mx-5'
    } else { return 'col-md-3 border border-success rounded m-2 p-1 mx-5'}
  }

  handleChange = event =>{
    this.props.goalPaid(this.props.goal.id, event.target.value)
    this.paidClass()
  }

  handleAdd = goal => {
    console.log(goal)
    this.props.createGoal(goal);
  }

  render() {
    const { goal } = this.props;
      return (
        <div key={goal.id} className={this.paidClass()}>
          <h3>{goal.title}</h3>
          <p>Total: {goal.total}</p>
          <p>Amount paid: {goal.amount_paid}</p>
          <p>Amount left to reach goal: {goal.amount_left}</p>
          <p>Category: {goal.category}</p>
          <p><a href="#" onClick={() => this.props.deleteGoal(goal.id)} >Delete</a></p>
          <form>
            Complete? <input name="paid" type="checkbox" value={ !goal.paid } defaultChecked = {goal.paid === true } onChange={this.handleChange} />
          </form>
          <a href="#" onClick={() => this.handleAdd(goal)}>Add to your goals?</a>
        </div>
      )

  }
};

export default connect(null, { createGoal, goalPaid })(Goal);
