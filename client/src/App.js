import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoalInput from './components/GoalInput'
import Goals from './containers/Goals'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to a Better Budget</h1>
        </header>
        <p className="App-intro">
          Start by creating your goals.
          <GoalInput />
          <Goals />
        </p>
      </div>
    );
  }
}

export default App;
