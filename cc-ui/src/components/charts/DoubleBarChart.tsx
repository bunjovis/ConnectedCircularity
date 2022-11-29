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
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip
);


export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: true,
            text: 'Materiaalitoriin luodut ilmoitukset',
        },
    },
};
  
const labels = ["15.11.2022", "16.11.2022", "17.11.2022", "18.11.2022", "19.11.2022", "20.11.2022", "21.11.2022"];
export const data = {
  labels,
  datasets: [
    {
      label: 'Onnistunut luonti',
      data: [10, 17, 13, 5, 9, 11, 7],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Epäonnistunut luonti',
      data: [10, 17, 13, 5, 9, 11, 7],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};


const DoubleBarChart: React.FC<{}> = () => {
    return <Bar height="300px" options={options} data={data}/>;
}


export default DoubleBarChart;