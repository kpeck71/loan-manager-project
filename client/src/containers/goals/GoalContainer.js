import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoalInput from '../../components/goals/GoalInput';
import Goals from '../../components/goals/Goals';
import { fetchGoals, addGoals, addPayment } from '../../actions/goals'

class GoalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      total: 0,
      category: '',
      payment: ''
    };
    this.handleGoalSubmit = this.handleGoalSubmit.bind(this)
    this.addNewGoal = this.addNewGoal.bind(this)
  }

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

  componentDidMount() {
    fetchGoals();
    console.log('fetched', this.props)
    }

  handleGoalSubmit(event) {
    event.preventDefault();

    let newGoal = JSON.stringify(
      { title: this.state.title, total: this.state.total, category: this.state.category } )
      console.log(newGoal)

    fetch('/api/v1/goals.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        data: newGoal
      })
      .then((response) => response.json())
      .then((goal)=>{
        this.addNewGoal(goal)
      })
      //success message
    }
    // console.log('submitted ')
    // event.preventDefault();
    // this.props.addGoal({title: this.state.title, total: this.state.total, category: this.state.category});
    // this.setState({
    //   title: '', total: 0, category: ''
    // })
  // }
  addNewGoal(goal){
    this.props.addGoal({title: goal.title, total: goal.total, category: goal.category})
  }

  componentDidMount(){
      fetch('/api/v1/goals.json')
        .then((response) => {return response.json()})
        .then((data) => {this.setState({ goals: data }) });
    }

  handlePayment = event => {
    event.preventDefault();
    console.log('payment submitted ')
    this.props.addPayment({payment: this.state.payment, goalId: this.props.goal.id, goalTotal: this.props.goal.total})
    this.setState({
      payment: 0
    })
  }


  render() {
      return (
        <div>
          <GoalInput addGoal={this.props.addGoal} handleChange={this.handleChange} handleGoalSubmit={this.handleGoalSubmit}/>
          <Goals goals={this.props.goals} addPayment={this.props.addPayment} handleChange={this.handleChange} handlePayment={this.handlePayment}/>
        </div>
      )
    }
}

const mapStateToProps = state =>  {console.log('state', state.GoalReducer.goals); return {goals: state.GoalReducer.goals} }

const mapDispatchToProps = dispatch => ({
  fetchGoals: () => dispatch(fetchGoals()),
  addGoal: goal => dispatch({ type: 'ADD_GOAL', goal }),
  addPayment: payment => dispatch({ type: 'ADD_PAYMENT', payment })
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalContainer);
