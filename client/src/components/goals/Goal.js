import React, { Component } from 'react';

class Goal extends Component {

  render() {
    const { goal } = this.props;
      return (
        <div key={goal.id} className="col-md-3 border border-primary rounded m-2 p-1 mx-auto">
          <h3>{goal.title}</h3>
          <p>Total: {goal.total}</p>
          <p>Amount paid: {goal.amount_paid}</p>
          <p>Amount left to reach goal: {goal.amount_left}</p>
          <p>Category: {goal.category}</p>
          <form onSubmit={(event) => this.handleSubmit(event)} >
            <input type="text" placeholder="Payment" value={this.props.payment} onChange={(event) => this.handleChange(event)} />
            <input type="submit" />
          </form>
        </div>
      )

  }
};
  //to add: different styling for paid vs not paid; different styling based on how amount_left
  //border-primary - New
  //border-success - paid


export default Goal;
