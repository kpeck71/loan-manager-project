import React, { Component } from 'react';
import Goals from './Goals';
import { addPayment } from '../actions/goals';
import { connect } from 'react-redux';

class Goal extends Component {


  state = {
    payment: '',
  }

  handleChange = (event) => {
    this.setState({
      payment: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("paid!")
    this.props.addPayment({payment: this.state.payment, goalId: this.props.goalId})
    this.setState({
      state: {
        payment: ''
      }
    })
  }

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
            <input type="text" placeholder="Payment" value={this.state.payment} onChange={(event) => this.handleChange(event)} />
            <input type="submit" />
          </form>
        </div>
      )

  }
};
  //to add: different styling for paid vs not paid; different styling based on how amount_left
  //border-primary - New
  //border-success - paid



export default connect(null, { addPayment })(Goal);
