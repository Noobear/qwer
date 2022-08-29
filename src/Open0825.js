import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Button, Box} from "@mui/material";
import MenuAppBar from "./MenuAppBar";
import Paper from '@mui/material/Paper';


function Open0825() {

    const [data, setData] = useState([]);
    const [url, setUrl] = useState([]);
    // const date = localStorage.getItem("date");
    //
    // const m = `08`;
    // const d = `17`;

    useEffect(() => {
        axios({
            method: 'get',
            url: `/api/notice/admin/08/25`,
            headers : {
                'refreshToken' : localStorage.getItem("refreshToken"),
                'Authorization': localStorage.getItem("Authorization"),
            },
        }).then((response) => {
            setData(response.data.noticeDTO);
            setUrl(response.data.imgUrl);
            console.log("SRC: " + response.data.imgUrl);
            console.log("response : " + response);
            console.log("res.data : " + response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);






    return (
        <div>
            <MenuAppBar></MenuAppBar>
            <Box width={"1200px"} paddingLeft={"25%"}>
                    <Paper elevation={5}>
                        <div className={"Font_ma"} style={{fontSize:"30px", paddingTop:"", textAlign:"center"}}>
                            <div style={{marginTop:"30px"}}>
                                <pre style={{color:"white"}}>?
                                </pre>
                                작성 날짜: '2022.08.25'
                            </div>
                            <p align={"center"}>
                                <p style={{background:"lightgrey",width:"270px",}} >
                                    <img style={{padding:"15px"}}  alt={"사진"} src={url}  width ={'240px'}/>
                                </p>
                            </p>
                            <div>
                                {data.content}
                            </div>
                            <pre>

                            </pre>
                            <div>
                                오늘의 기분 : {data.sentimental}
                            </div>
                            <pre style={{color:"white"}}>
_
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
            >
                삭제하기
            </Button>
            <Button
                size={"large"}
                variant="contained"
                color="primary"
                style={{margin:"20px", fontSize:"20px"}}
            >
                수정하기
            </Button>
            </div>
        </div>
    );
}

export default Open0825;
