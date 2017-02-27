import React from 'react';
import logo from '../img/logo.png';

function Header(props) {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h1>React Task List</h1>
    </div>
  );
}

export default Header;