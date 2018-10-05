import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExpenses } from '../actions/goals'
import SimplePieChart from '../containers/SimplePieChart'

class Status extends Component {
  state = {
    expenses: [],
    expenseTotal: 0,
    chartData: {}
  }

  componentDidMount() {
    this.props.fetchExpenses().then((data) => {
    this.setState({
      expenses: data
      })
    })
  }
//https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/
  componentWillMount(){
    this.getChartData();
  }

  getChartData() {
    this.setState({
     chartData:{
       labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
       datasets:[
         {
           label:'Population',
           data:[
             617594,
             181045,
             153060,
             106519,
             105162,
             95072
           ],
           backgroundColor:[
             'rgba(255, 99, 132, 0.6)',
             'rgba(54, 162, 235, 0.6)',
             'rgba(255, 206, 86, 0.6)',
             'rgba(75, 192, 192, 0.6)',
             'rgba(153, 102, 255, 0.6)',
             'rgba(255, 159, 64, 0.6)',
             'rgba(255, 99, 132, 0.6)'
           ]
         }
       ]
     }
   });
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
    return (obtained*100/this.state.expenses.expenseTotal).toFixed(2)
  }

  render() {

    return (
      <div className="status-container">
        <h2>Here is where you can improve</h2>
          <SimplePieChart chartData={this.state.chartData}/>,
        <div className="row">
          <div className="col-lg-8">
          <p>You're spending {this.renderFun()} in the "fun" category. That is {this.calculatePercentage()}% of all your expenses.</p>
          <p>You're spending {this.renderEssentials()} in the 'essentials' category</p>
          </div>
        </div>
      </div>
     )
   }
}
// const mapStateToProps = state => {return {expenses: state.budget.expenses}}

export default connect(null, { fetchExpenses })(Status)
