import React from "react";
import "./css/index.css";
import "./css/copyright.css";
import App from "./App";
import SignUp from "./SignUp";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App_login from "./AfterLogin/App_login";


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
            <div>
                <BrowserRouter>
                    <div>
                        <Routes>
                            <Route path="/" element={<App />} />
                            <Route path="/auth" element={<App_login />} />
                            <Route path="/signup" element={<SignUp />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default AppRouter;