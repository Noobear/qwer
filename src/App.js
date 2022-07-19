import './css/App.css';
import React from 'react';
import logo from './photo/wheel1.svg';
import HomeLoginBar from './H_LoginBar'

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h3>Stop! Bus!</h3>
          <HomeLoginBar></HomeLoginBar>
        </header>
      </div>
  );
}

export default App;
