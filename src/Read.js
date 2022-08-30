import './css/App.css';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {Grid, Button,  Box} from "@mui/material";
import axios from "axios";
import "./css/font.css";
import {useNavigate} from 'react-router-dom';

function Read() {

    const [value, onChange] = useState(new Date());

    const oD = () => {
        // let today = new Date(); // today 객체에 Date()의 결과를 대입
        // let time = { year: today.getFullYear(), month: today.getMonth() + 1, date: today.getDate()};

        console.log("OD test:" );

        axios({
        method: 'get',
        url: "/api/notice/admin/08/",
        headers : {
            'Authorization': localStorage.getItem("Authorization"),
            'refreshToken' : localStorage.getItem("refreshToken")
        }}).then((response) => {
            localStorage.setItem("date");
            localStorage.setItem("callApi","/api/notice/admin/");
            }).catch((error) => {
                console.log(error);
            })
    }
    //   const [data, setData] = useState([]);
    // const Nav = useNavigate();
    //
    // useEffect(() => {
    //     axios({
    //         method: 'get',
    //         url: "/api/notice/admin",
    //         headers : {
    //             'Authorization': localStorage.getItem("Authorization"),
    //             'refreshToken' : localStorage.getItem("refreshToken"),
    //         },
    //     }).then((response) => {
    //         setData(response.data);
    //         console.log("response : " + response);
    //         console.log("res.data : " + response.data);
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // }, [])

    const l = "<  2022년  >";
    const r = "<   8월   >";

    return (
        <Box style={{paddingTop:"50px"}} >
            <Box sx={{ border: '6px solid' }}  width="43%" style={{marginLeft:"90px", height:"800px"}}>
                    <table className={"Font_ma"} width="100%" style={{height:"100%"}}>
                    <thead align={"center"} style={{fontSize:"48px"}}>
                    <tr><td colSpan="7"> {l} </td></tr>
                    <tr><td colSpan="7">{r}</td></tr>
                    </thead>
                    <tbody align={"center"} style={{fontSize:"40px"}}>
                    <tr>
                        <td style={{color:"red"}}>일</td><td>월</td><td>화</td><td>수</td><td>목</td><td>금</td><td style={{color:"deepskyblue"}}>토</td></tr>
                    <tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
                    <tr><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}}>7</Button>
                    </td><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}}>8</Button>
                    </td><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}}>9</Button>
                    </td><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}}>10</Button>
                    </td><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}}>11</Button>
                    </td><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}}>12</Button>
                    </td><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}}>13</Button>
                    </td></tr>
                    <tr><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}}>14</Button>
                    </td><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}}>15</Button>
                    </td><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}}>16</Button>
                    </td><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}}>17</Button>
                    </td><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}}>18</Button>
                    </td><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}}>19</Button>
                    </td><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}}>20</Button>
                    </td></tr>
                    <tr><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}}>21</Button>
                    </td><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}} onClick={oD}>22</Button>
                    </td><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}} onClick={oD}>23</Button>
                    </td><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}} onClick={oD}>24</Button>
                    </td><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}} onClick={oD}>25</Button>
                    </td><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}} onClick={oD} >26</Button>
                    </td><td>
                        <Button style={{fontSize:"40px", margin:"-5%"}}>27</Button>
                    </td></tr>
                    <tr><td>28</td><td>29</td><td>30</td><td>31</td><td></td><td></td><td></td></tr>
                    </tbody>
                </table>
                <Button style={{fontSize:"40px", margin:"-5%"}} onClick={oD} >26</Button>
            </Box>
        </Box>
    )
}

export default Read;