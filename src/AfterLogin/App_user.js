import '../css/App.css';
import React from 'react';
import {Button} from "@mui/material";
import Bar from './H_Bar'
import axios from "axios";

function logout() {
    axios({
        method: 'delete',
        url: "/api/logout",
        headers : {
            // 'Content-Type' : 'application/json',
            'Authorization' : localStorage.getItem("Authorization"),
            'refreshToken' : localStorage.getItem("refreshToken"),
        },
    })
        .then( () => {
            localStorage.removeItem("Authorization")
            localStorage.removeItem("refreshToken")
            window.location.href = "/"});
}

function App_user() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Healing Diary??????</h3>
          <Bar>{}님 환영합니다.</Bar>
              <Button onClick={logout}>
                  로그아웃
              </Button>
        </header>
      </div>
  );
}

export default App_user;
