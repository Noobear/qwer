import './css/App.css';
import React from 'react';
import HomeLoginBar from './HomeLoginBar'
import Copyright from "./Copyright";
import {Box} from "@mui/material";

function App() {
  return (
      <div className="App">
          <div className="App-header">
              {/*<img src={logo} className="App-logo" alt="logo"/>*/}
              <h3>Healing Diary</h3>
              <HomeLoginBar/>
              <Box className={"App-Box"}>
                  <Copyright/>
              </Box>
          </div>
      </div>
  );
}

export default App;
