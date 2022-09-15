import 'chart.js/auto'
import {Chart} from 'react-chartjs-2';

export default function Chart1() {

    const data = {
        labels:[
            1, 2, 3, 4,5, 6
        ],
        datasets:[
            {
                type:"line",
                label:"감정",
                data : [-1, 0, 0.2, 1, 0.5, -0.3, 0.1],
                borderColor : 'rgb(53, 162, 235)',
                borderWidth : 5

            }
        ]
    }

    return(
        <Chart type={"line"} data={data}/>
    )

}
