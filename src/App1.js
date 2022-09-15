import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample1';
import {Box,Button, Grid} from "@mui/material";
import 'chart.js/auto'
import {Chart} from 'react-chartjs-2';
import Chart1 from "./chart1";


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
    let year = <tr><td colSpan="7"> 2022년 </td></tr>
    let month =
        <tr>
          <td colSpan="7">
            <Button onClick={this.handleClickMinus}>빼기 1</Button>
            {this.state.month}월
            <Button onClick={this.handleClickPlus }>더하기 1</Button>
          </td>
        </tr>



    return (
      <div style={{paddingTop:"60px"}}>
        <Grid container spacing={1}>
          <Grid item xs={6} p={2}>
          <Box sx={{ border: '3px solid' }}  width="90%" style={{marginLeft:"90px", height:"800px"}}>
            <table className={"Font_ma"} width="100%" style={{height:"100%"}}>
              <thead align={"center"} style={{fontSize:"48px"}}>
              {year}
              {month}
              </thead>
              <LifeCycleSample month={this.state.month} />
            </table>
          </Box>
          </Grid>
          <Grid item xs={6} p={2}>
            <Box>
              <Chart1/>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default App1;
