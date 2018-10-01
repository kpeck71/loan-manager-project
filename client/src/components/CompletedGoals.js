import React from 'react';
import CardCreator from './CardCreator'

const CompletedGoals = props  => {

  const completedGoals = props.goals.filter((goal) => goal.paid === true)

  const renderGoals =
    completedGoals.map((goal) => {
      return <CardCreator goal={goal} cardDetails="completedGoal" />
    });

  return (
    <div className="row">
      {renderGoals}
    </div>
  )
}

export default CompletedGoals
