import React from "react";
import "./App.css"
import LineChart from "./components/LineChart";
import ColumnChart from "./components/ColumnChart";
import DonutChart from "./components/DonutChart";
import MixedChart from "./components/MixedChart";
import CandleStickChart from "./components/CandleStickChart";
import ScatterChart from "./components/ScatterChart";
import RadialBarChart from "./components/RadialBarChart";
import BasicBarChart from "./components/BasicBarChart";
import { Box } from "@mui/material";
import SparkChart1 from "./components/SparkChart1";
import SparkChart2 from "./components/SparkChart2";
import SparkLinesChart from "./components/SparkLinesChart";

function App() {
  const components = [
    <LineChart />,
    <ColumnChart />,
    <BasicBarChart />,
    <MixedChart />,
    <CandleStickChart />,
    <ScatterChart />,
    <RadialBarChart />,
    <DonutChart />,
  ];

  const sparks = [
    <SparkLinesChart />,
    <SparkChart1 />,
    <SparkChart2 />,
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          backgroundColor: "#CFCFCF",
        }}
      >
        {sparks.map((spark, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: 377,
                height: 170,
                backgroundColor: "#FFFFFF",
                margin: "30px",
              }}
            >
              <Box m={2}>{spark}</Box>
            </Box>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          backgroundColor: "#CFCFCF",
        }}
      >
        {components.map((component) => {
          return (
            <Box
              sx={{
                width: 620,
                height: 390,
                paddingTop: 3,
                backgroundColor: "#FFFFFF",
                margin: "30px",
              }}
            >
              {component}
            </Box>
          );
        })}
      </div>
    </div>
  );
}

export default App;
