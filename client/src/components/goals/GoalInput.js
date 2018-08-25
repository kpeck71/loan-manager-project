import React, { Component } from 'react';

class GoalInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      total: 0,
      category: '',
    };
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="GoalInput">
        <p>Goals to go here</p>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" placeholder="Title" value={this.state.title}/>
          <input type="text" placeholder="Total Cost" value={this.state.total}/>
          <input type="dropdown" placeholder="Category" value={this.state.category}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default GoalInput;
