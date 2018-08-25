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
    return(
      <div>

        <Goal goals={this.state.goals} />

      </div>
     )
   }
}

export default Goals;
