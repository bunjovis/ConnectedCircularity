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
    Tooltip,
    Legend
);

const DoubleBarChart: React.FC<{dailyRequests:Array<any>}> = (countData) => {
  const daily = countData.dailyRequests;

  const initialDate = new Date().toISOString().split('T')[0];
  let labels:string[] = [initialDate];
  for (let i = 0; i < 6; i++) {
    const time = Date.parse(labels[i]);
    const date = new Date(time);
    const previous = date.setDate(date.getDate() - 1);
    const previousDate = new Date(previous);
    labels.push(previousDate.toISOString().split('T')[0]);
  }

  labels.sort((a:any, b:any) => a > b ? 1 : -1);

  let countArraySuccess:any = []
  let countArrayFailure:any = []
  let scaleMax = 0;


  if (daily.length > 0) {
    for (let i = 0; i < labels.length; i++) {
      const dateIndex = daily.findIndex((obj) => obj.date === labels[i]);
      if (dateIndex > -1) {
        countArraySuccess.push(daily[dateIndex].successCount);
        countArrayFailure.push(daily[dateIndex].failureCount);
        if (daily[dateIndex].successCount > scaleMax) scaleMax = daily[dateIndex].successCount;
        if (daily[dateIndex].failureCount > scaleMax) scaleMax = daily[dateIndex].failureCount;

      }
      else {
        countArraySuccess.push(0);
        countArrayFailure.push(0);
      }
    }
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: true,
            text: 'Materiaalitoriin luodut ilmoitukset',
        },
        legend: {
          display: false
        }
    },
    scales: {
      yAxis: {
        min: 0,
        max: scaleMax + 2,
      }
    }
};
  
const data = {
  labels,
  datasets: [
    {
      label: 'Onnistunut luonti',
      data: countArraySuccess,
      backgroundColor: 'rgba(5, 174, 0, 0.5)',
    },
    {
      label: 'Epäonnistunut luonti',
      data: countArrayFailure,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

  return <Bar height="300px" options={options} data={data}/>;
}


export default DoubleBarChart;