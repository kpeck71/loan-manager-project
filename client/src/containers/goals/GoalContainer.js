import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoalInput from '../../components/goals/GoalInput';
import Goals from '../../components/goals/Goals';
import CardCreator from '../../components/CardCreator';
import { addGoal, addPayment, fetchGoals, deleteGoal, createGoal, goalPaid } from '../../actions/goals'


class GoalContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true,
      title: '',
      total: '',
      category: '',
      paid: '',
    }
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleChange = event => {
    //arrow functions bind the this value to the function
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  handleGoalSubmit = event => {
    event.preventDefault();
    const newGoal = { title: this.state.title, total: this.state.total, category: this.state.category }
    this.props.createGoal(newGoal)
    this.setState({
      title: '',
      total: '',
      category: '',
    })
  }

  componentDidMount(){
    this.props.fetchGoals()
  }

  handleComplete = event =>{
    console.log('you\'re back in goal container')
    this.props.goalPaid()
  }


  render() {

      return (
        <div>
          <Goals goals={this.props.goals.goals} handleComplete={this.handleComplete} deleteGoal={this.props.deleteGoal}/>
            {!this.state.isHidden && <CardCreator handleComplete={this.handleComplete} createGoal={this.props.createGoal} handleGoalSubmit={this.handleGoalSubmit} handleChange={this.handleChange} cardDetails="newGoal" />}
            <button class="btn btn-outline-success" onClick={this.toggleHidden.bind(this)} type="submit">+New Goal</button>
        </div>
      )
    }
}

const mapStateToProps = state =>  { return {goals: state.goals} }


export default connect(mapStateToProps, { addGoal, addPayment, fetchGoals, deleteGoal, createGoal })(GoalContainer);
