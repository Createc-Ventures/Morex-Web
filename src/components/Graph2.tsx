import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Chart data
const data = {
  labels: ["Second Position", "First Position"],
  datasets: [
    {
      label: "Loan To Value %",
      data: [49, 65],
      backgroundColor: "#cdb989",
      borderRadius: 4,
      barThickness: 80,
    },
  ],
};

// Chart options
const options: ChartOptions<"bar"> = {
  indexAxis: "y",
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 1000,
    easing: "easeOutQuart",
  },
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 20,
        color: "#000",
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      min: 0,
      max: 70,
      ticks: {
        color: "#000",
        stepSize: 10,
      },
      grid: {
        color: "#00000020",
      },
      title: {
        display: true,
        text: "Loan To Value %",
        color: "#000",
        font: {
          weight: "bold",
        },
      },
    },
    y: {
      ticks: {
        color: "#000",
        font: {
          weight: "bold",
        },
      },
      grid: {
        display: false,
      },
    },
  },
};

const LoanToValueChart: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "400px", padding: 20 }}>
      
      <Bar data={data} options={options} />
    </div>
  );
};

export default LoanToValueChart;
