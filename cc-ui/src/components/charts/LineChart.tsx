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


const labels = ["Marraskuu", "Joulukuu", "Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu"];
const data = {
    labels,
    datasets: [
    {
        data: [10, 12, 15, 15, 16, 16, 18],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
    ],
};

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: true,
            text: 'Connected Circularityyn luodut käyttäjät',
        },
    },
};

const LineChart: React.FC<{}> = () => {
    return (<Line height="300px" options={options} data={data} />)
}


export default LineChart;