import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'

import GoalContainer from './containers/goals/GoalContainer'
import Goals from './components/goals/Goals'
import GoalIdeas from './containers/goals/GoalIdeas'
import Tips from './components/goals/Tips'
import CompletedGoals from './containers/goals/CompletedGoals'

import BudgetContainer from './containers/budget/BudgetContainer'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <NavBar />
            <Route exact path="/" render={() =>
                <React.Fragment>
                  <BudgetContainer />
                  <GoalContainer />
                </React.Fragment> }
                  />
                <Route exact path="/tips" component={Tips} />
            <Route exact path='/ideas' render={routerProps => <GoalIdeas />} />
            <Route exact path='/completed' render={routerProps => <CompletedGoals {...routerProps} goals={this.props.goals} />}/>
          </React.Fragment>
        </Router>

      <div className="footer">Icon made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => { return {goals: state.goals} }

export default connect(mapStateToProps)(App);
