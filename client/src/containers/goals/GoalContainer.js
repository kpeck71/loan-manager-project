import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoalInput from '../../components/goals/GoalInput';
import Goals from '../../components/goals/Goals';
import { fetchGoals, addGoals, addPayment } from '../../actions/goals'

class GoalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      total: 0,
      category: '',
      payment: ''
    };
  }

  handleChange = event => {
    //arrow functions bind the this value to the function
    event.persist()
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(target)
    this.setState({
      [name]: value
    })
  }

  handleGoalSubmit = event => {
    // event.preventDefault()
    // fetch('/api/v1/goals.json', {
    //   method: "POST",
    //   headers: {
    //     'Content-Type: application/json'
    //   },
    //     body: JSON.stringify(this.state)
    //   })
    // }
    console.log('submitted ')
    event.preventDefault();
    this.props.addGoal({title: this.state.title, total: this.state.total, category: this.state.category});
    this.setState({
      title: '', total: 0, category: ''
    })
  }

  handlePayment = event => {
    event.preventDefault();
    console.log('payment submitted ')
    this.props.addPayment({payment: this.state.payment, goalId: this.props.goal.id, goalTotal: this.props.goal.total})
    this.setState({
      payment: 0
    })
  }


  render() {
      return (
        <div>
          <GoalInput addGoal={this.props.addGoal} handleChange={this.handleChange} handleGoalSubmit={this.handleGoalSubmit}/>
          <Goals goals={this.props.goals} addPayment={this.props.addPayment} handleChange={this.handleChange} handlePayment={this.handlePayment}/>
        </div>
      )
    }
}

const mapStateToProps = state =>  {console.log('state', state.GoalReducer.goals); return {goals: state.GoalReducer.goals} }

const mapDispatchToProps = dispatch => ({
  fetchGoals: goals => dispatch({ type: 'FETCH_GOALS', fetchGoals }),
  addGoal: goal => dispatch({ type: 'ADD_GOAL', goal }),
  addPayment: payment => dispatch({ type: 'ADD_PAYMENT', payment })
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalContainer);
