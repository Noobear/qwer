import './css/App.css';
import React from 'react';
import Copyright from "./Copyright";
import {Box} from "@mui/material";
import Login from "./Login";

function App() {
  return (
      <div className="App">
          <div className="App-header">
              {/*<img src={logo} className="App-logo" alt="logo"/>*/}
              <header>
                  <h3>Healing Diary</h3>
              </header>
              <div className="App-LoginBar">
                  <Login ></Login>
              </div>
              <Box className="App-Box">
                  <Copyright/>
              </Box>
          </div>
      </div>
  );
}

export default App;
