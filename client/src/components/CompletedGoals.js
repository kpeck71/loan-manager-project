import React from 'react';
import Goal from '../containers/Goal'

const CompletedGoals = props => {

  const completedGoals = props.goals.filter((goal) => goal.paid === true)
  //App hasn't passed goals on first load unless goalContainer loaded already

  const renderGoals =
    completedGoals.map((goal) => {
      return <Goal goal={goal} goalDetails="completedGoal" />
    });

  return (
    <div>
    <div className="row">
      {renderGoals}
    </div>

    </div>
  )
}

export default CompletedGoals
