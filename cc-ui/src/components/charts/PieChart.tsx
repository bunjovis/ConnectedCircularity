import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

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

const PieChart: React.FC<{success:number, failure:number}> = (countData) => {
  const failure = countData.failure;
  const success = countData.success;

  const data = {
    labels: ['Onnistunut', 'Epäonnistunut'],
    datasets: [
      {
        label: '# of Votes',
        data: [success, failure],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 2,
      },
    ],
  };
  
  return <Pie data={data} style={{width:"100%"}} />;
}


export default PieChart;