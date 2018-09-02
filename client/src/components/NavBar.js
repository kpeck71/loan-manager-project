import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../piggy-bank.png';
import '../App.css';

const NavBar = () => {

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to a Better Budget</h1>
      </header>
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <NavLink
          style={{ marginRight: '10px' }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={{ marginRight: '10px' }}
          to="/tips"
        >
          Tips
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
