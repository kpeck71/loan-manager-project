import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoalInput from '../../components/goals/GoalInput';
import Goals from '../../components/goals/Goals';
import { addGoal, addPayment, fetchGoals, deleteGoal, createGoal } from '../../actions/goals'

class GoalContainer extends Component {
  // constructor(props) {
    // super(props);
    // this.state = {
    //   title: '',
    //   total: 0,
    //   category: '',
    //   payment: ''
    // };
    // this.handleGoalSubmit = this.handleGoalSubmit.bind(this)
    // this.addNewGoal = this.addNewGoal.bind(this)
  // }

  handleChange = event => {
    //arrow functions bind the this value to the function
    event.persist()
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(target)
    this.setState({
      [name]: value
    })
  }


    // console.log('submitted new goal')
    // event.preventDefault();
    // this.props.addGoal({title: this.state.title, total: this.state.total, category: this.state.category});
    // this.setState({
    //   title: '', total: 0, category: ''
    // })
  // }

  // addNewGoal(goal){
  //   this.props.addGoal({title: goal.title, total: goal.total, category: goal.category})
  // }

  componentDidMount(){
    this.props.fetchGoals()
    }

  // handlePayment = event => {
  //   event.preventDefault();
  //   console.log('payment submitted ')
  //   this.props.addPayment({payment: this.state.payment, goalId: this.props.goal.id, goalTotal: this.props.goal.total})
  //   this.setState({
  //     payment: 0
  //   })
  // }


  render() {
      return (
        <div>
          <GoalInput createGoal={this.props.createGoal} handleChange={this.handleChange} handleGoalSubmit={this.handleGoalSubmit}/>
          <Goals goals={this.props.goals.goals} addPayment={this.props.addPayment} handleChange={this.handleChange} handlePayment={this.handlePayment} deleteGoal={this.props.deleteGoal}/>
        </div>
      )
    }
}

const mapStateToProps = state =>  {console.log('state', state.goals); return {goals: state.goals} }


export default connect(mapStateToProps, { addGoal, addPayment, fetchGoals, deleteGoal, createGoal })(GoalContainer);
