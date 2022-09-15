import React from 'react';
import axios from 'axios';
import {Button} from "@mui/material";

export default function  SeptemberCalender() {
    const o9 = (day) => {
        console.log("09/"+day);
        axios({
            method: 'get',
            url: `/diary/show/09/${day}`,
            headers : {
                'Authorization': localStorage.getItem("Authorization"),
                'refreshToken' : localStorage.getItem("refreshToken")
            }}).then((response) => {
            localStorage.setItem("callApi",`/diary/show/09/${day}`);
            window.location.href="/main/open";
        })
    }

    return(
        <>
            {/*<Box sx={{ border: '6px solid' }}  width="43%" style={{marginLeft:"90px", height:"800px"}}>*/}
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
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('01')} > 1 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('02')} > 2 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('03')} > 3 </Button></td>
                    </tr>
                    <tr>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('04')} >  4 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('05')} >  5 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('06')} >  6 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('07')} >  7 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('08')} >  8 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('09')} >  9 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('10')} > 10 </Button></td>
                    </tr>
                    <tr>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('11')} > 11 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('12')} > 12 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('13')} > 13 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('14')} > 14 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('15')} > 15 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('16')} > 16 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('17')} > 17 </Button></td>
                    </tr>
                    <tr>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('18')} > 18 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('19')} > 19 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('20')} > 20 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('21')} > 21 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('22')} > 22 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('23')} > 23 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('24')} > 24 </Button></td>
                    </tr>
                    <tr>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('25')} > 25 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('26')} > 26 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('27')} > 27 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('28')} > 28 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('29')} > 29 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o9('30')} > 30 </Button></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            {/*</Box>*/}
        </>
    )

}