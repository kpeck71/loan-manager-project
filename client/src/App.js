import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoalInput from './components/goals/GoalInput'
import Goals from './containers/goals/Goals'
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
        <p className="Goals">
          Start by creating your goals.
          <GoalInput />
          <Goals />
        </p>
        <p className="Budget">
          Start by creating your goals.
          <BudgetInput />
          <Budget />
        </p>
      </div>
    );
  }
}

export default App;
