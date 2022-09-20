import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Box, Button} from "@mui/material";
import MenuAppBar from "./MenuAppBar";
import Paper from '@mui/material/Paper';

function ListViewForHome() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: "/diary/test3",
            headers : {
                'refreshToken' : localStorage.getItem("refreshToken"),
                'Authorization': localStorage.getItem("Authorization"),
            },
        }).then((response) => {
            setData(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);



    function emoPick(ee){
        if( ee >= -1 && ee < (-0.75)){
            return '😭';
        } else if (ee >= (-0.75) && ee < (-0.50)){
            return '🥲';
        } else if (ee >= -0.50 && ee < -0.25){
            return '😩';
        } else if (ee >= -0.25 && ee < 0.00){
            return '😔';
        } else if (ee >= 0.00 && ee < 0.25){
            return '😐';
        } else if (ee >= 0.25 && ee < 0.50){
            return '🫤';
        } else if (ee >= 0.50 && ee < 0.75){
            return '😀';
        } else if (ee >= 0.75 && ee <= 1.00){
            return '😆';
        } else {
            return "오류 😀";
        }
    }

    return (
        <div style={{height:"495px", overflow:"scroll"}}>
            <Box style={{width:"90%", marginTop:'1%'}}>
                {data.map((data, id) => (
                    <div key={id}>
                        <Box width={"1000px"}
                             style={{marginLeft:"20px"}}
                        >
                            <Paper elevation={5} style={{height:"120px"}}>
                                <div className={"Font_ma"} style={{fontSize:"28px", paddingLeft:"30px", textAlign:"left"}}>
                                    <div style={{marginTop:"15px"}}>
                                        <table>
                                            <tr>
                                                <td colSpan="2">
                                                    <pre style={{fontSize:"60px", marginTop:"15px"}}>{emoPick(data.sentimental)} </pre>
                                                </td>
                                                <td colSpan="5">
                                                    <p style={{marginTop:"-15px"}} > {data.createdDate} - {data.content}</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </Paper>
                        </Box>
                    </div>
                ))}
            </Box>
        </div>
    );
}

export default ListViewForHome;
