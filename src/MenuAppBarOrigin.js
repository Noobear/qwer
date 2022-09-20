import * as React from 'react';
import "./css/font.css"
import { useNavigate } from 'react-router-dom';
import {Button, Typography, Toolbar, Box, AppBar} from "@mui/material";
import {signOut} from "./service/ApiService";

export default function MenuAppBarOrigin() {
    const navigate = useNavigate();
    const list = () => navigate('/list');
    const Home = () => {
        localStorage.removeItem("callApi");
        navigate('/main');
    }
    const write = () => navigate('/write');

    return (
        <Box
            // sx={{ flexGrow: 1 }}
            height={"160px"}>
            <AppBar position="static" style={{background:'transparent', boxShadow:"none"}}>
                <Toolbar style={{height:"120px"}}>
                    <Typography
                        component="a"
                        href={"/main"}
                        className={"Font_ma"}
                        sx={{
                            // flexGrow:1,
                            // mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontSize: 50,
                            color:"",
                            letterSpacing: '.3rem',
                            textDecoration: 'none',
                        }}><p className={"Font_ma"} >My Diary</p>
                    </Typography>
                    <Button
                        sx={{fontSize: 24}}
                        onClick={Home}
                    ><p className={"Font_ma"}>
                        Home
                    </p>
                    </Button>
                    <Button
                        sx={{fontSize: 24}}
                        onClick={write}
                    ><p className={"Font_ma"}>
                        Write
                    </p>
                    </Button>
                    <Button
                        sx={{fontSize: 24}} onClick={list}
                        ><p className={"Font_ma"}>
                        List
                    </p>
                    </Button>
                    <Button
                        sx={{fontSize: 24}} onClick={signOut}
                    ><p className={"Font_ma"}>
                        LogOut
                    </p>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
