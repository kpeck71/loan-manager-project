import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Goal from '../containers/Goal';
import GoalInput from '../containers/GoalInput';
import * as actions from '../actions/goals'

class GoalContainer extends Component {

  state = {
    isHidden: true,

  }

  componentDidMount() {
    this.props.actions.fetchGoals();
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleChange = event => {
    //arrow functions bind the this value to the function
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(name)
    this.setState({
      [name]: value
    })
  }

  render() {
    const allGoals = this.props.goals.goals.map(goal => <Goal goal={goal} />)
    return (
      <div>
        <h3>Current Goals:</h3>
        <div className="container-fluid">
        <button className="btn btn-outline-info" onClick={this.toggleHidden.bind(this)} type="submit">New Goal</button>
          <div className="row">
            {allGoals}
            {!this.state.isHidden && <GoalInput createGoal={this.props.actions.createGoal}/>}
          </div>

        </div>

      </div>
     )
   }
}

const mapStateToProps = state => {
  return { goals: state.goals }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalContainer)
