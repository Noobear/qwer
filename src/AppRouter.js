import React from "react"
import "./css/index.css";
import "./css/copyright.css";
import App from "./App";
import SignUp from "./SignUp";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Main from "./Main";
import Create from "./Create.js"
import ListView from './ListView'
import TEST from "./test";
import Rewrite from "./Rewrite";
import OpenDiary from "./OpenDiary";

class AppRouter extends React.Component{
    render() {
        return(
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/main" element={ <Main/>} />
                <Route path="/sign" element={<SignUp />} />
                <Route path="/write" element={<Create />} />
                <Route path="/list" element={<ListView />} />
                <Route path="/main/open" element={<OpenDiary />} />
                <Route path={"/test"} element={<TEST/>}/>
                <Route path={"/rewrite"} element={<Rewrite/>}/>
            </Routes>
            </BrowserRouter>
        );
    }
}

export default AppRouter;