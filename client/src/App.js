import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import GoalContainer from './containers/GoalContainer';
import BudgetContainer from './containers/BudgetContainer';
import GoalIdeas from './containers/GoalIdeas';
import Status from './components/Status';
import CompletedGoals from './components/CompletedGoals';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <NavBar />
            <Route exact path='/' render={routerProps =>
                <React.Fragment>
                  <BudgetContainer budget={this.props.budget} />
                  <GoalContainer goals={this.props.goals.goals}/>
                </React.Fragment>
              }/>
            <Route exact path='/status' render ={routerProps => <Status {...routerProps} expenses={this.props.budget.expenses} />} />
            <Route exact path='/completed' render={routerProps => <CompletedGoals {...routerProps} goals={this.props.goals.goals} />}/>
            <Route exact path='/ideas' component={GoalIdeas} />
          </React.Fragment>
        </Router>

      <div className="footer">Icon made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => { return {goals: state.goals, budget: state.budget} }

export default connect(mapStateToProps)(App);
