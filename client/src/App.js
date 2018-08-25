import React, { Component } from 'react';
import logo from './logo.svg';
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

      </div>
    );
  }
}

export default App;
