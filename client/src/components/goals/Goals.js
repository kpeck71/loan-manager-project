import React, { Component } from 'react';
import Goal from './Goal';

class Goals extends Component {

  constructor(props) {
    super(props);
    this.state = {
      goals: [],
    };
  }

  componentDidMount(){
    fetch('/api/v1/goals.json')
      .then((response) => {return response.json()})
      // .then((data => console.log(data)))
      .then((data) => {this.setState({ goals: data }) });
  }


  render(){
    const renderGoals = this.state.goals.map((goal) => {
        return <Goal goal={goal} />
      })

    return(
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
}

export default Goals;
