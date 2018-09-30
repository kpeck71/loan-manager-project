import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGoal, goalPaid } from '../actions/goals'

const CardContainer = props => {

  let borderColor = 'info';
  let className=`col-md-3 border border-${borderColor} rounded p-2 m-2 mx-5`
  // let backgroundColor = 'lightgrey'

  function renderCard() {
    const goal = props.goal

    if (props.cardDetails === 'goalCard') {
      return (
        <div>
          <h4>{goal.title}</h4>
          <p>Total: {goal.total}</p>
          {/*}<p>Amount paid: {goal.amount_paid}</p>
          <p>Amount left to reach goal: {goal.amount_left}</p>*/}
          <p>Category: {goal.category}</p>
         <div><p><a id="paid" href="#" onClick={() => props.goalPaid(goal.id, true)} >Mark Completed</a></p></div>
         <div><p><a id="delete" href="#" onClick={() => props.deleteGoal(goal.id)} >Delete</a></p></div>
       </div>
      )
    }

    if (props.cardDetails === 'completedGoal') {
      return (
        <div>
          <h4>{goal.title}</h4>
          <p>Total: {goal.total}</p>
          <p>Category: {goal.category}</p>
          <p>Date paid: TBD</p>
          <a href="#" onClick={() => createGoal(goal)}>Add back to your active goals?</a>
       </div>
      )
    }

    if (props.cardDetails === 'goalIdea') {
      return (
        <div>
          <h4>{goal.title}</h4>
          <p>Total: {goal.total}</p>
          {/*}<p>Amount paid: {goal.amount_paid}</p>
          <p>Amount left to reach goal: {goal.amount_left}</p>*/}
          <p>Category: {goal.category}</p>
          <a href="#" onClick={() => createGoal(goal)}>Add to your goals?</a>
        </div>
      )
    }

    if (props.cardDetails === 'newGoal') {
      return (
      <form onSubmit={props.handleGoalSubmit}>
        <input type="text" placeholder="Title" name="title" value={props.title} onChange={props.handleChange}/>
        <input type="number" placeholder="Total Cost" name="total" value={props.total} onChange={props.handleChange}/>
        <input type="text" placeholder="Category" name="category" value={props.category} onChange={props.handleChange}/>
        <input type="submit" />
      </form>
    )}
  }

  return (
    <div className={className}>
      {renderCard()}
    </div>
    )
}

export default connect(null, { createGoal, goalPaid })(CardContainer);
