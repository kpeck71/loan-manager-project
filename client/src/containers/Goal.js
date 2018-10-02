import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGoal, goalPaid, updateGoal, deleteGoal } from '../actions/goals'

class Goal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: props.goal.counter || 0,
      paid: props.goal.paid
    }
  }

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name
    this.setState(prevState => Object.assign({}, ...prevState, { [`${name}`]: value }));
  }

  onCounterClick = event => {
    this.setState({
      counter: this.state.counter += 1
    })
    let goalId = event.target.value
    let counterNum = this.state.counter
    this.props.updateGoal({ id: goalId, counter: counterNum})
  }

    render() {
      const renderButton = <button onClick={this.onCounterClick} value={this.props.goal.id}>++</button>

      return (
        <div className="col-md-3 border rounded p-2 m-2 mx-5 border-info">
          <h4>{this.props.goal.title}</h4>
          <p>Total: {this.props.goal.total}</p>
          <p>Category: {this.props.goal.category}</p>
          <p>Counter: {this.state.counter}</p>
          {(this.props.goal.paid === true) && <button onClick={this.onCounterClick} value={this.props.goal.id}>++</button> }
          <button onClick={()=>this.props.deleteGoal(this.props.goal)}>Delete</button>
          <button onClick={()=>this.props.goalPaid(this.props.goal, !this.props.goal.paid)}>Completed Toggle</button>
        </div>
      )
    }
}

export default connect(null, { createGoal, goalPaid, updateGoal, deleteGoal })(Goal);
