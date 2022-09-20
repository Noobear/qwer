import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Box} from "@mui/material";
import MenuAppBar from "./MenuAppBar";
import Paper from '@mui/material/Paper';

function ListView() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: "/diary/show",
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

    function emoPicklist(ee){
        if( ee >= -1 && ee < (-0.75)){
            return '😭😭';
        } else if (ee >= (-0.75) && ee < (-0.50)){
            return '🥲🥲';
        } else if (ee >= -0.50 && ee < -0.25){
            return '😩😩';
        } else if (ee >= -0.25 && ee < 0.00){
            return '😔😔';
        } else if (ee >= 0.00 && ee < 0.25){
            return '😐😐';
        } else if (ee >= 0.25 && ee < 0.50){
            return '🫤🫤';
        } else if (ee >= 0.50 && ee < 0.75){
            return '😀😀';
        } else if (ee >= 0.75 && ee <= 1.00){
            return '😆😆';
        } else {
            return "오류 😀";
        }
    }

    return (
        <div className={"App-header2"}>
            <MenuAppBar></MenuAppBar>
            <Box style={{width:"90%", marginTop:'1.2%'}}>
                {data.map((data, id) => (
                    <div key={id}>
                    <Box width={"1200px"} paddingLeft={"25%"}>
                        <Paper elevation={5}>
                            <div className={"Font_ma"} style={{fontSize:"30px", paddingTop:"", textAlign:"center"}}>
                                <div style={{marginTop:"30px"}}>
                                <pre style={{color:"white"}}>?
                                </pre>
                                    {data.diaryDTO.create_date}
                                </div>
                                <p align={"center"}>
                                    <p style={{background:"lightgrey",width:"270px"}} >
                                        <img style={{padding:"15px"}} alt={"NULL"}  src={data.imgUrl}  width ={'240px'}/>
                                    </p>
                                </p>
                                <div>
                                    <pre>
                                        {data.diaryDTO.content}
                                    </pre>
                                </div>
                                <pre>

                                </pre>
                                <div style={{fontSize:"50px"}}>
                                    {emoPicklist(data.diaryDTO.sentimental)}
                                </div>
                                <pre style={{color:"white"}}>_
                                </pre>
                            </div>
                        </Paper>
                    </Box>
                    </div>
                ))}
            </Box>
        </div>
    );
}

export default ListView;
