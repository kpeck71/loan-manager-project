import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGoal, goalPaid, deleteExpense } from '../actions/goals'

class CardContainer extends Component {

  getClasses() {
    let classes="col-md-3 border rounded p-2 m-2 mx-5 border-info"
    // classes += (this.props.goal.paid === true) ? "warning" : "info"
    // why is this.props.goal.paid undefined here?
    return classes
  }

  renderCard() {
    if (this.props.cardDetails === 'goalCard') {
      return (
        <div>
          <h4>{this.props.goal.title}</h4>
          <p>Total: {this.props.goal.total}</p>
          {/*}<p>Amount paid: {this.props.goal.amount_paid}</p>
          <p>Amount left to reach goal: {this.props.goal.amount_left}</p>*/}
          <p>Category: {this.props.goal.category}</p>
         <div><p><a id="paid" href="#" onClick={() => this.props.goalPaid(this.props.goal.id, true)} >Mark Completed</a></p></div>
         <div><p><a id="delete" href="#" onClick={() => this.props.deleteGoal(this.props.goal.id)} >Delete</a></p></div>
         {/*add an edit form for a card here */}
       </div>
      )
    }

    if (this.props.cardDetails === 'newGoal') {
      return (
      <div>
        <h3>New Goal</h3>
        <form onSubmit={this.props.handleGoalSubmit}>
          <input type="text" placeholder="Title" name="title" value={this.props.title} onChange={this.props.handleChange}/>
          <input type="number" placeholder="Total Cost" name="total" value={this.props.total} onChange={this.props.handleChange}/>
{/*}<input type="text" placeholder="Category" name="category" value={this.props.category} onChange={this.props.handleChange}/> */}
          <select name="category" value={this.props.category} onChange={this.props.handleChange}>
            <option value="fun">Fun</option>
            <option value="essentials">Essentials</option>
            <option value="credit">Credit</option>
            <option value="miscellaneous">Miscellaneous</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    )}

    if (this.props.cardDetails === 'completedGoal') {
      return (
        <div>
          <h4>{this.props.goal.title}</h4>
          <p>Total: {this.props.goal.total}</p>
          <p>Category: {this.props.goal.category}</p>
          <a href="#" onClick={() => goalPaid(this.props.goal.id, false)}>Add to active goals?</a>
       </div>
      )
    }

    if (this.props.cardDetails === 'goalIdea') {
      return (
        <div>
          <h4>{this.props.goal.title}</h4>
          <p>Total: {this.props.goal.total}</p>
          <p>Category: {this.props.goal.category}</p>
          <a href="#" onClick={() => this.props.createGoal(this.props.goal)}>Add to your goals?</a>
        </div>
      )
    }

    if (this.props.cardDetails === 'expenseCard') {
      return (
        <div>
          <h2><span class="badge badge-secondary">{this.props.expense.name}</span></h2>
          <p> Amount: {this.props.expense.amount} | Category: {this.props.expense.category} </p>
          <p><a href="#" id="delete" onClick={() => this.props.deleteExpense(this.props.expense)}>Delete</a></p>
        </div>
      )
    }

    if (this.props.cardDetails === 'newExpense') {
      return (
        <form onSubmit={this.props.handleExpenseSubmit}>
          <input type="text" name="name" value={this.props.name} placeholder="Name" onChange={this.props.handleChange} />
          <input type="number" name="amount" value={this.props.amount} placeholder="Amount" onChange={this.props.handleChange} />
          <p></p>
          <label>Category:</label>
          <select name="category" value={this.props.value} onChange={this.props.handleChange}>
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
render() {
  return (
    <div className={this.getClasses()}>
      {this.renderCard()}
    </div>
    )}

}



export default connect(null, { createGoal, goalPaid, deleteExpense })(CardContainer);
