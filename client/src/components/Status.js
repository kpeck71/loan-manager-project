import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExpenses } from '../actions/goals'
import SimplePieChart from '../containers/SimplePieChart'

class Status extends Component {
  state = {
    expenses: [],
    chartData: {},
    funAmount: 0,
    essentialsAmount: 0,
    creditAmount: 0,
    miscAmount: 0
  }

  componentDidMount() {
    this.props.fetchExpenses().then((data) => {
    this.setState({
      expenses: data
      })
    })
    this.getChartData();
    this.setCategoryAmounts();
  }
//https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/
  // componentDidMount(){
  //     this.getChartData();
  //     this.setCategoryAmounts();
  // }

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

  getChartData() {
    let expenses = this.props.budget.expenses
    let addUpExpenses;
    // if (this.props.budget.expenses.length > 0) {
    //   addUpExpenses = expenses.reduce(function (acc, obj) {
    //     let key = obj["category"];
    //     if (!acc[key]) {
    //       acc[key] = [];
    //     }
    //      acc[key].push(obj.amount)
    //     return acc;
    //   }, {});
    // } else {
    //   addUpExpenses = {
    //     credit: [{amount: 125, category: "credit", id: 47, name: "Credit card"}],
    //     essentials: [{amount: 1000, category: "essentials", id: 46, name: "Rent"}, {amount: 250, category: "essentials", id: 48, name: "groceries"}],
    //     fun: [{amount: 100, category: "fun", id: 49, name: "dinner out"}]
    //   }
    // }

    this.setState({
     chartData:{
       labels: ['fun', 'credit','essentials', 'miscellaneous'],
       datasets:[
         {
           label:'Categories',
           data:[
             this.props.funAmount,
             this.props.creditAmount,
             this.props.essentialsAmount,
             this.props.miscAmount
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


  setCategoryAmounts() {
    if (this.props.budget.expenses.length > 0) {
      let expenses = this.props.expenses

      let isFun = (expense) => {
        return expense.category === 'fun';
      }
      let isCredit = (expense) => {
        return expense.category === 'credit';
      }
      let isEssentials = (expense) => {
        return expense.category === 'essentials';
      }
      let isMisc = (expense) => {
        return expense.category === 'miscellaneous';
      }

      // let isCategory = (expense, type) => {
      //   return expense.category === `${type}`;
      // }

      let newAmount = (expense) => {
        return expense.amount;
      }

      let newSum = (sum, expense) => {
        return sum + expense;
      }

      this.setState({
        totalFun: expenses.filter(isFun.map(newAmount).reduce(newSum)),
        totalEssentials: expenses.filter(isEssentials.map(newAmount).reduce(newSum)),
        totalCredit: expenses.filter(isCredit.map(newAmount).reduce(newSum)),
        totalMisc: expenses.filter(isMisc.map(newAmount).reduce(newSum))
      })
    } else {
      this.setState({
        totalFun: 100,
        totalEssentials: 100,
        totalCredit: 100,
        totalMisc: 100
      })
    }
  }
  
  calculatePercentage() {
    let obtained = this.props.budget.essentialTotals
    return (obtained*100/this.props.expenseTotal).toFixed(2)
  }

  render() {

    return (
      <div className="status-container">
        <h2>Here is where you can improve</h2>
          <p>Example: xyz </p>
          <SimplePieChart chartData={this.props.chartData}/>,
        <div className="row">
          <div className="col-lg-8">
          <p>You're spending ${this.props.budget.essentialTotals} in the "essentials" category. That is {this.calculatePercentage()}% of your ${this.props.expenseTotal} expenses.</p>
          </div>
        </div>
      </div>
     )
   }
}
const mapStateToProps = state => { return { expenses: state.expenses, expenseTotal: state.budget.expenseTotal}}

export default connect(mapStateToProps,{ fetchExpenses })(Status)
