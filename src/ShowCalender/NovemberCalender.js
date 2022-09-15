import React from 'react';
import axios from 'axios';
import {Button} from "@mui/material";

export default function  NovemberCalender() {

    const o11 = (day) => {
        console.log("11/"+day);
        axios({
            method: 'get',
            url: `/diary/show/11/${day}`,
            headers : {
                'Authorization': localStorage.getItem("Authorization"),
                'refreshToken' : localStorage.getItem("refreshToken")
            }}).then((response) => {
            localStorage.setItem("callApi",`/diary/show/11/${day}`);
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
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('01')} >  1 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('02')} >  2 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('03')} >  3 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('04')} >  4 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('05')} >  5 </Button></td>
                    </tr>
                    <tr>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('06')} >  6 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('07')} >  7 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('08')} >  8 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('09')} >  9 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('10')} > 10 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('11')} > 11 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('12')} > 12 </Button></td>
                    </tr>
                    <tr>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('13')} > 13 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('14')} > 14 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('15')} > 15 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('16')} > 16 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('17')} > 17 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('18')} > 18 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('19')} > 19 </Button></td>
                    </tr>
                    <tr>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('20')} > 20 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('21')} > 21 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('22')} > 22 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('23')} > 23 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('24')} > 24 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('25')} > 25 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('26')} > 26 </Button></td>
                    </tr>
                    <tr>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('27')} > 27 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('28')} > 28 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('29')} > 29 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('30')} > 30 </Button></td>
                        <td><Button style={{fontSize:"40px", margin:"-5%"}} onClick={()=>o11('31')} > 31 </Button></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            {/*</Box>*/}

        </>
    )

}