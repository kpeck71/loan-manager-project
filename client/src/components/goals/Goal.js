import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGoal, goalPaid } from '../../actions/goals'
import '../../index.css'

class Goal extends Component {
  state = {
    paidClass: '',
    added: false
  }

  paidClass() {
    if (this.props.goal.paid === false) {
      return 'GoalClass'
    } else { return 'PaidClass'}
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
//camelCase instead of strings for JSX


    let borderColor = 'info';
    let backgroundColor = 'lightgrey'
    if (this.props.goal.paid === true) {
      borderColor = 'success'
      backgroundColor='pink'
    };

    function Card({style, className='', ...rest}) {
      return (
        <div
          className={`col-md-3 border border-${className} rounded m-2 p-1 mx-5`}
          style={{paddingTop: 10, ...style}}
          {...rest}
          />
      )
    }

    const { goal } = this.props;

      return (
        <Card key={goal.id} className={borderColor} style={{ backgroundColor: {backgroundColor} }} >
          <h4>{goal.title}</h4>
          <p>Total: {goal.total}</p>
          <p>Amount paid: {goal.amount_paid}</p>
          <p>Amount left to reach goal: {goal.amount_left}</p>
          <p>Category: {goal.category}</p>
          <p><a id="delete" href="#" onClick={() => this.props.deleteGoal(goal.id)} >Delete</a></p>
          <form>
            Complete? <input name="paid" type="checkbox" value={ !goal.paid } defaultChecked = {goal.paid === true } onChange={this.handleChange} />
          </form>
          <a href="#" onClick={() => this.handleAdd(goal)}>Add to your goals?</a>
        </Card>

      )

  }
};

export default connect(null, { createGoal, goalPaid })(Goal);
