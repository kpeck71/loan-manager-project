import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGoal, goalPaid, updateGoal } from '../actions/goals'

class Goal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: props.goal.counter || 0,
    }
  }

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name
    this.setState(prevState => Object.assign({}, ...prevState, { [`${name}`]: value }));
  }

  onCounterClick = event => {
    let goalId = event.target.value
    let counterNum = this.state.counter
    this.props.updateGoal({ id: goalId, counter: counterNum})
    this.setState({
      counter: this.state.counter += 1
    })
  }


  renderGoal() {
    return (
      <div>
        <h4>{this.props.goal.title}</h4>
        <p>Total: {this.props.goal.total}</p>
        <p>Category: {this.props.goal.category}</p>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.onClick} value={this.props.goal.counter}>++</button>
        <a href="#" onClick={() => goalPaid(this.props.goal.id, false)}>Add to active goals?</a>
      </div>
      )
    }

    render() {
      return (
        <div className="col-md-3 border rounded p-2 m-2 mx-5 border-info">
          <h4>{this.props.goal.title}</h4>
          <p>Total: {this.props.goal.total}</p>
          <p>Category: {this.props.goal.category}</p>
          <p>Counter: {this.props.goal.counter}</p>
          <button onClick={this.onCounterClick} value={this.props.goal.id}>++</button>
        </div>
      )
    }
}

export default connect(null, { createGoal, goalPaid, updateGoal })(Goal);
