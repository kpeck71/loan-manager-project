import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardCreator from '../components/CardCreator';
import { fetchGoals, createGoal, deleteGoal } from '../actions/goals'

class GoalContainer extends Component {

  state = {
    isHidden: true,
    title: '',
    total: '',
    category: ''
  }

  componentDidMount() {
    this.props.fetchGoals()
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  renderGoals() {
    const activeGoals = this.props.goals.filter((goal) => goal.paid === false)
    return activeGoals.map((goal) => {
      return <CardCreator goal={goal} cardDetails="goalCard" goalId={goal.id} handleComplete={this.props.handleComplete} deleteGoal={this.props.deleteGoal} />
    });
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
    this.props.createGoal({ title: this.state.title, total: this.state.total, category: this.state.category })
    this.setState({
      title: '',
      total: '',
      category: '',
      isHidden: true
    })

  }

  render() {

    return (
      <div>
        <h3>Current Goals:</h3>
        <div className="container-fluid">
        <button class="btn btn-outline-info" onClick={this.toggleHidden.bind(this)} type="submit">New Goal</button>
          <div className="row">
            {this.renderGoals()}
            {!this.state.isHidden && <CardCreator cardDetails="newGoal" handleChange={this.handleChange.bind(this)} handleGoalSubmit={this.handleGoalSubmit} deleteGoal={this.deleteGoal}/>}
          </div>

        </div>

      </div>
     )
   }
}

const mapStateToProps = state => {
  return { goals: state.goals }
}

export default connect(null, { fetchGoals, createGoal, deleteGoal })(GoalContainer)
