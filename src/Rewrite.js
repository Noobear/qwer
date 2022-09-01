import './css/App.css';
import './css/font.css';
import { useState, useEffect } from 'react';
import React from 'react';
import Copyright from "./Copyright";
import {Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import MenuAppBar from "./MenuAppBar";

class Rewrite extends React.Component{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    function sss() {
        const [data, setData] = useState([]);
        const [url, setUrl] = useState([]);
        const [id, setId] = useState([]);


        useEffect(() => {

            let e_id = localStorage.getItem("id");
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
    }

    handleSubmit(event) {
        event.preventDefault();
        // 오브젝트에서 form에 저장된 데이터를 맵의 형태로 바꿔줌.
        const dataR = new FormData(event.target);
        const contentSetR = dataR.get("contentSet"); // 내용
        const fileR = dataR.get("file");

        const GetTEXT = {
            'content' : contentSetR,
        };

        const SetTEXT = JSON.stringify(GetTEXT);
        const diaryDTO = new Blob([SetTEXT], { type: "application/json" });

        console.log('content: '+ contentSet);
        console.log('file: '+ file);

        axios({
            method: 'POST',
            url: "/diary/regist",
            headers : {
                'Content-Type' : 'multipart/form-data',
                'Authorization' : localStorage.getItem("Authorization"),
                'refreshToken' : localStorage.getItem("refreshToken"),
            },
            data:{
                diaryDTO,
                file : file,
            }
        })
        //     .then(setTimeout(function() {
        //     alert('It Works!');
        //     window.location.href='/main'
        // }, 8000))
    }

    render () {
        return (
            <Grid xs={20} >
                <Grid xs={20}>
                    <MenuAppBar></MenuAppBar>
                </Grid>
                <Grid>
                    <div className="wrapper">
                        <div className="content">
                            <form  noValidate onSubmit={this.handleSubmit}>
                                <Typography style={{
                                    width: '100%', height:"50px",
                                    fontSize: "35px", marginBottom:"16px",
                                    fontWeight:"bold"}}>e_date</Typography>
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
                <Copyright></Copyright>
            </Grid>
        );
    }
}

export default Rewrite;

