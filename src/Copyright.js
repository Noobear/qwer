import React from "react";
import "./css/index.css";
import "./css/font.css";
import "./css/copyright.css";
import {Typography} from "@mui/material";

function Copyright() {
    return(
        <div className={"CS"}>
            <Typography variant={"overline"} align={"center"}>
                <p className={"Font_ma"} style={{fontSize:"20px", margin:"0",color:"white"}}>{"Copyright _ "}
                {new Date().getFullYear()}
                {". "}By Cloud Server Developer : 6-5{"."}
                </p>
            </Typography>
        </div>
    );
}

export default Copyright;
