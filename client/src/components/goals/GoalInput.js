import React, { Component } from 'react';

class GoalInput extends Component {

  render() {
    return (
      <div className="GoalInput">
        <p>Add a New Goal:</p>
        <form onSubmit={this.props.handleGoalSubmit}>
          <input type="text" placeholder="Title" name="title" value={this.props.title} onChange={this.props.handleChange}/>
          <input type="number" placeholder="Total Cost" name="total" value={this.props.total} onChange={this.props.handleChange}/>
          <input type="text" placeholder="Category" name="category" value={this.props.category} onChange={this.props.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}


export default GoalInput;
