import React, { Component } from 'react';

class Goals extends Component {

  constructor(props) {
    super(props);
    this.state = {
      goals: []
    };
  }

  componentDidMount(){
    fetch('/api/v1/goals.json')
      .then((response) => {return response.json()})
      // .then((data => console.log(data)))
      .then((data) => {this.setState({ goals: data }) });
  }

  render(){

    const goals = this.state.goals.map((goal) => {
      return(

        <div key={goal.id} className="col-md-3 border border-primary rounded m-2 p-1 mx-auto">
          <h3>{goal.title}</h3>
          <p>Total: {goal.total}</p>
          <p>Amount paid: {goal.amount_paid}</p>
          <p>Amount left to reach goal: {goal.amount_left}</p>
          <p>Category: {goal.category}</p>
        </div>

        //to add: different styling for paid vs not paid; different styling based on how amount_left
        //border-primary - New
        //border-success - paid 
      )
    })
    return(
      <div>
        <div className="container-fluid">
          <div className="row">
            {goals}
          </div>
        </div>
      </div>
     )
   }
}

export default Goals;
