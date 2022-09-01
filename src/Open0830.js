import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Button, Box} from "@mui/material";
import MenuAppBar from "./MenuAppBar";
import Paper from '@mui/material/Paper';
import {useNavigate} from "react-router-dom";


function deletediary(e) {

    axios({
        method: 'delete',
        url: `/diary/delete/${e}`,
        headers : {
            'Authorization' : localStorage.getItem("Authorization"),
            'refreshToken' : localStorage.getItem("refreshToken"),
        },
    })
        .then( (response) => {
            alert("삭제가 완료되었습니다.");
        })
        .catch( (error) => {
            console.log(error)
        });
}


function Open0830() {
    const [data, setData] = useState([]);
    const [url, setUrl] = useState([]);
    const [id, setId] = useState([]);
    const [date, setDate] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: `/diary/show/08/31`,
            headers : {
                'refreshToken' : localStorage.getItem("refreshToken"),
                'Authorization': localStorage.getItem("Authorization"),
            },
        }).then((response) => {
            setData(response.data.diaryDTO);
            setDate(response.data.diaryDTO.create_date);
            setUrl(response.data.imgUrl);
            setId(response.data.diaryDTO.id);
            let dateinfo = data.create_date
            // console.log("response : " + response);
            // console.log("res.data : " + response.data);
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


    return (
        <div>
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
                            {data.content}
                        </div>
                        <pre>

                            </pre>
                        <div>
                            오늘의 기분 : {data.sentimental}
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
                    onClick={() => deletediary(id)}
                    >
                    삭제하기
                </Button>
            </div>
        </div>
    );
}

export default Open0830;
