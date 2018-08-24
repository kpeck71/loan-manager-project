import React, { Component } from 'react';

class GoalInput extends Component {

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="GoalInput">
        <p>Goals to go here</p>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" placeholder="Goal Title"/>
          <input type="text" placeholder="Goal Cost"/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default GoalInput;
