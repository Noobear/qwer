import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Button, Box, Grid, Typography} from "@mui/material";
import MenuAppBar from "./MenuAppBar";
import Paper from '@mui/material/Paper';
import {useNavigate} from "react-router-dom";

function handleSubmit(event) {

    event.preventDefault();
    // 오브젝트에서 form에 저장된 데이터를 맵의 형태로 바꿔줌.
    const data = new FormData(event.target);
    const newContentSet = data.get("contentSet"); // 내용
    const newFile = data.get("file");
    const GetTEXT = {
        'content' : newContentSet,
    };

    const SetTEXT = JSON.stringify(GetTEXT);
    const diaryModifyDTO = new Blob([SetTEXT], { type: "application/json" });
    console.log('content: '+ newContentSet);
    console.log('file: '+ newFile);

    const id = localStorage.getItem("id");

    axios({
        method: 'POST',
        url: `/diary/${id}`,
        headers : {
            'Content-Type' : 'multipart/form-data',
            'Authorization' : localStorage.getItem("Authorization"),
            'refreshToken' : localStorage.getItem("refreshToken"),
        },
        data:{
            diaryModifyDTO,
            file : newFile,
        }
    })
        .then(setTimeout(function() {
            alert('It Works!');
            window.location.href='/main'
        }, 8000))
}


function Rewrite(){
    const [data, setData] = useState([]);
    const [url, setUrl] = useState([]);
    const [id, setId] = useState([]);

    useEffect(() => {

        const e_id = localStorage.getItem("id");
        const e_date = localStorage.getItem("date");

        axios({
            method: 'get',
            url: `/diary/show/${e_date}`,
            headers : {
                'refreshToken' : localStorage.getItem("refreshToken"),
                'Authorization': localStorage.getItem("Authorization"),
            },
        }).then((response) => {
            setData(response.data.diaryDTO);
            setUrl(response.data.imgUrl);
            setId(response.data.diaryDTO.id);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    return(
        <Grid xs={20} >
            <Grid xs={20}>
                <MenuAppBar></MenuAppBar>
            </Grid>
            <Grid>
                <div className="wrapper">
                    <div className="content">
                        <form  noValidate onSubmit={handleSubmit}>
                            <Typography style={{
                                width: '100%', height:"50px",
                                fontSize: "35px", marginBottom:"16px",
                                fontWeight:"bold"}}>{data.create_date}</Typography>
                            <textarea
                                className={"Font_ma"}
                                id="contentSet"
                                name='contentSet'
                                placeholder="내용을 입력하세요!"
                                style={{width: '100%', height:"280px", fontSize: "30px"}}
                            ></textarea>
                            <input className={"Font_ma"}
                                   style={{scale:"1.5", fontSize:"21px", padding:"25px", marginLeft:"80px"}}
                                   type={'file'} id={'file'} name={'file'} />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            ><p
                                className={"Font_ma"} style={{fontSize:"32px", margin:"0", width:"300px"}}
                            >오늘의 일기 작성</p>
                            </Button>
                        </form>
                    </div>
                </div>
            </Grid>
        </Grid>

    )
}

export default Rewrite;
