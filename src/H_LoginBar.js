import React, { Component } from 'react';
import Login from './Login'
import './css/App.css';

class HomeLoginBar extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }
  render () {
   return ( 
    <div className="App">
        <header className="App-LoginBar">
            <Login></Login>
        </header>
    </div>
   )
 }
}

export default HomeLoginBar;
