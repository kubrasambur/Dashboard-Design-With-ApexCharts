import React from "react";
import Chart from "react-apexcharts";

function DonutChart() {
  const series = [44, 55, 41, 17, 15];
  const options = {
    labels: ["Apple", "Mango", "Orange", "Watermelon", "Pineapple"],
    title: {
      text: "Donut Chart",
      align: "center",
    },
  };

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="donut"
        width="600"
        height="350"
      />
    </div>
  );
}

export default DonutChart;
