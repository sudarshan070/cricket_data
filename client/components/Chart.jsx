import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Chart({ info }) {
  return (
    <>
      <InningChart info={info} />
      <RunsChart info={info} />
      <TestWins info={info} />
      <ODIsWins info={info} />
    </>
  );
}

const InningChart = ({ ...info }) => {
  let data = info;
  let chartData =
    data.info[0] &&
    data.info[0]["Countrywise_inn"].map((option) => ({
      label: option.Team,
      y: Number(option.Inn),
    }));
  const options = {
    title: {
      text: "Test & ODI Inning Stats",
      fontSize: 24,
    },
    data: [
      {
        type: "column",
        dataPoints: chartData,
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

const RunsChart = ({ ...info }) => {
  let data = info;
  let chartData =
    data.info[0] &&
    data.info[0]["Countrywise_inn"].map((option) => ({
      label: option.Team,
      y: Number(option.Run),
    }));
  const options = {
    title: {
      text: "Test & ODI Runs Stats",
      fontSize: 24,
    },
    data: [
      {
        type: "column",
        dataPoints: chartData,
      },
    ],
  };

  return (
    <div className="mt-5">
      <CanvasJSChart options={options} />
    </div>
  );
};

const TestWins = ({ ...info }) => {
  let data = info;

  let match = data.info[0] && data.info[0].BATTING_Tests_Mat;
  let winingMatch = data.info[0] && data.info[0].BATTING_Tests_Win;
  let lostMatch = data.info[0] && data.info[0].BATTING_Tests_Lost;
  let drawMatch = data.info[0] && data.info[0].BATTING_Tests_Draw;
  let noResultMatch = data.info[0] && data.info[0].BATTING_Tests_NR;
  let win = (winingMatch * 100) / match;
  let lost = (lostMatch * 100) / match;
  let draw = (drawMatch * 100) / match;
  let NR = (noResultMatch * 100) / match;

  let chartData = [
    { y: win, label: "Win" },
    { y: lost, label: "Lost" },
    { y: draw, label: "Draw" },
    { y: NR, label: "No Result" },
  ];

  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Tests win percentage ",
      fontSize: 24,
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: chartData,
      },
    ],
  };

  return (
    <div className="mt-5">
      <CanvasJSChart options={options} />
    </div>
  );
};

const ODIsWins = ({ ...info }) => {
  let data = info;

  let match = data.info[0] && data.info[0].BATTING_ODIs_Mat;
  let winingMatch = data.info[0] && data.info[0].BATTING_ODIs_Win;
  let lostMatch = data.info[0] && data.info[0].BATTING_ODIs_Lost;
  let tieMatch = data.info[0] && data.info[0].BATTING_ODIs_Tie;
  let noResultMatch = data.info[0] && data.info[0].BATTING_ODIs_NR;
  let win = ((winingMatch * 100) / match).toFixed(2);
  let lost = ((lostMatch * 100) / match).toFixed(2);
  let tie = ((tieMatch * 100) / match).toFixed(2);
  let NR = ((noResultMatch * 100) / match).toFixed(2);

  let chartData = [
    { y: win, label: "Win" },
    { y: lost, label: "Lost" },
    { y: tie, label: "Tie" },
    { y: NR, label: "No Result" },
  ];

  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "ODIs win percentage",
      fontSize: 24,
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: chartData,
      },
    ],
  };

  return (
    <div className="my-5">
      <CanvasJSChart options={options} />
    </div>
  );
};
