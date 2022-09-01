import React from "react"
import "./css/index.css";
import "./css/copyright.css";
import App from "./App";
import SignUp from "./SignUp";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Main from "./Main";
import Create from "./Create.js"
import ListView from './ListView'

import Open0822 from "./Open0822";
import Open0823 from "./Open0823";
import Open0824 from "./Open0824";
import Open0825 from "./Open0825";
import Open0830 from "./Open0830";
import TEST from "./test";
import Rewrite from "./Rewrite";

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
                <Route path="/main/22" element={<Open0822 />} />
                <Route path="/main/23" element={<Open0823 />} />
                <Route path="/main/24" element={<Open0824 />} />
                <Route path="/main/25" element={<Open0825 />} />
                <Route path="/main/30" element={<Open0830 />} />
                <Route path={"/test"} element={<TEST/>}/>
                <Route path={"/rewrite"} element={<Rewrite/>}/>
            </Routes>
            </BrowserRouter>
        );
    }
}

export default AppRouter;