import React, { Component } from 'react';
import CardCreator from './CardCreator'

class Status extends Component {

  renderFun() {
    let funTotal = 0
    return funTotal = '$500'
  }
  renderEssentials() {
    return '$1100'
  }
  
  render() {

    return (
      <div>
        <p>Here is where you can improve</p>
        <p>You're spending {this.renderFun()} in the 'fun' category</p>
        <p>You're spending {this.renderEssentials()} in the 'essentials' category</p>

      </div>
     )
   }
}

export default Status
