import React, { Component } from 'react';

class GoalInput extends Component {

  state = {
    title: '',
    total: '',
    category: '',
  };

  handleChange = event => {
    //arrow functions bind the this value to the function
    event.persist()
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(target)
    this.setState({
      [name]: value
    })
  }

  handleGoalSubmit(event) {
    event.preventDefault();
    const newGoal = { title: this.state.title, total: this.state.total, category: this.state.category }
    console.log('lets try this again', newGoal)
    this.props.createGoal(newGoal)
  }

  render() {
    return (
      <div className="GoalInput">
        <p>Add a New Goal:</p>
        <form onSubmit={(event) =>this.handleGoalSubmit(event)}>
          <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}/>
          <input type="number" placeholder="Total Cost" name="total" value={this.state.total} onChange={this.handleChange}/>
          <input type="text" placeholder="Category" name="category" value={this.state.category} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    )
  }

}



export default GoalInput;
