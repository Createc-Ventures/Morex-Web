import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Filler);

const data = {
  labels: [
    "2012", "2013", "2014", "2015", "2016",
    "2017", "2018", "2019", "2020", "2021", "2022",
  ],
  datasets: [
    {
      label: "Metric",
      data: [10, 10, 10, 10, 10, 9, 8, 8, 7, 6, 7],
      borderColor: "#cdb989",
      borderWidth: 4,
      tension: 0,
      fill: false,
      pointBackgroundColor: (ctx: any) =>
        ctx.dataIndex === 10 ? "#003a63" : "transparent",
      pointBorderColor: (ctx: any) =>
        ctx.dataIndex === 10 ? "#003a63" : "transparent",
      pointRadius: (ctx: any) => (ctx.dataIndex === 10 ? 8 : 0),
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 25, // adds vertical space above the line
      right: 15,
      bottom: 15,
      left: 15,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: true,
        color: "#00000030",
      },
      ticks: {
        color: "#003a63",
        font: {
          size: 12,
          weight: "bold",
        },
      },
    },
    y: {
      min: 0,
      max: 15, // extra space above the highest value (10)
      title: {
        display: true,
        text: "Yield",
        color: "#003a63",
        font: {
          size: 14,
          weight: "bold",
        },
        padding: { top: 0, bottom: 10 },
      },
      ticks: {
        stepSize: 5,
        callback: (value: number) => value.toString(),
        color: "#003a63",
        font: {
          size: 12,
          weight: "bold",
        },
      },
      grid: {
        display: true,
        color: "#00000030",
      },
    },
  },
};


const TrendGraph: React.FC = () => {
  return (
    
    <div style={{ width: "100%", height: "450px", padding: 15 }}>
      <Line data={data} options={options as any} />
    </div>
  );
};

export default TrendGraph;
