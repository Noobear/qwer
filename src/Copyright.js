import React from "react";
import "./css/index.css";
import "./css/copyright.css";
import {Typography} from "@mui/material";

function Copyright() {
    return(
        <div className={"CS"}>
            <Typography variant={"overline"} color="white" align={"center"}>{"Copyright _ "}
                {new Date().getFullYear()}
                {". "}By Cloud Server Developer : 6-5{"."}
            </Typography>
        </div>
    );
}

export default Copyright;