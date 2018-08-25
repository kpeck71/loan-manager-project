import React, { Component } from 'react';
import logo from './piggy-bank.png';
import './App.css';
import GoalInput from './components/goals/GoalInput'
import Goals from './containers/goals/Goals'
import PotentialGoals from './containers/goals/PotentialGoals'
import BudgetInput from './components/budget/BudgetInput'
import Budget from './containers/budget/Budget'

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
          <BudgetInput />
          <Budget />
        <p className="Goals">What are your budget goals?</p>
          <GoalInput />
          <Goals />
        <p>Here's what's possible</p>
          <PotentialGoals />
          <footer>Icon made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></footer>
      </div>
    );
  }
}

export default App;
