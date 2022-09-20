import React, { Component } from 'react';
import './css/App.css';
import "./css/font.css";
import LifeCycleSample from './LifeCycleSample1';
import {Box,Button, Grid} from "@mui/material";
import 'chart.js/auto'
import Chart1 from "./chart1";
import ListViewForHome from "./ListViewForHome";

// 랜덤 색상을 생성합니다.
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
class App1 extends Component {
  state = {
    color: '#000000',
    month: 9,
    year: 2022,
  };
  handleClickPlus = () => {
    this.setState({
      number: this.state.number + 1,
      month: this.state.month + 1
    });
  };
  handleClickMinus = () => {
    this.setState({
      number: this.state.number + 1,
      month: this.state.month - 1
    });
  };
  render() {

    const l = "<";
    const r = ">";
    let year = <tr><td colSpan="7"> 2022년 </td></tr>
    let month =
        <tr>
          <td colSpan="7">
            <Button onClick={this.handleClickMinus} style={{color:"black", fontSize:"25px"}}>{l}</Button>
            {this.state.month}월
            <Button onClick={this.handleClickPlus } style={{color:"black", fontSize:"25px"}}>{r}</Button>
          </td>
        </tr>

    return (
      <div style={{paddingTop:"50px"}} >
        <Grid container spacing={1} paddingLeft={'90px'}>
          <Grid item xs={6} p={2}>
            <div className={"Calendar"} >
          <Box sx={{ border: '3px solid' }}  width="100%" style={{ height:"1030px"}}>
            <table className={"Font_ma"} width="100%" style={{height:"100%"}}>
              <thead align={"center"} style={{fontSize:"48px"}}>
              {year}
              {month}
              </thead>
              <LifeCycleSample month={this.state.month} />
            </table>
          </Box>
            </div>
          </Grid>
          <Grid item xs={6} p={2}>
            <Box style={{height:"1055px"}}>
              <div >
              <Box style={{width:"1047.5px"}} >
                <Chart1/>
              </Box>
              </div>
              <div className={"Calendar"}>
              <ListViewForHome></ListViewForHome>
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default App1;
