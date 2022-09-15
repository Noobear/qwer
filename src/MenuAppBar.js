import * as React from 'react';
import "./css/font.css"
import { useNavigate } from 'react-router-dom';
import {Button, IconButton, Typography, Toolbar, Box, AppBar} from "@mui/material";
import {signOut} from "./service/ApiService";
import axios from "axios";

export default function MenuAppBar() {
    const navigate = useNavigate();
    const list = () => navigate('/list');
    const Home = () => {
        localStorage.removeItem("callApi");
        navigate('/main');
    }
    const write = () => navigate('/write');

    return (
        <Box sx={{ flexGrow: 1 }} height={"160px"}>
            <AppBar position="static">
                <Toolbar style={{height:"120px"}}>
                    <Typography
                        component="a"
                        href={"/main"}
                        sx={{
                            flexGrow:1,
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontSize: 50,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>My Diary
                    </Typography>
                    <Button
                        sx={{fontSize: 24}}
                        color="inherit" onClick={Home}
                    >Home
                    </Button>
                    <Button
                        sx={{fontSize: 24}}
                        color="inherit" onClick={write}
                    >Write
                    </Button>
                    <Button
                        sx={{fontSize: 24}}
                        color="inherit" onClick={list}
                        >List
                    </Button>
                    <Button
                        sx={{fontSize: 24}}
                        color="inherit" onClick={signOut}
                    >Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
