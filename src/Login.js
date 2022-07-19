import React from "react";
import { login } from "./service/ApiService";
import {Link, Button, TextField, Grid, Container} from "@mui/material";

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
    }

    render() {
        return (
            <Container component="main" maxWidth="xs" style={{ marginTop: "4.5%" }}>
                <form noValidate onSubmit={this.handleSubmit}>
                    {" "}
                    {/* submit 버튼을 누르면 handleSubmit이 실행됨. */}
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="standard"
                                required
                                fullWidth
                                id="username"
                                label="이메일 주소"
                                name="username"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="standard"
                                required
                                fullWidth
                                name="password"
                                label="패스워드"
                                type="password"
                                id="password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                로그인
                            </Button>
                        </Grid>
                        <Link href="/signup" variant="body2" style={{ marginTop: "5.5%", marginBottom:"3.5%" }}>
                            <Grid item>회원 가입</Grid>
                        </Link>
                    </Grid>
                </form>
            </Container>
        );
    }
}

export default Login;