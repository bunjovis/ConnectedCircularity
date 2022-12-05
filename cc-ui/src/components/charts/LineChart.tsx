import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
);

const LineChart: React.FC<{count:any, dailyUsers:Array<any>}> = (countData) => {
    let count = countData.count;
    const dailyUsers = countData.dailyUsers;

    const initialDate = new Date().toISOString().split('T')[0];
    let labels:string[] = [initialDate];
    for (let i = 0; i < 6; i++) {
        const time = Date.parse(labels[i]);
        const date = new Date(time);
        const previous = date.setDate(date.getDate() - 1);
        const previousDate = new Date(previous);
        labels.push(previousDate.toISOString().split('T')[0]);
    }

    let countArray:any = [parseInt(count)]
    let removed = 0;
    let n = 0;
    for (let i = 0; i < labels.length - 1; i++) {
        if (i < dailyUsers.length && dailyUsers.length > 0) {
            if (labels[i] === dailyUsers[n].date) {
                removed += parseInt(dailyUsers[i].count);
                countArray.push(countArray[i] - removed);
                n++;
                continue;
            }
        }
        countArray.push(countArray[i]);
    }

    labels.sort((a:any, b:any) => a > b ? 1 : -1);
    countArray.sort((a:any, b:any) => a > b ? 1 : -1);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Connected Circularity käyttäjämäärä',
            },
            legend: {
                display: false
            },
        },
        scales: {
            yAxis: {
              min: countArray[0] - 3,
              max: countArray[6] + 3,
            }
        }
    };

    const data = {
        labels,
        datasets: [
        {
            data: countArray,
            backgroundColor: 'rgba(5, 174, 0, 0.5)',
        }
        ]
    };

    return (<Line height="300px" options={options} data={data} />)
}


export default LineChart;