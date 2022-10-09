import React from 'react';
import './Follower.style.scss';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
   legend: {
    display: false
   }
  },
  responsive: false,
  scales: {
    x: {
      stacked: true,
    //   grid:{
    //     display:false
    //   }
    },
    y: {
      stacked: true,
    //   grid:{
    //     display:false
    //   }
    },
  },
};

const labels = ['week1' , 'week2', 'week3' , 'week4'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 100, max: 1000 })),
      backgroundColor: 'rgb(255, 99, 132)',
      barThickness: 20,
      maxBarThickness: 30,
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 200, max: 1000 })),
      backgroundColor: 'rgb(75, 192, 192)',
      barThickness: 20,
      maxBarThickness: 30,
    },
    {
      label: 'Dataset 3',
      data: labels.map(() => faker.datatype.number({ min: 300, max: 1000 })),
      backgroundColor: 'rgb(53, 162, 235)',
      barThickness: 20,
      maxBarThickness: 30,
    },
  ],
};



function Follower(props) {
    return (
        
        <div className='main_followers_container'>
              <div className='line_dashboard_card' style={{height:'100%'}}>
            <div className='totalSalesCard'>Followers</div>
                <div >
                   <Bar height='200px' width='290px' options={options} data={data} />
                </div>
            </div>
        </div>
    );
}

export default Follower;