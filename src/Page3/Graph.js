import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import './Graph.scss';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const labels = ["6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月"]
const options = {
    scales: {
        x: {
            grid: {
                display: true,
                color: 'rgba(119, 119, 119, 1)'
            },
        },
        y: {
            grid: {
                display: false,
                color: 'rgba(119, 119, 119, 1)', // Set the color for y-axis grid lines
            },
            beginAtZero: true,
            ticks: {
                display: false,
            },
        },
    },
};
export const data = {
    labels,
    datasets: [
        {
            data: [95, 82, 69, 67, 55, 50, 48, 42, 40, 30, 28, 25],
            backgroundColor: 'rgba(143, 233, 208, 1)',
            borderColor: 'rgba(143, 233, 208, 1)'
        },
        {
            data: [95, 92, 66, 74, 70, 68, 54, 69, 53, 50, 49, 48],
            backgroundColor: 'rgba(255, 204, 33, 1)',
            borderColor: 'rgba(255, 204, 33, 1)'
        }
    ]
}


const Graph = () => {
    return (
        <div className='graph'>
            <div className='graph_wrapper'>
                <div className='graph_heading'>
                    <span>BODY<br />RECORD</span>
                    <p>2021.05.21</p>
                </div>
                <div className='graph_line'>
                    <Line style={{ width: '850px', height: '185px' }} options={options} data={data} />
                </div>
                <div className='graph_btn'>
                    <button>日</button>
                    <button>週</button>
                    <button>月</button>
                    <button id='yellow-btn'>年</button>
                </div>
            </div>
        </div>
    )
}

export default Graph