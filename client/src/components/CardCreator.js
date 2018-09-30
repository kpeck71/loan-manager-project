import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGoal, goalPaid } from '../actions/goals'

const CardContainer = props => {

  let borderColor = 'info';
  let className=`col-md-3 border border-${borderColor} rounded p-2 m-2 mx-5`
  // let backgroundColor = 'lightgrey'


  function renderCard() {
    const goal = props.goal
    const expense = props.expense

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

    if (props.cardDetails === 'newGoal') {
      return (
      <div>
        <h3>New Goal</h3>
        <form onSubmit={props.handleGoalSubmit}>
          <input type="text" placeholder="Title" name="title" value={props.title} onChange={props.handleChange}/>
          <input type="number" placeholder="Total Cost" name="total" value={props.total} onChange={props.handleChange}/>
          <input type="text" placeholder="Category" name="category" value={props.category} onChange={props.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    )}

    if (props.cardDetails === 'completedGoal') {
      return (
        <div>
          <h4>{goal.title}</h4>
          <p>Total: {goal.total}</p>
          <p>Category: {goal.category}</p>
          <p>Date paid: TBD</p>
          <a href="#" onClick={() => goalPaid(goal.id, false)}>Add to active goals?</a>
       </div>
      )
    }

    if (props.cardDetails === 'goalIdea') {
      return (
        <div>
          <h4>{goal.title}</h4>
          <p>Total: {goal.total}</p>
          <p>Category: {goal.category}</p>
          <a href="#" onClick={() => createGoal(goal)}>Add to your goals?</a>
        </div>
      )
    }

    if (props.cardDetails === 'expenseCard') {
      return (
        <div>
          <h2><span class="badge badge-secondary">{expense.name}</span></h2>
          <p> Amount: {expense.amount} | Category: {expense.category} </p>
          <p><a href="#" id="delete" onClick={() => this.props.deleteExpense(expense)}>Delete</a></p>
        </div>
      )
    }

    if (props.cardDetails === 'newExpense') {
      return (
        <form onSubmit={props.handleExpenseSubmit}>
          <input type="text" name="name" value={props.name} placeholder="Name" onChange={props.handleChange} />
          <input type="number" name="amount" value={props.amount} placeholder="Amount" onChange={props.handleChange} />
          <p></p>
          <label>Category:</label>
          <select name="category" value={props.value} onChange={props.handleChange}>
            <option value="fun">Fun</option>
            <option value="essentials">Essentials</option>
            <option value="credit">Credit</option>
            <option value="miscellaneous">Miscellaneous</option>
          </select>

          <input type="submit" />
        </form>
      )
    }

  }

  return (
    <div className={className}>
      {renderCard()}
    </div>
    )
}

export default connect(null, { createGoal, goalPaid })(CardContainer);
