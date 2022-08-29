import './css/App.css';
import './css/font.css';
import React from 'react';
import Copyright from "./Copyright";
import {Box} from "@mui/material";
import Login from "./Login";

function App() {
  return (
      <div className="App">
          <div className="App-header">
              <header style={{marginBottom:"-30px"}}>
                  <h3 className={"Font_ma"} style={{fontSize:"180px"}}>My Diary</h3>
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
