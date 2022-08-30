import React from "react";
import "./css/font.css";
import { login } from "./service/ApiService";
import {Button, TextField, Grid, Container} from "@mui/material";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        let username = data.get("username");
        let password = data.get("password");
        // ApiService 의 login 메서드를 사용 해 로그인.
        login({ username: username, password: password });
        // window.location.href='/main'
    }


    render() {

        return (
            <Container component="main" maxWidth="xs"
                       style={{ width:'1200px', marginTop: "2.5%",}}>
                <form noValidate onSubmit={this.handleSubmit}>
                    {" "}
                    {/* submit 버튼을 누르면 handleSubmit이 실행됨. */}
                    <Grid container spacing={4}>
                        <Grid item xs={16}
                              style={{ marginTop: "0.25%" }}>
                            <TextField
                                // color = 'warning'
                                variant="standard"
                                required
                                fullWidth
                                id="username"
                                label="이메일 주소"
                                name="username"
                                size={"normal"}
                                style={{ marginTop: "-0.25%",}}
                                InputProps={{ style: { fontSize: 22 , fontFamily: "MabinogiClassicR"} }}
                                InputLabelProps={{ style: { fontSize: 24 , fontFamily: "MabinogiClassicR"} }}
                            />
                        </Grid>
                        <Grid item xs={16}>
                            <TextField
                                variant="standard"
                                required
                                fullWidth
                                name="password"
                                label="패스워드"
                                type="password"
                                id="password"
                                style={{ marginTop: "-0.25%" }}
                                InputProps={{ style: { fontSize: 22, fontFamily: "MabinogiClassicR"} }}
                                InputLabelProps={{ style: { fontSize: 22 , fontFamily: "MabinogiClassicR"} }}
                            />
                        </Grid>
                        <Grid item xs={16}>
                            <Button

                                type="submit"
                                fullWidth
                                variant="contained"
                                color="warning"
                                style={{ marginTop: "1.5%"}}
                            >
                                <p className={"Font_ma"} style={{margin:"0", fontSize:"28px"}}>로그인</p>
                            </Button>
                        </Grid>
                        <Grid item xs={16}>
                            <Button
                                href="/sign"
                                fullWidth
                                variant="contained"
                                color="warning"
                                style={{ marginTop: "0.5%", marginBottom:"8.5%"}}
                            >
                                <p className={"Font_ma"} style={{margin:"0", fontSize:"28px"}}>회원가입</p>
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        );
    }
}

export default Login;