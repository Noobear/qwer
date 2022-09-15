import React from 'react';
import axios from 'axios';
import {Button} from "@mui/material";

export default function  DecemberCalender() {

    const o12 = (day) => {
        console.log("12/"+day);
        axios({
            method: 'get',
            url: `/diary/show/12/${day}`,
            headers : {
                'Authorization': localStorage.getItem("Authorization"),
                'refreshToken' : localStorage.getItem("refreshToken")
            }}).then((response) => {
            localStorage.setItem("callApi",`/diary/show/12/${day}`);
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
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('01')} >  1 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('02')} >  2 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('03')} >  3 </Button></td>
                    </tr>
                    <tr>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('04')} >  4 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('05')} >  5 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('06')} >  6 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('07')} >  7 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('08')} >  8 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('09')} >  9 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('10')} > 10 </Button></td>
                    </tr>
                    <tr>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('11')} > 11 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('12')} > 12 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('13')} > 13 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('14')} > 14 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('15')} > 15 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('16')} > 16 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('17')} > 17 </Button></td>
                    </tr>
                    <tr>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('18')} > 18 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('19')} > 19 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('20')} > 20 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('21')} > 21 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('22')} > 22 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('23')} > 23 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('24')} > 24 </Button></td>
                    </tr>
                    <tr>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('25')} > 25 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('26')} > 26 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('27')} > 27 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('28')} > 28 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('29')} > 29 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('30')} > 30 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o12('31')} > 31 </Button></td>
                    </tr>
                    </tbody>
                </table>
            {/*</Box>*/}

        </>
    )

}