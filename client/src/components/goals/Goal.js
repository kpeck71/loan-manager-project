import React, { Component } from 'react';
import Goals from './Goals';

class Goal extends Component {

  state = {
    payment: '',
  }
  //
  // handleOnChange(event) {
  //   this.setState({
  //     payment: event.target.value
  //   });
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addPayment({payment: this.state.payment, goalId: this.props.goalId})
    this.setState({
      state: {
        payment: event.target.value
      }
    })
  }

  render() {
    const goals = this.props.goals.map((goal) => {
      return (
        <div key={goal.id} className="col-md-3 border border-primary rounded m-2 p-1 mx-auto">
          <h3>{goal.title}</h3>
          <p>Total: {goal.total}</p>
          <p>Amount paid: {goal.amount_paid}</p>
          <p>Amount left to reach goal: {goal.amount_left}</p>
          <p>Category: {goal.category}</p>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <input type="text" placeholder="Payment" value={this.state.payment}/>
            <input type="submit" />
          </form>
        </div>
      )})

    return (
      <div className="container-fluid">
        <div className="row">
        {goals}
        </div>
      </div>
    )
  }
};
  //to add: different styling for paid vs not paid; different styling based on how amount_left
  //border-primary - New
  //border-success - paid



export default Goal;
