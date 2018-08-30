import React, { Component } from 'react';
import logo from './piggy-bank.png';
import './App.css';
import GoalContainer from './containers/goals/GoalContainer'
import PotentialGoals from './containers/goals/PotentialGoals'
import Goals from './components/goals/Goals'
import BudgetContainer from './containers/budget/BudgetContainer'


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to a Better Budget</h1>
        </header>
        <p className="Budget"></p>
          Start by creating your monthly budget.
          <BudgetContainer />

        <p className="Goals">What are your budget goals?</p>
          <GoalContainer />
        <p>Here's what's possible</p>
          <PotentialGoals />
          <footer>Icon made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></footer>
      </div>
    );
  }
}

//move these headlines to the container

export default App;
