import React from 'react';
import './TotalSales.scss';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Button from '@mui/material/Button';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  import faker from "faker";


  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


  export const options = {
    responsive: false,
    interaction: {
      mode: "index",
      intersect: false
    },
    stacked: false,
   plugins :{
    legend: {
      display: false
    }
   },
    scales: {
      x: {
        grid: {
          display: false
        },
      },
      y: {
        type: "linear" ,
        display: true,
        position: "left" ,
        grid: {
          display: false
        }
      },
      y1: {
        type: "linear" ,
        display: false,
        position: "right" ,
        grid: {
          display:false,
          drawOnChartArea: true,
        }
      }
    }
  };
  
  const labels = ["January", "February", "March", "April"];
  
  export const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
        lineTension: 0.4,        
        radius: 6
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
        lineTension: 0.4,        
        radius: 6
      }
    ]
  };


function TotalSales(props) {
    return (
        <div className='main_totalSales_container'>
            <div className='totalSales_header'>
                {/* <div> */}
                  <span>
                  <span className='offline_online' style={{fontSize:'10px'}}><FiberManualRecordIcon sx={{color: 'rgb(255, 99, 132)'}} /> <span>offline</span></span>
                  <span className='offline_online' style={{fontSize:'10px'}}><FiberManualRecordIcon sx={{color: 'rgb(53, 162, 235)'}} /> <span>online</span> </span>
                  </span>
                {/* </div> */}
                <Button sx={{color:' #27b327cf' , border: '1px solid #27b327cf' , textTransform: 'capitalize'}} size="small" variant="outlined" disableRipple>View Details</Button>
            </div>
            <div className='line_dashboard_card'>
            <div className='totalSalesCard'>Total Sales</div>
                <div >
                 <Line height="135px" width="280px" options={options} data={data} />
                </div>
            </div>
            
        </div>
    );
}  

export default TotalSales;