import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import GoalContainer from './containers/GoalContainer';
import BudgetContainer from './containers/BudgetContainer';
import { fetchGoals, fetchBudget, fetchExpenses } from './actions/goals'


class App extends Component {

  componentDidMount(){
    this.props.fetchGoals(),
    this.props.fetchBudget(),
    this.props.fetchExpenses()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <NavBar />
            <Route exact path='/' render={routerProps =>
                <React.Fragment>
                  <BudgetContainer budget={this.props.budget} />
                  <GoalContainer {...routerProps} goals={this.props.goals}/>
                </React.Fragment>
              }/>
          </React.Fragment>
        </Router>

      <div className="footer">Icon made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => { return {goals: state.goals, budget: state.budget} }

export default connect(mapStateToProps,{ fetchGoals, fetchBudget, fetchExpenses })(App);
