import * as React from 'react';
import "./css/font.css"
import { useNavigate } from 'react-router-dom';
import {Button, IconButton, Typography, Toolbar, Box, AppBar} from "@mui/material";
import {signOut} from "./service/ApiService";


export default function MenuAppBar() {
    const navigate = useNavigate();

    const LinkMain = () => {
        navigate('/main');
    }

    const list = () => {
        navigate('/list');
    }

    const Home = () => {
        navigate('/main');
    }

    const write = () => {
        navigate('/write');
    }

    return (
        <Box sx={{ flexGrow: 1 }} height={"160px"}>
            <AppBar position="static">
                <Toolbar style={{height:"120px"}}>
                    <IconButton size="small" edge="start" color="inherit" aria-label="menu" sx={{ mr: 0 }}>{/*<MenuIcon />*/}</IconButton>
                    <Typography
                        component="a"
                        href={"/main"}
                        onClick={LinkMain}
                        sx={{
                            flexGrow:1,
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            // fontFamily: 'AppleGothic',
                            fontSize: 50,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>My Diary
                    </Typography>
                    <Button
                        sx={{
                            // fontFamily: 'monospace',
                            fontSize: 24,
                        }}
                        color="inherit" onClick={Home}
                    >Home
                    </Button>
                    <Button
                        sx={{
                            // fontFamily: 'monospace',
                            fontSize: 24,
                        }}
                        color="inherit" onClick={write}
                    >Write
                    </Button>
                    <Button
                        sx={{
                            // fontFamily: 'monospace',
                            fontSize: 24,
                        }}
                        color="inherit" onClick={list}
                        >List
                    </Button>
                    <Button
                        sx={{
                            // fontFamily: 'monospace',
                            fontSize: 24,
                        }}
                        color="inherit" onClick={signOut}
                    >Log out
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
