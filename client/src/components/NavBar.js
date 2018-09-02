import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../piggy-bank.png';
import '../App.css';

const NavBar = () => {

  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to a Better Budget</h1>

      <div style={{ borderBottom: '2px solid white', paddingBottom: '10px', marginBottom: '12px' }}>
        <NavLink
          style={{ marginRight: '10px' }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={{ marginRight: '10px' }}
          to="/tips">
          Tips
        </NavLink>
        <NavLink
          style={{ marginRight: '10px' }}
          to="/ideas">
          Ideas
        </NavLink>
      </div>
      </header>
  );
}

export default NavBar;
