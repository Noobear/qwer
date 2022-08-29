import './css/App.css';
import React from 'react';
import Read from './Read'
import MenuAppBar from "./MenuAppBar";



function Main() {
    return (
      <div>
          <MenuAppBar></MenuAppBar>
          <Read/>
      </div>
  );
}

export default Main;
