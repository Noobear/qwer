import './css/App.css';
import './css/font.css';
import React from 'react';
import Copyright from "./Copyright";
import {Box} from "@mui/material";
import Login from "./Login";

function App() {
  return (
      <div className="App-header" >
          <header style={{marginBottom:"-30px"}}>
              <h3 className={"Font_ma"} style={{fontSize:"80px", marginTop:0, marginBottom:100}}>
                  あ な た は に な り ま す。
              </h3>
          </header>
          <Login ></Login>
          <Box className="App-Box">
              <Copyright/>
          </Box>
      </div>
  );
}

export default App;
