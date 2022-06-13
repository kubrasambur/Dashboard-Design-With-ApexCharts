import React from "react";
import Chart from "react-apexcharts";

function RadialBarChart() {
  const series = [76, 67, 61, 90];
  const options = {
    title: {
      text: "Radial Bar Chart",
      align: "center",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
    labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
    legend: {
      show: true,
      floating: true,
      fontSize: "15px",
      position: "left",
      offsetX: 130,
      offsetY: 35,
      labels: {
        useSeriesColors: true,  
      },
      markers: {
        size: 0,
      },
      formatter: function(seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  return <div>
      <Chart options={options} series={series} type='radialBar' width="600" height="390"/>
  </div>;
}

export default RadialBarChart;
