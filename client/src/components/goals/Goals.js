import React, { Component } from 'react';
import Goal from './Goal';

class Goals extends Component {


render() {
const renderGoals = this.props.goals.map((goal) => {
  return <Goal goal={goal} handlePayment={this.props.handlePayment} />
  });

    return (
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
