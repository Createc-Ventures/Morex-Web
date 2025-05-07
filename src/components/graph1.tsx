// components/InvestmentChart.jsx or .tsx if using TypeScript

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  Title,
  ChartOptions,
  ChartData, BarController,
} from 'chart.js';

import { Chart } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
    LineElement,
    LinearScale,
    Title
);

// 👇 use this typing when using TypeScript
type MixedChartData = ChartData<'bar' | 'line', number[], string>;
type MixedChartOptions = ChartOptions<'bar' | 'line'>;

const Graph1 = () => {
  const data: MixedChartData = {
    labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Investment Value',
        type: 'bar',
        backgroundColor: '#1f4e79',
        order: 3,
        data: [110381, 121840, 134488, 148449, 163859, 179990, 196743, 215056, 230510, 247075, 266134, 288601, 295275],
        yAxisID: 'y',
      },
      {
        label: 'Annual Yield with DRIP',
        type: 'line',
        borderColor: '#507dbc',
        backgroundColor: '#507dbc',
        order: 2,
        data: [10.00, 10.00, 10.00, 10.00, 10.05, 9.98, 9.31, 8.90, 7.19, 7.13, 7.27, 8.44, 9.58],
        yAxisID: 'y1',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Annual Yield',
        type: 'line',
        borderColor: '#f5b041',
        backgroundColor: '#f5b041',
        order: 1,
        data: [10.38, 10.38, 10.38, 10.38, 10.38, 9.84, 9.31, 9.31, 7.19, 7.13, 7.27, 8.44, 9.25],
        yAxisID: 'y1',
        fill: false,
        tension: 0.4,
      }
    ]
  };

  const options: MixedChartOptions = {
    responsive: true,
    scales: {
      y: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Investment Value'
        }
      },
      y1: {
        type: 'linear',
        position: 'right',
        min: 0,
        max: 12,
        title: {
          display: true,
          text: 'Annual Yield (%)'
        },
        grid: {
          drawOnChartArea: false
        }
      }
    },
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false
      },
      legend: {
        display: true
      }
    }
  };

  return <Chart type="bar" data={data} options={options} />;
};

export default Graph1;
