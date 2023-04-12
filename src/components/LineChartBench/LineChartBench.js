import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const LineChartBench = () => {
  const data_arr = [225,230,230,225,245];
  var max_data = data_arr.reduce((a,b)=>Math.max(a,b),-Infinity);
  var min_data = data_arr.reduce((a,b)=>Math.min(a,b),+Infinity);
  var avg_data = (data_arr.reduce((a,b)=>(a+b),0)/data_arr.length) || 0;
  const data = {
    labels: ["Jan 31", "Feb 7", "Feb 14", "Feb 21", "Feb 28"],
    datasets: [
      {
        label: 'BARBELL BENCH PRESS (LBS) 5 REPS',
        data: data_arr,
        borderColor: "rgba(78, 166, 95,1)",
        pointBorderColor: "rgba(100,100,100,1)",
        pointBackgroundColor: "rgba(255,255,255,1)",
        borderWidth: 3,
        fill: false,
      },
    ],
  };
  const lineGraphOptions = {
    aspectRatio: 2.5,
    scales: {
      y:{
        ticks:{
          color:'#b6b2db'
        }
      },
      x:{
        ticks:{
          color:'#b6b2db'
        }
      },
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            beginAtZero: false,
            padding: 12,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            padding: 12,
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  return (
    <body class="line_body">
    <div class="container">
    <h1>Bench Press Progress</h1>
    <div class="stats">
      <div class="stat">
        <span>Max Bench</span>
        <span>{max_data}</span>
      </div>
      <div class="stat">
        <span>Min Bench</span>
        <span>{min_data}</span>
      </div>
      <div class="stat">
        <span>Average Bench</span>
        <span>{avg_data}</span>
      </div>
    </div>
    <Line class="line-graph" options={lineGraphOptions} data={data}></Line>
  </div>
  </body>
  );
};

export default LineChartBench;
