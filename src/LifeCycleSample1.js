import React, { Component } from 'react';

import AugustCalender from "./ShowCalender/AugustCalender";
import SeptemberCalender from "./ShowCalender/SeptemberCalender";
import NovemberCalender from "./ShowCalender/NovemberCalender";
import OctoberCalender from "./ShowCalender/OctoberCalender";
import DecemberCalender from "./ShowCalender/DecemberCalender"


class LifeCycleSample extends Component {
  state = {
    year:2022,
    month: 9,
    number: 0,
    color: null
  };
  myRef = null; // ref를 설정할 부분
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.month !== prevState.month) {
      return { month: nextProps.month };
    }
    return null;
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  handleClickPlus = () => {
    this.setState({
      number: this.state.number + 1,
      month: this.state.month + 1
    });
  };
  handleClickMinus = () => {
    this.setState({
      number: this.state.number - 1,
      month: this.state.month - 1
    });
  };
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }
  render() {
    console.log('render');

    if (this.state.month === 8) {
      let CL = <AugustCalender />
      return (
          <>{CL}</>);
    }else if(this.state.month === 9){
      let CL = <SeptemberCalender />
      return (
          <>{CL}</>);
    }else if(this.state.month === 10 ){
      let CL = <OctoberCalender/>
      return (
          <>{CL}</>);
    }else if(this.state.month === 11){
      let CL = <NovemberCalender/>
      return (
          <>{CL}</>);
    }else if(this.state.month === 12 ){
      let CL = <DecemberCalender/>
      return (
          <>{CL}</>);
    }


  }
}
export default LifeCycleSample;
