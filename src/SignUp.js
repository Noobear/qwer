import * as React from 'react';
import {Button, Box,  TextField, Grid, Container, Typography} from "@mui/material";
import { signup } from "./service/ApiService";
import ComboBox from "./ComboBox";
import RowRadioButtonsGroup from './RowRadioButtonsGroup'
import Copyright from "./Copyright";
import MaterialUIPickers from "./selectCalendar";
import DaumPost from "./DaumPost";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        // 오브젝트에서 form에 저장된 데이터를 맵의 형태로 바꿔줌.
        const data = new FormData(event.target);
        const realName = data.get("realName"); // 실명
        const email1 = data.get("email1"); // 이메일1
        const email2 = data.get("email2"); // 이메일2
        const username = email1 +"@"+ email2; // 이메일 취합
        const password = data.get("password"); // 비밀번호
        const password_ch = data.get("password_ch"); // 비밀번호 확인
        const address = data.get("address"); // 주소
        const gender = data.get("gender"); // 성별
        const birthDay = data.get("birthDay"); // 생일
        console.log("realName: "+realName);
        console.log("email: "+ username);
        console.log("password: "+password);
        console.log("address: "+address);
        console.log("gender: "+gender);
        console.log("birthDay: "+birthDay);
        if (password === password_ch){
            signup({
                realName:realName,password:password,
                username:username,address:address,
                gender:gender,birthDay:birthDay }).then(
                (response) => {
                    // 계정 생성 성공 시 login페이지로 리디렉트
                    return (
                        alert('회원가입을 환영합니다. ' + realName + "님.")
                    )
                    window.location.href = "/"; // 라우터로 바꾸는 작업 필요
                }
            );
        }
        else
        {alert("비밀번호와 비밀번호 확인에 같은 암호를 입력해주세요.")}
    }

    state = {
        name: '',
        password: '',
        password_ch: '',
        checkPassword: '패스워드 입력을 해주세요',
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        // 파라미터로 받은 event.target.name이 name 아닐 경우에만 handleCheck함수 실행
        // setTimeout으로 딜레이를 준 이유는 딜레이를 주지 않았을 경우 setState 변경된 값이 handleCheck에서 바로 반영되지 않음
        if (e.target.name !== 'realName') {
            setTimeout(this.handleCheck, 100);
        }
    };

    handleCheck = () => {
        const { password, password_ch } = this.state;
        // 비밀번호 무입력 상태일 때와 둘 중에 하나의 값이 입력 상태가 아닐때
        if (password.length < 1 || password_ch.length < 1) {
            this.setState({
                checkPassword: '📝패스워드 입력📝',
            });
        } else if (password === password_ch) { // 비밀번호가 같다면 일치
            this.setState({
                checkPassword: '✅일치 ✅',
            });
        } else { // 비밀번호가 같지 않다면 불일치
            this.setState({
                checkPassword: '❌불일치 ❌',
            });
        }
    };
    render() {
        const {realName, password, password_ch, checkPassword} = this.state;
        return (
            <div className={'min-options'}>
            <Container component="main" maxWidth="xs"
                       style={{ marginTop: "8%", marginBottom:'8%' }}>
                <form noValidate onSubmit={this.handleSubmit}>
                    <Grid container spacing={1.5}>
                        <Grid item xs={12}>
                            <Typography component="h1" variant="h5">
                                계정 생성
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="realName"
                                label="실명"
                                name="realName" //필수값
                                onChange={this.handleChange} value={realName}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={5.5}>
                            <TextField
                                style={{float: "left"}}
                                variant="outlined"
                                required
                                id="email1"
                                label="이메일"
                                name="email1"
                            />
                        </Grid>
                        <Grid item xs={1}><h3>@</h3></Grid>
                        <Grid item xs={5.5}>
                            <ComboBox item xs={5.5}/>
                        </Grid>
                        <Grid></Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="password"
                                label="비밀번호"
                                type="password"
                                id="password"
                                onChange={this.handleChange} value={password}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="password_ch"
                                label="비밀번호 확인"
                                type="password"
                                id="password_ch"
                                onChange={this.handleChange} value={password_ch}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="address"
                                label="주소"
                                name="address"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <DaumPost/>
                        </Grid>
                        <Grid item xs={12} style={{marginLeft:'10px'}}>
                            <RowRadioButtonsGroup
                                required
                                fullWidth
                                id="gender"
                                label="성별"
                                name="gender"/>
                        </Grid>
                        <Grid item xs={12}>
                            <MaterialUIPickers
                                required
                                fullWidth
                                id="birthDay"
                                label="생일"
                                name="birthDay"/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                계정 생성
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
                <Container component="main" maxWidth="xs"
                           style={{ marginTop: "8%", marginBottom:'8%' }}>
                <span>이름 : {realName} </span><br/>
                <span>비밀번호 : {password}</span><br/>
                <span>비밀번호확인 : {password_ch}</span><br/>
                <span>일치여부 : {checkPassword}</span><br/>
                </Container>
        <footer align={"center"} style={{height:"10px"}}>
            <Copyright />
        </footer>
        </div>
        );
    }
}

export default SignUp;