import React from 'react';
import Goal from '../../components/goals/Goal';

const CompletedGoals = props => {
  const completedGoals =  props.goals.goals.filter((goal)=> goal.paid === true)
  const renderGoals = completedGoals.map((goal) => {
    return <Goal goal={goal} />
  })


    return (
      <div className="CompletedGoals">
        <h2>Here is where completed goals will go:</h2>
        {renderGoals}
      </div>
)
  }

export default CompletedGoals
