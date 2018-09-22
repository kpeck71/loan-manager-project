import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoalInput from '../../components/goals/GoalInput';
import Goals from '../../components/goals/Goals';
import { addGoal, addPayment, fetchGoals, deleteGoal, createGoal } from '../../actions/goals'

class GoalContainer extends Component {

  state = {
    isHidden: true
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleChange(event) {
    //arrow functions bind the this value to the function
    event.persist()
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  componentDidMount(){
    this.props.fetchGoals()
    }


  render() {
      return (
        <div>
          <Goals goals={this.props.goals.goals} deleteGoal={this.props.deleteGoal}/>
            {!this.state.isHidden && <GoalInput createGoal={this.props.createGoal} />}
            <button class="btn btn-outline-success" onClick={this.toggleHidden.bind(this)} type="submit">+New Goal</button>

        </div>
      )
    }
}

const mapStateToProps = state =>  { return {goals: state.goals} }


export default connect(mapStateToProps, { addGoal, addPayment, fetchGoals, deleteGoal, createGoal })(GoalContainer);
