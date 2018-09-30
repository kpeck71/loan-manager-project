import React, { Component } from 'react';
import Goal from './Goal';
import CardCreator from '../CardCreator'

const Goals = props => {

const renderGoals = props.goals.map((goal) => {
  return <CardCreator goal={goal} cardDetails="goalCard" completeGoal={true} deleteCard={true} goalId={goal.id} handleComplete={props.handleComplete} deleteGoal={props.deleteGoal} />
  });

    return (
      <div>
        <h3>Current Goals:</h3>
        <div className="container-fluid">
          <div className="row">
            {renderGoals}
          </div>
        </div>
      </div>
     )
  }
export default Goals;
