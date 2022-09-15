import React from 'react';
import axios from 'axios';
import {Button} from "@mui/material";

export default function  AugustCalender() {

    const o8 = (day) => {
        console.log("08/"+day);
        axios({
            method: 'get',
            url: `/diary/show/08/${day}`,
            headers : {
                'Authorization': localStorage.getItem("Authorization"),
                'refreshToken' : localStorage.getItem("refreshToken")
            }})
            .then((response) => {
                localStorage.setItem("callApi",`/diary/show/08/${day}`);
                window.location.href="/main/open";
            });
    }

    return(
            // <Box sx={{ border: '6px solid' }}  width="43%" style={{marginLeft:"90px", height:"800px"}}>
                <table className={"Font_ma"} width="100%" style={{height:"100%"}}>

                    <tbody align={"center"} style={{fontSize:"40px"}}>
                    <tr>
                        <td style={{color:"red"}}>일</td>
                        <td>월</td>
                        <td>화</td>
                        <td>수</td>
                        <td>목</td>
                        <td>금</td>
                        <td style={{color:"deepskyblue"}}>토</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('01')} >  1 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('02')} >  2 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('03')} >  3 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('04')} >  4 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('05')} >  5 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('06')} >  6 </Button></td>
                    </tr>
                    <tr>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('07')} >  7 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('08')} >  8 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('09')} >  9 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('10')} > 10 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('11')} > 11 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('12')} > 12 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('13')} > 13 </Button></td>
                    </tr>
                    <tr>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('14')} > 14 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('15')} > 15 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('16')} > 16 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('17')} > 17 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('18')} > 18 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('19')} > 19 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('20')} > 20 </Button></td>
                    </tr>
                    <tr>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('21')} > 21 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('22')} > 22 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('23')} > 23 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('24')} > 24 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('25')} > 25 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('26')} > 26 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('27')} > 27 </Button></td>
                    </tr>
                    <tr>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('28')} > 28 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('29')} > 29 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('30')} > 30 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o8('31')} > 31 </Button></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            // </Box>
    )

}