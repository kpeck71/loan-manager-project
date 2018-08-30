import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoalInput from '../../components/goals/GoalInput';
import Goals from '../../components/goals/Goals';
import { fetchGoals } from '../../actions/goals'

class GoalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      total: 0,
      category: '',
      payment: 0
    };
  }

  handleChange = event => {
    //arrow functions bind the this value to the function
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(target)
    this.setState({
      [name]: value
    })
  }

  handleGoalSubmit = event => {
    console.log('submitted ')
    event.preventDefault();
    debugger
    this.props.addGoal({title: this.state.title, total: this.state.total, category: this.state.category});
    this.setState({
      title: '', total: 0, category: ''
    })
  }

  handlePayment = event => {
    console.log('payment submitted ')
    event.preventDefault();
    this.props.addPayment({payment: this.state.payment, goalId: this.props.goal.id, goalTotal: this.props.goal.total})
    this.setState({
      payment: 0
    })
  }

  render() {
      return (
        <div>
          <GoalInput addGoal={this.props.addGoal} handleChange={this.handleChange} handleGoalSubmit={this.handleGoalSubmit}/>
          <Goals addPayment={this.props.addPayment} handleChange={this.handleChange} handlePayment={this.handlePayment} goals={this.props.goals} />
        </div>
      )
    }
}

const mapStateToProps = state => { return { goals: state.goals } }

const mapDispatchToProps = dispatch => ({
  fetchGoals: goals => dispatch({ type: 'FETCH_GOALS', fetchGoals }),
  addGoal: goal => dispatch({ type: 'ADD_GOAL', goal }),
  addPayment: payment => dispatch({ type: 'ADD_PAYMENT', payment })
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalContainer);
