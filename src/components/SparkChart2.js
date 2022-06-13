import Chart from "react-apexcharts";
import React from "react";

function SparkLinesChart3() {
  var randNumbers =[]

  while(randNumbers.length < 11){
    var r = Math.floor(Math.random() * 100) + 1;
    if(randNumbers.indexOf(r) === -1) randNumbers.push(r);
}
  const series = [
    {
      data: randNumbers,
    },
  ];

  const options = {
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "straight",
    },
    fill: {
      opacity: 0.3,
    },
    yaxis: {
      min: 0,
    },
    colors: ["#008ffb"],
    title: {
      text: "$135,965",
      offsetX: 0,
      style: {
        fontSize: "24px",
      },
    },
    subtitle: {
      text: "Profits",
      offsetX: 0,
      style: {
        fontSize: "14px",
      },
    },
  };

  return (
    <div>
      <Chart 
        options={options}
        series={series}
        type="area"
        width="377"
        height="170"
      />
    </div>
  );
}

export default SparkLinesChart3;
