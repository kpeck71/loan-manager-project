import React, { Component } from 'react';
import Goal from './Goal';

const Goals = props => {

function renderGoals(props) {
  return props.goals.map((goal) =>
 <Goal goal={goal} handlePayment={props.handlePayment}/> )
};
    return(
      <div>
        <h3>Current Goals:</h3>
        <div className="container-fluid">
          <div className="row">
            {/* {renderGoals(props)} */}
          </div>
        </div>
      </div>
     )
  }



export default Goals;
