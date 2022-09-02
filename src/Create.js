import './css/App.css';
import './css/font.css';
import React, { useState, useEffect } from 'react';
import Copyright from "./Copyright";
import {Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import MenuAppBar from "./MenuAppBar";

class Create extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        // 오브젝트에서 form에 저장된 데이터를 맵의 형태로 바꿔줌.
        const data = new FormData(event.target);
        const contentSet = data.get("contentSet"); // 내용
        const file = data.get("file");

        const GetTEXT = {
            'content' : contentSet,
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
            .then(setTimeout(function() {
            alert('It Works!');
            window.location.href='/main'
        }, 8000))
    }

    render () {
        let today = new Date(); // today 객체에 Date()의 결과를 대입
        let time = {
                year: today.getFullYear(),
                month: today.getMonth() + 1,
                date: today.getDate()
            };

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
                                        fontWeight:"bold"}}>{time.year+"."+time.month+"."+time.date}</Typography>
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

export default Create;
