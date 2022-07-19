import '../css/App.css';
import React from 'react';
import logo from '../photo/wheel1.svg';
import Bar from './H_Bar'

function App_login() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h3>Stop! Bus!</h3>
          <Bar>username: {}</Bar>
        </header>
      </div>
  );
}

export default App_login;
