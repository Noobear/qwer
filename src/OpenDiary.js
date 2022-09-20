import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Button, Box, Paper} from "@mui/material";
import MenuAppBar from "./MenuAppBar";
import DeleteDiary from "./DeleteDiary";

function OpenDiary() {
    const [data, setData] = useState([]);
    const [url, setUrl] = useState([]);
    const [id, setId] = useState([]);
    const [date, setDate] = useState([]);
    const DDDD = localStorage.getItem("callApi");
    useEffect(() => {
        axios({
            method: 'get',
            url: `${DDDD}`,
            headers : {
                'refreshToken' : localStorage.getItem("refreshToken"),
                'Authorization': localStorage.getItem("Authorization"),
            },
        }).then((response) => {
            setData(response.data.diaryDTO);
            setDate(response.data.diaryDTO.create_date);
            setUrl(response.data.imgUrl);
            setId(response.data.diaryDTO.id);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    const rewrite = (e) => {
        axios({
            method: 'get',
            url: `/diary/show/${e}`,
            headers : {
                'refreshToken' : localStorage.getItem("refreshToken"),
                'Authorization': localStorage.getItem("Authorization"),
            },
        }).then((response) => {
            localStorage.setItem("id",response.data.diaryDTO.id);
            localStorage.setItem("date",e);
            window.location.href='/rewrite'
            }).catch((error) => {
            console.log(error);
        })
    }
    function emoPickone(e){
        if( e >= -1 && e < (-0.75)){
            return '😭😭';
        } else if (e >= (-0.75) && e < (-0.50)){
            return '🥲🥲';
        } else if (e >= -0.50 && e < -0.25){
            return '😩😩';
        } else if (e >= -0.25 && e < 0.00){
            return '😔😔';
        } else if (e >= 0.00 && e < 0.25){
            return '😐😐';
        } else if (e >= 0.25 && e < 0.50){
            return '🫤🫤';
        } else if (e >= 0.50 && e < 0.75){
            return '😀😀';
        } else if (e >= 0.75 && e <= 1.00){
            return '😆😆';
        } else {
            return "오류 😀";
        }
    }

    return (
        <div
            // className={"App-header1"}
        >
            <MenuAppBar></MenuAppBar>
            <Box width={"1200px"} paddingLeft={"24%"}>
                <Paper elevation={5}>
                    <div className={"Font_ma"} style={{fontSize:"30px", paddingTop:"", textAlign:"center"}}>
                        <div style={{marginTop:"30px"}}>
                                <pre style={{color:"white"}}>?
                                </pre>
                            {data.create_date}
                        </div>
                        <p align={"center"}>
                            <p style={{background:"lightgrey",width:"270px",}} >
                                <img style={{padding:"15px"}}  alt={"사진"} src={url}  width ={'240px'}/>
                            </p>
                        </p>
                        <div>
                            <pre>
                            {data.content}
                            </pre>
                        </div>
                        <pre>

                            </pre>
                        <div>
                            오늘의 기분 : {emoPickone(data.sentimental)}
                        </div>
                        <pre style={{color:"white"}}>_
                        </pre>
                    </div>
                </Paper>
            </Box>
            <div align={"center"} style={{margin:"100px"}}>
                <Button
                    size={"large"}
                    variant="contained"
                    color="primary"
                    style={{margin:"20px", fontSize:"20px"}}
                    onClick={() => rewrite(date.slice(5,7)+'/'+date.slice(8,10))}
                >
                    수정하기
                </Button>
                <Button
                    size={"large"}
                    variant="contained"
                    color="primary"
                    style={{margin:"20px", fontSize:"20px"}}
                    onClick={() => DeleteDiary(id)}
                    >
                    삭제하기
                </Button>
            </div>
        </div>
    );
}

export default OpenDiary;
