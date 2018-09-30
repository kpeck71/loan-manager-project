import React from 'react';
import CardCreator from '../../components/CardCreator';

const CompletedGoals = props => {
  const completedGoals =  props.goals.goals.filter((goal)=> goal.paid === true)
  const renderGoals = completedGoals.map((goal) => {
    return <CardCreator goal={goal} cardDetails="completedGoal"/>
  })


    return (
      <div className="CompletedGoals">
        <h2>Goals completed:</h2>
        {renderGoals}
      </div>
)
  }

export default CompletedGoals
