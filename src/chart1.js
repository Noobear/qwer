import 'chart.js/auto'
import {Chart} from 'react-chartjs-2';
import {useEffect, useState} from "react";
import axios from "axios";
import './css/App.css'

export default function Chart1() {

    const [d, setD] = useState([]);
    const [emo, setEmo] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: "/diary/test3",
            headers : {
                'refreshToken' : localStorage.getItem("refreshToken"),
                'Authorization': localStorage.getItem("Authorization"),
            },
        }).then((response) => {
            setD(response.data);
            setEmo(response.data);
        })
    }, []);


    if (emo.length === 7){
        var data = {
            labels:[
                emo[6].createdDate,
                emo[5].createdDate,
                emo[4].createdDate,
                emo[3].createdDate,
                emo[2].createdDate,
                emo[1].createdDate,
                emo[0].createdDate
            ],
            datasets:[
                {
                    type:"line",
                    label:"",
                    data : [
                        emo[6].sentimental,
                        emo[5].sentimental,
                        emo[4].sentimental,
                        emo[3].sentimental,
                        emo[2].sentimental,
                        emo[1].sentimental,
                        emo[0].sentimental
                    ],
                    borderColor : '#ff7f00',
                    borderWidth : 5,
                    tension: 0.3,
                }
            ],
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
                scales: {
                }
            }

        }
    }
    return(

        <>{emo.length === 7 &&
    <Chart type={"line"} data={data} style={{width:"1035px", paddingLeft:"30px"}} className={"Calendar"} />}
    </>
            )

}


