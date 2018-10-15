import React from 'react';
import Goal from '../containers/Goal'

class CompletedGoals extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      goals: props.goals.filter((goal) => goal.paid === true)
    }
  }

  onClick = () => {
    console.log(this.state.goals)
    const sortedGoals = this.state.goals.sort(function(a,b) {
      return b.counter - a.counter
    })
    console.log(this.state.goals)
    this.setState({
      goals: sortedGoals
    })

  }


render() {

  return (
    <div>

    <div className="row">
      {this.state.goals.map((goal) => <Goal goal={goal} />) }
    </div>
    <button onClick={this.onClick}>Sort me</button>

    </div>
  )}
}

export default CompletedGoals
