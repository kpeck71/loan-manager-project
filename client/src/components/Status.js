import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExpenses } from '../actions/goals'

class Status extends Component {

  componentDidMount() {
    this.props.fetchExpenses()
  }

  renderFun() {
    let funTotal = 0
    return funTotal = 500
  }
  renderEssentials() {
    return 1100
  }

  calculatePercentage() {
    let obtained = this.renderFun()
    return (obtained*100/this.props.expenses.expenseTotal).toFixed(2)
  }

  render() {

    return (
      <div className="container">
        <h2>Here is where you can improve</h2>
        <div className="row">
          <div className="col-lg-8">
          <p>You're spending {this.renderFun()} in the "fun" category. That is {this.calculatePercentage()}% of all your expenses.</p>
          <p>You're spending {this.renderEssentials()} in the 'essentials' category</p>
          </div>
          <div className="col-lg-4 charts">
            <img src="https://thumbs.dreamstime.com/z/family-budget-different-parts-household-pie-chart-35158735.jpg" style={{width: '300px' }}/>
          </div>
        </div>
      </div>
     )
   }
}
const mapStateToProps = state => {return {expenses: state.budget}}

export default connect(mapStateToProps, { fetchExpenses })(Status)
