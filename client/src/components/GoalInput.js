import React, { Component } from 'react';

export default class GoalInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      total: '',
      category:'',
      isHidden: false
      }
    }

    handleGoalSubmit = event => {
      event.preventDefault();
      this.props.createGoal({ title: this.state.title, total: this.state.total, category: this.state.category })
      this.setState({
        title: '',
        total: '',
        category: '',
        isHidden: true
      })
    }

    handleChange = event => {
      //arrow functions bind the this value to the function
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value
      })
    }


  render() {
    return (
    <div className='col-md-3 border rounded p-2 m-2 mx-5 border-warning'>
      <h3>New Goal</h3>
      <form onSubmit={this.handleGoalSubmit}>
        <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}/>
        <input type="number" placeholder="Total Cost" name="total" value={this.state.total} onChange={this.handleChange}/>
        <select name="category" value={this.state.category} onChange={this.handleChange}>
          <option value ="fun">Fun</option>
          <option value="essentials">Essentials</option>
          <option value="credit">Credit</option>
          <option value="miscellaneous">Miscellaneous</option>
        </select>
        <input type="submit" />
      </form>
    </div>
    )
  }
}
