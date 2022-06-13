import React from "react";
import Chart from "react-apexcharts";

function LineChart() {
  const series = [
    {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    },
  ];

  const options = {
    chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: "Line Chart",
        align: "center",
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    }
    
  

  return (
    <div>
      <Chart options={options} series={series} type="area" width="600" height="350"/>
    </div>
  );
}

export default LineChart;
