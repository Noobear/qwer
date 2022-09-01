import * as React from 'react';
import {Button, TextField, Grid, Container, Typography} from "@mui/material";
import { signup } from "./service/ApiService";
import ComboBox from "./ComboBox";
import RowRadioButtonsGroup from './RowRadioButtonsGroup'
import Copyright from "./Copyright";
import MaterialUIPickers from "./selectCalendar";
import DaumPost from "./DaumPost";
import {Axios} from "axios";

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
        console.log("realName: "+realName); console.log("email: "+ username);  console.log("password: "+password);
        console.log("address: "+address); console.log("gender: "+gender); console.log("birthDay: "+birthDay);


        if (password === password_ch){
            // Axios
            //     .call('/join/admin', postData)
            //     .then(function (response) {
            //         console.log(response, '성공');
            //         // history.push('/login');
            //         document.location.href='/login';
            //     })
            //     .catch(function (err) {
            //         console.log(err);
            //     });
            // window.location.href = "/" // 라우터로 바꾸는 작업 필요

            signup({
                realName:realName,password:password,
                username:username,address:address,
                gender:gender,birthDay:birthDay }).then(
                (response) => {
                    // 계정 생성 성공 시 login페이지로 리디렉트
                    return (
                        alert('회원가입을 환영합니다. ' + realName + "님.")
                        // window.location.href = "/" // 라우터로 바꾸는 작업 필요
                    )

                }
            );
        }
        else
        {alert("비밀번호와 비밀번호 확인에 같은 암호를 입력해주세요.")}
    }

    state = {
        realName: '',
        name_ad: '이름을 입력하세요!',
        password: '',
        password_ch: '',
        checkPassword: ' 필수 입력 값입니다!',
        advise:' 비밀번호를 입력해주세요!',
    };

    //📝 비밀번호를 입력해주세요!
//비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        // 파라미터로 받은 event.target.name이 name 아닐 경우에만 handleCheck함수 실행
        // setTimeout으로 딜레이를 준 이유는 딜레이를 주지 않았을 경우 setState 변경된 값이 handleCheck에서 바로 반영되지 않음
        if (e.target.name !== 'realName') {
            setTimeout(this.handleCheck, 1);
        }
    };

    handleCheck = () => {
        var RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/;
        const {realName, password, password_ch } = this.state;

        if (realName.length < 1){
            this.setState({
                name_ad: '이름을 입력하세요!',
            });
        }else{
            this.setState({
                name_ad: '',
            });
        }
        // 비밀번호 무입력 상태일 때와 둘 중에 하나의 값이 입력 상태가 아닐때
        if (password.length < 1 || password_ch.length < 1) {
            this.setState({
                checkPassword: '필수 입력 값입니다!',
            });
            console.log('advise: '+ this.state.password);
            if (!RegExp.test(password)){
                this.setState({
                    advise: ' 비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요!',
                });
                if (RegExp.test(password)){
                    this.setState({
                        advise: '',
                    });
                }
            }else{
                this.setState({
                    advise: '',
                });
            }
        } else if (password === password_ch) { // 비밀번호가 같다면 일치
            this.setState({
                checkPassword: '',
            });
            console.log(password);
            if (!RegExp.test(password)){
                this.setState({
                    advise: ' 비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요!',
                });
            }else{
                this.setState({
                    advise: '',
                });
            }
        } else { // 비밀번호가 같지 않다면 불일치
            this.setState({
                checkPassword: ' 비밀번호가 같지 않습니다.',
            });
        }
    };

    render() {
        const {name_ad, realName, password, password_ch, checkPassword, advise} = this.state;
        return (
            <div className={'min-options'}>
            <Container maxWidth="xs"
                       style={{ paddingTop:"100px", paddingBottom:"200px"}}>
                <form noValidate onSubmit={this.handleSubmit}
                      style={{alignItems:"flex-start"}}>
                    <Grid container spacing={1.5}>
                        <Grid item xs={12}>
                            <Typography component="h1" variant="h5">
                                계정 생성
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{fontSize:'18px', margin:"0"}}>
                                <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="realName"
                                label="실명"
                                name="realName" //필수값
                                onChange={this.handleChange} value={realName}
                                autoFocus
                            />{name_ad}
                            </div>
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
                            <div style={{fontSize:'18px', margin:"0"}} >
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="password"
                                label="비밀번호"
                                type="password"
                                id="password"
                                onChange={this.handleChange} value={password}
                            />{advise}
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{fontSize:'18px', margin:"0"}} >
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="password_ch"
                                label="비밀번호 확인"
                                type="password"
                                id="password_ch"
                                onChange={this.handleChange} value={password_ch}
                            />
                            {checkPassword}<br/>
                            </div>
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
        <footer align={"center"} style={{height:"10px"}}>
            <Copyright/>
        </footer>
        </div>
        );
    }
}

export default SignUp;