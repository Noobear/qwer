import React from "react";
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
import Open0826 from "./Open0826";
import TEST from "./test"
// function Copyright() {
//     return(
//         <div className={"CS"}>
//         <Typography variant={"overline"} color="white" align={"center"}>{"Copyright _ "}
//         {new Date().getFullYear()}
//             {". "}By Cloud Server Developer : 6-5{"."}
//         </Typography>
//         </div>
//     );
// }

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
                <Route path="/main/26" element={<Open0826 />} />
                <Route path={"/test"} element={<TEST/>}/>
            </Routes>
            </BrowserRouter>
        );
    }
}

export default AppRouter;