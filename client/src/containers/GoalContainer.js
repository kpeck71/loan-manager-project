import React, { Component } from 'react';
import CardCreator from './CardCreator'

class GoalContainer extends Component {

  renderGoals() {
    return this.props.goals.map((goal) => {
      return <CardCreator goal={goal} cardDetails="goalCard" completeGoal={true} deleteCard={true} goalId={goal.id} handleComplete={this.props.handleComplete} deleteGoal={this.props.deleteGoal} />
    });
  }

  render() {

    return (
      <div>
        <h3>Current Goals:</h3>
        <div className="container-fluid">
          <div className="row">
            {this.renderGoals()}
          </div>
        </div>
      </div>
     )
   }
}

export default GoalContainer
