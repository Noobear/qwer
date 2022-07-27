import '../css/App.css';
import React from 'react';
import logo from '../photo/wheel1.svg';
import {Button} from "@mui/material";
import Bar from './H_Bar'
import axios from "axios";

function logout() {
    axios({
        method: 'GET',
        url: "/api/logout",
        headers : {
            "Authorization":localStorage.getItem("Authorization"),
            "refreshToken":localStorage.getItem("refreshToken")
        }
    }).then( () =>{
    localStorage.removeItem("Authorization");
    localStorage.removeItem("refreshToken");
    window.location.href = "/";}
    )
}
//
// function callname() {
//     axios({
//         method: 'GET',
//         url: "/api/logout",
//         headers : {"Authorization":localStorage.getItem("Authorization"), "
//         refreshToken":localStorage.getItem("refreshToken")}}
//     ).then(() =>{
//         localStorage.removeItem("Authorization");
//         localStorage.removeItem("refreshToken");
//         window.location.href = "/";})
// }

function App_login() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo"/>*/}
          <h3>Healing Diary</h3>
          <Bar>{}님 환영합니다.</Bar>
              <Button type="submit" onClick={logout}>
                  로그아웃
              </Button>
        </header>
      </div>
  );
}

export default App_login;
